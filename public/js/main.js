/**
 * 
 */
//다



var click_count = 1;
var click_category = 1;
var click_search = 1;

//채
var videodetail = 1;
var testCnt = 0;
var heartfull = 1;
var thumbfull = 1;

var video_key;
var video_url;
var video_My;
var epi_check;
var reCount;


var itmeCount;//생성되는 li의 id부여 시 사용
// var $ = jQuery;

window.onload = function () {

	//메인페이지 리스트 배열로 각각 가져오기
	itmeCount = 1;//li의 고유id생성
	reCount = 1;
	//index로 쓰이는 1,2,3은 ul_cateList별 번호 
	videoTest(1, "영화");
	videoTest(2, "드라마");
	videoTest(3, "애니메이션");
	videoRecommend("드라마");


	//다


	document.getElementById("icon_publicity_text_play").addEventListener("click", function () {

		document.getElementById('item6').click();
		sessionStorage.setItem("video_url", "movieList/movie_ourblues.mp4");
		sessionStorage.setItem("video_key", "1");
		location.href = 'videoplay.html';
		document.getElementById('video_movie').autoplay(true);
		document.getElementById('video_movie').muted(true);

		document.getElementById('btn_detail_video_play').click();

	})
	document.getElementById("icon_publicity_text_detail").addEventListener("click", function () {

		document.getElementById('item6').click();
	})


	$('#category').animate({ width: "hide" }, -50);

	$('#user_menu').animate({ width: "hide" }, 0);



	$(document).on("click", "#content_lists input", function () {
		//alert("ad");
		//return;
		$("#main_frm").load("./content_list.html");
		click_category = click_category * -1;

		$('#category').animate({ width: "hide" }, 0);
		$('#category_hidden').css("display", "none");

		var content_name = $(this).val();

		//sessionStorage.setItem("key2",content_name);
		//console.log(content_name);
		localStorage.setItem("key2", content_name);
		//console.log(sessionStorage.getItem(key2));

		$('html, body').css({ 'overflow': 'auto' }); //scroll hidden 해제
		$('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능

	})




	// $("#content_lists input").click(function(){
	// 	$("#main_frm").load("./content_list.html");
	// 	click_category=click_category*-1;
	// 	$('#category').animate({width:"hide"},0);
	// 	$('#category_hidden').css("display","none");
	// })

	$("#search_img").click(function () {
		$("#search_hidden_frm").load("./search/search_text.html");
	});


	//서치 엔터시 이동
	$("#search_text").keyup(function (key) {
		if (key.key == 'Enter') {
			$("#search_hidden_frm").load("./search/search_text.html");

		}
	});

	//마이리스트 이동
	// $("#main_btn_mylist").click(function(){
	// 	$("#main_frm").load("./mylist.html");
	// 	videodetail=videodetail*-1;
	// })

	//마이페이지이동
	$("#main_btn_mypage").click(function () {
		$("#main_frm").load("./mypage.html");
	})

	//채 토글프로필이름 가져와서
	const userArr = sessionStorage.getItem('userProfile').split(",");
	for (var i = 0; i < userArr.length; i++) {
		document.getElementById('toggle_user' + (i + 1)).value = userArr[i];
	}

	//프로필 이미지
	var profileIndex = sessionStorage.getItem("profileIndex");

	if (1 == profileIndex) {
		document.getElementById("img_user").src = "img/pro1.jpg";
	} else if (2 == profileIndex) {
		document.getElementById("img_user").src = "img/pro2.jpg";
	} else if (3 == profileIndex) {
		document.getElementById("img_user").src = "img/pro4.jpg";
	} else if (4 == profileIndex) {
		document.getElementById("img_user").src = "img/pro3.jpg";
	}

	//채 로그아웃(일단 인덱스로 이동만)
	document.getElementById('main_btn_logout').addEventListener("click", function () {
		//세션에 저장된 로그인 기록 삭제.
		sessionStorage.clear();
		location.href = "./index.html";
	})

	//채 계정설정으로 이동
	document.getElementById('main_btn_accset').addEventListener("click", function () {
		location.href = "./accset.html";
	})



	//다 프로필토글
	document.getElementById('btn_user_menu').addEventListener("click", function () {
		click_count = click_count * -1;
		click(click_count);
	})

	//다 카테고리
	document.getElementById('main_btn_category').addEventListener("click", function () {
		click_category = click_category * -1;
		click_c(click_category);
	})
	document.getElementById('category_hidden').addEventListener("click", function () {
		click_category = click_category * -1;
		click_c(click_category);
	})

	//다 서치
	document.getElementById('search_img').addEventListener("click", function () {
		click_search = click_search * -1;
		click_s(click_search);
	})
	document.getElementById('search_bc_hidden').addEventListener("click", function () {
		click_search = click_search * -1;
		click_s(click_search);
	})
	document.getElementById('search_x').addEventListener("click", function () {
		click_search = click_search * -1;
		click_s(click_search);
	})
	//추가
	document.getElementById('search_text').addEventListener("keypress", function (key) {
		if (key.key == 'Enter') {
			if (click_search = 1) {
				click_search = click_search * -1;
				click_s(click_search);
			}
		}
	})

	//다 상세히든
	document.getElementById('home_main_list_hidden').addEventListener("click", function () {
		videodetail = videodetail * -1;
		dv(videodetail);
	})

	// //채 영상관련세션저장
	// document.getElementById("btn_detail_video_play").addEventListener("click",function(){
	// 	sessionStorage.setItem("video_url", video_url );
	// 	sessionStorage.setItem("video_key", video_key );
	// 	location.href="/videoplay";
	// })


	var btnplay = document.getElementById('btn_detail_video_play');
	var btnepi = document.querySelectorAll(".detail_popup_episode_list");
	var picon = document.querySelectorAll(".fa-circle-play");
	var reitem = document.querySelectorAll(".recommend_item");
	var mouseOverIcon = document.querySelectorAll(".recommend_playicon");

	btnplay.addEventListener("click", function () {
		sessionStorage.setItem("video_url", video_url);
		sessionStorage.setItem("video_key", video_key);
		location.href = 'videoplay.html';
		document.getElementById('video_movie').autoplay(true);
		document.getElementById('video_movie').muted(true);
	})

}
//데이터를 배열로 가져와서 넣기
function epiList() {

	var epiCnt;
	var epiImg;
	var epiText;
	var epiTime;
	var epiTitle;

	const db = firebase.firestore();
	try {

		let collection = db.collection('videoEpisode').where("video_key", "==", "1");
		collection.get().then((data) => {
			data.forEach((doc) => {

				epiCnt = doc.data().epi_cnt.split(",");
				epiImg = doc.data().epi_img.split(",");
				epiText = doc.data().epi_text.split(",");
				epiTime = doc.data().epi_time.split(",");
				epiTitle = doc.data().epi_title.split(",");
			})
		}).then(() => {

			for (var i = 0; i < epiImg.length; i++) {
				EpiItemList(epiCnt[i], epiImg[i], epiTitle[i], epiTime[i], epiText[i], i + 1);
			}

		})
			.catch((error) => {
				console.error("Error writing document: ", error);
			});

	} catch (error) {
		console.error(error);
	}
}

function EpiItemList(cnt, src, title, time, text, index) {
	var div_episode = document.createElement('div');
	div_episode.id = "detail_popup_episode_list" + index;
	div_episode.className = "detail_popup_episode_list";

	var span_cnt = document.createElement('span');
	span_cnt.className = "epi_cnt";
	span_cnt.innerText = cnt;

	var div_img_all = document.createElement('div');
	div_img_all.className = "epi_cnt_img_all";

	var img_epi = document.createElement('img');
	img_epi.src = src;
	img_epi.className = "epi_img";

	var epi_i = document.createElement('i');
	epi_i.className = "fa-regular fa-circle-play fa-3x";

	var div_info = document.createElement('div');
	div_info.className = "epi_info";
	var span_title = document.createElement('span');
	span_title.innerText = title;
	span_title.style.fontWeight = "bolder";
	span_title.style.fontSize = "18px";
	var span_time = document.createElement('span');
	span_time.innerText = time;
	span_time.style.marginLeft = "70%";
	var div_text = document.createElement('div');
	div_text.className = "epi_info2";
	div_text.innerText = text;
	div_text.style.paddingTop = "10px";

	div_img_all.append(img_epi);
	div_img_all.append(epi_i);

	div_info.append(span_title);
	div_info.append(span_time);
	div_info.append(div_text);

	div_episode.append(span_cnt);
	div_episode.append(div_img_all);
	div_episode.append(div_info);

	document.getElementById("detail_popup_episode").append(div_episode);
	div_episode.onmouseover = function () {
		epi_i.style.display = "block";
	}
	div_episode.onmouseout = function () {
		epi_i.style.display = "none";
	}
	div_episode.onclick = function () {
		location.href = 'videoplay.html';
	}
}


function main_btn_username(index) {
	if (1 == index) {
		document.getElementById("img_user").src = "img/pro1.jpg";
	} else if (2 == index) {
		document.getElementById("img_user").src = "img/pro2.jpg";
	} else if (3 == index) {
		document.getElementById("img_user").src = "img/pro4.jpg";
	} else if (4 == index) {
		document.getElementById("img_user").src = "img/pro3.jpg";
	}
}
//채 좋아요 엄지
function heart() {

	heartfull = heartfull * -1;
	btnheart(heartfull);
}
function thumb() {
	thumbfull = thumbfull * -1;
	btnthumb(thumbfull);
}

function btnheart(heartfull) {

	var videoMy = "";
	var play_key;
	play_key = sessionStorage.getItem("play_key");

	var element = document.getElementById("icon_heart");

	if (-1 == heartfull) {
		element.innerHTML = '<i class="fa-solid fa-heart fa-2x"></i>';
		videoMy = "Y";

	} else {
		element.innerHTML = '<i class="fa-regular fa-heart fa-2x"></i>';
		videoMy = "N";
	}

	const db = firebase.firestore();

	try {
		let collection = db.collection('videoList').where("video_key", "==", play_key);

		console.log(play_key);
		collection.get().then((data) => {
			data.forEach((doc) => {

				if (videoMy != doc.data().video_my) {

					let collection2 = db.collection('videoList');
					collection2.doc(play_key).update({
						video_my: videoMy

					}).then(() => {
						if (videoMy == "Y") alert("찜♥ 되었습니다!");
						else alert("찜 해제되었습니다.")
					})
						.catch((error) => {
							console.error("Error writing document: ", error);
						});
				}
			})
		})
			.then(() => {



			})
			.catch((error) => {
				console.error("Error writing document: ", error);
			});

	} catch (error) {
		console.error(error);
	}
}
function btnthumb(thumbfull) {
	var element2 = document.getElementById("icon_thumb");
	if (-1 == thumbfull) {
		element2.innerHTML = '<i class="fa-solid fa-thumbs-up fa-2x"></i>';
	} else {
		element2.innerHTML = '<i class="fa-regular fa-thumbs-up fa-2x"></i>';
	}
}

//채 상세화면 더보기 클릭시 아래로
function gobottom() {
	$('.home_main_list').scrollTop($('.home_main_list')[0].scrollHeight);
}



//채 메인 리스트에 카테고리별 뿌려주기
function videoTest(index, cate) {
	//videoList에 대분류하는 카테 필드인 video_cate추가
	//index는 ul에 li생성시 ul_cateList분류할때
	const db = firebase.firestore();
	try {  //videoList에서 where조건으로 5개만 cate로 구분해서 가져오기
		let collection = db.collection('videoList').where("video_cate", "==", cate).limit(5);
		collection.get().then((data) => {
			data.forEach((doc) => {
				videoAppend(index, doc.data().video_img, doc.data().video_key);
			})
		})
			.then(() => {

				if (3 == index) {
					var detail = document.querySelectorAll('.item');

					for (var i = 0; i < detail.length; i++) {
						//console.log(i);
						detail[i].addEventListener("click", function () {
							videodetail = videodetail * -1;
							dv(videodetail);

						})
						if (i == 6) {
							epiList();
						}

					}
				}

			})
			.catch((error) => {
				console.error("Error writing document: ", error);
			});

	} catch (error) {
		console.error(error);
	}
}


//상세화면에 추천 영상 나오게 하기
function videoRecommend(cate) {
	//videoList에 대분류하는 카테 필드인 video_cate추가
	//index는 ul에 li생성시 ul_cateList분류할때
	const db = firebase.firestore();
	try {  //videoList에서 where조건으로 5개만 cate로 구분해서 가져오기
		let collection = db.collection('videoList').where("video_cate", "==", cate).limit(6);
		collection.get().then((data) => {
			data.forEach((doc) => {
				recoAppend(doc.data().video_img, doc.data().video_key);

			})
		})
			.then(() => {


				var detail = document.querySelectorAll('.recommend_img_all');

				for (var i = 0; i < detail.length; i++) {
					//console.log(i);
					detail[i].addEventListener("click", function () {
						// videodetail=videodetail*-1;
						dv(videodetail);

					})
				}


			})
			.catch((error) => {
				console.error("Error writing document: ", error);
			});

	} catch (error) {
		console.error(error);
	}
}
//추천영상 요소만들기
function recoAppend(src, key) {
	//videoAppend(index(1,2,3), doc.data().video_img, doc.data().video_key)
	var div_item_wrap = document.createElement('div');
	div_item_wrap.id = "recommend_item" + reCount;
	div_item_wrap.className = "recommend_item";


	var div_item = document.createElement('div');
	div_item.id = "recommend" + reCount;
	div_item.className = "recommend_img_all";

	//li 생성하면서 li클릭시 상세화면 정보주는 function
	div_item.onclick = function () {
		videoData(key); //key는 doc.data().video_key
	}

	reCount += 1;

	var img_item = document.createElement('img');
	img_item.src = src;
	img_item.className = "recommend_img";

	var div_i_wrap = document.createElement('div');
	var i = document.createElement('i');
	i.className = "recommend_playicon fa-regular fa-circle-play fa-6x"
	div_i_wrap.append(i);

	div_item.append(img_item);
	div_item.append(div_i_wrap);

	div_item_wrap.append(div_item);

	document.getElementById("detail_popup_recommend_container").append(div_item_wrap);

	div_item_wrap.onmouseover = function () {
		i.style.display = "block";
	}
	div_item_wrap.onmouseout = function () {
		i.style.display = "none";
	}
}



//메인에서 li구성하기
function videoAppend(index, src, key) {
	//videoAppend(index(1,2,3), doc.data().video_img, doc.data().video_key)
	var li_item = document.createElement('li');
	li_item.id = "item" + itmeCount;
	li_item.className = "item";

	//li 생성하면서 li클릭시 상세화면 정보주는 function
	li_item.onclick = function () {
		videoData(key); //key는 doc.data().video_key

	}

	itmeCount += 1;

	var img_item = document.createElement('img');
	img_item.src = src;
	li_item.append(img_item);

	document.getElementById("ul_cateList" + index).append(li_item);
}

//채 li클릭시 상세화면 정보 들어가는
function videoData(key) { //doc.data().video_key
	//console.log("---------key------------");
	//console.log(key);
	const db = firebase.firestore();

	try {
		let collection = db.collection('videoList').where("video_key", "==", key); //가져온 키값과 video_key동일시
		collection.get().then((data) => {
			data.forEach((doc) => {
				//console.log(doc.data().video_title);
				video_key = doc.data().video_key;
				video_url = doc.data().video_url;
				video_my = doc.data().video_my;
				epi_check = doc.data().epiCheck;

				sessionStorage.setItem("video_url", doc.data().video_url);
				sessionStorage.setItem("play_key", doc.data().video_key);
				document.getElementById("detail_video_preview").innerHTML = doc.data().video_preview;
				document.getElementById("span_v_year").innerText = doc.data().video_release;
				document.getElementById("span_v_rating").innerText = doc.data().video_rating;
				document.getElementById("div_v_contents").innerText = doc.data().video_contents;
				document.getElementById("b_v_cast").innerText = doc.data().video_cast;
				document.getElementById("b_v_genre").innerText = doc.data().video_genre;
				document.getElementById("b_v_tag").innerText = doc.data().video_tag;
				document.getElementById("h2_v_title").innerText = doc.data().video_title;
				document.getElementById("b_v_title").innerText = doc.data().video_title;
				document.getElementById("b_v_director").innerText = doc.data().video_director;
				document.getElementById("b_v_cast2").innerText = doc.data().video_cast;
				document.getElementById("b_v_genre2").innerText = doc.data().video_genre;
				document.getElementById("b_v_rating").innerText = doc.data().video_rating;

			})
		})
			.then(() => {
				if (video_my == "Y") {
					heartfull = -1;
					btnheart(heartfull);
				} else {
					heartfull = 1;
					btnheart(heartfull);
				}
				if (epi_check == "Y") {
					document.getElementById("detail_popup_episode").style.display = "block";
				} else {
					document.getElementById("detail_popup_episode").style.display = "none";

				}


			})
			.catch((error) => {
				console.error("Error writing document: ", error);
			});
	} catch (error) {
		console.error(error);
	}
}

//채 videodetail---------------------------------------------

//var windowHeight = 0;
function dv(videodetail) {
	//windowHeight = window.scrollY;

	if (1 == videodetail) {
		//채
		document.getElementById("home_main_list").style.visibility = "collapse";
		document.getElementById("home_main_list_hidden").style.visibility = "collapse";

		document.getElementById("main_frm").style.filter = "none";
		//document.getElementById("detail_popup_episode").style.height = "0px";
		//document.getElementById("detail_popup_recommend").style.height = "0px";

		//다
		$('html, body').css({ 'overflow': 'auto' }); //scroll hidden 해제
		//$('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능

	} else {
		//채
		document.getElementById("home_main_list").style.visibility = "visible";
		document.getElementById("home_main_list_hidden").style.visibility = "visible";
		document.getElementById("detail_popup_episode").style.height = "1000px";
		document.getElementById("detail_popup_recommend").style.height = "800px";
		document.getElementById("main_frm").style.filter = "brightness(30%)";
		document.getElementById("home_main_list").scrollTo(0, 0);


		//다
		var win_y = window.pageYOffset;
		document.getElementById("home_main_list").style.marginTop = win_y + 'px';
		$('html,body').css({ 'overflow': 'hidden' }); // 모달팝업 중 html,body의 scroll을 hidden시킴


		//$('home_main_list').css({'overflow-y':'auto'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
		// $('#element').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지
		// 	event.preventDefault();
		// 	event.stopPropagation();

		// 	return false;
		// });	
	}
}

function back() {
	videodetail = videodetail * -1;
	dv(videodetail);
}


//search--------------------------------------------
function click(check) {
	if (-1 == check) {
		$('#user_menu').animate({ width: "show" }, 1000);
		document.getElementById("user_menu").style.visibility = "visible";
		document.getElementById("search").style.marginRight = "760px";
		document.getElementById("search").style.transitionProperty = "margin-right";
		document.getElementById("search").style.cubicBezier = ".38,.38,.61,.6";
		document.getElementById("search").style.transitionDuration = "1.5s";

		document.getElementById("search").style.display = "none";

	} else {
		$('#user_menu').animate({ width: "hide" }, 1000);

		document.getElementById("search").style.marginRight = "20px";
		document.getElementById("search").style.transitionDuration = "1.4s";

		document.getElementById("search").style.display = "block";
	}

}
//category-----------------------------------------------
function click_s(check) {
	if (-1 == check) {
		document.getElementById("search_hidden").style.display = "block";
		document.getElementById("search_bc_hidden").style.display = "block";

		$('html,body').css({ 'overflow': 'hidden' }); // 모달팝업 중 html,body의 scroll을 hidden시킴
		$('body').css({ 'overflow-y': 'scroll' }); // 모달팝업 중 html,body의 scroll을 hidden시킴
		$('#element').on('scroll touchmove mousewheel', function (event) { // 터치무브와 마우스휠 스크롤 방지
			event.preventDefault();
			event.stopPropagation();

			return false;
		});

	} else {
		document.getElementById("search_hidden").style.display = "none";
		document.getElementById("search_bc_hidden").style.display = "none";

		$('html, body').css({ 'overflow': 'auto' }); //scroll hidden 해제
		$('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능
	}
}

function click_c(check) {

	if (-1 == check) {
		$('#category').animate({ width: "show" }, 400);
		document.getElementById("category").style.visibility = "visible";
		document.getElementById("category_hidden").style.display = "block";

		search_css = document.getElementById("search_hidden").style.display;
		if (search_css === "block") {
			click_search = click_search * -1;
			document.getElementById("search_hidden").style.display = "none";
			document.getElementById("search_bc_hidden").style.display = "none";
		}

		$('html, body').css({ 'overflow': 'hidden' }); // 모달팝업 중 html,body의 scroll을 hidden시킴
		$('body').css({ 'overflow-y': 'scroll' }); // 모달팝업 중 html,body의 scroll을 hidden시킴

		$('#element').on('scroll touchmove mousewheel', function (event) { // 터치무브와 마우스휠 스크롤 방지
			event.preventDefault();
			event.stopPropagation();

			return false;
		});

	} else {
		$('#category').animate({ width: "hide" }, 400);
		document.getElementById("category_hidden").style.display = "none";

		$('html, body').css({ 'overflow': 'auto' }); //scroll hidden 해제
		$('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능
	}


}


