interface Props {
	heading: string;
	description: string;
}
const SummaryItem = ({ heading, description }: Props) => {
	return (
		<li className="border-bottom py-3">
			<h5>{heading}</h5>
			<p>{description}</p>
		</li>
	);
};
export default SummaryItem;
