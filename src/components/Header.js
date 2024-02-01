import { Flex, Text, Tooltip } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = ({title}) => {
  const location = useLocation()
  const router = useNavigate()
  const [routingPath, setRoutingPath] = useState('/')
  const [label, setLabel] = useState()
  // console.log(location.pathname)
  useEffect(() => {
    if(location.pathname === '/detailspage'){
      setRoutingPath('/homepage');
      setLabel('back to home page')
    }else{
      setRoutingPath('/')
      setLabel('back to landing page')
    }
  },[routingPath])

  return (
    <Flex
     w="100%"
     height="70px"
     fontSize="3xl"
    //  fontFamily="cursive"
     fontWeight="500"
     bg="skyblue"
     color="black.400"
     justifyContent="space-between"
     alignItems="center"
     position="fixed"
     top={0}
     zIndex={1}
    >
      <Tooltip label={label}>
        <ArrowBackIcon ml="10px" cursor="pointer" onClick={() => router(routingPath)} />
      </Tooltip>
      <Text>{title}</Text>
      <Flex></Flex>
    </Flex>
  )
}

export default Header