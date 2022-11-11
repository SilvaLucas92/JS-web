import { Stack, Heading, VStack, GridItem } from "@chakra-ui/react";
import Feature from "./Feature";
function EachService({ data, title }) {
  return (
    <VStack my={10} align={"center"}>
      <Heading
        as="h3"
        color="#2d3748"
        textAlign="center"
        mb={10}
        fontSize={{
          base: "2xl",
          sm: "3xl",
          lg: "4xl",
        }}
      >
        {title}
      </Heading>
      <GridItem colSpan={2}>
        <Stack
          spacing={{
            base: 10,
            lg: 0,
          }}
          display={{
            lg: "grid",
          }}
          gridTemplateColumns={{
            lg: "repeat(2,1fr)",
          }}
          gridColumnGap={{
            lg: 8,
          }}
          gridRowGap={{
            lg: 10,
          }}
        >
          {data.map((item, index) => {
            const { title, description } = item;
            return (
              <Feature key={index} title={title}>
                {description}
              </Feature>
            );
          })}
        </Stack>
      </GridItem>
    </VStack>
  );
}

export default EachService;
