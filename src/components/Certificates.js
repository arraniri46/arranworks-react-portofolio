import {
    Heading,
    Box,
    Text,
    Image,
    Divider,
    Wrap,
    WrapItem,
    Icon,
    Spacer,
    LinkBox,
    LinkOverlay,
    Button
  } from "@chakra-ui/react"
  import { motion } from "framer-motion"
  import { BsArrowUpRightCircle } from "react-icons/bs"
  
  const cardVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  }

const Certificates = () => {

    const certificates = [
        {
          title: "Data Visualization using python",
          desc: "Data Visualization using python",
          image: "/background.jpg"
        },
        {
          title: "Modern E-Commerce made with Love",
          desc: "A modern interface e-commerce using VFX",
          image: "/background-2.jpg"
        }
      ]

    return (
        <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Box fontFamily="Inter" mt={12}>
        <motion.div
          initial={{ opacity: 0, y: "-5vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading fontFamily="Inter" as="h3" size="lg" mb={6}>
            Certificates
          </Heading>
        </motion.div>
        <Wrap flexDirection="row" justify="center" mt={8}>
          {certificates.map((certificate, index) => (
            <motion.div variants={cardVariants} whileHover="hover">
              <LinkBox>
                <WrapItem
                  key={index}
                  w="300px"
                  h="400px"
                  boxShadow="xs"
                  flexDirection="column"
                  style={{ margin: "20px" }}
                >
                  <Image
                    src={certificate.image}
                    style={{ width: 300, height: 180 }}
                    mt={2}
                  ></Image>
                  <Divider mt={4} />
                  <Box mt={4}>
                    <LinkOverlay href="#">
                      <Text
                        style={{ fontSize: "1.2em", fontWeight: "600" }}
                        noOfLines={2}
                      >
                        {certificate.title}
                      </Text>
                    </LinkOverlay>
                    <Text style={{ fontSize: "0.95em" }}>{certificate.desc}</Text>
                  </Box>
                  <Box w="100%" display="flex" pl={4} py={3} mt={6}>
                    <Box align="left">
                      <Text fontSize="0.8em">Stack</Text>
                    </Box>
                    <Spacer />
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                  </Box>
                </WrapItem>
              </LinkBox>
            </motion.div>
          ))}
        </Wrap>
        <Button colorScheme="blue">
          More
          <Box ml={2}>
            <BsArrowUpRightCircle />
          </Box>
        </Button>
      </Box>
    </motion.div>
    )
}

export default Certificates