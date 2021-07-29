

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, Image, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position } from "@chakra-ui/react"


import { MdCheckCircle, MdDashboard, MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'

import { FaPen, FaSimCard, FaCcVisa } from 'react-icons/fa';
import {GrUserSettings} from "react-icons/gr";

const Three = () => {
    return (
        <Flex width="20%" direction="column" flex={2} overflowY="auto" p="3em" mt="140px" bg="white" overflowX="hidden"

        style={{
            border: "1px solid #E1E3E6",
      }}
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
<Text color="#000000">Team</Text>
                <Spacer />
               
                    <Icon as={GrUserSettings} w={5} h={5} color="#243870" display="inline" />
             


            </Flex>



        </Flex>
    )
}

export default Three
