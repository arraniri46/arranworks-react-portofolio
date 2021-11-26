import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router'

const ProjectDetails = () => {
  const { id } = useParams()

  return (
    <Box>
      <div>Hello {id}</div>
    </Box>
  )
}

export default ProjectDetails
