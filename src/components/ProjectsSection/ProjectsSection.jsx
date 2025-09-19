import { Box, Button, Center, Heading, Icon, Image, Stack, Text, Flex } from "@chakra-ui/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaCodeBranch } from "react-icons/fa6"

export default function ProjectsSection() {
  const ProjectCard = ({
    number,
    name,
    description,
    projectLink,
    repositoryLink,
    images,
    imagePosition,
    imageWidth,
    imageHeight,
    imageBorderRadius
  }) => {
    const renderImages = () => {
      return images.map((image, index) => (
        <Box
          key={index}
          position="relative"
          width={imageWidth}
          height={imageHeight}
          overflow="hidden"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fit="cover"
            borderRadius={imageBorderRadius}
          />
        </Box>
      ));
    };

    return (
      <Box width="100%" marginTop={number != "01" ? "80px" : "0"}>
        <Stack 
          direction={{
            base:"column", 
            lg: imagePosition === "left" ? "row" : "row-reverse"
          }}  
          gap="40px"
        >
          <Box width={{base:"100%", lg:"40%"}}>
            <Flex justify={imagePosition === "right" ? "flex-end" : "flex-start"}  gap="15px">
              {renderImages()}
            </Flex>
          </Box>

          <Box width={{base:"100%", lg:"60%"}}>
            <Heading marginBottom="28px" size={{ base: "3xl", md: "4xl" }}>
              {number}
            </Heading>
            <Heading size={{base:"2xl", md:"3xl"}} marginBottom="28px">
              {name}
            </Heading>
            <Text>{description}</Text>

            <Stack direction="row" marginTop="28px">
              <Button 
                as="a"
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="plain" 
                padding="0"
              >
                <Icon boxSize="16px">
                  <FaArrowUpRightFromSquare />
                </Icon>
                Ver Projeto
              </Button>
              <Button 
                as="a"
                href={repositoryLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="plain"
                padding="0"
              >
                <Icon boxSize="16px">
                  <FaCodeBranch />
                </Icon>
                Ver Repositório
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    );
  };

  return (
    <Box
      as="section"
      id="projects"
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
          <Center marginBottom="60px">
            <Heading size={{ base: "3xl", md: "4xl" }} textAlign="center">
              <Text as="span" fontWeight="normal">Meus </Text> Projetos
            </Heading>
          </Center>

          <ProjectCard
            number="01"
            name="Nutriveg"
            description="Aplicação web voltada para o público vegano e vegetariano, que permite a publicação e 
            visualização de receitas veganas e vegetarianas. Além disso, nutricionistas podem compartilhar artigos e 
            conteúdos especializados, promovendo uma alimentação mais saudável, consciente e acessível para todos 
            os usuários da plataforma."
            projectLink="https://nutriveg.vercel.app/"
            repositoryLink="https://github.com/juliatvrs/nutriveg-frontend"
            images={[{ src: "/assets/img/nutriveg.png", alt: "Tela inicial da aplicação Nutriveg" }]}
            imagePosition="left"
            imageWidth="100%"
            imageBorderRadius="18px"
          />

          <ProjectCard 
            number="02"
            name="Calculadora"
            description="Calculadora web que realiza operações matemáticas básicas, como adição, subtração, 
            multiplicação e divisão. Com uma interface simples e intuitiva, oferece aos usuários uma forma prática 
            e acessível de efetuar cálculos rapidamente."
            projectLink="https://juliatvrs-calculadora.vercel.app/"
            repositoryLink="https://github.com/juliatvrs/calculator"
            images={[
              { src: "/assets/img/calculator-light-mode.png", alt: "Interface da calculadora em modo claro"},
              { src: "/assets/img/calculator-dark-mode.png", alt: "Interface da calculadora em modo escuro"}
            ]}
            imagePosition="right"
            imageWidth="100%"
            imageBorderRadius="18px"
          />
        </Box>
      </Box>
    </Box>
  );
};