

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, AvatarGroup, Image, Wrap, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position, Divider } from "@chakra-ui/react"


import { MdCheckCircle, MdDashboard, MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'

import { FaPen, FaSimCard, FaCcVisa } from 'react-icons/fa';
import { GrUserSettings } from "react-icons/gr";
import { IoIosAddCircle } from "react-icons/io";
import Activities from "./Activities";

const Three = () => {
    return (
        <Flex width="20%" direction="column" flex={2} overflowY="auto" p={9} mt="140px" bg="white" overflowX="hidden"

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

                    borderRadius: '24px',
                },
            }}


        >


            <Flex direction="row" mb="5" justifyContent="space-evenly">
                <Text fontWeight="semibold" color="#000000">Team</Text>
                <Spacer />

                <Icon as={GrUserSettings} w={5} h={5} color="#243870" display="inline" />



            </Flex>
            <Flex mt={5} mb={5} justifyContent="space-between" >
                <AvatarGroup size="md" max={5}>
                    <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                    <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                    <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />

                </AvatarGroup>

                <Icon alignSelf="self" as={IoIosAddCircle} w={5} h={5} color="#01048A" display="inline" />

            </Flex>

            <Divider mb={5} />


            <Flex fontSize="sm" alignItems="center" direction="column" height="30%" justifyContent="space-between">

                <Text>NGN</Text>

                <Text>Next Payout</Text>

                <Text fontSize="x-large" fontWeight="bold" as="h1">0.20</Text>

                <Text>Due Monday, April 28</Text>

                <Button bg="#01048A" color="white">View past payouts</Button>

            </Flex>

            <Divider mt={5} mb={5} />

            <Flex direction="column">

                <Text color="#000000" fontWeight="semibold">Recent Activities</Text>

                <Flex fontSize="xs" width="full"  direction="column" minHeight="250px" overflowY="auto" overflowX="hidden" py={5}  justifyContent="space-between">

                   
                { [10,2,4,5,7,9,0].map(key => {

                     

return <Activities key={key} />

})}

                </Flex>

            </Flex>

        </Flex>
    )
}

export default Three
