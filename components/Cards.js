


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, Image, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position, Divider } from "@chakra-ui/react"

import { useRouter } from 'next/router';
import { MdCheckCircle, MdDashboard, MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'
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
    return (
       
        <Flex width="80%" flex={10} bg="#F5F6F8" p="2em" marginLeft="4%" mt="70px" pb="75px"  minH="100vh" flexDir="column" overflowX="hidden" overflowY="auto"  
        css={{
            '&::-webkit-scrollbar': {
              width: '0',
            },
            '&::-webkit-scrollbar-track': {
              width: '0',
            },
            '&::-webkit-scrollbar-thumb': {
              background: "gray",
              borderRadius: '24px',
            },
          }}
        
        >

{/* <Circle size="40px" pos="fixed" right="85px" bg="white" top="30%" boxShadow="lg" zIndex={100}>
                <IoIosArrowForward size={30} color="#2A3042" />
            </Circle> */}

            <Text color="#000000" fontWeight="bold" mb={5}>Cards</Text>


            <Grid mb={5} templateColumns="repeat(4,2fr)" gap="6">
                <Flex borderRadius="9px" bgGradient="linear(to-l, #482CD8, #02058A)" overflow="auto" bg="#01048A" direction="column" color="white" p={5} justifyContent="space-around" style={{
                    border: "2px solid #E9F1FB",

                }} w="350px" h="200" transition="transform .2s" _hover={{
                    transform: 'scale(1.1)',
                    color: "white"
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
                  background: "red",
                  borderRadius: '0',
                },
              }}  >




                    <Flex borderRadius="15px" id="1" boxShadow="md"  position="absolute" top="0" left="0" bg="white" justifyContent="space-between" flexDirection="column" style={{
                      //  border: "1px solid #E1E3E6",
                        borderRadius: "1px solid #E1E3E6",

                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                       // zIndex: "1000",
                        //position:"relative",
                       // top:"-5px"
                    }} >

                        <Box position="relative">

                            <Text position="absolute" left="-3" color="#000000" style={{
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








                    <Flex borderRadius="10px" id="2" boxShadow="md" zIndex="9" marginLeft="80px" bg="white" position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                      //  border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3" color="#000000" style={{
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



                    <Flex borderRadius="10px" id="2" boxShadow="md" zIndex="10" marginLeft="160px" bg="white" position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                       // border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3" color="#000000" style={{
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
                    <Flex borderRadius="10px" id="2" boxShadow="md" zIndex="11" marginLeft="240px" bg="white" position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                      //  border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3" color="#273b71" style={{
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


                    <Flex borderRadius="10px" boxShadow="md" id="2" zIndex="12" marginLeft="320px" bg="white" position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                  //      border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3" color="#273b71" style={{
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






                    <Flex borderRadius="10px" id="2" boxShadow="md" zIndex="13" marginLeft="400px" bg="white" position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                    //    border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3" color="#273b71" style={{
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


                    <Flex borderRadius="10px" boxShadow="md" id="2" zIndex="14" marginLeft="480px" bg="white" position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                      //  border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3" color="#273b71" style={{
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


                    <Flex borderRadius="10px" boxShadow="md" id="2" zIndex="14" marginLeft="540px" bg="white" position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                       // border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3" color="#273b71" style={{
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
                    <Flex borderRadius="10px" boxShadow="md"  id="2" zIndex="14" marginLeft="620px" bg="white" position="absolute" top="0" left="0" justifyContent="space-between" flexDirection="column" style={{
                        //border: "2px solid #E9F1FB",
                    }} w="350px" h="200" p="3" transition="transform .2s" _hover={{
                        transform: 'scale(1.1)',
                        color: "#357ae2",
                        zIndex: "100"
                    }} >
                        <Box position="relative">

                            <Text position="absolute" left="-3" color="#273b71" style={{
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










                </Box>





            </Grid>


            <Divider mb={5} />



            <Grid templateColumns="repeat(4,2fr)" gap="6">
                <Box borderRadius="10px"
                boxShadow="md"
                color="#273b71"
                    bgGradient="linear(to-bl, #27BC48, white,white,white)"
                    style={{
                      //  border: "2px solid #E9F1FB",
                    }} w="100%" h="150" p="3" transition="all .5s ease-out" _hover={{
                        //  transform: 'scale(1.1)',
                        color: "white",
                        backgroundPosition: "bottom left ",
                        background:'linear-gradient(to left, #27BC48 50%, #27BC48 50%)'
                    }} >
                    <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                        <Circle bg="#27BC48" size={30}>
                            <MdPeople  size={20}  mr="2" pr="5" />
                        </Circle>

                        <Spacer />

                    </Flex>
                    <Text  fontWeight="bold" mt="5" fontSize="xl">1,830</Text>

                    <Text fontWeight="light" fontSize="sm" >Customers</Text>
                </Box>
                <Box borderRadius="10px" 
                  boxShadow="md"
                bgGradient="linear(to-bl, #B5C012, white,white,white)"style={{
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
                  bgGradient="linear(to-bl, #DF1839, white,white,white)"
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
                    <Text fontWeight="bold" mt="5" fontSize="xl">60</Text>

                    <Text fontWeight="light" fontSize="sm" >Total Subscribers</Text>
                </Box>
                <Box borderRadius="10px"
                  boxShadow="md"
                  bgGradient="linear(to-bl, #357ae2, white,white,white)"
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
                    <Text  fontWeight="bold" mt="5" fontSize="xl">$100,000</Text>

                    <Text fontWeight="medium" fontSize="sm" >Balance</Text>
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
