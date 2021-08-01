import React from 'react'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text,useColorModeValue, Tag, TagLabel, Image, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position } from "@chakra-ui/react"


const CardIssues = () => {
  const bg = useColorModeValue("#F9F9F9", "rgb(27, 32, 44)");
  const text = useColorModeValue("#555B6D", "white");
  const tagcolor = useColorModeValue("#2A304211", "#000000");
  const tagBg = useColorModeValue("#2A2A2A", "white");
    return (
       
          <Flex direction="row" mt={3} py={2} style={{
            borderBottom: "1px solid rgba(116, 120, 141, 0.1)",
  
          }}>
  
            <Flex width="50%" justifyContent="space-between" alignItems="center">
              <Text >**** **** 3234</Text>
              {/* <Spacer />
               */}
  
              <Flex direction="column">
  
                <Text fontWeight="semibold" fontSize="sm"  ml={2}>Babajide Adetunji</Text>
                <Text fontSize="xs" fontWeight="light" color={text} ml={2}>Stolen Card, kindly block...</Text>
  
              </Flex>
  
            </Flex>
            <Spacer />
            <Flex>
  
  
              <HStack spacing={4}>
                <Tag borderRadius="full" size="sm" key="2" variant="subtle" bg={tagcolor} color={tagBg}>
  
                  <TagLabel px={2} py={1}>Pending</TagLabel>
                </Tag>
              </HStack>
            </Flex>
  
          </Flex>
     
    )
}

export default CardIssues
