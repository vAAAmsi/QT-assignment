import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { BookTicketsModel } from '../components/BookTicketsModel';

const DetailsPage = () => {
  const [isBookTicketsModalOpen, setIsBookTicketsModalOpen] = useState(false);
  const location = useLocation()
  const RoutedData = location?.state
  const imageURL = RoutedData?.show.image?.original

  const openBookTicketsModel = () => {
    setIsBookTicketsModalOpen(true);
  };
  return (
    <Flex
     flexDir="column"
    >
      <Header title={RoutedData?.show.name} />
      <Flex justifyContent="center">
        {
          imageURL === undefined ? (
            <Image src='/imageNotFound.png' alt='' mt={100} borderRadius="10px" boxSize={300} />
          ) : (
            <Image mt={100} fallbackSrc='/loader.svg' borderRadius="10px" boxSize={300} alt='' src={RoutedData?.show.image.original} />
          )
        }
      </Flex>
      <Flex flexDir="column" gap="20px" justifyContent="center" alignItems="center">
        <Text mt="20px" w={{base:"85%",sm:"80%",md:"90%"}}>
        <ApiContent htmlContent={RoutedData?.show.summary} />
        </Text>
        <Button w="200px" bg='green' color="white"  _hover={{bg:"green.300"}} onClick={openBookTicketsModel}>Book</Button>
        <BookTicketsModel
          isModalOpen={isBookTicketsModalOpen}
          closeModal={() => setIsBookTicketsModalOpen(false)}
          moviedata = {RoutedData}
        />
      </Flex>
    </Flex>
  )
}

export default DetailsPage;



const ApiContent = ({ htmlContent }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};


