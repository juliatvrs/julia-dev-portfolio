import {
  Box,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactSection() {
  return (
    <Box as="section" id="contact" width="100%" background="white">
      <Box maxWidth="1440px" margin="0 auto">
        <Box
          paddingY="96px"
          marginX={{ base: "22px", md: "42px", lg: "80px" }}
        >
          <Center>
            <VStack>
              <Heading size={{ base: "3xl", md: "4xl" }}>
                Entre em Contato
              </Heading>
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                marginTop="50px"
                width={{ base: "fit-content", md: "576px" }}
                textAlign="center"
              >
                Estou aberta a oportunidades e colaborações. Vamos conversar? Me
                encontre nos canais abaixo.
              </Text>

              <HStack marginTop="48px" gap={{ base: "20px", md: "24px" }}>
                <Button
                  as="a"
                  href="mailto:tavaresmjulia97@gmail.com"
                  aria-label="Email"
                  width={{ base: "72px", md: "76px", lg: "80px" }}
                  height={{ base: "72px", md: "76px", lg: "80px" }}
                  borderRadius="4px"
                >
                  <Icon boxSize={{ base: "40px", md: "44px" }}>
                    <SiGmail />
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
                  width={{ base: "72px", md: "76px", lg: "80px" }}
                  height={{ base: "72px", md: "76px", lg: "80px" }}
                  borderRadius="4px"
                >
                  <Icon boxSize={{ base: "40px", md: "44px" }}>
                    <FaLinkedin />
                  </Icon>
                </Button>

                <Button
                  as="a"
                  href="https://github.com/juliatvrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  variant="outline"
                  borderColor="black"
                  borderWidth="2px"
                  width={{ base: "72px", md: "76px", lg: "80px" }}
                  height={{ base: "72px", md: "76px", lg: "80px" }}
                  borderRadius="4px"
                >
                  <Icon boxSize={{ base: "40px", md: "44px" }}>
                    <FaGithub />
                  </Icon>
                </Button>
              </HStack>
            </VStack>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};