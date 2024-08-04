import {
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Input,
  FormLabel,
  Spacer,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiEditFill } from "react-icons/ri";

function Profile() {
  const [edit, setEdit] = useState(false)

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={"2.3rem"}><Link to={'/home'}>B.planet</Link></Text>
        <Button position={"absolute"} right={"5%"} p={"5px 15px"} borderRadius={"20px"} border={"3px solid"}><Link to={'/contact'}>Contact us</Link></Button>
      </Flex>
      <Center py={4}>
        <Box
          maxW={'45vw'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit="cover"
            alt="#"
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={'left'} mb={2}>
              <FormLabel m={0}> <Flex> Name <Spacer /> <Flex color={'gray'} onClick={() => { setEdit(!edit) }} cursor={'pointer'} fontSize={'0.8rem'} alignItems={'center'}> Edit <RiEditFill style={{ marginLeft: '3px' }} /> </Flex> </Flex></FormLabel>
              <Input type='text' variant='filled' defaultValue={'Dambaru'} isReadOnly={!edit} />
            </Stack>

            <Stack spacing={0} align={'left'} mb={2}>
              <FormLabel m={0}>Email</FormLabel>
              <Input type='email' variant='filled' defaultValue={'Dambaru@gmail.com'} isReadOnly={!edit} />
            </Stack>

            <Stack spacing={0} align={'left'} mb={2}>
              <FormLabel m={0}>Password</FormLabel>
              <Input type='password' variant='filled' defaultValue={'********************'} isReadOnly={!edit} />
            </Stack>

            <Stack spacing={0} align={'left'} mb={2}>
              <FormLabel m={0}>Phone Number</FormLabel>
              <Input type='tel' variant='filled' defaultValue={'97671755871'} isReadOnly={!edit} />
            </Stack>

            <Stack spacing={0} align={'left'} mb={2}>
              <FormLabel m={0}>Address</FormLabel>
              <Input type='text' variant='filled' defaultValue={'Patia, bhubaneswar'} isReadOnly={!edit} />
            </Stack>

            <Stack direction={'row'} justifyContent={'space-between'}>
              <Stack spacing={0} align={'left'} w={"47%"}>
                <FormLabel m={0}>State</FormLabel>
                <Input type='text' variant='filled' defaultValue={'Odisha'} isReadOnly={!edit} />
              </Stack>
              <Stack spacing={0} align={'left'} w={"47%"}>
                <FormLabel m={0}>Zip Code</FormLabel>
                <Input type='number' variant='filled' defaultValue={'751024'} isReadOnly={!edit} />
              </Stack>
            </Stack>

            {edit &&
              <Button
                w={'full'}
                mt={8}
                bg={'#151f21'}
                color={'white'}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                onClick={() => { setEdit(false) }}
              >
                Update
              </Button>}
          </Box>
        </Box>
      </Center>
    </>
  )
}

export default Profile