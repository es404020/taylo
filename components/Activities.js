

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, UnorderedList, AvatarGroup, Image, Wrap, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position, Divider } from "@chakra-ui/react"


import { MdCheckCircle, MdDashboard, MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'

import { FaPen, FaSimCard, FaCcVisa } from 'react-icons/fa';
import { GrUserSettings } from "react-icons/gr";
import { IoIosAddCircle } from "react-icons/io";

const Activities = () => {
    return (
        <Flex justifyContent="space-between" >
            <Text>8:23pm</Text>

            <UnorderedList>
                <ListItem>Invoice created</ListItem>
            </UnorderedList>

            <Text alignSelf="self-end" mt={3}>- Joke Silks</Text>
        </Flex>
    )
}

export default Activities
