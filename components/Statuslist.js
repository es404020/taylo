
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, Tag, TagLabel, Image, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position } from "@chakra-ui/react"
import Merchant from "./Merchant";
import CardIssues from './CardIssues'

const Statuslist = () => {
  return (
    <Grid mt={15} templateColumns="repeat(2,2fr)" gap="6">
      <Flex  borderRadius="10px" boxShadow="md" bg=
        "white" style={{
          // border: "2px solid #E9F1FB",
        }} maxHeight="500px" overflowX="hidden" overflowY="auto" p={5} direction="column">

        <Text color="#000000" fontWeight="semibold">Top Merchants</Text>


        {[1, 2, 4, 5, 7].map(key => {



          return <Merchant key={key} />

        })}

      </Flex>



    

      <Flex  boxShadow="md" bg="white" borderRadius="10px" style={{

}} maxHeight="500px" p={5} direction="column" overflowX="hidden" overflowY="auto">
  <Text color="#000000" fontWeight="semibold">Card Issues</Text>

  {[1, 2, 4, 5, 7,0].map(key => {



return <CardIssues key={key} />

})}

  </Flex>




      
    </Grid>
  )
}

export default Statuslist
