const {Router} = require('express');

const router = Router();
const {
    getAllData,
    getByID,
    postData
} = require('../controllers/data.controllers')





router.get('/', getAllData);

router.get('/:id', getByID);

router.post('/', postData)



module.exports = router;