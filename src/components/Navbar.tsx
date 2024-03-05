"use client"

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
                    <MenuItem setActive={setActive} active={active} item="Home">
                        Home
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="About Us">
                    <Link href="/about">
                        <HoveredLink>About Us</HoveredLink>
                    </Link>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Our Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/services">All Services</HoveredLink>
                        <HoveredLink href="/services/nutrition">
                            Nutrition Counseling
                        </HoveredLink>
                        <HoveredLink href="/services/fitness-training">
                            Fitness Training
                        </HoveredLink>
                        <HoveredLink href="/services/yoga">Yoga Classes</HoveredLink>
                        <HoveredLink href="/services/mental-wellness">
                            Mental Wellness Programs
                        </HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                        Contact Us
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    );
}

export default Navbar;
