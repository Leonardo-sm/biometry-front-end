import { Box, Button, Flex, VStack } from '@chakra-ui/react'

import Dropzone from '../components/Dropzone'
import Title from '../core/Title'

function Login() {
  return (
    <>
      <Title title="Biometry - Login" />
      <Flex
        position="relative"
        height="100vh"
        direction="column"
        justify="center"
        align="center"
        bgColor="gray.100"
      >
        <svg
          style={{ fill: '#4299E1', zIndex: 10 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill-opacity="1"
            d="M0,160L60,181.3C120,203,240,245,360,224C480,203,600,117,720,101.3C840,85,960,139,1080,160C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <Box
          position="absolute"
          bottom="0"
          w="100vw"
          h="40%"
          bgColor="blue.400"
          zIndex="0"
        />
        <VStack
          spacing="4"
          position="absolute"
          p="4"
          borderRadius="lg"
          shadow="md"
          bgColor="white"
          zIndex="30"
        >
          <Dropzone />
          <Button w="100%" colorScheme="blue">
            Entrar
          </Button>
        </VStack>
      </Flex>
    </>
  )
}

export default Login
