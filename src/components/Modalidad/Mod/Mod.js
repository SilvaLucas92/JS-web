import { Heading, Text, Box } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
const Mod = ({oneData}) => {
    return (
        <Box
        as="article"
        textAlign="center"
        borderRadius={12}
        p={15}
        mx="auto"
        boxShadow="lg"
        w="100%"
        data-aos="fade-in"
        >
        <TriangleDownIcon color="rgb(49 151 149)" />
        <Heading
            as="h3"
            color="#2d3748"
            fontWeight="semibold"
            my={4}
            fontSize={[20, 22, 24]}
        >
            {oneData.title}
        </Heading>
        <Text fontSize={{ base: "18px", md: "20px" }} opacity="0.7">
            {oneData.description}
        </Text>
        </Box>
    );
};
export default Mod;
