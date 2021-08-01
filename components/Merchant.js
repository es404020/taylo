
import { Flex, Text, Tag, useColorModeValue,TagLabel, Image, Spacer, WrapItem, InputRightElement, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position } from "@chakra-ui/react"


const Merchant = () => {
    const bg = useColorModeValue("#F9F9F9", "rgb(27, 32, 44)");
    const inside = useColorModeValue("#F3F3F9", "rgb(27, 32, 44)");
    const text = useColorModeValue("#555B6D", "white");
    return (
        <Flex direction="row" mt={3} py={2}style={{
             borderBottom: "1px solid rgba(116, 120, 141, 0.1)",
            
        }}>

            <Flex>
                <Avatar
                    size="md"
                    name="Kola Tioluwani"
                    src="https://bit.ly/prosper-baba"
                />

                {/* <Spacer />
             */}

                <Flex direction="column">

                    <Text fontWeight="semibold" color="#2D8EFF" ml={2}>Walmart</Text>
                    <Text fontSize="xs" fontWeight="light" color={text} ml={2}>babajide.adetunji@gmail.com</Text>

                </Flex>

            </Flex>
            <Spacer />
            <Flex>


                <HStack spacing={4}>
                    <Tag  borderRadius="full" size="sm" key="2" variant="subtle" bg="#00FF7711" color="#00846E" >

                        <TagLabel px={2} py={1}>Active</TagLabel>
                    </Tag>
                </HStack>
            </Flex>

        </Flex>
    )
}

export default Merchant
