import { Box } from "@chakra-ui/layout"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"
import Study from "./Study"

const Bio = () => {
  return (
    <Box px={8} align="center">
      <Tabs variant="solid-rounded" isFitted size="md" maxW="sm" isLazy>
        <TabList>
          <Tab _hover={{ color: "whiteAlpha.900", bg: "blue.400" }}>Study</Tab>
          <Tab _hover={{ color: "whiteAlpha.900", bg: "blue.400" }}>Work</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Study />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Bio
