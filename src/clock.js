import React from 'react';
import App from './App.js';

const Clock = (props) => {
	return(
		<div>
			<span>{props.time.hr} : {props.time.min} : {props.time.sec} </span><br/><br/>
		</div>
		)
}
export default Clock;