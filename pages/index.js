


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, Image, Spacer, useColorModeValue,WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position } from "@chakra-ui/react"

import { useRouter } from 'next/router';
import { MdCheckCircle, MdDashboard, MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'
import { AiFillPieChart } from 'react-icons/ai';
import { FaPen, FaSimCard, FaCcVisa } from 'react-icons/fa';
import { BiLeftArrowCircle } from 'react-icons/bi'

import { IoIosArrowForward } from "react-icons/io";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import Headers from "../components/Header";
import Sidebar from "../components/sidenav/Sidebar";
import { RouteIndcator } from '../components/sidenav/RouteIndcator';
import Cards from "../components/Cards";
import Three from "../components/Three";

export default function Home() {

  const bg = useColorModeValue("#F9F9F9", "rgb(27, 32, 44)");
  const text = useColorModeValue("#01048A", "white");
  return (
    <Flex w="100%"  flexDirection="column" bg="white" position="relative">

      <Headers />


      <Flex >


        <Sidebar />

        <Flex w="100%" height="100vh"  flexDirection="column" flex={1} justifyContent="start" bg={bg}>
       
          <Flex flexDirection="row" height="auto" overflowY="hidden">
          <RouteIndcator boxShadow="md" style={{
              border: "1px solid red",
        }}/>
            <Cards />
            <Three />

          </Flex>

        </Flex>
      </Flex>







    </Flex>


  )
}
