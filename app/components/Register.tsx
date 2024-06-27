import { FaSquare } from "react-icons/fa6";

const Register = () => {
	return (
		<section id="register" className="bg-primary py-6 overflow-hidden">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						{" "}
						<h2>Unlock Your Potential with Engaging Content</h2>
						<p>
							Our wide range of training and seminar videos are designed to
							empower you with valuable knowledge and skills.
						</p>
						<ul className="list-unstyled vstack gap-3">
							<li>
								<FaSquare />
								<strong className="ps-2">Gain Expertise:</strong> Our videos
								provide in-depth insights and practical tips to enhance your
								expertise in various domains.
							</li>
							<li>
								<FaSquare />
								<strong className="ps-2">Stay Updated:</strong> Stay up-to-date
								with the latest industry trends and advancements through our
								informative and up-to-date videos.
							</li>
							<li>
								<FaSquare />
								<strong className="ps-2">Expand Your Network:</strong> Connect
								with like-minded individuals and industry experts, fostering new
								connections and opportunities.
							</li>
						</ul>
					</div>
					<div className="col-lg-6 p-4">
						<form>
							<div className="py-4">
								<input
									type="text"
									className="form-control form-control-lg border-0"
									placeholder="Enter name"
								/>
							</div>
							<div className="py-4">
								<input
									type="email"
									className="form-control form-control-lg border-0"
									placeholder="Enter email"
								/>
							</div>
							<div className="py-4">
								<input
									type="number"
									className="form-control form-control-lg border-0"
									placeholder="Enter phone number"
								/>
							</div>
							<div className="form-check">
								<input type="checkbox" className="form-check-input" />
								<label htmlFor="terms" className="form-check-label">
									I agree to the terms and conditions
								</label>
							</div>
							<div className="d-grid mt-4">
								<button className="btn btn-outline-dark">Register</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Register;
