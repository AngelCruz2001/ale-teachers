import { Searchbar, SwitchCourses, TableAvailable } from "components";
import { useAppSelector } from "hooks/reduxHooks";
import { NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
    const { isLoggedIn } = useAppSelector(state => state.auth);
    const router = Router;

    useEffect(() => {
        !isLoggedIn && router.push("/auth");
    }, [isLoggedIn]);
    
    return <>
        <SwitchCourses />
        <Searchbar />
        <TableAvailable />
    </>
};

export default Home;