"use client";

import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure, HStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import * as Chakra from "@chakra-ui/react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Chakra.Center>
            <Box p={2} w="60em">
                <Flex
                    shadow="lg"
                    bg={useColorModeValue("white", "gray.800")}
                    borderRadius="20px"
                    color={useColorModeValue("gray.600", "white")}
                    minH={"60px"}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.900")}
                    justifyItems="center"
                    align={"center"}
                >
                    <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
                        <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
                    </Flex>
                    <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
                        <Text textAlign={useBreakpointValue({ base: "center", md: "left" })} fontFamily={"heading"} color={useColorModeValue("gray.800", "white")}>
                            Logo
                        </Text>

                        <Flex display={{ base: "none", md: "flex" }} ml={10}>
                            <DesktopNav />
                        </Flex>
                    </Flex>

                    <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
                        <Button as={"a"} fontSize={"sm"} fontWeight={400} variant={"link"} href={"#"}>
                            Sign In
                        </Button>
                        <Button
                            as={"a"}
                            display={{ base: "none", md: "inline-flex" }}
                            fontSize={"sm"}
                            fontWeight={600}
                            color={"white"}
                            bg={"pink.400"}
                            href={"#"}
                            _hover={{
                                bg: "pink.300",
                            }}
                        >
                            Sign Up
                        </Button>
                    </Stack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse>

                <Chakra.Box as="main" p={2}>
                    {/*  BANNER  */}
                    <Chakra.Center>
                        <Banner />
                    </Chakra.Center>
                    <Chakra.Box pt={3}>
                        <Box
                            mx="auto"
                            px={6}
                            py={4}
                            rounded="lg"
                            shadow="lg"
                            borderWidth={2}
                            bg="white"
                            _dark={{
                                bg: "gray.800",
                            }}
                            maxW="60em"
                        >
                            <Flex justifyContent="space-between" alignItems="center">
                                <Chakra.Link
                                    fontSize="lg"
                                    color="gray.700"
                                    _dark={{
                                        color: "white",
                                    }}
                                    fontWeight="700"
                                    _hover={{
                                        color: "gray.600",
                                        _dark: {
                                            color: "gray.200",
                                        },
                                        textDecor: "underline",
                                    }}
                                >
                                    Popular Games SLOT 4D
                                </Chakra.Link>
                                <Chakra.Spacer />
                                <Chakra.Flex>
                                    <Chakra.Text px={3} py={1} shadow="md" bg="red" color="gray.100" fontSize="sm" fontWeight="700" rounded="md">
                                        HOT+
                                    </Chakra.Text>
                                    <Chakra.Box w="2px" />
                                    <Chakra.Text px={3} py={1} shadow="md" bg="green" color="gray.100" fontSize="sm" fontWeight="700" rounded="md">
                                        Populars
                                    </Chakra.Text>
                                    <Chakra.Box w="2px" />
                                    <Chakra.Text px={3} py={1} shadow="md" bg="cyan" color="gray.600" fontSize="sm" fontWeight="700" rounded="md">
                                        Trendings
                                    </Chakra.Text>
                                </Chakra.Flex>
                            </Flex>

                            <Chakra.SimpleGrid minChildWidth="200px" columns={[2, null, 5]} pt={3} spacing="5px">
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0, 0.71, 0.2, 0.8],
                                                    scale: {
                                                        type: "spring",
                                                        damping: 8,
                                                        stiffness: 100,
                                                        restDelta: 0.001,
                                                    },
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    textShadow: "0px 0px 4px gray",
                                                }}
                                            >
                                                <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(3).jpg" />
                                            </motion.div>
                                        </AnimatePresence>
                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(77).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Ini Contoh teks panjang aja yagesya, tpi btw si riski emang anak ngentot sih
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0, 0.71, 0.2, 0.8],
                                                    scale: {
                                                        type: "spring",
                                                        damping: 8,
                                                        stiffness: 100,
                                                        restDelta: 0.001,
                                                    },
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    textShadow: "0px 0px 4px gray",
                                                }}
                                            >
                                                <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(8).jpg" />
                                            </motion.div>
                                        </AnimatePresence>

                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(166).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0, 0.71, 0.2, 0.8],
                                                    scale: {
                                                        type: "spring",
                                                        damping: 8,
                                                        stiffness: 100,
                                                        restDelta: 0.001,
                                                    },
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    textShadow: "0px 0px 4px gray",
                                                }}
                                            >
                                                <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(36).jpg" />
                                            </motion.div>
                                        </AnimatePresence>

                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(163).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0, 0.71, 0.2, 0.8],
                                                    scale: {
                                                        type: "spring",
                                                        damping: 8,
                                                        stiffness: 100,
                                                        restDelta: 0.001,
                                                    },
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    textShadow: "0px 0px 4px gray",
                                                }}
                                            >
                                                <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(0).jpg" />
                                            </motion.div>
                                        </AnimatePresence>

                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(124).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0, 0.71, 0.2, 0.8],
                                                    scale: {
                                                        type: "spring",
                                                        damping: 8,
                                                        stiffness: 100,
                                                        restDelta: 0.001,
                                                    },
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    textShadow: "0px 0px 4px gray",
                                                }}
                                            >
                                                <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(3).jpg" />
                                            </motion.div>
                                        </AnimatePresence>
                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(77).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Ini Contoh teks panjang aja yagesya, tpi btw si riski emang anak ngentot sih
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0, 0.71, 0.2, 0.8],
                                                    scale: {
                                                        type: "spring",
                                                        damping: 8,
                                                        stiffness: 100,
                                                        restDelta: 0.001,
                                                    },
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    textShadow: "0px 0px 4px gray",
                                                }}
                                            >
                                                <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(8).jpg" />
                                            </motion.div>
                                        </AnimatePresence>

                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(166).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0, 0.71, 0.2, 0.8],
                                                    scale: {
                                                        type: "spring",
                                                        damping: 8,
                                                        stiffness: 100,
                                                        restDelta: 0.001,
                                                    },
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    textShadow: "0px 0px 4px gray",
                                                }}
                                            >
                                                <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(36).jpg" />
                                            </motion.div>
                                        </AnimatePresence>

                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(163).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0, 0.71, 0.2, 0.8],
                                                    scale: {
                                                        type: "spring",
                                                        damping: 8,
                                                        stiffness: 100,
                                                        restDelta: 0.001,
                                                    },
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    textShadow: "0px 0px 4px gray",
                                                }}
                                            >
                                                <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(0).jpg" />
                                            </motion.div>
                                        </AnimatePresence>

                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(124).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                            </Chakra.SimpleGrid>
                        </Box>
                    </Chakra.Box>
                    <Chakra.Box pt={3}>
                        <Box
                            mx="auto"
                            px={6}
                            py={4}
                            rounded="lg"
                            shadow="lg"
                            borderWidth={2}
                            bg="white"
                            _dark={{
                                bg: "gray.800",
                            }}
                            maxW="60em"
                        >
                            <Flex justifyContent="space-between" alignItems="center">
                                <Chakra.Link
                                    fontSize="lg"
                                    color="gray.700"
                                    _dark={{
                                        color: "white",
                                    }}
                                    fontWeight="700"
                                    _hover={{
                                        color: "gray.600",
                                        _dark: {
                                            color: "gray.200",
                                        },
                                        textDecor: "underline",
                                    }}
                                >
                                    BISA MAXWIN
                                </Chakra.Link>
                            </Flex>
                            <Box
                                w="100%"
                                h="200px"
                                overflowX="auto"
                                overflowY="hidden"
                                sx={{
                                    "&::-webkit-scrollbar": {
                                        width: "8px",
                                        height: "0.5em",
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        background: "transparent",
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        background: "linear-gradient(90deg, MediumAquamarine, purple)",
                                        borderRadius: "12px",
                                    },
                                    "&::-webkit-scrollbar-thumb:hover": {
                                        background: "blue.700",
                                    },
                                }}
                            >
                                <Chakra.Flex w="200%" maxW="200%" alignItems="center" align="left" p={5}></Chakra.Flex>
                            </Box>
                        </Box>
                    </Chakra.Box>
                    <Chakra.Box pt={3}>
                        <Box
                            mx="auto"
                            px={6}
                            py={4}
                            rounded="lg"
                            shadow="lg"
                            borderWidth={2}
                            bg="white"
                            _dark={{
                                bg: "gray.800",
                            }}
                            maxW="60em"
                        >
                            <Flex justifyContent="space-between" alignItems="center">
                                <Chakra.Link
                                    fontSize="lg"
                                    color="gray.700"
                                    _dark={{
                                        color: "white",
                                    }}
                                    fontWeight="700"
                                    _hover={{
                                        color: "gray.600",
                                        _dark: {
                                            color: "gray.200",
                                        },
                                        textDecor: "underline",
                                    }}
                                >
                                    Popular Games SLOT 4D
                                </Chakra.Link>
                                <Chakra.Spacer />
                                <Chakra.Flex>
                                    <Chakra.Text px={3} py={1} shadow="md" bg="red" color="gray.100" fontSize="sm" fontWeight="700" rounded="md">
                                        HOT+
                                    </Chakra.Text>
                                    <Chakra.Box w="2px" />
                                    <Chakra.Text px={3} py={1} shadow="md" bg="green" color="gray.100" fontSize="sm" fontWeight="700" rounded="md">
                                        Populars
                                    </Chakra.Text>
                                    <Chakra.Box w="2px" />
                                    <Chakra.Text px={3} py={1} shadow="md" bg="cyan" color="gray.600" fontSize="sm" fontWeight="700" rounded="md">
                                        Trendings
                                    </Chakra.Text>
                                </Chakra.Flex>
                            </Flex>

                            <Chakra.SimpleGrid minChildWidth="200px" columns={[2, null, 5]} pt={3} spacing="5px">
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(3).jpg" />
                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(77).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(8).jpg" />
                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(166).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(36).jpg" />
                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(163).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(0).jpg" />
                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(124).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(3).jpg" />
                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(77).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(8).jpg" />
                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(166).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(36).jpg" />
                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(163).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                                <Chakra.Box maxW="280px">
                                    <Chakra.Stack>
                                        <Chakra.Image borderRadius="5px" shadow="md" h="105px" w="220px" src="http://ind05.mrsconditreadsbooks.com/kasino(0).jpg" />
                                        <Chakra.Flex align="left">
                                            <Chakra.Image src="http://ind05.mrsconditreadsbooks.com/slot(124).png" h="40px" pr={2} />
                                            <Chakra.Box>
                                                <Chakra.chakra.p>Link Alternatif Intel4D</Chakra.chakra.p>
                                                <Chakra.chakra.p
                                                    color="gray.600"
                                                    fontSize="12px"
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                >
                                                    Riski Ngontol emang babi gak sih plus tolol
                                                </Chakra.chakra.p>
                                            </Chakra.Box>
                                        </Chakra.Flex>
                                    </Chakra.Stack>
                                </Chakra.Box>
                            </Chakra.SimpleGrid>
                        </Box>
                    </Chakra.Box>
                </Chakra.Box>
            </Box>
        </Chakra.Center>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <Box
                                as="a"
                                p={2}
                                href={navItem.href ?? "#"}
                                fontSize={"sm"}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: "none",
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Box>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent border={0} boxShadow={"xl"} bg={popoverContentBgColor} p={4} rounded={"xl"} minW={"sm"}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const Banner = () => {
    const slides = [
        {
            img: "https://i.postimg.cc/1zyYHW6x/slot-gacor.webp",
        },
        {
            img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        },
        {
            img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
    ];
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slidesCount = slides.length;

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const setSlide = (slide: any) => {
        setCurrentSlide(slide);
    };

    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };
    return (
        <Box maxW="60em" alignItems="center" justifyContent="center">
            <Flex w="full" overflow="hidden" pos="relative" borderRadius="23px">
                <Flex h="400px" w="full" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                        <Box
                            key={`slide-${sid}`}
                            boxSize="full"
                            shadow="md"
                            h={{
                                base: "full", // 0px
                                sm: "full",
                                xl: "25em",
                            }}
                            flex="none"
                        >
                            <Text color="white" fontSize="xs" p="8px 12px" pos="absolute" top="0">
                                {sid + 1} / {slidesCount}
                            </Text>
                            <Chakra.Image src={slide.img} alt="carousel image" boxSize="full" backgroundSize="cover" />
                        </Box>
                    ))}
                </Flex>
                <HStack justify="center" pos="absolute" bottom="8px" w="full">
                    {Array.from({
                        length: slidesCount,
                    }).map((_, slide) => (
                        <Box
                            key={`dots-${slide}`}
                            cursor="pointer"
                            boxSize={["7px", null, "15px"]}
                            m="0 2px"
                            bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                            rounded="50%"
                            display="inline-block"
                            transition="background-color 0.6s ease"
                            _hover={{
                                bg: "blackAlpha.800",
                            }}
                            onClick={() => setSlide(slide)}
                        ></Box>
                    ))}
                </HStack>
            </Flex>
        </Box>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Box as="a" href={href} role={"group"} display={"block"} p={2} rounded={"md"} _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}>
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text transition={"all .3s ease"} _groupHover={{ color: "pink.400" }} fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={"sm"}>{subLabel}</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0} _groupHover={{ opacity: "100%", transform: "translateX(0)" }} justify={"flex-end"} align={"center"} flex={1}>
                    <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Box>
    );
};

const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Box
                py={2}
                as="a"
                href={href ?? "#"}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
                    {label}
                </Text>
                {children && <Icon as={ChevronDownIcon} transition={"all .25s ease-in-out"} transform={isOpen ? "rotate(180deg)" : ""} w={6} h={6} />}
            </Box>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
                <Stack mt={2} pl={4} borderLeft={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")} align={"start"}>
                    {children &&
                        children.map((child) => (
                            <Box as="a" key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Box>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Inspiration",
        children: [
            {
                label: "Explore Design Work",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
            {
                label: "New & Noteworthy",
                subLabel: "Up-and-coming Designers",
                href: "#",
            },
        ],
    },
    {
        label: "Find Work",
        children: [
            {
                label: "Job Board",
                subLabel: "Find your dream design job",
                href: "#",
            },
            {
                label: "Freelance Projects",
                subLabel: "An exclusive list for contract work",
                href: "#",
            },
        ],
    },
    {
        label: "Learn Design",
        href: "#",
    },
    {
        label: "Hire Designers",
        href: "#",
    },
];
