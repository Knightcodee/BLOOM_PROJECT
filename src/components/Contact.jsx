import { Button, Card, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <Text fontSize={"2.3rem"} pl={'5%'}><Link to={'/home'}>B.planet</Link></Text>
      <Text fontSize={"2.3rem"} textAlign={"center"} fontWeight={'500'}>Contact us</Text>
      <Card
        justifyContent={"center"}
        alignItems={"center"}
        mt={'3%'}
        boxShadow={'none'}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          h={"55vh"}
          w={"65vw"}
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          border={"3px solid #B48F8F"}
        >
          <Card h={"100%"} p={"40px"} borderRight={'2px solid #B48F8F'} w={"50%"} borderRadius={0} >
            <Text fontSize={"1.8rem"} fontWeight={'400'}>Stay Updated</Text>
            <Text>Need to get in touch with us ?</Text>
            <Text fontSize={'0.9rem'} mt={'5%'} textDecoration={'underline'} cursor={'pointer'}>Facebook</Text>
            <Text fontSize={'0.9rem'} mt={'1%'} textDecoration={'underline'} cursor={'pointer'}>Instagram</Text>
          </Card>
          <Card p={"40px"} h={"100%"} w={"50%"} borderLeft={'2px solid #B48F8F'} borderRadius={0}>
            <FormControl>
              <Input type='text' p={5} outline={"none"} bg={"#B48F8F"} color={'white'} width={"100%"} height={"50px"} placeholder='Swagat Beaura' />
              <Input type='email' mt={'20px'} p={5} outline={"none"} bg={"#B48F8F"} color={'white'} width={"100%"} height={"50px"} placeholder='Swagatb123@gmail.com' />
              <Input type='text' mt={'20px'} p={5} outline={"none"} bg={"#B48F8F"} color={'white'} width={"100%"} height={"80px"} placeholder='I found your site well informed' />
              <Button onClick={() => navigate('/home')} bg={"#CCC2B6"} mt={"25px"} p={"4px 40px"} borderRadius={"20px"}>
                Submit
              </Button>
            </FormControl>
          </Card>
        </Flex>
      </Card>
      <style>
        {`::placeholder { 
              color: white;
              opacity: 0.6;

          }`
        }
      </style>
    </>
  )
}

export default Contact