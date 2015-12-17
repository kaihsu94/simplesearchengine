var express = require('express');
var router = express.Router();

var solr = require('solr');
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

    var solr_query = 'text_en:trump';
    var solr_response;
    client.query(solr_query, function(err, response) {
        if (err) throw err;
        var responseObj = JSON.parse(response);
        solr_response = responseObj;
        console.log('A search for "' + solr_query + '" returned ' +
            responseObj.response.numFound + ' documents.');
        console.log('First doc title: ' +
            responseObj.response.docs[0].title_t);
        console.log('Second doc title: ' +
            responseObj.response.docs[1].title_t);
    });

    res.json(JSON.stringify({
        "response":"query is: " + solr_query,
        "trump_selected":trump_selected
    }));

});

module.exports = router;
