function login () {
    var Conf = confirm('Để nhập và lấy dữ liệu bảng điểm, bạn phải khai báo');
    while(Conf != true){
        var Conf = confirm('Để nhập và lấy dữ liệu bảng điểm, bạn phải khai báo');
    }
    var user = prompt('Hãy nhập mã học sinh hoặc mã giáo viên:');    
    while (user = "" || user.length < 6) {
        user = prompt('Hãy nhập lại mã học sinh hoặc mã giáo viên (độ dài phải hơn 6):');
    }
}
login();
var list = [];
var dem= 0;
$(document).ready(function(){
    $("#btnInput").click(function(){
        dem++;
        var stt = dem;
        var name1 = $("input[name='name']").val();
        var math1 = $("input[name='math']").val();
        var physic1 = $("input[name='physics']").val();
        var chemystry1 = $("input[name='chemical']").val();
        testScore = {
            id: dem,
            name: name1,
            math: math1,
            physical: physic1,
            chemistry: chemystry1,
            dtb: "?",
            xl: "?"
        };
        list.push(testScore);
        $('#markOfTable tr:last').after(`<tr class="sd"><td>${stt}</td><td>${name1}</td><td>${math1}</td>
        <td>${physic1}</td><td>${chemystry1}</td><td>?</td><td>?</td></tr>`);
        $('td').css('border','1px solid black');
        $("input[name='name']").val("");
        $("input[name='math']").val("");
        $("input[name='physics']").val("");
        $("input[name='chemical']").val("");
    });
    console.log(list)
    $("#avg").click(function(){
        for (let i = 0; i < list.length; i++) {
            list[i].dtb = (parseFloat($(".sd").eq(i).children('td:nth-child(3)').text()) + parseFloat($(".sd").eq(i).children('td:nth-child(4)').text())
             + parseFloat($(".sd").eq(i).children('td:nth-child(5)').text()))/3;
            var j = list[i].dtb.toFixed(1);
            $(".sd").eq(i).children('td:nth-child(6)').text(`${j}`);           
        }
    })
    $("#hsg").click(function(){
        for(let i = 0; i < list.length; i++){
            if(list[i].dtb>=8.0){
                $(".sd").eq(i).css({'background-color': 'red','color': 'yellow'})
            }
        }
    })
    $("#hl").click(function(){
        for(let i = 0; i < list.length; i++){
            if(list[i].dtb>=8.0){
                $(".sd").eq(i).children('td:nth-child(7)').text('Học sinh giỏi');
            }else if(list[i].dtb<8.0 && list[i].dtb>=6.0) {
                $(".sd").eq(i).children('td:nth-child(7)').text('Học sinh khá');
            }else if(list[i].dtb<6.0 && list[i].dtb>=3.0) {
                $(".sd").eq(i).children('td:nth-child(7)').text('Học sinh trung bình');
            }else if(list[i].dtb<3.0) {
                $(".sd").eq(i).children('td:nth-child(7)').text('Không xếp loại');
            }
        }
    })
    $("#tk").click(function(){
        var tg=0;
        var x;
        for (let i = 0; i < list.length; i++) {
            if(list[i].dtb > tg) {
                tg = list[i].dtb;
                x = list[i];
            }   
            console.log(list[i].name) 
        }
        $('.light-box').animate({'opacity':'1'}, 300,'linear');
        $('.background-box').animate({'opacity':'0.5'},300,'linear');
        $('.background-box').css('display','block');

        $('.light-box').css('display','block');        
        $('#best').text(`Thủ khoa là: ${x.name}. Với số điểm 3 môn: Toán: ${x.math}, Lý: ${x.physical}, Hoá: ${x.chemistry}. `);      
    })
    $(".close").click(function(){
        $('.light-box').animate({'opacity':'0'}, 300,'linear');
        $('.light-box').css('display','none');
        $('.background-box').animate({'opacity':'0'},300,'linear');
        $('.background-box').css('display','none');
    });
    $(".background-box").click(function(){
        $('.light-box').animate({'opacity':'0'}, 300,'linear');
        $('.light-box').css('display','none');
        $('.background-box').animate({'opacity':'0'},300,'linear');
        $('.background-box').css('display','none');
    });
});
    