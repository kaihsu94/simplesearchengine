var express = require('express');
var router = express.Router();

var solr = require('solr-client');
var client = solr.createClient();
/* GET users listing. */
router.get('/', function(req, res, next) {

    var query = req.param('query');
    console.log(query);
    var trump_selected = req.param('trump_sel');
    console.log(bush_selected);
    var bush_selected = req.param('bush_sel');
    var carson_selected = req.param('carson_sel');
    var christie_selected = req.param('christie_sel');
    var cruz_selected = req.param('cruz_sel');
    var clinton_selected = req.param('clinton_sel');

    var eng_selected = req.param('eng_sel');
    var de_selected = req.param('de_sel');
    var es_selected = req.param('es_sel');
    var zh_selected = req.param('zh_sel');

    var pos_selected = req.param('pos_sel');
    var neg_selected = req.param('neg_sel');
    var neu_selected = req.param('neu_sel');

    var base_url = "http://soxkeepyouwarm.davidtowson.com:8983/solr/project_c/select?";

    // q=text_en%3ATrump%0A
    base_url += + "q=text_en%3A" + query + "%0A";

    console.log(base_url);

    if (!pos_selected && !neg_selected && !neu_selected) {

    } else if (!pos_selected && !neg_selected && neu_selected){
        base_url += "&fq=sentiment%3A%5B0+TO+0%5D";
    } else if (!pos_selected && neg_selected && !neu_selected){
        base_url += "&fq=sentiment%3A%5B-1+TO+-.0000001%5D";
    } else if (!pos_selected && neg_selected && neu_selected){
        base_url += "&fq=sentiment%3A%5B-1+TO+0%5D";
    } else if (pos_selected && !neg_selected && !neu_selected) {
        base_url += "&fq=sentiment%3A%5B0.0001+TO+1%5D";
    } else if (pos_selected && !neg_selected && neu_selected) {
        base_url += "&fq=sentiment%3A%5B0+TO+1%5D";
    } else if (pos_selected && neg_selected && !neu_selected) {

    } else if (pos_selected && neg_selected && neu_selected) {

    }

    console.log(base_url);

    base_url += "&wt=json&indent=true";

    //return base_url;


    /*
    $.ajax({
        method: 'GET',
        url: '/solr',
        data: facet_status
    }).then(function successCallback(response) {

        $('#test_output')[0].innerHTML = response;

    }, function errorCallback(err) {

        $('#test_output')[0].innerHTML = err;

    });
    */

    res.json({
        "solr_url":base_url
    });

});

module.exports = router;
