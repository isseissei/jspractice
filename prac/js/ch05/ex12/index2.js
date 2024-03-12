/*
【テレインマップ】
「所有地図」のページの、Wordpressのテキストエディタには
以下のようにテレイン情報が入力されている。
<div class="terrain-map-info">
	<div id="t01-onjuku">
		<h3 class="title">【テレイン名】</h3>
		<ul>【テレイン情報】</ul>
	</div>
	<div id="t02-shaka">
		<h3 class="title">【テレイン名】</h3>
			:
			:
</div>

（１）では、これら↑の情報を読み込み、そのid名からマップ上のテレインの位置を読み込み、
その位置のそばに↑の情報とピン(url: '../wp-content/themes/cuoc/svg/map-pin.svg')を配置させる。
（２）では、マップ上でテレインの場所が選択されたときに、（１）で配置した情報を表示させる。
*/



//（１）テレイン情報とピンをマップ上に配置
jQuery(function() {
	// 情報の初期位置
	var pos_0 = jQuery('#terrain-map-info > div').css(['left', 'top']);
	pos_0.left = parseInt(pos_0.left);	// parseIntで"px"を取り、数値に変換
	pos_0.top = parseInt(pos_0.top);

	var pin_aspect = 1;

	// 千葉県のsvg画像のviewBoxの横・縦幅を入力（viewBoxの"B"が大文字なので、jQueryでは取得できない）
	var vb_x = 1500;
	var vb_y = 2000;

	// マークアップの設定
	jQuery('#terrain-map > svg').after('<div id="terrain-map-pin"></div>');

	// ピンのsvg画像をajaxで読み込み、そのピンを配置する。
	jQuery.when(
		jQuery.ajax({
			type: 'GET',
			url: '../wp-content/themes/cuoc/svg/map-pin.svg',
			dataType: 'html',
			success: function(data) {

				// Wordpressのテキストエディタに入力された全てのテレイン情報を読み込む。
				jQuery('#terrain-map-info > div').each(function() {
					// id取得（これはsvg形式のマップ中の各テレインのid名と同じ）
					var idname = jQuery(this).attr("id");
					// ↑で取得したid名をピンに付加して、#terrain-map-pin内に配置
					jQuery('#terrain-map-pin').append(data);
					jQuery('#terrain-map-pin svg:last-child').attr('id', idname);

					// 大会情報を表示 (February 22, 2019)
					if (idname == 't09-nanamagari' && jQuery(this).find('#comp-info-text').length) {
							// マークアップの設定
							jQuery('#terrain-map > svg').after('<div id="comp-info"></div>');
							var info_text = jQuery(this).find('#comp-info-text').text();
							jQuery('#comp-info').append('<p>' + info_text + '</p>');
					}
				});
			}
		})
	).done(function() {
		// ↑で配置したピンの順番を、y座標小さい順に並び変える（重なり順の設定）。
		jQuery('#terrain-map-pin').html(
			jQuery('#terrain-map-pin svg').sort(function(a, b) {
				var x = jQuery('#terrain-map > svg circle#' + jQuery(a).attr('id')).attr('cy');
				var y = jQuery('#terrain-map > svg circle#' + jQuery(b).attr('id')).attr('cy');
				return x - y; // 昇順
			})
		);
		// ピンの縦÷横の割合を計算（以下のHaichi関数で使う）
		pin_aspect = jQuery('#terrain-map-pin svg').height() / jQuery('#terrain-map-pin > svg').width();
		// ピンをテレインの位置に配置（以下のHaichi関数を使う）
		Haichi();
	});

	// 画面リサイズ時にも配置が必要（位置が変わるから）
	jQuery(window).on('resize', function() {
		Haichi();
	});


	// 情報とピンの位置を設定する関数
	// svg空間の座標を、viewBoxとsvg画像の大きさを利用して、position値に変換する。
	function Haichi(){
		// svgの横・縦幅
		var svg_w = jQuery('#terrain-map > svg').width();
		var svg_h = jQuery('#terrain-map > svg').height();

		// pinの横・縦幅
		jQuery('#terrain-map-pin > svg').width('8%');
		var pin_w = jQuery('#terrain-map-pin > svg').width();
		var pin_h = pin_w * pin_aspect;
		jQuery('#terrain-map-pin > svg').height(pin_h);

		// Wordpressのテキストエディタに入力された全てのテレイン情報を読み込む。
		jQuery('#terrain-map-info > div').each(function() {
			// id取得（これはsvg形式のマップ中の各テレインのid名と同じ）
			var idname = jQuery(this).attr("id");
			// テレイン場所取得（svg空間座標）
			var cx = jQuery('#terrain-map > svg circle#' + idname).attr("cx");
			var cy = jQuery('#terrain-map > svg circle#' + idname).attr("cy");
			// position値に変換
			cx = cx * (svg_w / vb_x);
			cy = cy * (svg_h / vb_y);

			// 配置
			jQuery(this).css('left', cx + pos_0.left);
			jQuery(this).css('top', cy + pos_0.top);
			cx2 = cx - (pin_w/2);
			cy2 = cy - pin_h;
			jQuery('#terrain-map-pin svg#' + idname).css('left', cx2);
			jQuery('#terrain-map-pin svg#' + idname).css('top', cy2);

			// 大会情報を表示 & 配置 (February 22, 2019)
			if (idname == 't09-nanamagari' && jQuery(this).find('#comp-info-text').length) {
					var info_w = jQuery('#comp-info').width();
					var info_h = jQuery('#comp-info').height();

					cx2 = cx2 - info_w;
					cy2 = cy2 - info_h;
					jQuery('#comp-info').css('left', cx2);
					jQuery('#comp-info').css('top', cy2);
			}

		});

	}



});



// （２）ピンがクリックされたらテレイン情報を表示

// クリックイベント
jQuery(window).load(function () {
	jQuery('#terrain-map-pin').on({
		// ホバー
		'mouseenter' : function(){
				pinColor_on(this);	// ピンの色をアクティブに
		},
		// ホバー外れ
		'mouseleave' : function(){
				var idname = this.id;
				if (jQuery('#terrain-map-info > div#' + idname).css('display') == 'block') {
				}
				else {
						pinColor_off(this);	// ピンの色をデフォルトに
				}
		},
		// クリック
		'click' : function(){
				var idname = this.id;
				// 情報非表示の場合、クリックしたテレインを表示
				if (jQuery('#terrain-map-info > div#' + idname).css('display') == 'none') {
						closeInfo();	// 情報を非表示（リセット）
						jQuery('#terrain-map-info > div#' + idname)
							.fadeIn("normal");
//						.css('display', 'block')	// idnameで指定された情報を表示
//						.animate({opacity: 1}, {duration:'normal', queue: false});

						// ピンの色をアクティブに。他のピンの色はデフォルトに
						pinColor_off('#terrain-map-pin svg:not(#' + idname + ')');
						pinColor_on(this);	// ピンの色をアクティブに
				}
				// 表示されている場合、クリックしたら非表示に
				else {
						closeInfo();	// 情報を非表示（リセット）
						pinColor_off(this);	// ピンの色をデフォルトに
				}
		}
	}, 'svg');

	// 外側クリック→情報閉じる
	jQuery(document).on('click touchend', function(event) {
//			if (!jQuery(event.target).closest('.terrain_pin, .terrain-map-info>div').length) {	// ピンと情報の外がクリックされたら
			if (!jQuery(event.target).closest('svg, #terrain-map-info>div').length) {	// <svg>の外がクリックされたら
				closeInfo();
				pinColor_off('#terrain-map-pin');	// ピンの色をデフォルトに
			}
	});


	// 情報を非表示（リセット）する関数
	function closeInfo(){
		jQuery('#terrain-map-info > div')
				.fadeOut("normal");
//				.css({'display':'none', opacity:0});	// idnameで指定された情報を表示
	}

	// ピンが選択されたときに、ピンの色の設定をする関数
	function pinColor_on(pin){
		var st_c = jQuery(pin).find('path').css('stroke');	// 色取得
		jQuery(pin).find('path').css('fill', st_c);	// 色変更
	}

	// ピンの色をデフォルトに戻す関数
	function pinColor_off(pin){
		jQuery(pin).find('path').css('fill', '#f5f5f5');
	}



});


//var vURL      = "https://maps.gsi.go.jp";
// var vURL_Site = "/index_pm.html?postmessage=1#15/36.913924/139.757338/&base=std&ls=std&disp=1&vs=c0g1j0h0k0l0u0t0z0r0s0m0f1";
// var oMap    
function Init(terrain_location, sakuzuL){//テレインのスペルミスってそう。知らん。
    var vURL      = "https://maps.gsi.go.jp";
    var vURL_Site_f = "/index_pm.html?postmessage=1#15/"
    var vURL_Site_s = "/&base=std&ls=std&disp=1&vs=c0g1j0h0k0l0u0t0z0r0s0m0f1";
    var vURL_Site = vURL_Site_f + terrain_location + vURL_Site_s;
    var oMap = document.createElement("iframe");//外部ページを埋め込む感じ
    oMap.style.display = "none";

    EvtResize();
    oMap.src = vURL + vURL_Site;
	oMap.onload()
    oMap.onload = function(){
        var oContent   = oMap.contentWindow;
        var ClientMode = {
        baseUrl     : null,
        location    : null,
        LayerJS     : null,
        sakuzuList  : null,
        queryString : null
        };

        //ClientMode.sakuzuList = [{"fileName":"","visible":true,"features":[{"type":"Feature","properties":{"name":"立入禁止区域","_color":"#000000","_opacity":0.5,"_weight":3,"_fillColor":"#ff0000","_fillOpacity":0.5},"geometry":{"type":"Polygon","coordinates":[[[139.752831,36.927647],[139.75354,36.926288],[139.753792,36.925842],[139.75376,36.925778],[139.753497,36.925529],[139.753346,36.925512],[139.753051,36.925589],[139.751517,36.926275],[139.751201,36.92643],[139.751034,36.926468],[139.750895,36.926352],[139.750718,36.926005],[139.750573,36.925923],[139.750337,36.925855],[139.749672,36.925962],[139.749559,36.926146],[139.74957,36.926498],[139.749597,36.926768],[139.749506,36.926845],[139.749409,36.926815],[139.749323,36.926395],[139.749302,36.926009],[139.749259,36.925829],[139.74905,36.925593],[139.748636,36.92525],[139.748417,36.925113],[139.747628,36.924894],[139.747462,36.924791],[139.747328,36.924637],[139.747263,36.924268],[139.747242,36.923663],[139.74707,36.923235],[139.747016,36.922446],[139.747059,36.921708],[139.747183,36.921399],[139.747134,36.921253],[139.747054,36.92115],[139.746888,36.921095],[139.746609,36.921163],[139.745874,36.921562],[139.743948,36.921545],[139.74302,36.921819],[139.740998,36.921558],[139.740654,36.921343],[139.740102,36.920829],[139.740171,36.920134],[139.740091,36.919769],[139.739705,36.919156],[139.739158,36.918526],[139.738943,36.918153],[139.738793,36.917822],[139.738777,36.917209],[139.738535,36.916793],[139.738165,36.916428],[139.737811,36.916373],[139.737441,36.916377],[139.737318,36.916317],[139.737205,36.916068],[139.737028,36.914516],[139.738128,36.913598],[139.73839,36.913327],[139.738471,36.913062],[139.738444,36.912392],[139.738369,36.912169],[139.737816,36.911646],[139.737629,36.911149],[139.737634,36.910698],[139.737618,36.910398],[139.737527,36.910282],[139.736765,36.910098],[139.736642,36.909918],[139.736636,36.909587],[139.736706,36.909283],[139.736899,36.908944],[139.737253,36.908622],[139.737715,36.908361],[139.738197,36.908249],[139.738637,36.90779],[139.739678,36.907417],[139.740783,36.907601],[139.741035,36.90752],[139.741121,36.907395],[139.741083,36.906662],[139.741539,36.906465],[139.742001,36.906538],[139.742172,36.906482],[139.742323,36.906147],[139.742451,36.906079],[139.743395,36.905976],[139.743578,36.905877],[139.743841,36.905435],[139.744259,36.905791],[139.744543,36.905868],[139.744908,36.905688],[139.7453,36.905551],[139.746078,36.905577],[139.746292,36.905529],[139.746453,36.905384],[139.746872,36.904324],[139.762895,36.901124],[139.764311,36.902051],[139.765728,36.903458],[139.766951,36.903492],[139.768217,36.902788],[139.768796,36.902707],[139.769526,36.902823],[139.768989,36.903543],[139.769697,36.904058],[139.769719,36.904418],[139.770448,36.905637],[139.769268,36.906718],[139.769311,36.907284],[139.771242,36.908794],[139.771392,36.909274],[139.770126,36.910578],[139.769912,36.911058],[139.770813,36.913392],[139.770212,36.914696],[139.770169,36.916171],[139.770684,36.917698],[139.771457,36.919105],[139.771435,36.920769],[139.765406,36.924817],[139.763088,36.925263],[139.761887,36.925949],[139.75987,36.926155],[139.752869,36.928681],[139.752831,36.927647]]]}}]}];
		ClientMode.sakuzuList =sakuzuL

        oContent.postMessage(ClientMode, vURL);
    };
    document.body.appendChild(oMap);
	window.onresize = EvtResize;
};

function EvtResize(){
    var responsiveWidth = window.innerWidth * 0.3;  // ウィンドウの30%の幅
    var responsiveHeight = window.innerHeight * 0.2; // ウィンドウの20%の高さ
    if(oMap != null){
        oMap.style.width   = responsiveWidth + "px";
        oMap.style.height  = responsiveHeight + "px";
        if(oMap.style.display == "none"){
            oMap.style.display = "block";
        }
    }
};

window.onload   = function(){
    document.body.style.margin   = "0px";
    document.body.style.padding  = "0px";
    document.body.style.overflow = "hidden";

    Init();
}
