interface Props {
	number: number;
	heading: string;
	description: string;
}
const Point = ({ description, heading, number }: Props) => {
	return (
		<div className="d-flex gap-3">
			<div className="number">
				<span className="bg-primary py-2 px-4 fs-3 rounded-circle">
					{number}
				</span>
			</div>
			<div>
				<h3 className="fs-4">{heading}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};
export default Point;
