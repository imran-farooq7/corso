import Image from "next/image";
interface Props {
	img: string;
	heading: string;
	description: string;
	subDescription: string;
}
const Details = ({ description, heading, img, subDescription }: Props) => {
	return (
		<div className="row align-items-center pt-7">
			<div className="col-lg-6">
				<Image
					src={img}
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
				<h2>{heading}</h2>
				<p>{description}</p>
				<p>{subDescription}</p>
			</div>
		</div>
	);
};
export default Details;
