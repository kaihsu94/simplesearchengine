var express = require('express');
var router = express.Router();
var $ = require('jquery');
var http = require('http');
//var solr = require('solr-client');
//var client = solr.createClient();
/* GET users listing. */


var state_list = [["Alabama","Ala.","AL"],
    ["Alaska","Alaska","AK"],
    ["American Samoa","AS"],
    ["Arizona","Ariz.","AZ"],
    ["Arkansas","Ark.","AR"],
    ["California","Calif.","CA"],
    ["Colorado", "Colo.", "CO"],
    ["Connecticut", "Conn.", "CT"],
    ["Delaware", "Del.", "DE"],
    ["Dist. of Columbia", "D.C.", "DC"],
    ["Florida", "Fla.", "FL"],
    ["Georgia", "Ga.", "GA"],
    ["Guam", "Guam", "GU"],
    ["Hawaii", "Hawaii", "HI"],
    ["Idaho", "Idaho", "ID"],
    ["Illinois", "Ill.", "IL"],
    ["Indiana", "Ind.", "IN"],
    ["Iowa", "Iowa", "IA"],
    ["Kansas", "Kans.", "KS"],
    ["Kentucky", "Ky.", "KY"],
    ["Louisiana", "La.", "LA"],
    ["Maine", "Maine","ME"],
    ["Maryland", "Md.", "MD"],
    ["Marshall Islands", "MH"],
    ["Massachusetts", "Mass.", "MA"],
    ["Michigan", "Mich.", "MI"],
    ["Micronesia", "FM"],
    ["Minnesota", "Minn.", "MN"],
    ["Mississippi", "Miss.", "MS"],
    ["Missouri", "Mo.", "MO"],
    ["Montana", "Mont.", "MT"],
    ["Nebraska", "Nebr.", "NE"],
    ["Nevada", "Nev.", "NV"],
    ["New Hampshire", "N.H.", "NH"],
    ["New Jersey", "N.J.", "NJ"],
    ["New Mexico", "N.M.", "NM"],
    ["New York", "N.Y.", "NY"],
    ["North Carolina", "N.C.", "NC"],
    ["North Dakota", "N.D.", "ND"],
    ["Northern Marianas", "MP"],
    ["Ohio", "Ohio", "OH"],
    ["Oklahoma", "Okla.", "OK"],
    ["Oregon", "Ore.", "OR"],
    ["Palau", "PW"],
    ["Pennsylvania", "Pa.", "PA"],
    ["Puerto Rico", "P.R.", "PR"],
    ["Rhode Island", "R.I.", "RI"],
    ["South Carolina", "S.C.", "SC"],
    ["South Dakota", "S.D.", "SD"],
    ["Tennessee", "Tenn.", "TN"],
    ["Texas", "Tex.", "TX"],
    ["Utah", "Utah", "UT"],
    ["Vermont", "Vt.", "VT"],
    ["Virginia", "Va.", "VA"],
    ["Virgin Islands", "V.I.", "VI"],
    ["Washington", "Wash.", "WA"],
    ["West Virginia", "W.Va.", "WV"],
    ["Wisconsin", "Wis.", "WI"],
    ["Wyoming", "Wyo.", "WY"]];


router.get('/', function(req, res, next) {

    var query = req.param('query');
    console.log(query);
    var trump_selected = req.param('trump_sel');
    //console.log(bush_selected);
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


    var is_eng = eng_selected == 'true';
    var is_de = de_selected == 'true';
    var is_es = es_selected == 'true';
    var is_zh = zh_selected == 'true';

    if (is_eng){
        base_url += "q=text_en%3A" + query + "%0A";
    } else if (is_de) {
        base_url += "q=text_de%3A" + query + "%0A";
    } else if (is_es) {
        base_url += "q=text_es%3A" + query + "%0A";
    } else if (is_zh) {
        base_url += "q=text_zh%3A" + query + "%0A";
    } else {
        base_url += "q=text_en%3A" + query + "%0A";
    }

    console.log(base_url);

    var is_pos = pos_selected == 'true';
    var is_neg = neg_selected == 'true';
    var is_neu = neu_selected == 'true';
    //var is_pos_two = pos_selected == true;
    //console.log("DEBUG: " + "is_pos is: " + is_pos);
    //console.log("DEBUG: " + "is_pos_two is: " + is_pos_two);

    if (!pos_selected && !neg_selected && !neu_selected) {

    } else if (!is_pos && !is_neg && is_neu){
        base_url += "&fq=sentiment%3A%5B0+TO+0%5D";
    } else if (!is_pos && is_neg && !is_neu){
        base_url += "&fq=sentiment%3A%5B-1+TO+-.0000001%5D";
    } else if (!is_pos && is_neg && is_neu){
        base_url += "&fq=sentiment%3A%5B-1+TO+0%5D";
    } else if (is_pos && !is_neg && !is_neu) {
        base_url += "&fq=sentiment%3A%5B0.0001+TO+1%5D";
    } else if (is_pos && !is_neg && is_neu) {
        base_url += "&fq=sentiment%3A%5B0+TO+1%5D";
    } else if (is_pos && is_neg && !is_neu) {

    } else if (is_pos && is_neg && is_neu) {

    }

    console.log(base_url);

    var num_of_results = 10;

    var return_url = base_url += "&rows=" + num_of_results;
    return_url += "&wt=json&indent=true";

    //res.json({
    //    "solr_url":return_url
    //});

    base_url += "&rows=10000&wt=json&indent=true";


    //var test_url = "http://soxkeepyouwarm.davidtowson.com:8983/solr/project_c/select?" +
    //    "q=text_en%3A" + query + "%0A";
    var test_url = "http://localhost:8983/solr/project_c/select?" +
        "q=text_en%3A" + query + "%0A";

    // &fq=location%3A+(*new%5C+york*)      new york
    // &fq=location%3A+(*New%5C+York*+OR+*N.Y*) New York or N.Y


    var result_list = [];

    for (var i = 0; i < state_list.length; i ++) {
        var current_state_synonyms = state_list[i];
        var current_state_name = current_state_synonyms[0];
        current_state_name.replace(' ', '%5C+');

        console.log("new state name is: " + current_state_name);

        var local_query = test_url;
        local_query += ("&fq=location%3A+(*" + current_state_name + "*)");
        local_query += "&rows=0&wt=json&indent=true";

        console.log("QUERY IS: " + local_query);

        http.get(local_query, function(res) {

            console.log("Got response: " + res.statusCode);

            res.on("data", function(chunk) {
                var json_response = JSON.parse(chunk);
                console.log("BODY: " + chunk);
                //console.log("num found is: " + json_response.response.numFound);
                var result = {"state":current_state_name,
                "count":json_response.response.numFound};
                result_list.push(result);

                if (result_list.length == state_list.length) {
                    res.json({
                        "solr_url":return_url,
                        "state_list":result_list,
                        "error":"none"
                    });
                }
            });

        }).on('error', function(e) {
            console.log("Got error: " + e.message);
        });

    }






});

module.exports = router;
