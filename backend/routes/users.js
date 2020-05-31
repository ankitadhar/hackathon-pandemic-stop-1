const router = require('express').Router();
var nodemailer = require('nodemailer');
let User = require('../modals/user.modal');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const country = req.body.country;
    const age = Number(req.body.age);
    const phone = Number(req.body.phone);
    const email_verified = false;
    const login = true;

    const newUser = new User({
        email,
        password,
        country,
        age,
        phone,
        email_verified,
        login
    });

    newUser.save()
        .then((response) => {
            console.log(response);
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'product.important.info@gmail.com',
                    pass: 'gghfiuylnvgzzzsd'
                }
                });
            
                var mailOptions = {
                    from: 'product.important.info@gmail.com',
                    to: email,
                    subject: 'Pandemic Stop 1: Email Verification',
                    text: 'Hi, Please Verify your email by clicking on the following link: \n http://192.168.1.145:5000/users/verifymail/'+response._id
                        +'\n then reload browser to start posting grievances'
                };
            
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
            res.json('User added!');
        })
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/verifymail/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.email_verified = true;

            user.save()
                .then(() => res.json('Your email id is verified!'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.password = req.body.password;
            user.country = req.body.country;
            user.age = req.body.age;
            user.phone = req.body.phone;

            user.save()
                .then(() => res.json('User details updated!'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/login').post((req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.find({ email: email })
        .then(userList => {
            if(userList.length > 0) {
                const user = userList[0];
                if (user.password == password) {
                    user.login = true;
                }
                user.save();
                res.json({"user":user});
            } else {
                res.json({"user":"user not found"});
            }
        })
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => {
            res.json("user deleted");
        })
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/logout/:id').post((req,res) => {
    User.findById(req.params.id)
        .then(user => {
            if(!user) {
                res.json({"user":"user not found"});
            } else {
                user.login = false;
                user.save();
                res.json({"logout":true});
            }
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;