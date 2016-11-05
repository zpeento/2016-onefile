//加载express模块
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000
var app = express();


app.set('view engine','jade');
app.set('views', './views');
// app.set('port',3000)
//加载解析urlencoded请求体的中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'bower_components')))

app.listen(port);

console.log('onefilm started on port: ' + port);

app.get('/',function(req,res){
	var data={
		title:'onefilm 首页',
		movies:[{
			title:'机械战警',
			_id:1,
			poster:'http://r3.yking.com/05160000530EEB63675839160D0B79D5'
		},
		{
			title:'机械战警',
			_id:2,
			poster:'http://r3.yking.com/05160000530EEB63675839160D0B79D5'
		},
		{
			title:'机械战警',
			_id:3,
			poster:'http://r3.yking.com/05160000530EEB63675839160D0B79D5'
		},
		{
			title:'机械战警',
			_id:4,
			poster:'http://r3.yking.com/05160000530EEB63675839160D0B79D5'
		},
		{
			title:'机械战警',
			_id:5,
			poster:'http://r3.yking.com/05160000530EEB63675839160D0B79D5'
		},
		{
			title:'机械战警',
			_id:6,
			poster:'http://r3.yking.com/05160000530EEB63675839160D0B79D5'
		}]
	}
	res.render('pages/index',data)
})

app.get('/movie:id',function(req,res){
	var data = {
		title:'onefilm 详情页',
		movies:[{
			doctor:'何塞',
			country:'美国',
			title:'机械战警',
			year:2014,
			poster:'http://r3.yking.com/05160000530EEB63675839160D0B79D5',
			language:'英语',
			flash:'http://r3.yking.com/05160000530EEB63675839160D0B79D5',
			summary:'这是一部非常好看的电影喔'
		}]
	}
	res.render('pages/detail',data)
})

app.get('/admin/movie',function(req,res){
	var data = {
		title:'onefilm 后台录入页',
		movie:{
			title:'',
			doctor:'',
			country:'',
			year:'',
			poster:'',
			flash:'',
			summary:'',
			language:''
		}
	}
	res.render('pages/admin',data)
})

app.get('/admin/list',function(req,res){
	var data = {
		title:'onefilm 列表页',
		movies:{
			title:'机械战警',
			_id:1,
			doctor:'何塞',
			country:'美国',
			title:'机械战警',
			year:2014,
			moment:0,
			language:'英语',
			flash:'http://r3.yking.com/05160000530EEB63675839160D0B79D5',
			summary:'这是一部非常好看的电影喔'
		}
	}
	res.render('pages/list',data)
})