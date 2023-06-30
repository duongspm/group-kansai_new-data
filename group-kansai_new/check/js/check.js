$(function(){
  load_data();
});

$(document).on("click", "#answer00_01", function(e) { e.preventDefault(); next_question(1); progress(33); });
$(document).on("click", "#answer00_02", function(e) { e.preventDefault(); next_question(2); progress(83); });
$(document).on("click", "#answer01_01", function(e) { e.preventDefault(); redirect(3); progress(100); });
$(document).on("click", "#answer01_02", function(e) { e.preventDefault(); next_question(3); progress(49); });
$(document).on("click", "#answer02_01", function(e) { e.preventDefault(); redirect(4); progress(100); });
$(document).on("click", "#answer02_02", function(e) { e.preventDefault(); redirect(5); progress(100); });
$(document).on("click", "#answer03_01", function(e) { e.preventDefault(); next_question(4); progress(65); });
$(document).on("click", "#answer03_02", function(e) { e.preventDefault(); next_question(5); progress(65); });
$(document).on("click", "#answer04_01", function(e) { e.preventDefault(); redirect(0); progress(100); });
$(document).on("click", "#answer04_02", function(e) { e.preventDefault(); next_question(6); progress(83); });
$(document).on("click", "#answer05_01", function(e) { e.preventDefault(); redirect(6); progress(100); });
$(document).on("click", "#answer05_02", function(e) { e.preventDefault(); redirect(7); progress(100); });
$(document).on("click", "#answer06_01", function(e) { e.preventDefault(); redirect(1); progress(100); });
$(document).on("click", "#answer06_02", function(e) { e.preventDefault(); redirect(2); progress(100); });

$(document).on("click", "#back00", function(e) { e.preventDefault(); next_question(0); progress(17); $('.backQuestionBtn').removeClass('active'); });
$(document).on("click", "#back01", function(e) { e.preventDefault(); next_question(1); progress(33); });
$(document).on("click", "#back02", function(e) { e.preventDefault(); next_question(3); progress(49); });
$(document).on("click", "#back03", function(e) { e.preventDefault(); next_question(4); progress(65); });


// 変数dataに診断コンテンツ内容を格納
const data = [
	{
    "id" : "00",
		"number" : 'Q.1',
		"question" : "あなたは、どっち？",
		"answer01" : "新しい生活環境で暮らしたい",
		"answer02" : "今の住まいを大事にしたい",
		"answer01_function" : "answer00_01",
		"answer02_function" : "answer00_02",
		"backQuestion" : "",
	},{
    "id" : "01",
		"number" : 'Q.2',
		"question" : "住み替えるなら、どっち？",
		"answer01" : "手軽に借りたい",
		"answer02" : "自分の家がほしい",
		"answer01_function" : "answer01_01",
		"answer02_function" : "answer01_02",
		"backQuestion" : "back00",
	},{
    "id" : "02",
		"number" : 'Q.2',
		"question" : "住み続けるなら、どっち？",
		"answer01" : "気になるところを思い切ってリフォームしたい",
		"answer02" : "インテリアでお部屋の雰囲気を変えたい",
		"answer01_function" : "answer02_01",
		"answer02_function" : "answer02_02",
		"backQuestion" : "back00",
	},{
    "id" : "03",
		"number" : 'Q.3',
		"question" : "住まいに対する気持ちは、どっち？",
		"answer01" : "管理する手間を減らせるマンションがいい",
		"answer02" : "一国一城の主になれる戸建がいい",
		"answer01_function" : "answer03_01",
		"answer02_function" : "answer03_02",
		"backQuestion" : "back01",
	},{
    "id" : "04",
		"number" : 'Q.4',
		"question" : "マンションで選ぶなら、どっち？",
		"answer01" : "すべて新しい家がいい",
		"answer02" : "築年数に拘らず価格や条件を吟味したい",
		"answer01_function" : "answer04_01",
		"answer02_function" : "answer04_02",
		"backQuestion" : "back02",
	},{
    "id" : "05",
		"number" : 'Q.4',
		"question" : "戸建で選ぶなら、どっち？",
		"answer01" : "実物を確認したい",
		"answer02" : "自分の思い通りの家がほしい",
		"answer01_function" : "answer05_01",
		"answer02_function" : "answer05_02",
		"backQuestion" : "back02",
	},{
    "id" : "06",
		"number" : 'Q.5',
		"question" : "重視するなら、どっち？",
		"answer01" : "多彩な選択肢から選びたい",
		"answer02" : "居住空間にこだわりたい",
		"answer01_function" : "answer06_01",
		"answer02_function" : "answer06_02",
		"backQuestion" : "back03",
	}
]
const data2 = [
	{
		"id" : "#redirect_a1",
		"name" : "新築マンション（MJR）",
		"url" : "a1.html"
	},{
		"id" : "#redirect_a2",
		"name" : "中古マンション（MJHN）",
		"url" : "a2.html"
	},{
		"id" : "#redirect_a3",
		"name" : "リノベーションマンション（UL）",
		"url" : "a3.html"
	},{
		"id" : "#redirect_a4",
		"name" : "賃貸マンション・戸建（MJHN）",
		"url" : "a4.html"
	},{
		"id" : "#redirect_a5",
		"name" : "リフォーム重視（MJH・MJC）",
		"url" : "a5.html"
	},{
		"id" : "#redirect_a6",
		"name" : "インテリア重視（MDI）",
		"url" : "a6.html"
	},{
		"id" : "#redirect_a7",
		"name" : "中古戸建（MJHN）",
		"url" : "a7.html"
	},{
		"id" : "#redirect_a8",
		"name" : "新築戸建注文住宅（MJH）",
		"url" : "a8.html"
	}
]
function redirect(i) {
	let target = data2[i]['id'];
	setTimeout(function() {
		$(target)[0].click();
	},1000)
}


//
function load_data() {
  progress(17);
  $('#checkPanel .question-tit').html( data[0]['number'] );
  $('#checkPanel .question-txt').html( data[0]['question'] );
	$('#checkPanel .answer01').html( data[0]['answer01'] ).attr('id',data[0]['answer01_function']);
	$('#checkPanel .answer02').html( data[0]['answer02'] ).attr('id',data[0]['answer02_function']);
	$('.backQuestionBtn').removeClass('active');
}

function next_question(i) {
  $('#checkPanel .question-tit').html( data[i]['number'] );
  $('#checkPanel .question-txt').html( data[i]['question'] );
	$('#checkPanel .answer01').html( data[i]['answer01'] ).attr('id',data[i]['answer01_function']);
	$('#checkPanel .answer02').html( data[i]['answer02'] ).attr('id',data[i]['answer02_function']);
	
	if ( data[i]['backQuestion'] !== ""){
		$('.backQuestionBtn').addClass('active');
		$('.backQuestionBtn').attr('id',data[i]['backQuestion']);
	}
}
function progress(i) {
  $('.progressbar span').attr('style',"width" + ":" + i + "%");
}
