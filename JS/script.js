function inform(){
    alert("나는 alert입니다")
}
function grade(){
   alert("성적이 확인 되었습니다") 
}
function grade(){
    // 합계: 글씨 크기를 30px로 바꾸어라.
    // 1) 합계를 가지고 있는 태그를 찾아서 id 속성(total)부여
    // 2) fontSize CSS 속성을 '30px'로 변경
    
    //document.getElementById('totall').style.fontSize='30px';
    // $('#total').css({
    //     fontSize:30
    // });
    // $('#total').css('fontSize',30);
    $('#total').css('fontSize',"30px");

    $('#first_g').css(
        "color","red"
    );
    $('#second_g').css("color","red");
    $('#third_g').css("color","red");
    var kor1 = parseInt(document.getElementById("kor1").innerHTML);
    var kor2 = parseInt(document.getElementById("kor2").innerHTML);
    first.innerHTML=kor1+kor2;
    // first.style.color="darkblue";
    var eng1 = parseInt(document.getElementById("eng1").innerHTML);
    var eng2 = parseInt(document.getElementById("eng2").innerHTML);
    var first = document.getElementById(first_g);
    first.innerHTML=eng1+eng2;
    // first.style.color="darkblue";
    var mat1 = parseInt(document.getElementById("mat1").innerHTML);
    var mat2 = parseInt(document.getElementById("mat2").innerHTML);
    first.innerHTML=mat1+mat2;
    // first.style.color="darkblue";
}