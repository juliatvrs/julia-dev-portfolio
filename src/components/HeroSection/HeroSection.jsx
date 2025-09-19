"use client"

import {
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  Button,
  Image,
  Flex
} from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { FaCircle, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function HeroSection() {
  return (
    <Box as="section" id="hero" width="100%" background="white">
      <Box maxWidth="1440px" margin="0 auto">
        <Box
          paddingTop="200px"
          paddingBottom="96px"
          marginX={{ base: "22px", md: "42px", lg: "80px" }}
        >
          <Stack
            direction={{ base: "column-reverse", lg: "row" }}
            height="100%" gap={{ base: "68px", lg: "15px" }}
          >
            <Box width={{ base: "100%", lg: "65%" }} height="100%">
              <Heading size={{ base: "4xl", md: "5xl", lg: "6xl" }}>
                Olá! Eu sou a Júlia Tavares 👋
              </Heading>
              <Text marginTop={{ base: "28px", lg: "38px" }}>
                Sou uma desenvolvedora web em formação e adoro explorar tanto o front-end (React.js) quanto o
                back-end (Node.js). Gosto de criar aplicações completas, acessíveis e responsivas, transformando
                ideias em experiências reais. Programar é a minha forma favorita de inovar e dar vida a novos
                projetos.
              </Text>
              <HStack marginTop={{ base: "38px", lg: "48px" }}>
                <Icon boxSize="20px">
                  <GrLocation />
                </Icon>
                <Text>Divinópolis, MG</Text>
              </HStack>

              <HStack marginTop="8px">
                <Icon color="#10B981" boxSize="20px">
                  <FaCircle />
                </Icon>
                <Text>Disponível para novas oportunidades</Text>
              </HStack>

              <HStack marginTop={{ base: "38px", lg: "48px" }} gap="10px">
                <Button
                  as="a"
                  href="https://github.com/juliatvrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  width={{ base: "48px", md: "52px", lg: "56px" }}
                  height={{ base: "48px", md: "52px", lg: "56px" }}
                  borderRadius="4px"
                >
                  <Icon boxSize="24px">
                    <FaGithub />
                  </Icon>
                </Button>

                <Button
                  as="a"
                  href="https://www.linkedin.com/in/tavares-julia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  variant="outline"
                  borderColor="black"
                  borderWidth="2px"
                  width={{ base: "48px", md: "52px", lg: "56px" }}
                  height={{ base: "48px", md: "52px", lg: "56px" }}
                  borderRadius="4px"
                >
                  <Icon boxSize="24px">
                    <FaLinkedin />
                  </Icon>
                </Button>

                <Button
                  as="a"
                  href="mailto:tavaresmjulia97@gmail.com"
                  aria-label="Email"
                  variant="outline"
                  borderColor="black"
                  borderWidth="2px"
                  width={{ base: "48px", md: "52px", lg: "56px" }}
                  height={{ base: "48px", md: "52px", lg: "56px" }}
                  borderRadius="4px"
                >
                  <Icon boxSize="24px">
                    <SiGmail />
                  </Icon>
                </Button>
              </HStack>
            </Box>

            <Box width={{ base: "100%", lg: "35%" }}>
              <Flex justify={{ base: "center", lg: "flex-end" }}>
                <Box position="relative" display="inline-block">
                  <Box
                    position="absolute"
                    top={{ base: "15px", md: "20px" }}
                    right={{ base: "15px", md: "20px" }}
                    width={{ base: "260px", md: "280px" }}
                    height={{ base: "300px", md: "320px" }}
                    background="#E5E7EB"
                    zIndex={0}
                  />
                  <Box
                    position="relative"
                    width={{ base: "260px", md: "280px" }}
                    height={{ base: "300px", md: "320px" }}
                    overflow="hidden"
                    zIndex={1}
                  >
                    <Image
                      src="/assets/img/hero-image.JPEG"
                      alt="Júlia Tavares, desenvolvedora web"
                      fit="contain"
                    />
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};