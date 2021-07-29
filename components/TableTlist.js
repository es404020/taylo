

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Tag, TagLeftIcon,Thead,Tbody , TagLabel, Text, Checkbox, Image, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tfoot, Tr, Th, Td, Avatar, Square, position } from "@chakra-ui/react"

import { useRouter } from 'next/router';
import { MdCheckCircle, MdDashboard, MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'
import { AiFillPieChart } from 'react-icons/ai';
import { FaPen, FaSimCard, FaCcVisa } from 'react-icons/fa';
import { BiLeftArrowCircle } from 'react-icons/bi'
import { IoIosArrowForward } from "react-icons/io";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import TableD from '../components/TableD'

const TableTlist = () => {
    return (
        <Box mt="9" bg="white"  boxShadow="md" position="relative" overflow="auto" mb={5} borderRadius="10px" style={{
          //  border: "2px solid #E9F1FB",
        }} w="100%" minHeight="600px" p="3">

            <Flex direction="row" mb={5}>
                <Text color="#273b71" fontWeight="bold" fontSize="md" mb="4" mr="3">Recent Transactions</Text>
                <Spacer />

                <Select minW="150px" variant="outline" size="md" w={20}>
                    <option >Last 30 days</option>
                </Select>

            </Flex>



            <Table variant="simple" >

                <Tr color="#000000">
                    <Th><Checkbox ></Checkbox></Th>
                    <Th >ID</Th>
                    <Th>Customer</Th>
                    <Th>Mode of Payment</Th>
                    <Th >Amount</Th>
                    <Th>Status</Th>
                    <Th >Date</Th>

                </Tr>
                <Tbody>
                    { [10,2,4,5,7,9,0].map(key => {

                     

                         return <TableD key={key} />

                    })}

                </Tbody>


            </Table>

        </Box>

    )
}

export default TableTlist
