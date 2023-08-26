import React from 'react'
import { HStack , Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={3} spacing={4} bgColor={'blackAlpha.900'} color={'white'} >
        <Box className="logo" fontWeight={'800'} > CoinApp</Box>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }} >Home</Link>
        <Link to="/coins" style={{ textDecoration: "none", color: "#fff" }} >Coins</Link>
        <Link to="/exchanges" style={{ textDecoration: "none", color: "#fff" }} >Exchanges</Link>
    </HStack>
  )
}

export default Header
