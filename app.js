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

console.log('imooc started on port: ' + port);

app.get('/',function(req,res){
	var data={
		title:'imooc 首页',
		movies:[{
			title:'机械战警',
			_id:1,
			poster:'htte://www.baidu.com'
		},
		{
			title:'机械战警',
			_id:2,
			poster:'htte://www.baidu.com'
		},
		{
			title:'机械战警',
			_id:3,
			poster:'htte://www.baidu.com'
		},
		{
			title:'机械战警',
			_id:4,
			poster:'htte://www.baidu.com'
		},
		{
			title:'机械战警',
			_id:5,
			poster:'htte://www.baidu.com'
		},
		{
			title:'机械战警',
			_id:6,
			poster:'htte://www.baidu.com'
		}]
	}
	res.render('pages/index',data)
})

app.get('/movie:id',function(req,res){
	var data = {
		title:'imooc 详情页',
		movies:[{
			doctor:'何塞',
			country:'美国',
			title:'机械战警',
			year:2014,
			poster:'http://www.baidu.com',
			language:'英语',
			flash:'http://www.baidu.com',
			summary:'这是一部非常好看的电影喔'
		}]
	}
	res.render('pages/detail',data)
})

app.get('/admin/movie',function(req,res){
	var data = {
		title:'imooc 后台录入页',
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
		title:'imooc 列表页',
		movies:{
			title:'机械战警',
			_id:1,
			doctor:'何塞',
			country:'美国',
			title:'机械战警',
			year:2014,
			moment:0,
			language:'英语',
			flash:'http://www.baidu.com',
			summary:'这是一部非常好看的电影喔'
		}
	}
	res.render('pages/list',data)
})