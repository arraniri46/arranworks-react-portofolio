import {
  Tabs,
  TabList,
  Tab,
  Divider,
  TabPanels,
  TabPanel,
  Container
} from '@chakra-ui/react'
import Projects from './Projects'
import Skills from './Skills'
import Certificates from './Certificates'

const TabsOfContent = () => {
  return (
    <Container maxW="container.lg">
      <Tabs
        variant="solid-rounded"
        colorScheme="blue"
        size="md"
        align="center"
        isFitted
        isLazy
      >
        <TabList
          fontFamily="Inter"
          mx={20}
          boxShadow="xs"
          borderRadius="xl"
          p={1}
        >
          <Tab _hover={{ color: 'whiteAlpha.900', bg: 'blue.400' }}>Skills</Tab>
          <Tab _hover={{ color: 'whiteAlpha.900', bg: 'blue.400' }}>
            Portofolios
          </Tab>
          <Tab _hover={{ color: 'whiteAlpha.900', bg: 'blue.400' }}>
            Certificates
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
          <TabPanel>
            <Certificates />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Divider my={8} />
    </Container>
  )
}

export default TabsOfContent
