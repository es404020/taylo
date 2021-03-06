import React from 'react'
import { Flex, Menu,useColorModeValue, Link, MenuButton, Text, useDisclosure, Image, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, MenuList, } from "@chakra-ui/react"
import { useRouter } from 'next/router';
import { MdCheckCircle, MdDashboard, MdGroupWork, MdMenu, MdGridOn, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'
import { AiFillPieChart } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';
import NavHoverBar from '../../components/sidenav/NavHoverBar';

const NavItem = ({ title, icon, active, show = true }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bg = useColorModeValue("#F9F9F9", "rgb(27, 32, 44)");
    const text = useColorModeValue("#01048A", "white");
    return (
        <Flex

            style={{
                borderLeft: active ? "6px solid #01048A" : "none",
                width:'100px'
            }}

            flexDir="column"
            w="100%"
            alignItems="center"
            justifyContent="space-evenly"


        >
            {/* //isOpen={isOpen} */}
            {/* // onMouseEnter={onOpen}
                    // onMouseLeave={onClose} */}
            <Menu placement="right"  >
                <Link

                    py={3}

                    _hover={{ textDecor: 'none' }}

                >

                    <MenuButton
                    id="4"
                    w="75px"
                       zIndex="2"

                    >
                        <Flex flexDir="column" alignItems="center" >
                            <Icon color={active ? text : "#9C9C9C"} as={icon} h="24px" w="24px" _hover={{ textDecor: 'none', color: "red" }} />
                            <Text textDecor="none" boxSizing="border-box" color={active ? text : "#9C9C9C"} fontSize="xs"  display={["none","none","none","inline","inline"]} px={1}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>

                {show ? (
                    <MenuList
                        // p={}
                        border="none"
                        w={200}
                        h="auto"
                        boxSizing="border-box"
                        bg="transparent"
                        ml={4}

                    >


                        <NavHoverBar />

                    </MenuList>
                ) : (
                    <>
                    </>
                )}

            </Menu>

        </Flex>
    )
}


export default NavItem;