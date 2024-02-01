import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const DataList = ({moviedata}) => {

    const navigate = useNavigate()
    const imageURL =moviedata?.show?.image?.medium

  return (
    <Box p="1.5rem" flexDir="column" border="1px solid gray" borderRadius="10px" justifyContent="center" alignItems="center" display="inherit" gap="10px" >
        <Text fontSize="18px">Movie Name : <span style={{color:"red"}}>{moviedata.show.name}</span></Text>
        {
          imageURL === undefined ? (
            <Image  src='/imageNotFound.png' alt='' boxSize={{base:"250",sm:"200"}}  />
          ) : (
            <Image 
             borderRadius="5px" 
             boxSize={{base:"250",sm:"200"}} 
             src={imageURL} 
             onClick={() => navigate('/detailspage',{state:moviedata})}
             cursor="pointer"
            />
          )
        }
        <Flex flexDir="column">
          <Text>
            Language : {moviedata.show.language}
          </Text>
          <Text>
            Genres : {moviedata.show.genres?.join(', ')}
          </Text>
          <Text display="flex">
            <Image boxSize={5} src='/rating.png' alt=''/> :  {moviedata.show.rating?.average === null ? "-" : moviedata.show.rating?.average}
          </Text>
        </Flex>
        <Flex justifyContent="center">
          <Button bg="green" _hover={{bg:'green.400'}} color="white" onClick={() => navigate('/detailspage',{state:moviedata})}>View</Button>
        </Flex>
    </Box>
  )
}

export default DataList;