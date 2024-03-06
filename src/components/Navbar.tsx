"use client"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem,  } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        Home
                    </MenuItem>
                </Link>
                
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/classes">All Services</HoveredLink>
                        <HoveredLink href="/classes">
                            Nutrition Counseling
                        </HoveredLink>
                        <HoveredLink href="/classes">
                            Fitness Training
                        </HoveredLink>
                        <HoveredLink href="/classes">Yoga Classes</HoveredLink>
                        <HoveredLink href="/classes">
                            Mental Wellness Programs
                        </HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/about"}>
                    <MenuItem setActive={setActive} active={active} item="About">
                        About
                    </MenuItem>
                </Link>
                <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            Contact us
            </MenuItem>
            </Link>
            </Menu>
        </div>
    );
}

export default Navbar;
