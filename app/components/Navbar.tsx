"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa6";

const Navbar = () => {
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 20) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", changeNavbarColor);
		return () => {
			window.removeEventListener("scroll", changeNavbarColor);
		};
	}, []);
	return (
		<nav
			className={`navbar navbar-expand-lg fixed-top navbar-dark ${
				colorChange && "bg-dark"
			}`}
		>
			<div className="container">
				<Link href={"/"} className="navbar-brand">
					<Image src={"/logo.png"} width={150} height={40} alt="logo" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" href="#home">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="#discover">
								Discover
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="#summary">
								Summary
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="#takeaways">
								Takeaways
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="#subscribe">
								Subscribe
							</Link>
						</li>
					</ul>
					<span className="nav-item">
						<Link href={"#"} className="pe-3">
							<FaFacebook size={"25"} />
						</Link>
					</span>
					<span className="nav-item">
						<Link href={"#"}>
							<FaTwitter size={"25"} />
						</Link>
					</span>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
