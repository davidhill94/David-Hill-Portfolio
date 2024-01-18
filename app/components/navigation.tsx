"use client";

import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return ( 
        <>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        </>
     );
}
 
export default Navigation;