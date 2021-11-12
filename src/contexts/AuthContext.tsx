import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import { FaUserAlt, FaUserTie } from 'react-icons/fa'

import { DataProps } from '../model/Public'
import { RiAdminFill } from 'react-icons/ri'
import { User } from '../model/User'
import { apiClient } from '../services/api'
import { useHistory } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

type Sidebar = {
  name: string
  icon: ReactElement
  active: boolean
}

type AuthContextData = {
  user?: User
  data: Partial<DataProps>[]
  sideBarOptions: Sidebar[]
  setUser: (user: User) => void
  handleSelectedTab: (route: string) => void
  setSideBarOptions: Dispatch<SetStateAction<Sidebar[]>>
}

type AuthProviderProps = {
  children: ReactNode
}

const DEFAULT_OTIONS = [
  {
    name: 'minister',
    icon: <FaUserTie />,
    active: false,
  },
  {
    name: 'admin',
    icon: <RiAdminFill />,
    active: false,
  },
  {
    name: 'public',
    icon: <FaUserAlt />,
    active: true,
  },
]

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const [sideBarOptions, setSideBarOptions] =
    useState<Sidebar[]>(DEFAULT_OTIONS)

  const [data, setData] = useState<Partial<DataProps>[]>([])

  const toast = useToast()
  const history = useHistory()

  useEffect(() => {
    ;(async () => {
      console.log(data)
      if (data.length === 0) {
        try {
          const { data } = await apiClient.get<Partial<DataProps>[]>(
            '/data/public'
          )
          console.log(data)
          setData(data)
        } catch (err) {
          toast({
            title: 'Falha de conexão',
            description: String(err),
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }
      }
    })()
  }, [])

  async function getPublicData() {
    try {
      const { data } = await apiClient.get<Partial<DataProps>[]>('/data/public')
      setData(data)
    } catch (err) {
      toast({
        title: 'Falha de conexão',
        description: String(err),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  async function getAdminData() {
    try {
      const { data } = await apiClient.get<Partial<DataProps>[]>(
        `/data/adm/${user?.permission}`
      )
      setData(data)
    } catch (err) {
      toast({
        title: 'Falha de conexão',
        description: String(err),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  async function getMinisterData() {
    try {
      const { data } = await apiClient.get<Partial<DataProps>[]>(
        `/data/minister/${user?.permission}`
      )
      setData(data)
    } catch (err) {
      toast({
        title: 'Falha de conexão',
        description: String(err),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  function handleSelectedTab(route: string) {
    switch (route) {
      case 'public':
        // eslint-disable-next-line no-case-declarations
        const sidebar = sideBarOptions.map(item => {
          return {
            name: item.name,
            icon: item.icon,
            active: item.name === 'public',
          }
        })
        getPublicData()
        setSideBarOptions(sidebar)
        break
      case 'admin':
        if (user) {
          if (user.permission === 'admin' || user.permission === 'minister') {
            getAdminData()
            const sidebar = sideBarOptions.map(item => {
              return {
                name: item.name,
                icon: item.icon,
                active: item.name === 'admin',
              }
            })
            setSideBarOptions(sidebar)
          } else {
            toast({
              title: 'Permissão negada!',
              description: 'Você não possui permissão para acessar esta área',
              status: 'error',
              duration: 5000,
              isClosable: true,
            })
          }
        } else {
          history.push('/login')
        }
        break
      case 'minister':
        if (user) {
          if (user.permission === 'minister') {
            getMinisterData()
            const sidebar = sideBarOptions.map(item => {
              return {
                name: item.name,
                icon: item.icon,
                active: item.name === 'minister',
              }
            })
            setSideBarOptions(sidebar)
          } else {
            toast({
              title: 'Permissão negada!',
              description: 'Você não possui permissão para acessar esta área',
              status: 'error',
              duration: 5000,
              isClosable: true,
            })
          }
        } else {
          history.push('/login')
        }
        break
      default:
        // getPublicData()
        break
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        data,
        sideBarOptions,
        setUser,
        handleSelectedTab,
        setSideBarOptions,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
