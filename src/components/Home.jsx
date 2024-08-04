import { Avatar, Box, Button, Flex, Grid, Image, Text, WrapItem } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import hero1 from '../assets/Hero image 1.png'
import hero2 from '../assets/hero image 2.png'
import { useEffect, useState } from "react"

function Home() {

  const [plants, setPlants] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const loadData = async () => {
    let res = await fetch(`http://localhost:3000/plants?_page=${page}&_per_page=12`);
    setPlants(await res.json());

  }

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      <Box bg={'#CCC2B6'} height={'100vh'}>
        <Flex alignItems={"center"} justifyContent={'space-between'} p={'0 5%'}>
          <Text fontSize={"2.3rem"}>B.planet</Text>
          <Flex alignItems={'center'}>
            <Button mr={'50px'} p={"5px 15px"} borderRadius={"20px"} border={"1px solid"} onClick={() => navigate('/contact')}>Contact us</Button>
            <WrapItem>
              <Link to={'/profile'}>
                <Avatar name='Dan Abrahmov' src={'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'} />
              </Link>
            </WrapItem>
          </Flex>
        </Flex>
        <Flex w={'100%'} height={'91%'}>
          <Flex w={'35%'} h={'100%'} flexWrap={'wrap'} justifyContent={'flex-end'} alignItems={'center'}>
            <Box>
              <Text fontSize={'2.7rem'} >&apos;As interesting</Text>
              <Text fontSize={'2.7rem'}>as a plant&apos;</Text>
            </Box>
          </Flex>
          <Flex alignItems={'flex-end'} justifyContent={'left'}>
            <Image h={'500px'} src={hero2} />
            <Image h={'500px'} src={hero1} />
          </Flex>
        </Flex>
      </Box>
      <Box p={'3% 9%'} bg={'#fff7eb'} >
        <Text fontSize={'2rem'}>Featured Product</Text>
        <Grid templateColumns='repeat(4, 1fr)' bg={'#CCC2B6'} gap={1} p={1} mt={'3%'}>
          {plants &&
            plants.data.map((ele) => (
              <Link key={ele.id} to={`/description/${ele.id}/${ele.common_name.replaceAll(/ /g, '')}`} style={{ cursor: 'default' }}>
                <Flex w='100%' h='10rem' bg='#fff7eb' alignItems={'center'} justifyContent={'space-around'} p={'3%'} overflow={'hidden'} >
                  <Image src={ele.image_url} />
                  <Text fontSize={'1.1rem'}>{ele.common_name}</Text>
                </Flex>
              </Link>
            ))
          }
        </Grid>
        {plants && <Flex justifyContent={'right'} alignItems={'center'} mt={4}>
          <Button bg={'transparent'} _hover={{ bg: "transparent" }} onClick={() => setPage(page - 1)} isDisabled={plants.prev == null}>&lt; Previous</Button>
          <Box fontSize={'1.2rem'}>{page}</Box>
          <Button bg={'transparent'} _hover={{ bg: "transparent" }} onClick={() => setPage(page + 1)} isDisabled={plants.next == null}>Next &gt;</Button>
        </Flex>}
      </Box>
    </>
  )
}

export default Home