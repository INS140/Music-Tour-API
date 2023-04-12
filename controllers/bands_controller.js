const bands = require('express').Router()
const db = require('../models')
const { Band } = db

// READ/SHOW ALL

bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll()
        res.status(200).json(foundBands)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server Error' })
    }
})

// READ/SHOW

bands.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json(foundBand)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server Error' })
    }
})

// CREATE

bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(201).json({ message: 'Band created', data: newBand })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server Error' })
    }
})

// UPDATE

bands.put('/:id', async (req, res) => {
    try {
        const updatedBand = await Band.update(
            req.body, { where: { band_id: req.params.id } }
        )
        res.status(200).json({ message: 'Band updated', data: updatedBand})
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server Error' })
    }
})

// DELETE

bands.delete('/:id', async (req, res) => {
    try {
        const deletedBand = await Band.destroy({
            where: { band_id: req.params.id }
        })
        res.status(200).json({ message: 'Band deleted', data: deletedBand })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server Error' })
    }
})

module.exports = bands