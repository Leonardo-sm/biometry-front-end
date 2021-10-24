import { Flex, IconButton, VStack } from '@chakra-ui/react'

import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

type SidebarProps = {
  onSidebarbuttonClick: (route: string) => void
}

function Sidebar({ onSidebarbuttonClick }: SidebarProps) {
  const { sideBarOptions } = useContext(AuthContext)

  return (
    <Flex
      as="nav"
      position="fixed"
      direction="column"
      justifyContent="center"
      height="100vh"
      p="3"
      shadow="md"
    >
      <VStack spacing="8">
        {sideBarOptions.map((option, index) => (
          <IconButton
            key={index}
            fontSize="3xl"
            aria-label={`${option.name} button`}
            icon={option.icon}
            isActive={option.active}
            onClick={() =>
              !option.active ? onSidebarbuttonClick(option.name) : null
            }
          />
        ))}
      </VStack>
    </Flex>
  )
}

export default Sidebar
