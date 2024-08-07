import { Box, Button, Card, CardBody, CardHeader, Flex, Image, Stack, StackDivider, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Description() {
    const [imageSrc, setImageSrc] = useState(null);
    const [plant, setPlant] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const loadData = async () => {
        let res = await fetch(`http://localhost:3000/plants/${id}`);
        setPlant(await res.json());
    }

    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (plant.image_url !== undefined) {
        import('../../' + plant.image_url)
            .then(image => {
                setImageSrc(image.default);
            })
            .catch(err => {
                console.error('Failed to load image', err);
            })
    }

    return (
        <>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Text fontSize={"2.3rem"} pl={'5%'}><Link to={'/home'}>B.planet</Link></Text>
                <Button position={"absolute"} right={"5%"} p={"5px 15px"} borderRadius={"20px"} border={"3px solid"} onClick={() => navigate('/contact')}>Contact us</Button>
            </Flex>
            <Flex h={'91vh'} overflow={'hidden'} justifyContent={'center'} alignItems={'center'}>
                {plant &&
                    <Flex h={'85vh'} w={'70vw'}>
                        <Box w={'60%'}>
                            <Card boxShadow={'none'}>
                                <CardHeader>
                                    <Text fontSize='2xl'>
                                        {plant.common_name}
                                    </Text>
                                    <Text fontSize='sm'>
                                        {plant.symbolism}
                                    </Text>
                                </CardHeader>

                                <CardBody pt={1}>
                                    <Stack divider={<StackDivider border={'1px solid'} borderColor={'gray'} />} spacing='5'>
                                        <Box>
                                            <Text fontSize='2xl'>
                                                Plant Care Guide
                                            </Text>
                                        </Box>
                                        <Flex alignItems={'center'}>
                                            <Text w={'23%'} fontSize='sm'>
                                                Water
                                            </Text>
                                            <Text fontSize='sm'>
                                                {plant.care_guide && plant.care_guide.water}
                                            </Text>
                                        </Flex>
                                        <Flex alignItems={'center'}>
                                            <Text w={'23%'} fontSize='sm'>
                                                Light
                                            </Text>
                                            <Text fontSize='sm'>
                                                {plant.care_guide && plant.care_guide.light}
                                            </Text>
                                        </Flex>
                                        <Flex alignItems={'center'}>
                                            <Text w={'23%'} fontSize='sm'>
                                                Tips
                                            </Text>
                                            <Text fontSize='sm'>
                                                {plant.care_guide && plant.care_guide.tips}
                                            </Text>
                                        </Flex>
                                        <Box>
                                            <Text mt='5' fontSize='2xl'>
                                                Description
                                            </Text>
                                        </Box>
                                        <Flex alignItems={'center'}>
                                            <Text fontSize='sm'>
                                                {plant.description}
                                            </Text>
                                        </Flex>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box w={'40%'} p={'40px'}>
                            <Image src={imageSrc} h={'350px'} />
                        </Box>
                    </Flex>
                }
            </Flex>
        </>
    )
}

export default Description