import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { Footer } from "./components/Footer";
import Topbar from "./components/Top_bar";
import Navbar from "./components/Nav_bar";
import Ffoter from "./components/F_footer";




export default function Layout() {
  return (
    <>
      <Flex minH="100vh" direction={"column"} justify={"space-between"}>
        <Topbar/>
        <Navbar/>
        <Outlet />
        <Footer /> 
        <Ffoter/>
      </Flex>
    </>
  );
}