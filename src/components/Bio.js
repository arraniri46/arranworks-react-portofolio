import { Box, Text } from '@chakra-ui/react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import { MdSchool, MdWork } from 'react-icons/md'
import Study from './Study'
import WorkExperience from './WorkExperience'

const Bio = () => {
  return (
    <Box px={8} align="center">
      <Tabs variant="enclosed" isFitted size="md" maxW="sm" isLazy>
        <TabList>
          <Tab _hover={{ color: 'whiteAlpha.900', bg: 'blue.400' }}>
            <MdSchool />
            <Text ml={2}>Study</Text>
          </Tab>
          <Tab _hover={{ color: 'whiteAlpha.900', bg: 'blue.400' }}>
            <MdWork />
            <Text ml={2}>Work</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Study />
          </TabPanel>
          <TabPanel>
            <WorkExperience />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Bio
