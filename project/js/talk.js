$(function(){
    $('#talk-btn').click(function(){
        var msg=$('#input-talk').val();
        console.log(msg);

        var reg1=/[你好]/g;
        var reg2=/[再见]/g;
        var reg3=/[睡觉]/g;
        var reg4=/[吃饭]/g;
        var reg5=/[哈哈]/g;
        var reg6=/[呵呵]/g;
        var reg7=/[名字]/g;
        var reg8=/[几岁]/g;
        var reg9=/[歌]/g;
        var reg10=/[呃]/g;
        var reg11=/[可爱]/g;

        if(msg.match(reg1)){
            if(msg.match(reg1).toString().replace(/\,/g,'')=='你好'){
                $('#talk').html('你好呀！o(*￣▽￣*)ブ');
            }
        }
    
        if(msg.match(reg2)){
            if(msg.match(reg2).toString().replace(/\,/g,'')=='再见'){
                $('#talk').html('再见！下次再来噢~ヾ(￣▽￣)Bye~Bye~');
        }
        }

        if(msg.match(reg3)){
            if(msg.match(reg3).toString().replace(/\,/g,'')=='睡觉'){
                $('#talk').html('晚安咯(￣o￣) . z Z');
        }
        }

        if(msg.match(reg4)){
            if(msg.match(reg4).toString().replace(/\,/g,'')=='吃饭'){
                $('#talk').html('我也想吃饭，我喜欢大米(●ˇ∀ˇ●)');
        }
        }
        
        if(msg.match(reg5)){
                var index=Math.floor(Math.random()*(3-1+1))+1;
                if(index==1){
                    $('#talk').html('你在笑什么？(⊙ˍ⊙)');
                }else if(index==2){
                    $('#talk').html('哈哈哈哈哈哈哈哈哈哈哈哈哈');
                }else if(index==3){
                    $('#talk').html('哈哈哈哈?');
                }
        }
        
        if(msg.match(reg6)){
                $('#talk').html('呵呵');
        }

        if(msg.match(reg7)){
            if(msg.match(reg7).toString().replace(/\,/g,'')=='名字'){
                $('#talk').html('我的名字是斑比，小鹿Bambi的那个斑比，不过亲妈一般不会直接叫我名字，她叫我“竹竹”。');
        }
        }

        if(msg.match(reg8)){
            if(msg.match(reg8).toString().replace(/\,/g,'')=='几岁'){
                $('#talk').html('我也不知道我几岁了，嘿嘿');
        }
        }

        if(msg.match(reg9)){
            if(msg.match(reg9).toString().replace(/\,/g,'')=='歌'){
                var index=Math.floor(Math.random()*(5-1+1))+1;
                if(index==1){
                    $('#talk').html('（music）哥有老婆她很爱我，漂不漂亮都是哥的选择，哥有老婆别再诱惑我，不能背叛她和你去生活~');
                }else if(index==2){
                    $('#talk').html('（music）哎,什么水面打跟斗嘞,什么水面起高楼嘞~什么水面撑阳伞嘞,什么水面共白头嘞~');
                }else if(index==3){
                    $('#talk').html('（music）假烟假酒假朋友，假朋友~假情假意你假温柔~');
                }else if(index==4){
                    $('#talk').html('（music）随风奔跑自由是方向，追逐雷和闪电的力量~');
                }else if(index==5){
                    $('#talk').html('（music）我像只鱼儿在你的荷塘，只为和你守候那皎白月光~');
                }
                
        }
        }

        if(msg.match(reg10)){
            $('#talk').html('呃？？？呃什么呃哦');
        }

        if(msg.match(reg11)){
            if(msg.match(reg11).toString().replace(/\,/g,'')=='可爱'){
                $('#talk').html('我也是这么觉得的(｡･∀･)ﾉﾞ');
            }
        }


        if(!msg.match(reg1)
        &&!msg.match(reg2)
        &&!msg.match(reg3)
        &&!msg.match(reg4)
        &&!msg.match(reg5)
        &&!msg.match(reg6)
        &&!msg.match(reg7)
        &&!msg.match(reg8)
        &&!msg.match(reg9)
        &&!msg.match(reg10)
        &&!msg.match(reg11)){
            var index=Math.floor(Math.random()*(3-1+1))+1;
                if(index==1){
                    $('#talk').html('我还不是很智能，不是很懂你在说什么！இ௰இ');
                }else if(index==2){
                    $('#talk').html('呃………………（宕机）');
                }else if(index==3){
                    $('#talk').html('听不懂噢');
                }
        }

        //清空
        $('#input-talk').val('');

        })
})