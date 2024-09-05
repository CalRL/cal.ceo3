import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Text, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import "../App.css";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div>
        <Main />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div>
      <div className="items-center flex">
        <div className="py-8 -mx-16 text-3xl">About</div>
      </div>
    </div>
  );
}
