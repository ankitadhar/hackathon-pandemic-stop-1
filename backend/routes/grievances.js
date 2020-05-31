const router = require('express').Router();
let Grievance = require('../modals/grievance.modal');
let User = require('../modals/user.modal');

router.route('/').get((req, res) => {
    Grievance.find()
        .then(grievances => res.json(grievances))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const email = req.body.email;

    User.find({ email: email })
        .then(userList => {
            if(userList.length > 0) {
                const user = userList[0];
                if(user.email_verified) {
                    const category = req.body.category
                    const target_src = req.body.target_src;
                    const description = req.body.description;
                    const country = req.body.country;
                    const state = req.body.state;
                    
                    const phone = req.body.phone;
                    const status = "open";
                
                    const newGrievance = new Grievance({
                        category,
                        target_src,
                        description,
                        country,
                        state,
                        email,
                        phone,
                        status
                    });
                
                    newGrievance.save()
                        .then(() => res.json('Grievance added!'))
                        .catch(err => res.status(400).json('Error: '+err));
                } else {
                    res.json("E-Mail is not verified");
                }
            } else {
                res.json({"user":"user not found"});
            }
        })
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req, res) => {
    Grievance.findById(req.params.id)
        .then(grievance => res.json(grievance))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req, res) => {
    Grievance.findByIdAndDelete(req.params.id)
        .then(grievance => res.json('Grievance deleted!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req, res) => {
    Grievance.findById(req.params.id)
        .then(grievance => {
            grievance.category = req.body.category;
            grievance.target_src = req.body.target_src;
            grievance.description = req.body.description;
            grievance.country = req.body.country;
            grievance.state = req.body.state;
            grievance.email = req.body.email;
            grievance.phone = req.body.phone;
            grievance.status = req.body.status;

            grievance.save()
                .then(() => res.json('Grievance updated!'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/user/:email').get((req, res) => {
    Grievance.find({ email: req.params.email })
        .then(grievance => res.json(grievance))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/category/:category').get((req, res) => {
    Grievance.find({ category: req.params.category })
        .then(grievance => res.json(grievance))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;