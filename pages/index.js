


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
import Headers from "../components/Header";
import Sidebar from "../components/sidenav/Sidebar";
import { RouteIndcator } from '../components/sidenav/RouteIndcator';
import Cards from "../components/Cards";

export default function Home() {
  return (
    <Flex w="100%" flexDirection="column" bg="red" position="relative">

      <Headers />


      <Flex >


        <Sidebar />

        <Flex w="100%" height="100vh" flexDirection="column" flex={1} justifyContent="start"bg="red">
          {/* <RouteIndcator /> */}
          <Flex flexDirection="row" overflowY="hidden">

            <Cards />
            <Flex width="10%" direction="column" flex={2} overflowY="auto" p="3em" mt="70px" bg="white" overflowX="hidden"
              css={{
                '&::-webkit-scrollbar': {
                  width: '0',
                },
                '&::-webkit-scrollbar-track': {
                  width: '0',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "red",
                  borderRadius: '24px',
                },
              }}


            >


          <Flex direction="row" mb="5" justifyContent="space-evenly">

            <Circle size="50px" style={{
              border: "1px solid #e7effa"
            }}>
              <Icon as={MdNotifications} w={6} h={6} color="#243870" display="inline" />
            </Circle>

            <Spacer />
            <Circle size="50px" style={{
              border: "1px solid #e7effa"
            }}>
              <Icon as={FaPen} w={5} h={5} color="#243870" display="inline" />
            </Circle>


          </Flex>


      
            </Flex>


          </Flex>

        </Flex>
      </Flex>







    </Flex>


  )
}
