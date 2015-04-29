function inputValue() {
	return encodeURIComponent(document.getElementById("search-input").value);
}

$(document).ready(function() {
	$("#search-type ul").hide();
	$("#search-button ul").hide();
	$("#search-button ul:first").show();
	$(".page").hide();
	$(".page:first").show();

	/*--------- Active Page ---------*/
	var activePage = "p1";

	/*---------- Web ----------*/
	var webbaidu = "http://www.baidu.com/s?wd=";
	var webgoogle = "https://www.google.com/#q=";
	var webbing = "http://cn.bing.com/search?q=";
	var webduckduckgo = "https://duckduckgo.com/?q=";
	/*---------- Images ----------*/
	var imagegoogle = "https://www.google.com/search?tbm=isch&q=";
	var imageflickr = "http://www.flickr.com/search/?q=";
	var imagehuaban = "http://huaban.com/search/?q=";
	/*---------- Music ----------*/
	var musicxiami = "http://www.xiami.com/search?key=";
	var musicnetease = "http://music.163.com/#/search/m/?s=";
	var musicsongtaste = "http://www.songtaste.com/search.php?keyword=";
	var musicbaidu = "http://music.baidu.com/search?key=";
	var musicdouban = "http://music.douban.com/subject_search?search_text=";
	//---------- Videos ----------//
	var videoyinyuetai = "http://so.yinyuetai.com/mv?keyword=";
	var videosouku = "http://www.soku.com/v?keyword=";
	var videobilibili = "http://www.bilibili.com/search?type=comprehensive&keyword=";
	//---------- Dict ----------//
	var dicthaici = "http://dict.cn/";
	var dictyoudao = "http://dict.youdao.com/search?q=";
	var dictwebster = "http://www.merriam-webster.com/dictionary/";
	var dicticiba = "http://www.iciba.com/";
	var dictoxford = "http://www.oxfordlearnersdictionaries.com/definition/english/";
	//---------- Wiki ----------//
	var wikipedia = "http://en.wikipedia.org/wiki/";
	var wikipediazh = "http://zh.wikipedia.org/wiki/";
	var wikibaidu = "http://baike.baidu.com/search?word=";
	var wikimbalib = "http://wiki.mbalib.com/wiki/Special:Search?search=";
	var wikimeng = "http://zh.moegirl.org/index.php?search=";
	var wikihudong = "http://so.baike.com/doc/";
	//---------- Icon ----------//
	var findicons = "http://findicons.com/search/";
	var iconpng = "http://www.iconpng.com/search/tag=";
	var iconfinder = "https://www.iconfinder.com/search/?q=";
	var iconarchive = "http://www.iconarchive.com/search?q=";
	var iconwanted = "http://iconwanted.com/en/search/result/query/";
	//---------- Resource ----------//
	var resverycd = "http://www.verycd.com/search/entries/";
	var resicili = "http://www.icili.com/emule/search/";
	var resed2000 = "http://zhannei.baidu.com/cse/search?s=5102198518115871963&q=";
	var resbtspread = "http://www.btspread.com/search/";
	var resdigg = "http://btdigg.org/search?info_hash=&q=";
	var reshdw = "https://thepiratebay.mn/search/";
	var reskat = "http://kat.cr/usearch/";
	var resbttt = "http://www.bttiantang.com/s.php?q=";
	var resxiaohx = "http://www.xiaohx.com/search?key=";
	var resed2kers = "http://www.ed2kers.com/index.php/Index/search?keyword=";
	var resmag = "http://cili001.com/?topic_title3=";
	var rescszebt = "http://www.xxxbt.com/search.php?keyword=";


	//---------- Select Content ----------//
	$("#search-input").click(function() {
		$(this).select();
	});

	//---------- View On GitHub ----------//
	$("#viewgithub").click(function() {
		window.open("https://github.com/inkwells/inkwells.github.io/tree/master/navigation");
	});

	//---------- Folder Tag ------------//
	$("li.tag").click(function() {
		if ($(this).parent().css("overflow") != "visible") {
			$(this).parent().css("min-height", "40px");
			$(this).parent().css("overflow", "visible");
			$(this).parent().css("height", "auto");
		} else {
			$(this).parent().css("min-height", "0");
			$(this).parent().css("overflow", "hidden");
			$(this).parent().css("height", "40px");
		}
	});

	//---------- Enter Search ----------//
	$("#search-input").keydown(function() {
		if (event.which == 13) {
			window.open("http://www.baidu.com/s?wd=" + inputValue(), "_self");
		}
	});

	//---------- Button Search ----------//
	$("#search-button ul li").click(function() {
		switch ($(this).attr("id")) {
			default:
				window.open(eval($(this).attr("id")) + inputValue(), "_self");
				break;
		}
	});

	//---------- Choose Search Type ----------//
	$("#search-type-name").click(function() {
		$("#viewgithub").toggle();
		$("#search-input").toggle();
		$("#search-type ul").toggle();
	});

	$("#search-type ul li").click(function() {
		$("#search-type-name").text($(this).text());
		$("#search-button ul").hide();
		$("#viewgithub").show();
		$("#search-input").show();
		$("#search-type ul").hide();
		$("#"+$(this).attr("title")).show();
	});

	//---------- Choose Page ----------//
	$("#tabs ul li").click(function() {
		$("#tabs ul li").removeClass("down");
		$(this).addClass("down");
		$(".page").hide();
		$("#"+$(this).attr("title")).show();
	});

	$("#search-input").focus();
});
