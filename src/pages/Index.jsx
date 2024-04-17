// Webpage to Jinja-Template Converter Interface
import { Box, Button, Input, Text, VStack, Heading, Textarea, IconButton, HStack, Select, useDisclosure } from "@chakra-ui/react";
import { FaMousePointer, FaSave, FaCode, FaTrash, FaPlus } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [url, setUrl] = useState("");
  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Webpage to Jinja-Template Converter
        </Heading>
        <Text fontSize="md">Enter the URL of the webpage you want to convert into a Jinja template:</Text>
        <Input placeholder="Enter URL here..." size="lg" value={url} onChange={(e) => setUrl(e.target.value)} />
        <Select placeholder="Select content type" size="lg" mb={4}>
          <option value="section">Section</option>
          <option value="component">Component</option>
          <option value="page">Page</option>
        </Select>
        <Button leftIcon={<FaMousePointer />} colorScheme="blue" variant="solid" onClick={() => setUrl(url)}>
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
        <Box as="iframe" src={url} width="100%" height="500px" mt={4} />
      </VStack>
    </Box>
  );
};

export default Index;
