"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </Link>

                {/* <MenuItem setActive={setActive} active={active} item="Portfolio">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/portfolio/portfolio">Our Works</HoveredLink>
                        <HoveredLink href="/portfolio/structureglazing">Structure & Glazing</HoveredLink>
                        <HoveredLink href="/portfolio/highlights">Our Highlights</HoveredLink>
                        <HoveredLink href="/portfolio/drawings">Drawings</HoveredLink>
                        <HoveredLink href="/portfolio/samples">Our Samples</HoveredLink>
                        <HoveredLink href="/portfolio/footer">Footer</HoveredLink>
                    </div>
                </MenuItem> */}

                <Link href={"/about"}>
                    <MenuItem setActive={setActive} active={active} item="About" />
                </Link>

                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact us" />
                </Link>
            </Menu>
        </div>
    );
}

export default Navbar;
