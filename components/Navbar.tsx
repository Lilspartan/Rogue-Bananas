import { useState, useEffect } from 'react';
import Link from 'next/link';
import classnames from "classnames";

const Navbar = () => {
    const [navbarVisible, setNavbarVisible] = useState(true)
    const [previousScroll, setPreviousScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            var currentScroll = window.scrollY;
    
            if (currentScroll < 100) {
                setNavbarVisible(true);
            } else if (currentScroll > 0 && currentScroll < window.document.body.offsetHeight - window.innerHeight) {
                if (currentScroll > previousScroll) {
                    setNavbarVisible(false);
                } else {
                    setNavbarVisible(true);
                }
                setPreviousScroll(currentScroll);
            }
        }

        window.onscroll = handleScroll;
    }, [])

    return (
        <>
            <nav className = {classnames([
                "navbar", "fixed", "top-0", "right-0", "left-0", "z-50", "p-0", (navbarVisible ? "is-visible" : "is-hidden")
            ])} role="navigation">
                <div className="container hidden lg:block">
                    <div className="flex flex-row align-items-center justify-around">
                        <div className="flex">
                            <Link href = "/#main">
                                <span className = "flex flex-row items-center pl-16 pt-2">
                                    <img src = "/images/color_logo.png" alt = "Rogue Bananas Logo" className = "img-fluid" />
                                    <span className = "text-white tl-font pl-4 text-3xl">ROGUE BANANAS</span>
                                </span>
                            </Link>
                        </div>

                        <div className="flex">
                            <ul className="navbar-nav flex flex-row justify-end flex-wrap align-items-center content-center justify-self-end mr-lg-4 mr-xl-0">
                                <ListItem link = "/#events">EVENTS</ListItem>
                                <ListItem link = "/#communities">COMMUNITIES</ListItem>
                                <ListItem link = "/#about">ABOUT US</ListItem>
                                <ListItem link = "/">REGISTER</ListItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

const ListItem = (props: any) => {
    return (
        <li className="nav-item px-3 text-uppercase mb-0 position-relative hidden lg:flex"> <a className="text-white position-relative px-4 text-2xl font-medium nav-link mx-8" href={props.link}>{props.children}</a></li>
    )
}

export default Navbar