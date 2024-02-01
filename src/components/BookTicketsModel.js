import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Flex,
    Box,
    Input,
    Stack,
    Button,
    FormControl,
    Text
} from '@chakra-ui/react'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const BookTicketsModel = ({ isModalOpen, closeModal, moviedata }) => {
    const [name, setName] = useState('')
    const [ticketsCount, setTicketCount] = useState('')
    const mname = moviedata.show.name;
    const navigate = useNavigate()
    const user = {
        moviename : mname,
        name : name,
        ticketsCount : ticketsCount
    }
    const addDataToLocalstorage = async (e) => {
        e.preventDefault()
        await localStorage.setItem('user',JSON.stringify(user))
        Swal.fire({
            title: 'Successfully booked!!',
            icon: 'success'
        })
        setName('')
        setTicketCount('')
        closeModal()
        navigate('/homepage')
    }

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}  isCentered={true}>
      <ModalOverlay />
      <ModalContent w={{base:"85%"}}>
        <ModalHeader>
           Book Tickets
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Flex gap="1rem" mb={5}>
           <form onSubmit={(e) => addDataToLocalstorage(e)} style={{width:"100%"}} >
           <FormControl >
                <Box display="flex" w="100%" flexDir="column" gap="20px">
                    <Text>Movie Name : {moviedata.show.name} </Text>
                    <Input 
                     placeholder='Enter your name'
                     onChange={(e) => setName(e.target.value)}
                     required
                     value={name}
                    />
                    <Flex flexDir="column">
                    <Text>No. of tickets:</Text>
                    <Input mt="10px"
                     placeholder='Number of tickets'
                     onChange={(e) => setTicketCount(e.target.value)}
                     required
                     value={ticketsCount}
                    />
                    </Flex>
                    <Stack>
                        <Button  bg='#2ECC71' color="white"
                        _hover={{ noOfChildren: 1, bg: 'linear-gradient(89.43deg, #55DDEE -5.95%, #004AAD 53.42%)' }}
                        type='submit'
                        >
                            Add
                        </Button>
                        <Button onClick={closeModal}>
                            cancel
                        </Button>
                    </Stack>
                </Box>
            </FormControl>
           </form>
        </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

