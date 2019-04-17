import axios from 'axios';

const Instances=axios.create(
		{
			baseURL:'https://reactburger-3c563.firebaseio.com/'
		}
	);

export default Instances;
