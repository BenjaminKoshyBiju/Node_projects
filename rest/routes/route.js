import express from 'express';
import model from '../Model/mode.js'

const router = express.Router()


router.get('/', (req, res) => {
    res.send('Get All API')
})

router.get('/api', (req, res) => {
    res.send('no API')
})

router.post('/post',(req,res)=>res.send('Post api'))

router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

export default router;