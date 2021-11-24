import { Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import { Link } from "@chakra-ui/layout"
import styled from "@emotion/styled"
import { useColorModeValue } from "@chakra-ui/color-mode"

const LogoBox = styled.span`
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(90deg);
  }
`

const Logo = () => {
  const footPrintImg = "/favicon.ico"

  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <LogoBox>
        <Image boxSize={7} src={footPrintImg} alt="Garda Arraniri" mr={1} />
        <Text
          fontFamily="Inter"
          fontSize={24}
          fontWeight="bold"
          color={useColorModeValue("gray.600", "whiteAlpha.900")}
        >
          Arranworks
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
