import { Stack, Text, VStack, GridItem } from "@chakra-ui/react";
import Feature from "./Feature";
function EachService({ data, title }) {
  return (
    <VStack my={10} align={"center"}>
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
            lg: 10,
          }}
          gridRowGap={{
            lg: 12,
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
