


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
    <Flex w="100%" flexDirection="column" position="relative">

      <Headers />


      <Flex >


        <Sidebar />

        <Flex w="100%" height="100vh" flexDirection="column" flex={1} justifyContent="start" bg="green">
          {/* <RouteIndcator /> */}
          <Flex flexDirection="row" overflowY="hidden">

            <Cards />
            <Flex width="10%" flex={2} overflowY="auto" p="3em" mt="70px" bg="orange" overflow="auto"
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

              ime will be served by Next.js. Files added at runtime be available. We recommend using a third party service like AWS S3 for persistent file storage.
            </Flex>


          </Flex>

        </Flex>
      </Flex>







    </Flex>


  )
}
