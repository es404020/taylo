import React from 'react'
import { Flex, Text, Image, Spacer,WrapItem,InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position } from "@chakra-ui/react"
import { useRouter } from 'next/router';
import { MdCheckCircle, MdDashboard, MdGroupWork,MdMenu,MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'
import { AiFillPieChart } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';

import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";

import {BsGrid3X3Gap} from 'react-icons/bs';


 const Header = () => {
    return (
       
            

        <Flex position="fixed" zIndex="2000"  top="0"  bg="white" boxShadow="lg"  h="70px" alignItems="center" py={5} justifyContent="start"  direction="row" width="full" style={{
         // borderBottom: "2px solid #E1E3E6"
        
        }}>
  
          <Flex   alignItems="center" justifyContent="space-evenly" >
            <Box ml="25px">
             
                {/* <Icon as={MdGroupWork}  boxSize={9}  color="#357ae2" display="inline" /> */}

                <Image
                                //  boxSize="10px"
                                // objectFit="cover"
                                src="logo.png"
                                alt=""
                            />

            
            </Box>
            <Box ml="45px">   <Icon as={MdMenu} w="23px" h="26px" color="#000000" display="inline" /></Box>
            
            <Box ml="25px"> 
            <InputGroup >
          
            
              <Input   border="transparent"  bg="#F3F3F9"  placeholder="Search for product" width="360px" px="5" h="20px" py="5" borderRadius="24px"  />
              <InputRightElement py="5" px="5"  >
              <SearchIcon color="#74788D" />
              </InputRightElement>
            </InputGroup>
  
            
            </Box>
            
          </Flex>
          <Spacer />
          <Flex  alignItems="center" justifyContent="space-evenly" >
          <Box mr="15px">
             
                <Icon as={BsGrid3X3Gap}   w={25} h={25} color="#2A3042" display="inline" />
            
            </Box>
            <Box mr="15px">
             
            <Icon as={MdNotifications}   w={25} h={25} color="#2A3042" display="inline" />
            
            </Box>
            
            <Box mr="25px">
             
            <Circle size="30px" style={{                                                     
                border: "1px solid #2A3042"
              }}>
             <WrapItem>
      <Avatar
        size="xs"
        name="Kola Tioluwani"
        src="https://bit.ly/tioluwani-kolawole"
      />{" "}
    </WrapItem>
              </Circle>
            
            </Box>
          </Flex>
  
        </Flex>
  
      
    )
}

export default Header;