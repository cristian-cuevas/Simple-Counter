import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({counter, uno, dos, tres, cuatro, cinco, seis}) => {
	return (
		<div className="container justify-content-center">
			<div className="d-flex flex-row-reverse justify-content-center fs-1 mt-5">
				<div className="p-3 bg-dark text-white border"><i class="fa-solid fa-clock"></i></div>
				<div className="p-3 bg-dark text-white  border"> {Math.floor(uno % 10)}  </div>
				<div className="p-3 bg-dark text-white  border">{Math.floor(dos % 10)}</div>
				<div className="p-3 bg-dark text-white border">{Math.floor(tres % 10)}</div>
				<div className="p-3 bg-dark text-white border">{Math.floor(cuatro % 10)}</div>
				<div className="p-3 bg-dark text-white border">{Math.floor(cinco % 10)}</div>
				<div className="p-3 bg-dark text-white border">{Math.floor(seis % 10)}</div>
			</div>
		</div>
	);
};

export default Home;