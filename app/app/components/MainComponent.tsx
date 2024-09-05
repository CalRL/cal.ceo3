'use client'
import * as React from "react";
import { useEffect } from "react";
import "../App.css";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
const url = "https://api.lanyard.rest/v1/users/242276511028084738";

export const MainComponent: React.FC = () => {
  return (
    <div className="main flex-nowrap">
      <div className="mt-[5%] w-[576px] h-full">
        <div className="">
          <Grid
            templateAreas={`"avatar name pronouns"
                                "avatar status status"`}
            h="128px"
            w="300px"
            className="main-grid"
          >
            <GridItem
              area={"avatar"}
              className="items-center avatar"
              display="inline-block"
              justifyContent={"center"}
              marginRight="10%"
            >
              <img
                className="rounded-full border-4 avatar-border avatar"
                width="96px"
                height="96px"
                src="https://cdn.discordapp.com/avatars/242276511028084738/66b26bbc03c85fa6659b6ae21c8ff485.png?size=4096"
                alt="Discord Avatar"
              ></img>
            </GridItem>
            <GridItem area={"name"} className="text-5x1" fontWeight="bold">
              Cal
            </GridItem>
            <GridItem
              area={"pronouns"}
              className="text-2x1 pronouns-text"
              marginTop="10%"
              marginLeft="-10%"
              fontWeight={700}
            >
              he/him
            </GridItem>
            <GridItem
              area={"status"}
              className=" flex text-4xl items-center space-x-2 font-semibold mt-[-10%]"
              justifyContent="start"
            >
              <StatusCircle />
              <GetColor />
            </GridItem>
          </Grid>
        </div>
          <div className="text-3x1 text-coloring w-[95%] lg:block lg:w-full lg:text-start text-center items-center lg:content-normal">
            software developer; student; full-stack;
          </div>
          <div className="text-paragraph text-coloring margin-top-10 lg:w-full lg:text-start text-center flex justify-center lg:block lg:justify-start">
            <p className="lg:w-full w-[80%]">
            hi! I'm cal! I'm a software developer and student from the united
            kingdom. I'm mostly interested in making minecraft addons <br></br>
            right now, but I'm also doing full-stack web development.
            </p>
            
        </div>
      </div>
    </div>
  );
};

const GetColor: React.FC = () => {
  const [status, setStatus] = React.useState<string>();

  useEffect(() => {
    const getDiscordInfomation = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        const data = await response.json();
        const discordStatus = data.data.discord_status;
        setStatus(discordStatus);
      } catch (error) {
        console.error("Error fetching Discord information", error);
      }
    };

    getDiscordInfomation();
  }, []);
  var statusString: string = "";
  if (typeof status === "string") {
    statusString = status.charAt(0).toUpperCase() + status.slice(1);
  }
  function getStatus() {
    if (status === "online".toLowerCase()) {
      return "text-[#43b581]";
    } else if (status == "idle") {
      return "text-[#faa61a]";
    } else {
      return "text-[#f04747]";
    }
  }

  return (
    <div className="mb-1 flex">
      {" "}
      <div className={getStatus()}>{statusString}</div>
    </div>
  );
};
export const StatusCircle: React.FC = () => {
  const [status, setStatus] = React.useState<string>();

  useEffect(() => {
    const getDiscordInfomation = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        const data = await response.json();
        const discordStatus = data.data.discord_status;
        setStatus(discordStatus);
      } catch (error) {
        console.error("Error fetching Discord information", error);
      }
    };

    getDiscordInfomation();
    console.log(getDiscordInfomation())
  }, []);

  function getStatus() {
    if (status === "online".toLowerCase()) {
      return <FaCircle className="text-[#43b581] inline-block" size={28} />;
    } else if (status == "idle") {
      return <FaCircle className="text-[#faa61a] inline-block" size={28} />;
    } else {
      return <div className="circle offline-circle"></div>;
    }
  }
  return <span className="inline-flex items-center">{getStatus()}</span>;
};
