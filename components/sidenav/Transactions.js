
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text,useColorModeValue, Image, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position } from "@chakra-ui/react"

import { useRouter } from 'next/router';
import { MdCheckCircle, MdDashboard, MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'
import { AiFillPieChart } from 'react-icons/ai';
import { FaPen, FaSimCard, FaCcVisa } from 'react-icons/fa';
import { BiLeftArrowCircle } from 'react-icons/bi'
import { IoIosArrowForward } from "react-icons/io";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";

const Transactions = () => {
  const bg = useColorModeValue("#F9F9F9", "rgb(27, 32, 44)");
  const text = useColorModeValue("#273b71", "white");
    return (
        <Box mt="9" borderRadius="10px"  bg={bg}  boxShadow="md" style={{
           // border: "2px solid #E9F1FB",
          }} w="100%" minH="400px" p="3" >

            <Flex direction="row" >

              <Flex>
                <Text color={text} fontWeight="bold" fontSize="md" mr="3">Transactions</Text>
                
              </Flex>
              <Spacer />

              <Select  minW="200px" variant="outline" size="md" w={20}>
                <option >Last 30 days</option>
              </Select>

            </Flex>

          </Box>

    )
}

export default Transactions
