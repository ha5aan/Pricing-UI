import React from 'react'
import {BsShieldCheck} from "react-icons/bs"
import { Flex, Grid, GridItem,Box,Text } from '@chakra-ui/react'   
import Image from 'next/image'
const BottomIcons = () => {
  return (
<Flex justify={"center"} alignContent={"center"} mt={"2%"} direction={{ base: 'column', md: 'column', lg:"row"}}>
  <Box display={"flex"} mx={"2%"} my={"2%"} justifyContent={"center"} alignContent={"center"}>
    <Image src={"/shield.PNG"} height={40} width={40}/> <Text  pl={"8%"} width={"70%"} fontWeight={"bold"}> 30 days money back Guarantee</Text>
  </Box>
  <Box display={"flex"} mx={"2%"}my={"2%"} justifyContent={"center"} alignContent={"center"}>
    <Image src={"/strip.PNG"} height={40} width={40}/> <Text  pl={"8%"} width={"70%"} fontWeight={"bold"}> 30 days money back Guarantee</Text>
  </Box>
  <Box display={"flex"} mx={"2%"}my={"2%"} justifyContent={"center"} alignContent={"center"} >
    <Image src={"/reload.PNG"} height={40} width={40}/> <Text  pl={"8%"} width={"70%"} fontWeight={"bold"}> 30 days money back Guarantee</Text>
  </Box>
</Flex>
  )
}

export default BottomIcons