import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader/>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        {/*Left side child */}
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        {/*Right side child */}
        <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
          See all
        </Text>
      </Flex>
      <SuggestedUser name="Dan Abramov" followers={1345} avatar="https://bit.ly/dan-abramov" />
      <SuggestedUser name="Ryan Florence" followers={876} avatar="https://bit.ly/ryan-florence" />
      <SuggestedUser name="Christian Nwamba" followers={498} avatar="https://bit.ly/code-beast" />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        &copy; 2024 Built By{" "}
        <Link href="https://github.com/OanaNst" target="_blank" color={"purple.400"} fontSize={14} fontWeight={"bold"} style={{textDecoration:"none"}}>
          OanaNst
        </Link>
      </Box>
    </VStack>
  )
}

export default SuggestedUsers