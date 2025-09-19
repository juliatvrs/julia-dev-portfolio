"use client"

import {
  Flex,
  Image,
  Link,
  Button,
  Icon,
  Text,
  HStack,
  CloseButton,
  Drawer,
  Portal,
  Box,
  Stack,
} from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigationLinks = [
    { label: "Sobre", href: "#about" },
    { label: "Tecnologias", href: "#technologies" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  const Logo = () => (
    <HStack gap="8px" as="a" href="#hero">
      <Image
        src="/assets/img/logo.png"
        alt="Logo JT"
        boxSize={{ base: "40px", md: "50px" }}
      />
      <Text fontSize="30px" fontWeight="bold">JT</Text>
    </HStack>
  );

  const NavigationLinks = () => (
    <Stack
      direction={{ base: "column", lg: "row" }}
      gap={{ base: "18px", lg: "32px" }}
      fontSize={{ base: "19px", lg: "20px" }}
      fontWeight="semibold"
    >
      {navigationLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          _hover={{ textDecoration: "none", color: "#4B5563" }}
          outline="none"
        >
          {link.label}
        </Link>
      ))}
    </Stack>
  );

  const ActionButtons = () => (
    <HStack gap="16px" justify="space-between">
      <Button 
        as="a"
        href="/docs/curriculo-julia-tavares.pdf"
        download
        width={{ base: "151px", lg: "143px" }} 
        fontSize="20px"
      >
        Currículo
        <Icon boxSize="18px">
          <MdOutlineFileDownload />
        </Icon>
      </Button>
    </HStack>
  );

  return (
    <Flex
      as="header"
      align="center"
      position="fixed"
      zIndex="1001"
      top="0"
      background="white"
      width="100%"
      height="104px"
    >
      <Flex
        justify="space-between"
        maxWidth="1440px"
        width="100%"
        align="center"
        margin="0 auto"
        paddingX={{ base: "22px", md: "42px", lg: "80px" }}
        paddingY="8px"
      >
        <Logo />

        <Box display={{ base: "none", lg: "flex" }}>
          <NavigationLinks />
        </Box>

        <Box display={{ base: "none", lg: "flex" }}>
          <ActionButtons />
        </Box>

        <Box display={{ lg: "none" }}>
          <Drawer.Root open={isDrawerOpen} onOpenChange={(e) => setIsDrawerOpen(e.open)} size="sm">
            <Drawer.Trigger asChild>
              <Button variant="plain" padding="0" aria-label="Abrir menu">
                <Icon boxSize="24px">
                  <GiHamburgerMenu />
                </Icon>
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop backdropFilter="blur(4px)" />
              <Drawer.Positioner>
                <Drawer.Content padding="0">
                  <Drawer.Header paddingX="16px" paddingBottom="20px" paddingTop="16px">
                    <Logo />
                  </Drawer.Header>
                  <Box borderBottom="1px solid" borderColor="gray.100" />
                  <Drawer.Body padding="0">
                    <Box align="flex-start" paddingY="16px" paddingX="16px">
                      <NavigationLinks />
                    </Box>
                    <Box borderBottom="1px solid" borderColor="gray.100" />
                    <Box marginY="12px" marginX="16px">
                      <ActionButtons />
                    </Box>
                  </Drawer.Body>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="xl" padding="0" aria-label="Fechar menu" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Box>
      </Flex>
    </Flex>
  );
};