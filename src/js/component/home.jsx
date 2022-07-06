import React, { useState } from "react";




const Home = () => {
	let [seleccion, setSeleccion] = useState("");

	return (
		<div>
			
			<div id="semConter">
				<div className={seleccion === "red" ? "ligthactive red" : "ligth red"} onClick={()=> setSeleccion("red")}></div>
				<div className={seleccion === "yellow" ? "ligthactive yellow" : "ligth yellow"} onClick={ ()=> setSeleccion("yellow")}></div>
				<div className={seleccion === "green" ? "ligthactive green" : "ligth green"} onClick={()=> setSeleccion ("green")} ></div>
				<div id="semTop"></div>

			</div>
		</div>
	);
};

export default Home;
