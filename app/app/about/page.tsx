import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Text, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import "../App.css";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <div className="">
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
        <div className="py-8 -mx-16 text-3xl text-white">About</div>
      </div>
      <div className="mx-auto max-w-4xl text-white">HELLEH</div>
    </div>
  );
}
