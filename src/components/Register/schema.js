import * as yup from 'yup';

export const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(4).max(16).required(),
	displayname: yup.string().min(3).required(),
	name: yup.string().min(3).required(),
	lastname: yup.string().required(),
});
