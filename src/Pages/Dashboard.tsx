import { Box, Flex, VStack } from '@chakra-ui/react'

import { AuthContext } from '../contexts/AuthContext'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import Title from '../core/Title'
import { useContext } from 'react'

function Dashboard() {
  const { handleSelectedTab, sideBarOptions, data } = useContext(AuthContext)

  function handleSidebarbutton(route: string) {
    handleSelectedTab(route)
  }

  const [currentRoute] = sideBarOptions.filter(option => option.active === true)

  return (
    <>
      <Title title={`Biometry - Dashboard - ${currentRoute.name}`} />
      <Flex minH="100vh" bgColor="gray.100">
        <Sidebar onSidebarbuttonClick={route => handleSidebarbutton(route)} />

        <Box as="section" px="40">
          <VStack spacing="4" mt="8">
            {data.map((item, index) => (
              <Card cardData={item} key={index} />
            ))}
          </VStack>
        </Box>
      </Flex>
    </>
  )
}

export default Dashboard
