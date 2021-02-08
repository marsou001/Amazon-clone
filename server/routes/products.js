import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.status(200).send('/'));
router.get('/:id', (req, res) => res.status(200).send('/get id'));
router.post('/', (req, res) => res.status(201).send('post'));
router.patch('/:id', (req, res) => res.status(201).send('patch'));
router.delete('/:id', (req, res) => res.status(201).send('delete'));

export default router;