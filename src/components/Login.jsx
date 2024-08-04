import { Button, Card, Flex, FormControl, FormLabel, Image, Input, InputGroup, InputRightElement, Spacer, Text } from "@chakra-ui/react"
import { useState } from "react";
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import Icon from "react-icons-kit";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const navigate = useNavigate();

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    return (
        <>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Text fontSize={"2.3rem"}>B.planet</Text>
                <Button position={"absolute"} right={"5%"} p={"5px 15px"} borderRadius={"20px"} border={"3px solid"} onClick={()=>navigate('/contact')}>Contact us</Button>
            </Flex>
            <Card
                justifyContent={"center"}
                alignItems={"center"}
                height={"90vh"}
                boxShadow={'none'}
            >
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    h={"75vh"}
                    w={"65vw"}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    border={"3px solid #B48F8F"}
                >
                    <Flex bg={"#CCC2B6"} height={"100%"} w={"45%"} alignItems={"flex-end"} justifyContent={"center"} >
                        <Image
                            src={'./src/assets/Login in page image.png'}
                            h={"300px"}
                        />
                    </Flex>
                    <Card p={"60px"} h={"100%"} w={"55%"}>

                        <Text textAlign={"left"} fontWeight={"500"} fontSize={"1.8rem"}>Login</Text>
                        <Text textAlign={"left"} fontWeight={"400"} fontSize={"1rem"}>Welcome back !!</Text>
                        <FormControl mt={"25px"}>
                            <FormLabel fontWeight={"500"}>Email</FormLabel>
                            <Input type='email' p={5} outline={"none"} bg={"#d5d9e0"} width={"100%"} height={"40px"} placeholder='Dambaru@gmail.com' />
                            <FormLabel mt={"15px"} fontWeight={"500"} w={"100%"}><Flex alignItems={"center"}>Password<Spacer /><Text fontSize={"0.7rem"} color={"gray"}>Forget Password ?</Text></Flex></FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    type={type}
                                    placeholder='*************************'
                                    p={5}
                                    outline={"none"}
                                    bg={"#d5d9e0"}
                                    width={"100%"}
                                    height={"40px"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                />
                                <InputRightElement width='4.5rem' >
                                    <Button h='1.75rem' size='sm' onClick={handleToggle} bg={'transparent'} _hover={{ bg: "transparent" }}>
                                        <Icon icon={icon} size={20} />
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Flex w={'100%'} justifyContent={"center"} mt={"25px"}>
                                <Link to={'/home'}>
                                    <Button bg={"#CCC2B6"} p={"4px 40px"} borderRadius={"20px"}>
                                        Login
                                    </Button>
                                </Link>
                            </Flex>
                            <Flex alignItems={"center"} justifyContent={"space-around"} mt={"20px"}>Dont&apos;t have an account yet ?<Text fontSize={"0.8rem"} color={"gray"} style={{ textDecoration: "underline" }}> <Link to={'/signup'}>Sign up for free</Link></Text></Flex>
                        </FormControl>
                    </Card>

                </Flex>
            </Card>
        </>
    )
}

export default Login