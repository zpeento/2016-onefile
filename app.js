//加载express模块
var express = require('express');
var app = express();
var port = process.env.PORT || 3000

app.set('view engine','jade');
app.set('views', './views');
// app.set('port',3000)
app.listen(port);

console.log('imooc started on port: ' + port)

app.get('/',function(req,res){
	// res.send('hello world')
	res.render('index',{title:'imooc 首页'})
})

app.get('/detail',function(req,res){
	res.render('detail',{title:'imooc 详情页'})
})
app.get('/admin',function(req,res){
	res.render('admin',{title:'imooc 后台录入页'})
})
app.get('/list',function(req,res){
	res.render('list',{title:'imooc 列表页'})
})