var express = require('express');
var hotelRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

function router(menu){
	hotelRouter.route('/')
		.get(function(req,res){
			mongodb.connect(url, function(err,connection){
				if(err){
					res.status(501).send("Error while connecting")
				}else{
					const dbo = connection.db('maynode');
					dbo.collection('hotels').find({}).toArray(function(err,data){
						if(err){
							res.status(501).send("Error while fetching")
						}else{
							res.render('hotel',{title:'Hotels Page',hotelData:data,menu:menu})
						}
					})
				}
			})
		})

	hotelRouter.route('/details/:id')
		.get(function(req,res){
			//var id = req.params.id;
			var {id} = req.params;
			mongodb.connect(url, function(err,connection){
				if(err){
					res.status(501).send("Error while connecting")
				}else{
					const dbo = connection.db('maynode');
					dbo.collection('hotels').findOne({id:id},function(err,data){
						if(err){
							res.status(501).send("Error while fetching")
						}else{
							res.render('hotelDetails',{title:data.name,details:data,menu:menu})
						}
					})
				}
			})
		})

	return hotelRouter
}

module.exports = router