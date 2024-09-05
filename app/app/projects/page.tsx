import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Text, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import "../App.css";

export default function Projects() {
  return (
    <div>
      <Card variant="filled" overflow="hidden" bg="gray-100" boxShadow="md">
        <CardHeader>
          <Heading size="md">Client Report</Heading>
        </CardHeader>

        <CardBody>
          <Box>
            <Heading size="xl" textTransform="uppercase">
              Hubbly
            </Heading>
            <Text pt="2" fontSize="sm">
              View a summary of all your clients over the last month.
            </Text>
          </Box>
        </CardBody>
      </Card>
    </div>
  );
}
