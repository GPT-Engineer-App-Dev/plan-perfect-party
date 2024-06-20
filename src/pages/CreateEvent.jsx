import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventDetails = { eventName, eventDate, eventDescription };

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventDetails),
      });

      if (response.ok) {
        toast({
          title: "Event created.",
          description: "Your event has been created successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setEventName("");
        setEventDate("");
        setEventDescription("");
      } else {
        throw new Error('Failed to create event');
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "Unable to create event.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
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