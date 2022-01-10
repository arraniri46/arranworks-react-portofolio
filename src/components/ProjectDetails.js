import { Box, Image, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import dataProjects from '../dataProjects.js'

const ProjectDetails = () => {
  const detailProjects = dataProjects

  const { id } = useParams()
  const [project, setProject] = useState({})

  useEffect(() => {
    setProject(detailProjects)
    console.log(project)
  }, [detailProjects, project])

  return (
    <Box>
      <div>Hello {id}</div>
      <Box>
        <Text>{project.title}</Text>
        <Text>{project.desc}</Text>
        <Image src={project.image}></Image>
      </Box>
    </Box>
  )
}

export default ProjectDetails
