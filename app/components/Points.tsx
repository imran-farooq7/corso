import Point from "./Point";

const Points = () => {
	return (
		<section className="points pt-6">
			<div className="container">
				<div className="row text-center">
					<div className="col-md-8 offset-md-2">
						<h2>Unlock Your Potential with Engaging Training Videos</h2>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-md-6 mb-4">
						<Point
							heading="Enhance Your Skills"
							number={1}
							description="Our training videos provide comprehensive insights and practical tips to help you enhance your skills in various domains. From technical expertise to soft skills, we've got you covered."
						/>
					</div>
					<div className="col-md-6 mb-4">
						<Point
							heading="Stay Updated"
							number={2}
							description="Keep pace with the latest industry trends and advancements through our informative and up-to-date videos. Stay ahead of the curve and broaden your knowledge."
						/>
					</div>
					<div className="col-md-6 mb-4">
						<Point
							heading="Connect with Experts"
							number={3}
							description="Our platform allows you to connect with like-minded individuals and industry experts. Expand your network, foster new connections, and unlock new opportunities."
						/>
					</div>
					<div className="col-md-6 mb-4">
						<Point
							heading="Flexible Learning"
							number={4}
							description="Our training videos are available on-demand, allowing you to learn at your own pace and convenience. Access the content anytime, anywhere, and tailor your learning experience."
						/>
					</div>
					<div className="col-md-6 mb-4">
						<Point
							heading="Practical Knowledge"
							number={5}
							description="Gain practical knowledge and apply it directly to real-world scenarios. Our videos offer hands-on insights and practical tips to help you succeed in your professional endeavors."
						/>
					</div>
					<div className="col-md-6 mb-4">
						<Point
							heading="Continuous Learning
"
							number={6}
							description="Lifelong learning is key to personal and professional growth. Explore a vast collection of training videos and embark on a journey of continuous learning and self-improvement."
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Points;
