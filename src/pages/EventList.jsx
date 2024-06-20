import { useEffect, useState } from "react";
import { Container, VStack, Heading, Box, Text } from "@chakra-ui/react";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Event List</Heading>
        {events.length === 0 ? (
          <Text>No events available.</Text>
        ) : (
          events.map((event) => (
            <Box key={event.id} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{event.eventName}</Heading>
              <Text mt={4}>{event.eventDate}</Text>
              <Text mt={4}>{event.eventDescription}</Text>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default EventList;