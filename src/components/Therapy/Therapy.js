import { Text, Heading } from "@chakra-ui/react";
function Therapy({title, children}) {
  return (
    <>
      <Heading
        as="h3"
        color="#2d3748"
        textAlign="center"
        my={10}
        fontSize={{
          base: "2xl",
          sm: "3xl",
          lg: "4xl",
        }}
      >
        {title}
      </Heading>
      <Text
        p={5}
        opacity="0.7"
        fontSize={{ base: "18px", md: "20px" }}
        textAlign="center"
      >
        {children}
      </Text>
    </>
  );
}

export default Therapy;
