import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

export default function AboutSection() {
  return (
    <Box 
      as="section"
      id="about"
      width="100%" 
      background="#F9FAFB"
    >
      <Box
        maxWidth="1440px"
        margin="0 auto"
      >
        <Box
          paddingY="96px"
          marginX={{ base: "22px", md: "42px", lg: "80px" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            height="100%"
            gap={{ base: "68px", lg: "10px" }}
          >
            <Box
              width={{ base: "100%", lg: "50%" }}
              display="flex"
              justifyContent={{ base: "center", lg: "flex-start" }}
            >
              <Box position="relative" display="inline-block">
                <Box
                  position="absolute"
                  top={{ base: "15px", md: "20px" }}
                  left={{ base: "15px", md: "20px" }}
                  width={{ base: "300px", md: "400px" }}
                  height={{ base: "370px", md: "480px" }}
                  background="#E5E7EB"
                  zIndex={0}
                />
                <Box
                  position="relative"
                  width={{ base: "300px", md: "400px" }}
                  height={{ base: "380px", md: "480px" }}
                  overflow="hidden"
                  zIndex={1}
                >
                  <Image
                    src="/assets/img/about-image.JPEG"
                    alt="Júlia Tavares, desenvolvedora web"
                    fit="contain"
                  />
                </Box>
              </Box>
            </Box>

            <Box width={{ base: "100%", lg: "50%" }}>
              <HStack marginBottom="24px" marginTop={{ base: "0px", lg: "20px" }}>
                <Heading size={{ base: "3xl", md: "4xl" }} fontWeight="normal">
                  Sobre
                </Heading>
                <Heading size={{ base: "3xl", md: "4xl" }} fontWeight="bold">
                  Mim
                </Heading>
              </HStack>
              <Text marginBottom="16px">
                Me formei no curso técnico em Informática para Internet pelo
                CEFET-MG e hoje curso Engenharia da Computação na UEMG. Foi
                durante o técnico que descobri o mundo da programação, e desde
                então, nunca mais parei. A tecnologia virou algo que me
                encanta de verdade, e programar se tornou uma forma de
                transformar ideias em algo concreto e funcional.
              </Text>
              <Text marginBottom="16px">
                Gosto de trabalhar tanto com front-end quanto com back-end, e
                tenho me aprofundado principalmente em React.js e Node.js.
                Gosto de entender como tudo funciona, desde a interface até a
                lógica por trás da aplicação, sempre buscando criar soluções
                acessíveis, responsivas e bem organizadas.
              </Text>
              <Text marginBottom="16px">
                Me considero uma pessoa curiosa, dedicada e sempre com vontade
                de aprender mais. Estou sempre procurando formas de evoluir,
                seja por meio de projetos próprios, estudos ou trocando
                experiências com outras pessoas da área.
              </Text>
              <Text>
                No momento, estou aberta a oportunidades na área de
                desenvolvimento web, seja para colaborar em projetos como
                freelancer ou integrar uma equipe. Entre em contato, será
                ótimo conversar com você!
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};