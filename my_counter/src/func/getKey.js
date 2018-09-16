	const getKey = (str) => {
		let key = 0;
		for (let i = 0; i < str.length; i++) {
			key += str.charCodeAt(i);
		}
		return key.toString();
	}

export default getKey