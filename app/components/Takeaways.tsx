import {
	FaAtom,
	FaChartBar,
	FaHandshake,
	FaKey,
	FaNewspaper,
	FaStreetView,
	FaUsers,
} from "react-icons/fa6";
import TakeawaysItem from "./TakeawaysItem";

const Takeaways = () => {
	return (
		<section className="takeaways my-5 bg-light">
			<div className="container">
				<div className="row text-center mb-5">
					<div className="col-md-8 offset-md-2">
						<h2>Key Takeaways</h2>
						<p className="lead">
							Here are some of the takeaways and benefits you can expect from
							our programs.
						</p>
					</div>
				</div>
				<div className="row">
					<TakeawaysItem
						Icon={FaAtom}
						description="Explore the latest scientific research and gain valuable insights into various subjects, from physics to biology.
"
						heading="Scientific Insights
"
					/>
					<TakeawaysItem
						Icon={FaKey}
						description="Discover the importance of cybersecurity and learn how to protect yourself and your digital assets from cyber threats.

"
						heading="Cybersecurity Awareness"
					/>

					<TakeawaysItem
						Icon={FaNewspaper}
						description="Explore the latest scientific research and gain valuable insights into various subjects, from physics to biology.
"
						heading="Industry Updates"
					/>
				</div>
				<div className="row">
					<TakeawaysItem
						Icon={FaUsers}
						description="Connect with professionals from diverse backgrounds and industries to foster collaboration and expand your professional network."
						heading="Collaborative Networking
"
					/>
					<TakeawaysItem
						Icon={FaHandshake}
						description="Discover potential partnership opportunities with like-minded individuals and organizations, opening doors to new collaborations and ventures."
						heading="Partnership Opportunities"
					/>

					<TakeawaysItem
						Icon={FaChartBar}
						description="Leverage data analytics to gain valuable insights and make informed decisions, unlocking new possibilities for growth and success.
"
						heading="Data-driven Insights"
					/>
				</div>
			</div>
		</section>
	);
};
export default Takeaways;
