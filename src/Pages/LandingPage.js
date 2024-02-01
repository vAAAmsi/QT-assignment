import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const router = useNavigate()
  return (
    <Flex w="100%" h="100vh" bg="#0c111c" flexDir="column" justifyContent="space-between" alignItems="center" >
        <Flex></Flex>
        <Flex flexDir="column" justifyContent='center' alignItems="center" gap="10px">
            <Image borderRadius="10px" boxSize="150px" src='/quadbtech.jpeg' alt='q' />
            <Text color="white" textAlign='center' >QuadB Tech Assignment</Text>
            <Button onClick={() => router('/homepage')} bg="black" _hover={{bg:""}} color="white">Get Started</Button>
        </Flex>
        <Flex mb={5} flexDir="row">
            <Text 
             color="gray"
             display="flex"
             gap="4px"
            >
                Designed and implemented by{" "}
                <Link to="https://github.com/vAAAmsi" target='_blank'
                >
                    <Text textDecor="underline"> {" "}vAAmsi</Text>
                </Link>
            </Text>
        </Flex>
    </Flex>
  )
}

export default LandingPage;