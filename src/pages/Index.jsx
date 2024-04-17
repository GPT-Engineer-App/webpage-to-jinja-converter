// Webpage to Jinja-Template Converter Interface
import { Box, Button, Input, Text, VStack, Heading, Textarea, IconButton, HStack } from "@chakra-ui/react";
import { FaMousePointer, FaSave, FaCode, FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Webpage to Jinja-Template Converter
        </Heading>

        <Text fontSize="md">Enter the URL of the webpage you want to convert into a Jinja template:</Text>
        <Input placeholder="Enter URL here..." size="lg" />

        <Button leftIcon={<FaMousePointer />} colorScheme="blue" variant="solid">
          Load Webpage
        </Button>

        <Text mt={4} fontSize="md">
          Define Template Variables:
        </Text>
        <VStack spacing={2}>
          <HStack>
            <Input placeholder="Variable Name" size="md" />
            <Input placeholder="Type (e.g., string, number)" size="md" />
            <IconButton aria-label="Delete Variable" icon={<FaTrash />} />
          </HStack>
          <Button leftIcon={<FaPlus />} colorScheme="green" variant="outline">
            Add Variable
          </Button>
        </VStack>

        <Text mt={4} fontSize="md">
          Jinja Template Output:
        </Text>
        <Textarea placeholder="Generated Jinja template will appear here..." height="200px" />

        <Button rightIcon={<FaSave />} colorScheme="teal" variant="solid">
          Save Template
        </Button>

        <Button rightIcon={<FaCode />} colorScheme="purple" variant="outline">
          Export Code
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
