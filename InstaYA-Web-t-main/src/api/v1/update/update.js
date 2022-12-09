import { base } from '../../utilities/axios';
import { v1Tag } from '../constants';

const controller = `/${v1Tag}/update`;

export const findAll = () =>
	new Promise((resolve, reject) => {
		base
			.get(`${controller}/find-all`)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});

export const addNewUpdate = (body) =>
	new Promise((resolve, reject) => {
		base
			.post(`${controller}/`, body)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
