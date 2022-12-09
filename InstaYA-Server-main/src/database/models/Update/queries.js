import { Update } from '@models/Update';

export async function findUpdatesByUser(userId) {
	return await Update.find({ fromOwner: userId });
}

export async function saveUpdate(userId, body) {
	const {
		isFragile,
		width,
		height,
		depth,
		weight,
		due,
		fromCity,
		fromAddress,
		toCity,
		toAddress,
		toOwner,
		toOwnerId,
	} = body;

	const payload = {
		fromOwner: userId,
		isFragile,
		width,
		height,
		depth,
		weight,
		due,
		fromCity,
		fromAddress,
		toCity,
		toAddress,
		toOwner,
		toOwnerId,
	};

	const update = new Update(payload);
	await update.save();
	return update;
}
