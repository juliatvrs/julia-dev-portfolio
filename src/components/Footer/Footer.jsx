"use client"

import { Flex, Image, Text, HStack} from "@chakra-ui/react";

export default function Footer() {

  return (
    <Flex
      as="footer"
      height="100px"
      width="100%"
      background="#F9FAFB"
      align="center"
      bottom="0"
    >
      <Flex
        justify="space-between"
        maxWidth="1440px"
        width="100%"
        align="center"
        margin="0 auto"
        paddingY="24px"
        paddingX={{ base: "22px", md: "42px", lg: "80px" }}
        gap= "60px"
      >
        <HStack gap="8px" as="a" href="#hero">
          <Image
            src="/assets/img/logo.png"
            alt="Logo JT"
            boxSize={{ base: "40px", md: "50px" }}
          />
          <Text fontSize="30px" fontWeight="bold">JT</Text>
        </HStack>
        <Text textAlign="center">
          © 2025 Júlia Tavares. Todos os direitos reservados.
        </Text>
      </Flex>
    </Flex>
  );
};