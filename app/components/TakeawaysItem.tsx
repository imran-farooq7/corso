import { IconType } from "react-icons";

interface Props {
	heading: string;
	description: string;
	Icon: IconType;
}
const TakeawaysItem = ({ description, heading, Icon }: Props) => {
	return (
		<div className="col-md-4">
			<div className="card mb-4 rounded-0 border-0 p-3 bg-white">
				<div className="card-body text-center">
					<span className="text-primary d-inline-block bg-light rounded-circle p-4 my-4">
						<Icon size={"48"} />
					</span>
					<h5 className="card-title">{heading}</h5>
					<p className="card-text">{description}</p>
				</div>
			</div>
		</div>
	);
};
export default TakeawaysItem;
