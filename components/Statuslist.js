
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, Image, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position } from "@chakra-ui/react"

import { useRouter } from 'next/router';
import { MdCheckCircle, MdDashboard, MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'
import { AiFillPieChart } from 'react-icons/ai';
import { FaPen, FaSimCard, FaCcVisa } from 'react-icons/fa';
import { BiLeftArrowCircle } from 'react-icons/bi'
import { IoIosArrowForward } from "react-icons/io";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { BsQuestionCircle } from 'react-icons/bs'

const Statuslist = () => {
    return (
       <Flex mt={9}>
   <Flex width="680px" borderRadius="10px" style={{
            border: "2px solid #E9F1FB",
          }}  minHeight="600px" p={3} direction="column">

hello1
          </Flex>

         

            <Spacer />

            <Flex width="680px" borderRadius="10px" style={{
            border: "2px solid #E9F1FB",
          }}  minHeight="600px" p={3} direction="column">

              hello2
          </Flex>

          
        </Flex>
    )
}

export default Statuslist
