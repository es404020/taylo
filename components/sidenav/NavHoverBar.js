import React from 'react'
import { Flex, UnorderedList, Menu, Link, MenuButton, Text, Image, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, MenuList, } from "@chakra-ui/react"
import { useRouter } from 'next/router';
import { MdCheckCircle, MdDashboard, MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'
import { AiFillPieChart } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';

const NavHoverBar = () => {
    return (
        // <Flex>

        //     <List spacing={3}>
        //         <ListItem>Slip Payment</ListItem>
        //         <ListItem>Payout</ListItem>
        //         <ListItem>Transactions</ListItem>
        //         <ListItem>Subscribers</ListItem>
        //         <ListItem>Plains</ListItem>
        //     </List>
        // </Flex>

        <>
            {/* <Flex
           
                pos="absolute"
                mt="calc(100px - 7.5px)"
                ml="-10px"
                width={0}
                height={0}
                borderTop="10px solid transparent"
                borderBottom="10px solid transparent"
                borderRight="10px solid white"
            /> */}
            <Flex
                h={200}
                w={200}
                p={4}
                flexDir="column"
                alignItems="left"
                justify="center"
                backgroundColor="white"
                borderRadius="10px"
                color="#fff"
                textAlign="left"
                boxShadow="md"
            >
                <List spacing={2} color="#000000">
                    <ListItem>Slip Payment</ListItem>
                    <ListItem>Payout</ListItem>
                    <ListItem>Transactions</ListItem>
                    <ListItem>Subscribers</ListItem>
                    <ListItem>Plains</ListItem>
                </List>

            </Flex>
        </>
    )
}

export default NavHoverBar
