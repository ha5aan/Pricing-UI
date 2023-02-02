import React,{Component } from 'react'
import styles from '../../../styles/Boxcontainer.module.css'
import { FaCheckCircle } from "react-icons/fa";

import { Flex, Spacer ,Box, Heading, Center, Square,Text, Button, Container, List, ListIcon, ListItem } from '@chakra-ui/react'
const MainPriceContainer = () => {
  return (
   
        <Box mt="2%" mx={["22px","220px"]}  className={styles.addingBoxShadow}  >
            <Flex color='black'  align={'center'} direction={{ base: 'column', md: 'column', lg:"row"}}>
<Box p={"2%"} pb={["10%","0"]} textAlign={'center'} borderTopRadius={["12px","0px"]}  borderLeftRadius={["0px","12px"]} borderTopLeftRadius={["12px"]} className={styles.priceBackground} height={["100%","100%","336px"]} width={["100%","328px","328px","378px"]}>
    <Heading as={"h1"}  mb="2%" size={["xl","xl"]}>Premium Pro</Heading> 
    <Heading size={["2xl","3xl"]} mb="2%">$329</Heading> 

    <Heading size={["sm","md"]} fontWeight="semibold" mb={"10%"}>Billed Just one</Heading> 
    <Button color={"white"}  width="60%" bg='#805AD5'>Get Started</Button>
    </Box>
    <Box  p={"2.6%"} flex="1" >
    <Container mb={"3%"}>Access these features when you get this pricing package for your business.</Container>
    <Container>
    <List spacing={4}>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#805AD5' />
    International calling and messaging API
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#805AD5' />
    Additional phone numbers
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#805AD5' />
    Automated messages via Zapier
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#805AD5' />
    24/7 support and consulting
  </ListItem>
</List>
    </Container>
    </Box>
 
</Flex>
  </Box>
  )
}

export default MainPriceContainer