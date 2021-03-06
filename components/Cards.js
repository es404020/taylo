


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, Image, Spacer,useColorModeValue, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position, Divider, background } from "@chakra-ui/react"

import { useRouter } from 'next/router';
import { MdCheckCircle, MdDashboard,MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'
import { AiFillPieChart } from 'react-icons/ai';
import { FaPen, FaSimCard, FaCcVisa } from 'react-icons/fa';
import { BiLeftArrowCircle } from 'react-icons/bi'
import { IoIosArrowForward } from "react-icons/io";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import Headers from "../components/Header";
import Sidebar from "../components/sidenav/Sidebar";
import Transactions from "../components/sidenav/Transactions"
import Rate from "../components/Rate";
import { RouteIndcator } from '../components/sidenav/RouteIndcator';
import TableTlist from '../components/TableTlist';
import Statuslist from '../components/Statuslist';

const Cards = () => {
     const bg1 = useColorModeValue("white", "rgb(27, 32, 44)");
     const text = useColorModeValue("white", "rgb(27, 32, 44)");
     const bg = useColorModeValue("#F5F6F8", "rgb(29 ,35, 47)");
     const bgcolor = useColorModeValue(" 1px solid #E1E3E6", " 1px solid rgb(27, 32, 44)");
    return (
        
       
        <Flex width="80%" flex={10} bg={bg} w="100%" marginLeft="2%" mt="140px" px="3%"  py="2%" pb="75px"   flexDir="column" overflowX="hidden" overflowY="auto"  
        style={{
             border: bgcolor,
    // border: "1px solid #E1E3E6",
      }}
        css={{
            '&::-webkit-scrollbar': {
              width: '0',
            },
            '&::-webkit-scrollbar-track': {
              width: '0',
            },
            '&::-webkit-scrollbar-thumb': {
             
              borderRadius: '24px',
            },
          }}
        
        >

{/* <Circle size="40px" pos="fixed" right="85px" bg={text} top="30%" boxShadow="lg" zIndex={100}>
                <IoIosArrowForward size={30} color="#2A3042" />
            </Circle> */}

            <Text  fontWeight="bold" mb={5}>Cards</Text>


            <Grid mb={5} templateColumns="repeat(4,2fr)" gap="6">

            {/* #8A0161 #01048A  482CD8 02058A*/}
                <Flex borderRadius="9px" bgGradient="linear(to-l, #8A0161, #8A0161)" overflow="auto" bg="#01048A" direction="column" color="white" p={5} justifyContent="space-around" style={{
                    // border: "2px solid #E9F1FB",

                }} w="350px" h="200" transition="transform .2s" _hover={{
                    transform: 'scale(1.1)',
                    color: "white",
                    background:"#8A0161"
                    
                }} >
                    <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                        <FaSimCard size={30} style={{
                            transform: "rotate(90deg)"
                        }} color="white" />
                        <Spacer />

                        <FaCcVisa size={30} style={{

                        }} color="white" />
                    </Flex>
                    <Flex direction="row" w="full" justifyContent="space-between">

                        <Text>****</Text>
                        <Text>****</Text>
                        <Text>****</Text>
                        <Text fontFamily="monospace">0007</Text>

                    </Flex>
                    <Flex direction="column">
                        <Flex justifyContent="space-between">
                            <Text fontWeight="light" fontSize="xs" >Cardholder</Text>
                            <Text fontWeight="light" fontSize="xs" as="i" >Expire</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text fontWeight="semibold" fontSize="sm" >Athena Novotel</Text>
                            <Text fontWeight="semibold" fontSize="sm" as="i" >12/22</Text>
                        </Flex>
                    </Flex>


                </Flex>
                <Box position="relative" maxHeight="1330px" height="auto"   py={9} style={{
                    
                    zIndex: "10",
                   
                    // overflowY: "hidden",
                    // overflowX: "auto"
                }}  css={{
                '&::-webkit-scrollbar': {
                    display: "none"
                },
                '&::-webkit-scrollbar-track': {
                  width: '1px',
                },
                '&::-webkit-scrollbar-thumb': {
               
                  borderRadius: '0',
                },
              }}  >




                    <Flex borderRadius="15px" id="1" boxShadow="md"  position="absolute" top="0" left="0" bg={text} justifyContent="space-between" flexDirection="column" style={{
                      //  border: "1px solid #E1E3E6",
                        borderRadius: "1px solid #E1E3E6",

                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        
                     
                        transform: 'scale(1.5)',
                        color: "white",
                        background:"#8A0161",
                        zIndex: "1000",
                        //position:"relative",
                       // top:"-5px"
                    }} >

                        <Box position="relative">

                            <Text position="absolute" left="-3"  style={{
                                transform: "rotate(-90deg)"
                            }} fontWeight="bold" mt="5" fontSize="xs" >**** 5675</Text>
                        </Box>

                        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                            {/* <AiFillPieChart size={30} color="#9c55e1" /> */}

                            <Image
                                //  boxSize="10px"
                                // objectFit="cover"
                                src="mastercardlogo.png"
                                alt=""
                            />

                        </Flex>



                    </Flex>








                    <Flex borderRadius="10px" id="2" boxShadow="md" zIndex="9" marginLeft="80px" bg={text} position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                      //  border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3"  style={{
                                transform: "rotate(-90deg)"
                            }} fontWeight="bold" mt="5" fontSize="xs" >**** 5675</Text>
                        </Box>

                        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                            {/* <AiFillPieChart size={30} color="#9c55e1" /> */}

                            <Image
                                //  boxSize="10px"
                                // objectFit="cover"
                                src="mastercardlogo.png"
                                alt=""
                            />

                        </Flex>
                    </Flex>



                    <Flex borderRadius="10px" id="2" boxShadow="md" zIndex="10" marginLeft="160px" bg={text} position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                       // border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3"  style={{
                                transform: "rotate(-90deg)"
                            }} fontWeight="bold" mt="5" fontSize="xs" >**** 5675</Text>
                        </Box>

                        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                            {/* <AiFillPieChart size={30} color="#9c55e1" /> */}

                            <Image
                                //  boxSize="10px"
                                // objectFit="cover"
                                src="mastercardlogo.png"
                                alt=""
                            />

                        </Flex>
                    </Flex>
                    <Flex borderRadius="10px" id="2" boxShadow="md" zIndex="11" marginLeft="240px" bg={text} position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                      //  border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3"  style={{
                                transform: "rotate(-90deg)"
                            }} fontWeight="bold" mt="5" fontSize="xs" >**** 5675</Text>
                        </Box>

                        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                            {/* <AiFillPieChart size={30} color="#9c55e1" /> */}

                            <Image
                                //  boxSize="10px"
                                // objectFit="cover"
                                src="mastercardlogo.png"
                                alt=""
                            />

                        </Flex>
                    </Flex>


                    <Flex borderRadius="10px" boxShadow="md" id="2" zIndex="12" marginLeft="320px" bg={text} position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                  //      border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3"  style={{
                                transform: "rotate(-90deg)"
                            }} fontWeight="bold" mt="5" fontSize="xs" >**** 5675</Text>
                        </Box>

                        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                        

                            <Image
                                //  boxSize="10px"
                                // objectFit="cover"
                                src="mastercardlogo.png"
                                alt=""
                            />

                        </Flex>
                    </Flex>






                    <Flex borderRadius="10px" id="2" boxShadow="md" zIndex="13" marginLeft="400px" bg={text} position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                    //    border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3"  style={{
                                transform: "rotate(-90deg)"
                            }} fontWeight="bold" mt="5" fontSize="xs" >**** 5675</Text>
                        </Box>

                        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                         

                            <Image
                                //  boxSize="10px"
                                // objectFit="cover"
                                src="mastercardlogo.png"
                                alt=""
                            />

                        </Flex>
                    </Flex>


                    <Flex borderRadius="10px" boxShadow="md" id="2" zIndex="14" marginLeft="480px" bg={text} position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                      //  border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3"  style={{
                                transform: "rotate(-90deg)"
                            }} fontWeight="bold" mt="5" fontSize="xs" >**** 5675</Text>
                        </Box>

                        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                         

                            <Image
                                //  boxSize="10px"
                                // objectFit="cover"
                                src="mastercardlogo.png"
                                alt=""
                            />

                        </Flex>
                    </Flex>


                    {/* <Flex borderRadius="10px" boxShadow="md" id="2" zIndex="14" marginLeft="540px" bg={text} position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                       // border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3"  style={{
                                transform: "rotate(-90deg)"
                            }} fontWeight="bold" mt="5" fontSize="xs" >**** 5675</Text>
                        </Box>

                        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                         

                            <Image
                                //  boxSize="10px"
                                // objectFit="cover"
                                src="mastercardlogo.png"
                                alt=""
                            />

                        </Flex>
                    </Flex>
                     */}


                   



                </Box>





            </Grid>


            <Divider mb={5} />



            <Grid templateColumns="repeat(4,2fr)" gap="6">
                <Box borderRadius="10px"
                boxShadow="md"
                
                    bgGradient={`linear(to-bl, #27BC48, ${bg1},${bg1},${bg1})`}
                    style={{
                      //  border: "2px solid #E9F1FB",
                    }} w="100%" h="150" p="3" transition="all .5s ease-out" _hover={{
                        //  transform: 'scale(1.1)',
                       
                        backgroundPosition: "bottom left ",
                        background:'linear-gradient(to left, #27BC48 50%, #27BC48 50%)'
                    }} >
                    <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                        <Circle bg="#27BC48" size={30}>
                            <MdPeople  size={20}  mr="2" pr="5" />
                        </Circle>

                        <Spacer />

                    </Flex>
                    <Text  fontWeight="semibold" mt="5" fontSize="xl">1,830</Text>

                    <Text fontWeight="light" fontSize="sm" >Customers</Text>
                </Box>
                <Box borderRadius="10px" 
                  boxShadow="md"
                  bgGradient={`linear(to-bl, #B5C012, ${bg1},${bg1},${bg1})`}
               
                style={{
                   // border: "2px solid #E9F1FB",
                }} w="100%" h="150" p="3" transition="all .2s ease-in" _hover={{
                      //  transform: 'scale(1.1)',
                      color: "white",
                      background: "#B5C012"
                }} >
                    <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                        <Circle bg="#B5C012" size={30}>
                            <MdPeople size={20}  mr="2" pr="5" />
                        </Circle>

                        <Spacer />

                    </Flex>
                    <Text fontWeight="bold" mt="5" fontSize="xl">$100,830</Text>

                    <Text fontWeight="light" fontSize="sm" >Revenue</Text>
                </Box>
                <Box borderRadius="10px"
                  boxShadow="md"
                  bgGradient={`linear(to-bl, #DF1839, ${bg1},${bg1},${bg1})`}
                
                style={{
                 //   border: "2px solid #E9F1FB",
                }} w="100%" h="150" p="3" transition="transform .6s" _hover={{
                    color: "white",
                      background: "#DF1839"
                }} >
                    <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                        <Circle bg="#DF1839" size={30}>
                            <MdPeople size={20}  mr="2" pr="5" />
                        </Circle>
                        <Spacer />

                    </Flex>
                    <Text fontWeight="semibold" mt="5" fontSize="xl">60</Text>

                    <Text fontWeight="light" fontSize="sm" >Total Subscribers</Text>
                </Box>
                <Box borderRadius="10px"
                  boxShadow="md"
                  bgGradient={`linear(to-bl, #357ae2, ${bg1},${bg1},${bg1})`}
                
                
                style={{
                    //border: "2px solid #E9F1FB",
                }} w="100%" h="150" p="3" transition="transform .2s" _hover={{
                    color: "white",
                    background: "#357ae2"
                }}>
                    <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                        <Circle bg="#357ae2" size={30}>
                            <MdPeople size={20}  mr="2" pr="5" />
                        </Circle>
                        <Spacer />

                    </Flex>
                    <Text  fontWeight="semibold" mt="5" fontSize="xl">$100,000</Text>

                    <Text fontWeight="light" fontSize="sm" >Balance</Text>
                </Box>
            </Grid>

           <Transactions />
           
         <Rate/>


         <TableTlist />

         <Statuslist/>
        </Flex>
        
    )
}

export default Cards
