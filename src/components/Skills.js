import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const dataSkills = [
  {
    title: 'HTML',
    desc: 'HTML is a markup language used for structuring and presenting content on the World Wide Web',
    image: '/images/html-5.svg'
  },
  {
    title: 'JavaScript',
    desc: 'JavaScript is a programming language that is one of the core technologies of the World Wide Web',
    image: '/images/javascript.svg'
  },
  {
    title: 'Node JS',
    desc: 'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
    image: '/images/nodejs.svg'
  },
  {
    title: 'React JS',
    desc: 'A JavaScript library for building user interfaces',
    image: '/images/react.svg'
  },
  {
    title: 'Python',
    desc: 'Python is programming language which designed philosophy emphasizes code readability with the use of significant indentation.',
    image: '/images/python.svg'
  },
  {
    title: 'Tailwind CSS',
    desc: 'A utility-first CSS framework packed with classes that can be composed to build any design.',
    image: '/images/tailwindcss-icon.svg'
  },
  {
    title: 'MySQL',
    desc: 'An open-source relational database management system.',
    image: '/images/mysql.svg'
  },
  {
    title: 'MongoDB',
    desc: 'NoSQL data platform that provides the services and tools necessary to build distributed applications',
    image: '/images/mongodb.svg'
  }
]

const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginTop: -40 }}
        animate={{ opacity: 1, marginTop: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: '-5vh' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading fontSize="3xl" my={6} fontFamily="Inter">
            Skills
          </Heading>
        </motion.div>

        <Flex
          direction="row"
          wrap="wrap"
          fontFamily="Inter"
          justify="center"
          align="center"
        >
          {dataSkills.map((skill, index) => (
            <Card
              key={index}
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="outline"
              w={330}
              border="none"
              justify="center"
            >
              <Image
                src={skill.image}
                maxW={{ base: '60px', sm: '50px' }}
                alignSelf="center"
              ></Image>
              <Stack>
                <CardBody textAlign="start">
                  <Heading size="md">{skill.title}</Heading>
                  <Text fontSize="md">{skill.desc}</Text>
                </CardBody>
              </Stack>
            </Card>
          ))}
        </Flex>
      </motion.div>
    </>
  )
}

export default Skills
