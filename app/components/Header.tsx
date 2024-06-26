import Link from "next/link";

const Header = () => {
	return (
		<div className="header py-7 vh-100">
			<div className="container">
				<div className="row mb-5 text-center">
					<div className="col-12">
						<div className="text-container">
							<h1 className="display-2 text-white mt-2">
								Explore Our Training and Seminar Videos
							</h1>
							<p className="lead text-white w-75 m-auto mb-4">
								Whether you're a beginner or an experienced professional, our
								carefully curated content will empower you to enhance your
								skills and expand your knowledge
							</p>
							<Link
								href="#discover"
								className="btn btn-primary text-uppercase me-3"
							>
								Discover
							</Link>
							<Link
								href="#discover"
								className="btn btn-outline-light text-uppercase"
							>
								Discover
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
