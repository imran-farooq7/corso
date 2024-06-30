import Image from "next/image";
import Points from "./Points";
import Details from "./Details";

const Discover = () => {
	return (
		<section id="discover" className="discover py-6">
			<div className="container">
				<Details
					img="/instructor.jpg"
					description="Our extensive collection of training videos is designed to help you enhance your skills and excel in your chosen field. Whether you're looking to improve your technical expertise or develop essential soft skills, our videos provide valuable insights and practical knowledge."
					subDescription="With expert instructors and comprehensive content, you'll gain the confidence and competence to tackle challenges and achieve success."
					heading="Enhance Your Skills with Engaging Training Videos"
				/>
			</div>
			<Points />
		</section>
	);
};
export default Discover;
