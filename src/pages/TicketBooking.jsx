import { useEffect, useState } from "react";
import { Container, VStack, Heading, Box, Text, Button, Select, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";

const TicketBooking = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();

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

  const handleBooking = async (e) => {
    e.preventDefault();
    const bookingDetails = { eventId: selectedEvent, name, email };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        toast({
          title: "Booking successful.",
          description: "Your tickets have been booked successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setSelectedEvent("");
        setName("");
        setEmail("");
      } else {
        throw new Error('Failed to book tickets');
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "Unable to book tickets.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} as="form" onSubmit={handleBooking}>
        <Heading as="h1" size="xl">Book Tickets</Heading>
        <FormControl id="event" isRequired>
          <FormLabel>Select Event</FormLabel>
          <Select placeholder="Select event" value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
            {events.map((event) => (
              <option key={event.id} value={event.id}>{event.eventName}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" size="lg" type="submit">Book Tickets</Button>
      </VStack>
    </Container>
  );
};

export default TicketBooking;