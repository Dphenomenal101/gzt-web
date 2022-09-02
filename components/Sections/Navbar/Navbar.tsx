import Link from "next/link";
import React from "react";
import Logo from "../../../icons/Logo";

export type NavLinksType = {
    title: string;
    url: string;
    drop?: Object[];
};

export const NavLinks: NavLinksType[] = [
    { title: "About Us", url: "#", drop: [{ title: "Who we are?", url: "#" }] },
    { title: "Contact Us", url: "#" },
    { title: "Projects", url: "#" },
    { title: "FAQs", url: "#" }
];

const Navbar = () => {
    return (
        <nav className="container py-4 flex items-center justify-between ">
            <div>
                <Logo />
            </div>
            <ul className="hidden md:flex items-center space-x-5">
                {NavLinks.map((link: NavLinksType, index: number) => (
                    <li>
                        <Link href={link.url}>
                            <a>
                                <button className="btn btn-ghost hover:bg-transparent gap-2">
                                    <>
                                        {link.title}{" "}
                                        {link.drop ? (
                                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 1.25L7 6.75L12.5 1.25" stroke="#5D5CD6" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        ) : null}
                                    </>
                                </button>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
            <button className="btn bg-primary hover:opacity-80 hover:bg-primary text-white border-none hidden md:block">Know More</button>
            <button className="btn btn-circle btn-outline text-primary hover:text-white md:hidden hover:border-primary border-primary hover:bg-primary">
                <svg width="25" height="19" viewBox="0 0 25 19" className="h-6 w-6" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.285645" y1="1.89285" x2="24.2856" y2="1.89285" stroke="currentColor" stroke-width="2.5" />
                    <line x1="6.28564" y1="9.60715" x2="24.2856" y2="9.60715" stroke="currentColor" stroke-width="2.5" />
                    <line x1="12.2949" y1="17.3214" x2="24.2949" y2="17.3214" stroke="currentColor" stroke-width="2.5" />
                </svg>
            </button>
        </nav>
    );
};

export default Navbar;