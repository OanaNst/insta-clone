import { Container, Flex } from "@chakra-ui/react"
import ProfileHeader from "../../components/Profile/ProfileHeader"
import ProfileTabs from "../../components/Profile/ProfileTabs"
import ProfilePosts from "../../components/Profile/ProfilePosts"
import React from "react"

const ProfilePage = () => {
  return (
    <Container maxW={"container.large"} py={5}>
      {/* Flex container for the profile header */}
      <Flex py={10} px={4} pl={{base:4, md:10}} maxW={"full"} mx={"auto"} flexDirection={"column"}>
        <ProfileHeader/>
      </Flex>
      {/* Flex container for the profile tabs & posts */}
      <Flex px={{base:2, sm:4}} maxW={"ful"} mx={"auto"} borderTop={"1px solid"} borderColor={"whiteAlpha.300"} direction={"column"}>
        <ProfileTabs/>
        <ProfilePosts/>
      </Flex>
    </Container>
  )
}

export default ProfilePage