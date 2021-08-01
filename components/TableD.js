

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Tag,useColorModeValue, TagLeftIcon, TagLabel, Text, Checkbox, Image, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position } from "@chakra-ui/react"

import { useRouter } from 'next/router';
import { MdCheckCircle, MdDashboard, MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'
import { AiFillPieChart } from 'react-icons/ai';
import { FaPen, FaSimCard, FaCcVisa } from 'react-icons/fa';
import { BiLeftArrowCircle } from 'react-icons/bi'
import { IoIosArrowForward } from "react-icons/io";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";

const TableD = () => {
    const bg = useColorModeValue("white", "rgb(27, 32, 44)");
    const text = useColorModeValue("white", "rgb(27, 32, 44)");
    const tr= useColorModeValue("#53535F", "white");
    return (
        <Tr fontSize="sm" fontWeight="light" color={tr}>
        <Th><Checkbox ></Checkbox></Th>
        <Td>
            <Text display="block" fontSize="sm" fontWeight="light" color={tr}  >#5331</Text>

        </Td>
        <Td
        
        >
            <Flex direction="row" alignItems="center" >
            <Avatar
        size="sm"
        name="Kola Tioluwani"
        src="https://bit.ly/prosper-baba"
      />

      {/* <Spacer />
       */}
        <Text fontSize="sm" fontWeight="light"  color={tr} ml={2}>Eniola Ajani</Text>
            </Flex>

           
        
        </Td>

        <Td fontSize="sm" fontWeight="light"  color={tr}>Transfer</Td>
        <Td fontSize="sm" fontWeight="light"  color={tr}>$100,000</Td>
        <Td><HStack spacing={4}>
            <Tag  borderRadius="full" size="sm" key="2" variant="subtle"  bg="#DE443612" color="#DE4436">

                <TagLabel px={1} py={1}>Failed</TagLabel>
            </Tag>
        </HStack></Td>
        <Td ><Text fontSize="sm" fontWeight="light"  color={tr} >8 May 2021 10:25pm</Text></Td>

    </Tr>
    )
}

export default TableD
