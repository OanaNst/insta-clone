import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";


const SuggestedUser = ({name, followers, avatar}) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      {/* Left side child with name, followers and avatar */}
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>{name}</Box>
          <Box fontSize={10} color={"gray.500"}>{followers} followers</Box>
        </VStack>
      </Flex>
      {/* Right side child with follow button */}
      <Button fontSize={12} bg={"transparent"} p={0} h={"max-content"} fontWeight={"medium"} color={"blue.400"} cursor={"pointer"} _hover={{color:"white"}} onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  )
}

export default SuggestedUser