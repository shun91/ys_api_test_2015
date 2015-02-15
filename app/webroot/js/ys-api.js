/**
 * APIが返したjsonから結果表示部のHTMLを生成し，表示する．
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
function createResultsHtml(res) {
	var results = res.ResultSet[0].Result;

    $("#result_block").hide('slow/400/fast');

	$("#results").html(""); // 結果表示領域の初期化

	// 結果表示HTMLの生成
	for (var i = 0; i < res.ResultSet.totalResultsReturned; i++) {
		$("#results").append(
            '<a href="'+ results[i].Url +'" class="list-group-item" target="_blank">'
            +'<div class="media">'
            +'<span class="pull-left">'
            +'<img class="media-object" src="'+ results[i].Image.Medium +'" alt="'+results[i].Name+'">'
            +'</span>'
            +'<div class="media-body">'
            +'<h4 class="list-group-item-heading">'+results[i].Name+'</h4>'
            //+'<p class="list-group-item-text text-muted">text</p>'
            +'</div>');
	}

    $("#result_block").show('slow/400/fast');
}

/**
 * 商品検索APIを叩き，結果を表示する．
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
function ajaxItemSearch(query) {
    $.ajax({
        url: "http://shopping.yahooapis.jp/ShoppingWebService/V1/json/itemSearch",
        type: "POST",
        dataType: 'jsonp',
        data: {
            appid: "dj0zaiZpPUZmcW5vREIzRXpYeiZzPWNvbnN1bWVyc2VjcmV0Jng9ODI-",
            query: query
        },
        success: function(res) {
            createResultsHtml(res);
        },
        error: function() {
            alert('API通信失敗');
        }
    });
}

$(document).ready(function() {
    $("#result_block").hide();
	$("#search_form .submit").click(function(event) {
		ajaxItemSearch($(':text[name="data[query]"]').val());
	});
});
