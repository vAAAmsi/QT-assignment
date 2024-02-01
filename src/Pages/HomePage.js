import { Flex, Skeleton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import DataList from '../components/DataList';

const HomePage = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const fetchFunction = async () => {
        try {
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
            const res = await response.json()
            setData(res);
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    };
    
    useEffect(() => {fetchFunction()},[])

    const ArticleSkeletons = () => {
        return [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10 ].map((_, index) => (
          <Flex
            borderRadius="24px"
            p="1.5rem"
            key={index}
            flexDir="column"
            bg="white"
            gap="1rem"
          >
            <Skeleton w={{base:250,sm:250}} h="15rem" borderRadius="10px" />
          </Flex>
        ));
      };
  return (
    <Flex
     flexDir="column"
    >
        <Header title='List Of Movies' />
        <Flex flexWrap="wrap" mt={{base: "120px",lg:"100px"}} justifyContent="center" gap="70px" mb="20px">
            {
                isLoading? (
                    <ArticleSkeletons />
                ) : (
                      data.map((movie,index) => {
                        return (
                            <DataList moviedata={movie}  key={index} />
                        )
                      })
                )
            }
        </Flex>
    </Flex>
  )
}

export default HomePage;