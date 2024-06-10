

import React, { useState } from "react"; 
//FunctionalComponent
const App= () => { 
	const [count, setCount] = useState(0); 

	const increase = () => { 
		setCount(count + 1); 
	} 

	return ( 
		<div style={{ margin: '50px' }}> 
			 
			<h3>Counter App using Functional Component : </h3> 
			<h2>{count}</h2> 
			<button onClick={increase}>Add</button> 
		</div> 
	) 
} 

export default App; 