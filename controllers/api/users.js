var router = require('express').Router(),
User = require('../../models/user'),
bcrypt = require('bcrypt'),
jwt = require('jwt-simple'),
config = require('../../config');

router.get('/', function(req,res,next){
	if(!req.headers['x-auth']){
		return res.sendStatus(401);
	}

	var auth = jwt.decode(req.headers['x-auth'], config.secretKey);

	User.findOne({username: auth.username}, function(err,user){
		if (err) {return next(err)}
			res.json(user);
	})
})

router.post('/', function(req,res,next){
	var user = new User({username: req.body.username});
	bcrypt.hash(req.body.password,10,function(err, hash){
		if(err) {return next(err)}
			user.password = hash;
		user.save(function(err){
			if (err) {return next(err)}
				res.sendStatus(201)
		})
	})
})

module.exports = router;
