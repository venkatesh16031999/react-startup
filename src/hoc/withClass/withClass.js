import React from 'react';

const withClass=(Wrappedcomponent,className)=>{
	return props=>(
		<div className={className}>
		<Wrappedcomponent {...props}/>
		</div>
	)
}
export default withClass;