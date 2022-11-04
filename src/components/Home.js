import { Box, Container, Heading, Stack, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};
export default function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={"container.xl"} minH={"100vh"} p="16">
        <Heading
          textTransform={"uppercase"}
          py="2"
          w={"fit-content"}
          borderBottom={"2px solid "}
          m="auto"
        >
          Services
        </Heading>
        <Stack h="full" p="4" alignItems="center" direction={["column", "row"]}>
          <Image
            src="https://raw.githubusercontent.com/meabhisingh/react-video-hub/master/src/assets/5.png"
            h={["40", "400"]}
            filter={"hue-rotate(-130deg)"}
          />

          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    {/*   I N   T RO 1 */}
    <Box w="full" h={"100vh"}>
      <Image
        src="https://raw.githubusercontent.com/meabhisingh/react-video-hub/master/src/assets/1.jpg"
        h="full"
        w="full"
        objectFit={"cover"}
      />
      <Heading bgColor={"blackAlpha.600"} color="black" {...headingOptions}>
        Wath The future
      </Heading>
    </Box>
    {/* I N TRO 2 */}
    <Box w="full" h={"100vh"}>
      <Image
        src="https://raw.githubusercontent.com/meabhisingh/react-video-hub/master/src/assets/2.jpg"
        h="full"
        w="full"
        objectFit={"cover"}
      />
      <Heading bgColor={"blackAlpha.600"} color="black" {...headingOptions}>
        Future of Gaming
      </Heading>
    </Box>
    {/*  box 3 */}
    <Box w="full" h={"100vh"}>
      <Image
        src="https://raw.githubusercontent.com/meabhisingh/react-video-hub/master/src/assets/3.jpg"
        h="full"
        w="full"
        objectFit={"cover"}
      />
      <Heading bgColor={"blackAlpha.600"} color="black" {...headingOptions}>
        Gaming Console
      </Heading>
    </Box>

    <Box w="full" h={"100vh"}>
      <Image
        src="https://raw.githubusercontent.com/meabhisingh/react-video-hub/master/src/assets/4.jpg"
        h="full"
        w="full"
        objectFit={"cover"}
      />
      <Heading bgColor={"blackAlpha.600"} color="black" {...headingOptions}>
        Doing gaming feel this.
      </Heading>
    </Box>
  </Carousel>
);
