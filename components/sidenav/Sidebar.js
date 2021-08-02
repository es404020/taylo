import React from "react";
import {
  Flex,
  Text,
  Image,
  Divider,
  Spacer,
  WrapItem,
  InputRightElement,
  Heading,
  Progress,
  Box,
  Button,
  List,
  ListItem,
  ListIcon,
  HStack,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
  Grid,
  Select,
  Table,
  Circle,
  Tbody,
  Tfoot,
  useColorModeValue,
  Tr,
  Th,
  Td,
  Avatar,
  Square,
  position,
  IconButton,
} from "@chakra-ui/react";
import {
  MdCheckCircle,
  MdDashboard,
  MdGroupWork,
  MdMenu,
  MdPlaylistAddCheck,
  MdGridOn,
  MdInsertLink,
  MdNotifications,
  MdPeople,
  MdPerson,
  MdReceipt,
  MdSend,
  MdSettings,
  MdShoppingBasket,
  MdShoppingCart,

} from "react-icons/md";
import { AiFillPieChart, AiOutlineCreditCard } from "react-icons/ai";
import { GiPiggyBank } from "react-icons/gi";
import { FaPen } from "react-icons/fa";
import NavItem from "./NavItem";
import { RiWallet3Line } from "react-icons/ri"

import { FaUnlink } from "react-icons/fa"
import { BsFlagFill } from "react-icons/bs"

function Sidebar() {
  const bg = useColorModeValue("#F9F9F9", "rgb(27, 32, 44)");
    const text = useColorModeValue("white", "rgb(27, 32, 44)");
    const tr= useColorModeValue("#53535F", "white");
  return (
    <Flex
      pos="fixed"
      left="-9px"
      top="0px"
      h="100vh"
      zIndex="2"
      bg={bg}
      boxShadow="md"
      width="6%"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDir="column" alignItems="flex-start" as="nav"

      >
        <IconButton
          background="none"
          mt={10}
          _hover={{
            background: "none",
          }}
          icon={MdMenu}
          onClick={() => { }}
        ></IconButton>

        <NavItem title="Dashboard" icon={MdDashboard} active={true} show={false} />

        <NavItem title="Payment" icon={MdReceipt} active={false} />

        <NavItem title="Card" icon={AiOutlineCreditCard} active={false} />

        <NavItem title="Wallet" icon={RiWallet3Line} active={false} />

        <NavItem title="Piggy Bank" icon={GiPiggyBank} active={false} />

        <NavItem
          title="Identity Verification"
          icon={MdPlaylistAddCheck}
          active={false}
        />
        <NavItem title="Dispute" icon={FaUnlink} active={false} />
        <NavItem title="Report" icon={BsFlagFill} active={false} />
      </Flex>

      <Flex p="2%" flexDir="column" width="100%" alignItems="center" mb={4}>
        <Divider />

        <Flex mt={4} alignItems="center" justifyContent="center">
          <NavItem title="Settings" icon={MdSettings} active={false} />
          {/* <Flex flexDir="column" ml={4}> MdSettings
                        <Heading as="h3" size="sm">eniola</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex> */}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
