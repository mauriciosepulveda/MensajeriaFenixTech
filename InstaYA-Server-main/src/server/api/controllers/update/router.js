import express from 'express';
import { findUpdatesByUser, saveUpdate } from '@models/Update/queries';
import { logger, validate } from '../../middlewares';
import { hasSession } from '../../middlewares/authorization';
import { newUpdateSchema } from './schemas';

const router = express.Router();

router.use(logger);

router.get('/find-all', hasSession, async (req, res) => {
	try {
		const query = await findUpdatesByUser(req.session_payload.id);

		res.status(200).json({ payload: query, message: 'Updates fetched' });
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
		res.status(500).json(error.message);
	}
});

router.post(
	'/',
	hasSession,
	validate(newUpdateSchema),
	async ({ body, session_payload }, res) => {
		try {
			const payload = await saveUpdate(session_payload.id, body);

			res.status(200).json({ payload, message: 'Update saved!' });
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error);
			res.status(500).json(error.message);
		}
	},
);

export { router };
