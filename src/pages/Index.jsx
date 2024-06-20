import { Container, VStack, Heading, Button, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Event Management Platform</Heading>
        <Text>Welcome to the Event Management Platform. Create and manage your events effortlessly.</Text>
        <Button colorScheme="teal" size="lg" onClick={() => navigate('/create-event')}>Create New Event</Button>
      </VStack>
    </Container>
  );
};

export default Index;