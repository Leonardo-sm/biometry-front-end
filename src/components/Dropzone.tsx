import { Center, Flex, Icon, Image, Text } from '@chakra-ui/react'

import { FaUpload } from 'react-icons/fa'
import { GiDropletSplash } from 'react-icons/gi'
import { useDropzone } from 'react-dropzone'
import { useEffect } from 'react'

type DropzoneProps = {
  setImagePath: (path: string) => void
}

function Dropzone({ setImagePath }: DropzoneProps) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    acceptedFiles,
  } = useDropzone({
    accept: 'image/*',
  })

  const areaActive = isDragActive || isFocused
  const [file] = acceptedFiles

  useEffect(() => {
    if (file) {
      setImagePath(file.path)
    }
  }, [file])

  return (
    <Flex
      as="section"
      direction="column"
      align="center"
      justify="center"
      h="sm"
      w="xs"
      p="4"
      border="4px solid"
      borderColor={areaActive ? 'blue.400' : 'gray.500'}
      borderStyle="dashed"
      borderRadius="md"
      cursor="pointer"
    >
      <Center h="100%" {...getRootProps()}>
        <input {...getInputProps()} />
        {acceptedFiles.length === 0 ? (
          isDragActive ? (
            <Text textAlign="center">
              <Icon
                as={GiDropletSplash}
                mb="4"
                fontSize="6xl"
                color="blue.400"
              />
              <Text>Drop the files here ...</Text>
            </Text>
          ) : (
            <Text textAlign="center">
              <Icon as={FaUpload} mb="4" fontSize="6xl" color="gray.500" />
              <Text>
                Drag 'n' drop some files here, or click to select files
              </Text>
            </Text>
          )
        ) : null}
        {file && (
          <Image borderRadius="md" src={file.path} alt="Imagem da biometria" />
        )}
      </Center>
    </Flex>
  )
}

export default Dropzone
