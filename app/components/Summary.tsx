import Details from "./Details";
import SummaryItem from "./SummaryItem";

const Summary = () => {
	return (
		<section className="bg-light my-7 w-75 m-auto" id="summary">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2 className="text-center mb-5">Course Summary</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="bg-white p-5">
							<ul className="list-unstyled">
								<SummaryItem
									heading="1. Comprehensive Training"
									description="Our courses provide comprehensive training in a wide range of topics. From beginner-level fundamentals to advanced concepts, we offer in-depth content to cater to learners of all levels."
								/>
								<SummaryItem
									heading="2. Expert Instructors"
									description="Learn from industry experts who bring years of experience and expertise to the table. Our instructors are passionate about sharing their knowledge and helping you succeed."
								/>
								<SummaryItem
									heading="3. Practical Application"
									description="We believe in practical learning that goes beyond theory. Our courses focus on real-world application, equipping you with the skills and knowledge needed to excel in your field.

"
								/>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<Details
					heading="Elevate Your Learning Journey with Expert Seminars"
					description="Join our expert-led seminars and unlock new possibilities in your personal and professional development. Our seminars cover a diverse range of topics, from leadership and innovation to personal growth and productivity."
					subDescription="Immerse yourself in engaging discussions, interactive workshops, and valuable networking opportunities."
					img="/audience.jpg"
				/>
			</div>
		</section>
	);
};
export default Summary;
