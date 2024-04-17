// Webpage to Jinja-Template Converter Interface
import { Box, Button, Input, Text, VStack, Heading, Textarea, IconButton, HStack, Select, useDisclosure } from "@chakra-ui/react";
import { FaMousePointer, FaSave, FaCode, FaTrash, FaPlus } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [url, setUrl] = useState("");
  const [variables, setVariables] = useState([]);
  const addVariable = () => {
    const newVariable = { name: "", type: variables.length === 0 ? "page" : "", description: "", example: "" };
    setVariables([...variables, newVariable]);
  };
  const updateVariable = (index, field, value) => {
    const newVariables = [...variables];
    newVariables[index][field] = value;
    setVariables(newVariables);
  };
  const deleteVariable = (index) => {
    const newVariables = variables.filter((_, i) => i !== index);
    setVariables(newVariables);
  };
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
          {variables.map((variable, index) => (
            <HStack key={index}>
              <Input placeholder="Variable Name" size="md" value={variable.name} onChange={(e) => updateVariable(index, "name", e.target.value)} />
              <Select placeholder="Select content type" size="md" value={variable.type} onChange={(e) => updateVariable(index, "type", e.target.value)} disabled={index === 0}>
                <option value="section">Section</option>
                <option value="component">Component</option>
                <option value="page">Page</option>
              </Select>
              <Input placeholder="Description" size="md" value={variable.description} onChange={(e) => updateVariable(index, "description", e.target.value)} />
              <Input placeholder="Example" size="md" value={variable.example} onChange={(e) => updateVariable(index, "example", e.target.value)} />
              <IconButton aria-label="Delete Variable" icon={<FaTrash />} onClick={() => deleteVariable(index)} />
            </HStack>
          ))}
          <Button leftIcon={<FaPlus />} colorScheme="green" variant="outline" onClick={addVariable}>
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
