import { Container,Heading } from '@chakra-ui/react'
import React from 'react'

const Pricingheading = () => {
  return (
    <div><Container maxW="-moz-min-content" textAlign={["left","center"]} paddingTop="4%" color="white">
        <Heading mb="1%" as='h1' fontSize={["1.8rem","3rem"]} > Simple pricing for your business</Heading>
        <Heading   as='h4' size='md' fontSize={["1.1rem","1.5rem"]} fontWeight="normal">Plans that are carefully crafted to suit your business.</Heading>
        </Container></div>
  )
}

export default Pricingheading