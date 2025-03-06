import React from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className={classes.nav_container}>
			<Link href="/">Stay with Ian</Link>
			<ul>
				<Link href="/host">Rent out your home</Link>
			</ul>
		</nav>
	);
}
