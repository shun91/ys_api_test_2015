/**
 * APIが返したjsonから結果表示部のHTMLを生成し，表示する．
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
function createResultsHtml(res) {
	var results = res.ResultSet[0].Result;

	$("#results").html("<h2>検索結果</h2>"); // 結果表示領域の初期化

	// 結果表示HTMLの生成
	for (var i = 0; i < res.ResultSet.totalResultsReturned; i++) {
		$("#results").append('<li><a href="'+ results[i].Url +'" target="_blank">'+results[i].Name+'</a></li>');
	}
	$("#results").wrapInner("<ol>");
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
	$("#search_form .submit").click(function(event) {
		ajaxItemSearch($(':text[name="data[query]"]').val());
	});
});
