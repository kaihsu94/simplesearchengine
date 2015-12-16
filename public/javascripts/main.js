
$('#submit_query').click(function() {

    var facet_status = get_filter_inputs();
    query_server(facet_status);
});


function get_filter_inputs() {

    var trump_selected = $("#trump_sel")[0].checked;
    var bush_selected = $('#bush_sel')[0].checked;
    var carson_selected = $('#carson_sel')[0].checked;
    var christie_selected = $('#christie_sel')[0].checked;
    var cruz_selected = $('#cruz_sel')[0].checked;
    var clinton_selected = $('#clinton_sel')[0].checked;

    var eng_selected = $('#eng_sel')[0].checked;
    var de_selected = $('#de_sel')[0].checked;
    var es_selected = $('#es_sel')[0].checked;
    var zh_selected = $('#zh_sel')[0].checked;

    var pos_selected = $('#pos_sel')[0].checked;
    var neg_selected = $('#neg_sel')[0].checked;
    var neu_selected = $('#neu_sel')[0].checked;

    var facet_status = {
        "trump_sel":trump_selected,
        "bush_sel":bush_selected,
        "carson_sel":carson_selected,
        "christie_sel":christie_selected,
        "cruz_sel":cruz_selected,
        "clinton_sel":clinton_selected,
        "eng_sel":eng_selected,
        "de_sel":de_selected,
        "es_sel":es_selected,
        "zh_sel":zh_selected,
        "pos_sel":pos_selected,
        "neg_sel":neg_selected,
        "neu_sel":neu_selected
    };

    return facet_status;

}

function query_server(facet_status) {

    $.ajax({
        method: 'GET',
        url: '/solr',
        params: facet_status
    }).then(function successCallback(response) {

        $('test_output')[0].html = response;

    }, function errorCallback(err) {

        $('test_output')[0].html = err;

    });

}
