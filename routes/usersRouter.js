const router = require("express").Router();
let User = require("../models/user.model");

router.route('/').get((req, res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('error:  ', err));
});

router.route('/add').post((req, res) =>{
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User Added!!'))
    .catch(err => res.status(400).json('Error:', err));
});

//delete request to delete exercise based on ID
router.route('/:id').delete((req, res) =>{
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted"))
    .catch(err => res.status(400).json('error:  ', err));
});

router.route('/update/:id').post((req, res) =>{
    User.findById(req.params.id)
    .then(User => {
        User.username = req.body.username;

        User.save()
        .then(() => res.json("exercise updated!"))
        .catch(err => res.status(400).json('error:  ', err))
    })
    .catch(err => res.status(400).json('error:  ', err));
});

module.exports = router;