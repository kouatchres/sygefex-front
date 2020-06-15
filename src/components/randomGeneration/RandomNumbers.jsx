import react from 'react';

const RandomNumbers = () => {
	alphanumericUniqueString = () => {
		return Math.random()
			.toString(36)
			.split('')
			.filter(function(value, index, self) {
				return self.indexOf(value) === index;
			})
			.join('')
			.substr(2, 10);
	};
	const createUniqueIDString = (length) => {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	};

	// create random alphanumeric option1
	var tightRandom1 = () => {
		return Math.random().toString(36).substr(2);
	};

	//option 2
	var tightRandom2 = () => {
		return Math.random().toString(36).replace('0.', '');
	};
};
export default RandomNumbers;
export { alphanumericUniqueString, createUniqueIDString, tightRandom2, tightRandom1 };
