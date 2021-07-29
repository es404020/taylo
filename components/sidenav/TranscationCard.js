import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text,CircularProgress,UnorderedList,CircularProgressLabel, Image, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position } from "@chakra-ui/react"

import { useRouter } from 'next/router';
import { MdCheckCircle, MdDashboard, MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'
import { AiFillPieChart } from 'react-icons/ai';
import { FaPen, FaSimCard, FaCcVisa } from 'react-icons/fa';
import { BiLeftArrowCircle } from 'react-icons/bi'
import { IoIosArrowForward } from "react-icons/io";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {BsQuestionCircle} from 'react-icons/bs'

const TranscationCard = ({icon,text,error=true}) => {
    return (
        <Flex width="680px" borderRadius="10px" style={{
            border: "2px solid #E9F1FB",
          }}  height="353px" p={3} direction="column">

                <Text fontWeight="semibold" color="#000000">{text} <Icon as={icon}  boxSize={4} color="#C8C8DB"  display="inline" /></Text>


                <Flex>

                    {error?(<CircularProgress value={12} size="300px" color="#DE4436" thickness="2px" >
                <CircularProgressLabel fontSize="md" fontWeight="bold">10%</CircularProgressLabel>
                    </CircularProgress>
):(
                        <CircularProgress value={52} size="300px" color="#00C9A7" thickness="2px" >
                        <CircularProgressLabel fontSize="md" fontWeight="bold">52%</CircularProgressLabel>
                            </CircularProgress>
        
                    )}

{error?(
    <UnorderedList  alignSelf="center">
    <ListItem color="#00C9A7">  <Text color="#000000">Customer Errors: 0</Text></ListItem>
    <ListItem color="#00C9A7"> <Text color="#000000">Fraud Blocks: 0</Text></ListItem>
    <ListItem color="#00C9A7"> <Text color="#000000">Bank Errors: 0</Text></ListItem>
    <ListItem color="#DE4436"> <Text color="#000000">System Errors: 1</Text></ListItem>
  </UnorderedList>
):(
    <UnorderedList alignSelf="center">
    <ListItem color="#00C9A7"> <Text color="#000000">Successful: 10</Text></ListItem>
    <ListItem color="#DE4436"> <Text color="#000000">Processing Errors: 1</Text></ListItem>
   
  </UnorderedList>
)}

                
                </Flex>

            </Flex>

    )
}

export default TranscationCard
