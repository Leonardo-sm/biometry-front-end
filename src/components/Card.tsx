import { Box, Heading, Text } from '@chakra-ui/react'

import { DataProps } from '../model/Public'

type CardData = Partial<DataProps>

type CardProps = {
  cardData: CardData
  route?: string
}

function Card({ cardData, route }: CardProps) {
  switch (route) {
    case 'admin':
      return (
        <Box w="100%" p="6" borderRadius="8px" shadow="md">
          <Heading fontSize="lg">{cardData.category}</Heading>
          <Text>
            <strong>Nome:</strong> {cardData.name}
          </Text>
          <Text>
            <strong>Descrição:</strong> {cardData.description}
          </Text>
        </Box>
      )
    case 'minister':
      return (
        <Box w="100%" p="6" borderRadius="8px" shadow="md">
          <Heading fontSize="lg">{cardData.name}</Heading>
          <Text>
            <strong>Uso:</strong> {cardData.use}
          </Text>
          <Text>
            <strong>Produção Anual:</strong> {cardData.annual_production}
          </Text>
          <Text>
            <strong>Status:</strong> {cardData.status}
          </Text>
          <Text>
            <strong>Descrição:</strong> {cardData.description}
          </Text>
        </Box>
      )
    default:
      return (
        <Box w="100%" p="6" borderRadius="8px" shadow="md">
          <Heading fontSize="lg">{cardData.name}</Heading>
          <Text>
            <strong>Endereço:</strong> {cardData.adress}
          </Text>
          <Text>
            <strong>Produção Anual:</strong> {cardData.annual_production}
          </Text>
          <Text>
            <strong>Nivel de Automação:</strong> {cardData.automation_level}
          </Text>
          <Text>
            <strong>Destino:</strong> {cardData.destiny}
          </Text>
          <Text>
            <strong>Numero de Empregados:</strong> {cardData.employees}
          </Text>
        </Box>
      )
  }
}

export default Card
