import Image from "next/image";

const Carousel = () => {
	return (
		<div id="slider" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button
					className="active"
					type="button"
					data-bs-slide-to="0"
					data-bs-target="#slider"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-slide-to="1"
					data-bs-target="#slider"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-slide-to="2"
					data-bs-target="#slider"
					aria-label="Slide 3"
				></button>
			</div>
			<div className="carousel-inner rounded-5">
				<div className="carousel-item active">
					<Image
						src="/header-slide-1.jpg"
						alt=""
						width={0}
						height={0}
						sizes="100vw"
						className="d-block w-100 h-100 rounded-5"
						priority
					/>
				</div>
				<div className="carousel-item">
					<Image
						src="/header-slide-2.jpg"
						alt=""
						width={0}
						height={0}
						sizes="100vw"
						className="d-block w-100 h-100 rounded-5"
						priority
					/>
				</div>
				<div className="carousel-item">
					<Image
						src="/header-slide-1.jpg"
						alt=""
						width={0}
						height={0}
						sizes="100vw"
						className="d-block w-100 h-100 rounded-5"
						priority
					/>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-slide="prev"
				data-bs-target="#slider"
			>
				<span className="carousel-control-prev-icon"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-slide="next"
				data-bs-target="#slider"
			>
				<span className="carousel-control-next-icon"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};
export default Carousel;
