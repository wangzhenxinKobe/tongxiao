$(function () {
    $('.nav').on("mouseover",'li',function () {
        var nav_class = $(this).attr('data-nav');
        //alert(nav_class);
        $(this).css({
            'border-bottom-color':'#e03137'
        }).find('a').css({'color':'#e03137'});

        $('.'+nav_class).show();
    });
    $('.nav').on("mouseleave",'li',function () {
        var nav_class = $(this).attr('data-nav');
        //alert(nav_class);

        $(this).css({
            'border-bottom-color':'transparent'
        }).find('a').css({'color':'#393636'});
        $('.'+nav_class).hide();
    });
    $('.navbox').on("mouseover",function () {
        var  nav_class = $(this).attr('class');
        var nav_data = nav_class.split(' ');
        var nav = nav_data[0];

        $("[data-nav=" + nav +']').css({
            'border-bottom-color':'#e03137'
        }).find('a').css({'color':'#e03137'});
        $(this).show();
    });
    $('.navbox').on("mouseleave",function () {
        var  nav_class = $(this).attr('class');
        var nav_data = nav_class.split(' ');
        var nav = nav_data[0];
        $("[data-nav=" + nav +']').css({
            'border-bottom-color':'transparent'
        }).find('a').css({'color':'#393636'});
        $(this).hide();
    });
    $('.sele').on('click',function () {
        $('.selel').slideToggle();
    })
    $('.selel').on('click','li',function () {
        var text = $(this).text();
        $('.sele').children('p').html(text);
        $(this).addClass('cur').siblings('li').removeClass('cur');
        $(this).parents('.selel').slideUp();
    })
    $('.repor').on('click','.top',function () {
        $(this).parents('.repor').find('.con').slideToggle();
        $(this).parents('.repor').siblings('.repor').find('.con').slideUp();

    })
});

function down1(){
        var name=$('#name1').val();
        var bianhao=$('#bianhao1').val();
        var shen=$('#shen1').val();
        if(name=='' || bianhao=='' || shen==''){
            alert('请填写完整信息');
            return false;
        }
        $.ajax({
            type:'post',
            url:'down.php?act=one',
            data:{name:name,bianhao:bianhao,shen:shen},
            success:function(date){
                if(date==''){
                    alert('您输入的信息有误，请核对！')
                    return false;
                }else{
                    location.href=date;
                }

            }
        })

    }

function down2(){
    var name=$('#name2').val();
    var bianhao=$('#bianhao2').val();
    var shen=$('#shen2').val();
    if(name=='' || bianhao=='' || shen==''){
        alert('请填写完整信息');
        return false;
    }
    $.ajax({
        type:'post',
        url:'down.php?act=two',
        data:{name:name,bianhao:bianhao,shen:shen},
        success:function(date){
            if(date==''){
                alert('您输入的信息有误，请核对！')
                return false;
            }else{
                location.href=date;
            }

        }
    })

}