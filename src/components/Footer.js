import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
  Text,
  Alert
} from '@chakra-ui/react'

const stats = [
  { label: 'Experience', value: '1' },
  { label: 'Projects Completed', value: '2' },
  { label: 'Projects Ongoing', value: '1' }
]

const Footer = () => {
  return (
    <Box as="section" pt={8}>
      <Alert
        status="info"
        variant="solid"
        mb={8}
        fontWeight="600"
        flexDirection="column"
        textAlign="center"
      ></Alert>
      <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          {stats.map(({ label, value }) => (
            <Stat boxShadow="base" key={label} p={2}>
              <StatLabel>{label}</StatLabel>
              <StatNumber>{value}</StatNumber>
            </Stat>
          ))}
        </SimpleGrid>
      </Box>
      <Text mt={12} mb={4}>
        &copy;2021 Garda Arraniri. All Rights Reserved.
      </Text>
    </Box>
  )
}

export default Footer
