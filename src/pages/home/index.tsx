import { Navbar, Searchbar, SwitchCourses, TableAvailable } from "components";
import { useAppSelector } from "hooks/reduxHooks";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <SwitchCourses />
      <Searchbar />
      <TableAvailable />
    </>
  );
};

export default Home;
