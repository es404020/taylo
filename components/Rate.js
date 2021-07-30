
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
import TranscationCard from '../components/sidenav/TranscationCard';

const Rate = () => {
    return (
        <Grid mt={9} templateColumns="repeat(2,2fr)" gap="6">


            <TranscationCard icon={BsQuestionCircle} text={"Success Rate"} error={false} />


            <TranscationCard icon={BsQuestionCircle} text={"Payment Issues"} />
        </Grid>
    )
}

export default Rate
{/* <Grid mb={9} templateColumns="repeat(4,2fr)" gap="6"> */}