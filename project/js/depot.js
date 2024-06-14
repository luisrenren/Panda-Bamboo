$(function(){

    /*get请求把数据库的数据搬到网页 */
    $.get('/list',function(data){
        // console.log(data);
        for(var i=0;i<data.length;i++){
            var html='<tr>';
                for(var key in data[i]){
                    html+='<td>'+data[i][key]+'</td>';
                }
            html+='<td><button id="change" class="btn btn-primary">修改</button>'+
                '<button id="del" class="btn btn-danger">删除</button></td></tr>';
            //添加到网页
            $('#table').append(html);
        }
    },'json')

    //添加物品 按钮
    $('#btn-add').click(function(){
        $('#addobject').show();
    })

    //添加物品 取消按钮
    $('#cancel-btn').click(function(){
        $('#addobject').hide();
        //清空输入框的信息
        $('#add-object').val('');
        $('#add-amount').val('');
        $('#add-access').val('');
    })

    //添加物品 保存按钮
    $('#save-btn').click(function(){
        var userdata=$('#addformdata').serialize();
            console.log(userdata);
            $.post('/addobject',userdata,function(data){
                if(data.status==0){
                    alert(data.message);
                    $('#adduser').hide();

                    //刷新页面
                    window.location.reload();
                }else{
                    alert(data.message);
                }
            },'json');
        
    })

    //修改 按钮 要写委托事件
    $('#table').on('click','#change',function(){
        $('#editobject').show();
        $td=$(this).parent().parent().children();
        $('#edit-id').val($td.eq(0).text());
        $('#edit-object').val($td.eq(1).text());
        $('#edit-amount').val($td.eq(2).text());
        $('#edit-access').val($td.eq(3).text());

    })

    //修改 取消按钮
    $('#edit-cancel-btn').click(function(){
        $('#editobject').hide();
        //清空
        $('#edit-id').val('');
        $('#edit-object').val('');
        $('#edit-amount').val('');
        $('#edit-access').val('');
    })

    //修改 保存按钮
    $('#edit-save-btn').click(function(){
        var objectdata=$('#editformdata').serialize();
            console.log(objectdata);
            $.post('/changeobject',objectdata,function(data){
                if(data.status==0){
                    alert(data.message);
                    $('#editobject').hide();

                    //更新
                    window.location.reload();
                }else{
                    alert(data.message);
                }
            },'json');
    })

    //删除按钮 要用委托事件
    $('#table').on('click','#del',function(){
        $id=$(this).parent().parent().children().eq(0);
        console.log($id.text());
        var objectdata={id:$id.text()};
            $.post('/delete',objectdata,function(data){
                if(data.status==0){
                    alert(data.message);
                    //更新
                    window.location.reload();
                }else{
                    alert(data.message);
                }
            },'json')
    })

    //返回首页
    $('#back').click(function(){
        window.location.href='/home.html';
    })


})