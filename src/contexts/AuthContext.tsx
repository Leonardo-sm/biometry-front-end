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

import { PublicDataProps } from '../model/Public'
import { RiAdminFill } from 'react-icons/ri'
import api from '../services/api'
import { useHistory } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

type User = {
  permission: string
}

type Sidebar = {
  name: string
  icon: ReactElement
  active: boolean
}

type AuthContextData = {
  user?: User
  data: PublicDataProps[]
  sideBarOptions: Sidebar[]
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

  const [publicData, setPublicData] = useState<PublicDataProps[]>()
  const [adminData, setAdminData] = useState([])
  const [ministerData, setMinisterData] = useState([])

  const [data, setData] = useState<PublicDataProps[]>([])

  const toast = useToast()
  const history = useHistory()

  useEffect(() => {
    ;(async () => {
      if (!publicData) {
        try {
          const { data } = await api.get<PublicDataProps[]>('/data/public')
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

  async function getAdminData() {}

  async function getMinisterData() {}

  function handleSelectedTab(route: string) {
    switch (route) {
      case 'public':
        break
      case 'admin':
        if (user) {
          if (user.permission === 'admin' || user.permission === 'minister') {
            if (adminData.length === 0) {
              getAdminData()
            }
          } else {
            toast({
              title: 'Permissão negada!',
              description: 'Você não possui permissão para acessar esta área',
              status: 'error',
              duration: 5000,
              isClosable: true,
            })
            break
          }
        } else {
          history.push('/login')
          break
        }

        // setData(() => adminData)
        break
      case 'minister':
        if (user) {
          if (user.permission === 'minister') {
            if (ministerData.length === 0) {
              getMinisterData()
            }
          } else {
            toast({
              title: 'Permissão negada!',
              description: 'Você não possui permissão para acessar esta área',
              status: 'error',
              duration: 5000,
              isClosable: true,
            })
            break
          }
        } else {
          history.push('/login')
          break
        }
        // setData(() => ministerData)
        break
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        data,
        sideBarOptions,
        handleSelectedTab,
        setSideBarOptions,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
