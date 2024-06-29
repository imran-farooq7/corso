import Image from "next/image";
import Points from "./Points";

const Discover = () => {
	return (
		<section id="discover" className="discover py-6">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<Image
							src={"/instructor.jpg"}
							width={600}
							height={500}
							style={{
								width: "auto",
								height: "auto",
							}}
							className="img-fluid rounded-5 mb-4"
							alt="discover"
						/>
					</div>
					<div className="col-lg-6">
						<h2>Enhance Your Skills with Engaging Training Videos</h2>
						<p>
							Our extensive collection of training videos is designed to help
							you enhance your skills and excel in your chosen field. Whether
							you're looking to improve your technical expertise or develop
							essential soft skills, our videos provide valuable insights and
							practical knowledge.
						</p>
						<p>
							With expert instructors and comprehensive content, you'll gain the
							confidence and competence to tackle challenges and achieve
							success.
						</p>
					</div>
				</div>
			</div>
			<Points />
		</section>
	);
};
export default Discover;
