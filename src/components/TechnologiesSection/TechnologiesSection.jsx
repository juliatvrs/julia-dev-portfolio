import { Box, Center, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

export default function TechnologiesSection() {
  const TechItem = ({name, url, icon}) => (
    <VStack gap="13px">
      <Link 
        href={url} 
        target="_blank"
        rel="noopener noreferrer"
        textDecoration="none"
        outline="none"
      >
        <Image
          src={icon}
          alt={`Logo do ${name}`}
          boxSize={{ base:"74px", md:"54px", lg:"64px"}} 
        />
      </Link>
      <Text>{name}</Text>
    </VStack>
  );

  return (
    <Box width="100%" as="section" id="technologies" background="white">
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
              Tecnologias <Text as="span" fontWeight="normal">que </Text> 
              <Text as="span" fontWeight="normal">Utilizo</Text>
            </Heading>
          </Center>

          <SimpleGrid columns={{ base:2, md:5 }} rowGap="48px">
            <TechItem 
              name="JavaScript" 
              url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />
            
            <TechItem 
              name="React" 
              url="https://react.dev/" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />
            
            <TechItem 
              name="Next.js" 
              url="https://nextjs.org/" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            />

            <TechItem 
              name="Chakra UI" 
              url="https://chakra-ui.com/" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chakraui/chakraui-original.svg"
            />
            
            <TechItem 
              name="Vite" 
              url="https://vite.dev/" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
            />
           
            <TechItem 
              name="Node.js" 
              url="https://nodejs.org/en" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            />
       
            <TechItem 
              name="Express.js" 
              url="https://expressjs.com/" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            />

            <TechItem 
              name="MySQL" 
              url="https://dev.mysql.com/" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            />

            <TechItem 
              name="Git" 
              url="https://git-scm.com/" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            />
            
            <TechItem 
              name="GitHub" 
              url="https://github.com/" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};