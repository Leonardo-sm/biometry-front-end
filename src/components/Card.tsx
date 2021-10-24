import { Box, Heading, Text } from '@chakra-ui/react'

import { PublicDataProps } from '../model/Public'

type CardData = PublicDataProps

type CardProps = {
  cardData: CardData
}

function Card({ cardData }: CardProps) {
  return (
    <Box p="6" borderRadius="8px" shadow="md">
      <Heading fontSize="lg">{cardData.name}</Heading>
      <Text>
        <strong>Endereço:</strong> {cardData.adress}
      </Text>
      <Text>
        <strong>Produção Anual:</strong> {cardData.annualProduction}
      </Text>
      <Text>
        <strong>Nivel de Automação:</strong> {cardData.automationLevel}
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

export default Card
