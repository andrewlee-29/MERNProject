const express = require('express')
const router = express.Router()
const {getGoals,createGoals,updateGoals,deleteGoals} = require('../Controllers/goalController')

router.get('/', getGoals)
router.post('/', createGoals)
router.put('/:id', updateGoals)
router.delete('/:id', deleteGoals)

module.exports = router