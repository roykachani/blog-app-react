export const setAuthStorage = (obj) => {
	window.localStorage.setItem('authBlogApp', JSON.stringify(obj));
};

export const getAuthStorage = () => {
	return JSON.parse(window.localStorage.getItem('authBlogApp'));
};

export const removeAuthStorage = () => {
	window.localStorage.removeItem('authBlogApp');
};
