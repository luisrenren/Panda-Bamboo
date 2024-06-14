var http = require("http");
var url = require("url");
var fs = require("fs");
var querystring=require('querystring');

var mysql=require('mysql');
//创建链接得到对象
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '123',
  database : 'ajaxdemo'
});
 //链接数据库
    connection.connect(function(err) {
        if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

console.log('connected as id ' + connection.threadId);
});


var app = http.createServer(function (req, res) {
        var url_obj = url.parse(req.url);
        if(url_obj.pathname === "/"){
          render("./project/login.html", res);
          //直接返回 不会去执行后面的代码
          return;
        }

        //登录账号
        if(url_obj.pathname=='/login'&req.method=='POST'){
          res.setHeader('content-type','text/html;charset-utf-8');
          //接受前台的数据
          var user_info='';
          req.on('data',function(chunk){
            user_info += chunk;
          });
          req.on('end',function(err){
            // console.log(user_info);
            if(!err){
              var user_obj =querystring.parse(user_info);
              var sql='select * from admin where username="'+user_obj.username
              +'" and password="'+user_obj.password+'"';

              connection.query(sql,function(err,result){
                // console.log(result);
                if(!err&&result&&result.length!=0){
                    res.write('{"status":0,"message":"登陆成功"}');
                }else{
                    res.write('{"status":1,"message":"用户名或密码错误"}');
                }
                res.end();
              })
            }
          })
          return;
        }

        //注册账号
        //注册
    if(url_obj.pathname=='/register'&req.method=='POST'){
      res.setHeader('content-type','text/html;charset-utf-8');
      //接受前台的数据
      var reg_info='';
      req.on('data',function(chunk){
        reg_info += chunk;
      });
      req.on('end',function(err){
        // console.log(reg_info);
        if(!err){
          var reg_obj =querystring.parse(reg_info);
          
          if(reg_obj.regname==''){
            res.write('{"status":1,"message":"用户名不能为空！"}');
          }else if(reg_obj.regword!=reg_obj.repassword){
            res.write('{"status":2,"message":"两次输入的密码不一致！"}');
          }else{

            var sql='INSERT INTO admin (username,password) VALUES ("'+reg_obj.regname+'", "'+reg_obj.regword+'")';

            connection.query(sql,function(err,result){
            // console.log(result);
            if(!err&&result&&result.length!=0){
              res.write('{"status":0,"message":"注册成功"}');
            }else{
              res.write('{"status":3,"message":"注册失败"}');
            }
              res.end();
            })
          }
        }
      })
      
      return;
    }

        //请求显示仓库信息的数据列表
        if(url_obj.pathname=='/list'&&req.method=="GET"){
          //查询数据库，返回数据
          var sql = 'select * from mydepot';
          connection.query(sql,function(err,result){
            if(!err&&result&&result.length!=0){
              var json_data=JSON.stringify(result);
              res.write(json_data);
              res.end();
            }
          })
        }

        //单独查询用户名
        if(url_obj.pathname=='/username'&&req.method=="GET"){
          //查询数据库，返回数据
          var sql = 'select username from admin';
          connection.query(sql,function(err,result){
            if(!err&&result&&result.length!=0){
              var json_data=JSON.stringify(result);
              res.write(json_data);
              res.end();
            }
          })
        }

        //添加物品
        if(url_obj.pathname=='/addobject'&&req.method=="POST"){
          res.setHeader('content-type','text/html;charset-utf-8');
          var obj_info='';
          req.on('data',function(chunk){
            obj_info+=chunk;
          })
          req.on('end',function(err){
            if(!err){
              //console.log(obj_info);
              //解析obj_info
              var obj_obj=querystring.parse(obj_info);
              var sql='insert into mydepot (id,object,amount,access) value(null,"'+obj_obj.object+'","'+obj_obj.amount+'","'+obj_obj.access+'")';
              connection.query(sql,function(err,result){
                if(!err&&result&&result.length!=0){
                  res.write('{"status":0,"message":"数据已存入仓库！"}');
                }else{
                  res.write('{"status":1,"message":"添加失败"}');
                }
                res.end();
              })
            }
          })
        }

        //修改物品信息
        if(url_obj.pathname=='/changeobject'&&req.method=="POST"){
          res.setHeader('content-type','text/html;charset-utf-8');
          var obj_info='';
          req.on('data',function(chunk){
            obj_info+=chunk;
          })
          req.on('end',function(err){
            if(!err){
              //console.log(obj_info);
              //解析obj_info
              var obj_obj=querystring.parse(obj_info);
              var sql='UPDATE mydepot set object="'+obj_obj.object+'",amount="'+obj_obj.amount+'",access="'+obj_obj.access+'" WHERE id="'+obj_obj.id+'"';
              connection.query(sql,function(err,result){
                if(!err&&result&&result.length!=0){
                  res.write('{"status":0,"message":"修改物品信息成功"}');
                }else{
                  res.write('{"status":1,"message":"修改物品信息失败"}');
                }
                res.end();
              })
            }
          })
        }

        //删除物品
        if(url_obj.pathname=='/delete'&&req.method=="POST"){
          res.setHeader('content-type','text/html;charset-utf-8');
          var obj_info='';
          req.on('data',function(chunk){
            obj_info+=chunk;
          })
          req.on('end',function(err){
            if(!err){
              //console.log(obj_info);
              //解析obj_info
              var obj_obj=querystring.parse(obj_info);
              var sql='delete from mydepot WHERE id="'+obj_obj.id+'"';
              connection.query(sql,function(err,result){
                if(!err&&result&&result.length!=0){
                  res.write('{"status":0,"message":"删除成功"}');
                }else{
                  res.write('{"status":1,"message":"删除失败"}');
                }
                res.end();
              })
            }
          })
        }


        render("./project"+url_obj.pathname, res);
    });
    
    
    
    app.listen(5000, function (err) {
      if(!err){
        console.log("listening on 5000...");
      }
    })
    
    function render(path, res) {
      //binary 二进制
      fs.readFile(path, 'binary', function (err, data) {
        if(!err){
          res.write(data, 'binary');
          res.end();
        }
      })
    }
