import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle event creation logic here
    console.log("Event Created:", { eventName, eventDate, eventDescription });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Create New Event</Heading>
        <FormControl id="event-name" isRequired>
          <FormLabel>Event Name</FormLabel>
          <Input value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </FormControl>
        <FormControl id="event-date" isRequired>
          <FormLabel>Event Date</FormLabel>
          <Input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </FormControl>
        <FormControl id="event-description">
          <FormLabel>Event Description</FormLabel>
          <Textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" size="lg" type="submit">Create Event</Button>
      </VStack>
    </Container>
  );
};

export default CreateEvent;