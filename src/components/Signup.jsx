import { Avatar, Box, Button, Center, Flex, FormLabel, Image, Input, Stack, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function Signup() {
    return (
        <>
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
                            <FormLabel m={0}> Name </FormLabel>
                            <Input type='text' variant='filled' placeholder={'Dambaru'} />
                        </Stack>

                        <Stack spacing={0} align={'left'} mb={2}>
                            <FormLabel m={0}>Email</FormLabel>
                            <Input type='email' variant='filled' placeholder={'Dambaru@gmail.com'} />
                        </Stack>

                        <Stack spacing={0} align={'left'} mb={2}>
                            <FormLabel m={0}>Password</FormLabel>
                            <Input type='password' variant='filled' placeholder={'********************'} />
                        </Stack>

                        <Stack spacing={0} align={'left'} mb={2}>
                            <FormLabel m={0}>Phone Number</FormLabel>
                            <Input type='tel' variant='filled' placeholder={'97671755871'} />
                        </Stack>

                        <Stack spacing={0} align={'left'} mb={2}>
                            <FormLabel m={0}>Address</FormLabel>
                            <Input type='text' variant='filled' placeholder={'Patia, bhubaneswar'} />
                        </Stack>

                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Stack spacing={0} align={'left'} w={"47%"}>
                                <FormLabel m={0}>State</FormLabel>
                                <Input type='text' variant='filled' placeholder={'Odisha'} />
                            </Stack>
                            <Stack spacing={0} align={'left'} w={"47%"}>
                                <FormLabel m={0}>Zip Code</FormLabel>
                                <Input type='number' variant='filled' placeholder={'751024'} />
                            </Stack>
                        </Stack>

                        <Link to={'/'}>
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
                            >
                                SignUp
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Center>
        </>
    )
}

export default Signup