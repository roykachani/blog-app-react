import * as yup from 'yup';

export const schema = yup.object().shape({
	title: yup.string().max(150).required(),
	photo: yup.string(),
	description: yup.string().required(),
	category: yup.string().required(),
});
