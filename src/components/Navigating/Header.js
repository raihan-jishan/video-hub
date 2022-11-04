/* import  onother functionality */
import { Link } from "react-router-dom";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        zIndex={"overlay"}
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme="purple"
        p={"0"}
        w={"10"}
        h={"10"}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        {/*  DRWSER CONTENT */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VH</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              {/* home */}
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/"}>Home</Link>
              </Button>
              {/* videos */}
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/videos"}>Videos</Link>
              </Button>
              {/* free videos */}
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/videos?category=free"}>Free Videos</Link>
              </Button>
              {/*  UPLOAD VIDEOS  */}
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/upload"}>Upload Video</Link>
              </Button>
            </VStack>
            {/* HSTACK */}
            <HStack
              pos={"absolute"}
              bottom={"10"}
              left={"0"}
              width={"full"}
              justifyContent={"space-evenly"}
            >
              {/* LOG IN */}
              <Button onClick={onClose} colorScheme={"purple"}>
                <Link to={"/login"}>Log In</Link>
              </Button>
              {/* sIGN UP */}
              <Button
                onClick={onClose}
                colorScheme={"purple"}
                variant={"outline"}
              >
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </HStack>

            {/* end  */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
