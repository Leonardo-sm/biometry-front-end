import { Box, Flex } from '@chakra-ui/react'

import { AuthContext } from '../contexts/AuthContext'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import Title from '../core/Title'
import { useContext } from 'react'

function Dashboard() {
  const { handleSelectedTab, sideBarOptions, data, user } =
    useContext(AuthContext)

  function handleSidebarbutton(route: string) {
    handleSelectedTab(route)
  }

  const [currentRoute] = sideBarOptions.filter(option => option.active === true)

  return (
    <>
      <Title title={`Biometry - Dashboard - ${user?.permission ?? 'public'}`} />
      <Flex minH="100vh" bgColor="gray.100">
        <Sidebar onSidebarbuttonClick={route => handleSidebarbutton(route)} />

        <Box as="section" w="100%" px="20" py="4">
          {data.map((item, index) => (
            <Card key={index} cardData={item} route={currentRoute.name} />
          ))}
        </Box>
      </Flex>
    </>
  )
}

export default Dashboard
