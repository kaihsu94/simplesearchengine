
var map_globe = new Datamap({
    element: document.getElementById('map-container-globe'),
    scope: 'world'});

var map_usa = new Datamap({
    element: document.getElementById('map-container-usa'),
    scope: 'usa',
    geographyConfig: {
        highlightBorderColor: '#bada55',
        popupTemplate: function(geography, data) {
            return '<div class="hoverinfo">' + geography.properties.name +
                ' tweets: ' +  data.electoralVotes + ' '
        },
        highlightBorderWidth: 3
    },

    fills: {
        'Republican': '#CC4731',
        'Democrat': '#306596',
        'Heavy Democrat': '#667FAF',
        'Light Democrat': '#A9C0DE',
        'Heavy Republican': '#CA5E5B',
        'Light Republican': '#EAA9A8',

        'defaultFill': '#2B60DE',
        'no_tweets': '#C2DFFF',
        'very_few_tweets': '#82CAFA',
        'few_tweets': '#6495ED',
        'some_tweets': '#1589FF',
        'many_tweets': '#306EFF',
        'very_many_tweets': '#2B65EC'
    },
    data:{
        "AZ": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "CO": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "DE": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "FL": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "GA": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "HI": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "ID": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "IL": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "IN": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "IA": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "KS": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "KY": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "LA": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "MD": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "ME": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "MA": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "MN": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "MI": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "MS": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "MO": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "MT": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "NC": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "NE": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "NV": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "NH": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "NJ": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "NY": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "ND": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "NM": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "OH": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "OK": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "OR": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "PA": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "RI": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "SC": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "SD": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "TN": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "TX": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "UT": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "WI": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "VA": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "VT": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "WA": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "WV": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "WY": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "CA": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "CT": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "AK": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "AR": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        },
        "AL": {
            "fillKey": "defaultFill",
            "electoralVotes": 0
        }
    }
});
map_usa.labels();

$(window).on('resize', function() {
    map_globe.resize();
    map_usa.resize();
});

$('#submit_query').click(function() {

    var facet_status = get_filter_inputs();
    query_server(facet_status);
});


function get_filter_inputs() {

    var query = $('#input_query')[0].value;

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
        query: query,
        trump_sel: trump_selected,
        bush_sel: bush_selected,
        carson_sel: carson_selected,
        christie_sel: christie_selected,
        cruz_sel: cruz_selected,
        clinton_sel: clinton_selected,
        eng_sel: eng_selected,
        de_sel: de_selected,
        es_sel: es_selected,
        zh_sel: zh_selected,
        pos_sel: pos_selected,
        neg_sel: neg_selected,
        neu_sel: neu_selected
    };

    return facet_status;

}

function query_server(facet_status) {

    $.ajax({
        method: 'GET',
        url: '/solr',
        data: facet_status
    }).then(function successCallback(response) {

        $('#solr-result-iframe')[0].src = response.solr_url;
        update_map(response.state_list)

    }, function errorCallback(err) {

        $('#test_output')[0].innerHTML = err;

    });

}

function get_fill(num_of_tweets) {

    if (num_of_tweets == 0) {
        return "no_tweets";
    } else if (num_of_tweets < 5) {
        return "very_few_tweets";
    } else if (num_of_tweets < 10) {
        return "few_tweets";
    } else if (num_of_tweets < 25) {
        return "some_tweets";
    } else if (num_of_tweets < 50) {
        return "many_tweets";
    } else {
        return "very_many_tweets";
    }

}

function update_map(state_list) {
    map_usa.updateChoropleth({
        "AZ": {
            "fillKey": get_fill(state_list['AZ']),
            "electoralVotes": state_list['AZ']
        },
        "CO": {
            "fillKey": get_fill(state_list['CO']),
            "electoralVotes": state_list['CO']
        },
        "DE": {
            "fillKey": get_fill(state_list['DE']),
            "electoralVotes": state_list['DE']
        },
        "FL": {
            "fillKey": get_fill(state_list['FL']),
            "electoralVotes": state_list['FL']
        },
        "GA": {
            "fillKey": get_fill(state_list['GA']),
            "electoralVotes": state_list['GA']
        },
        "HI": {
            "fillKey": get_fill(state_list['HI']),
            "electoralVotes": state_list['HI']
        },
        "ID": {
            "fillKey": get_fill(state_list['ID']),
            "electoralVotes": state_list['ID']
        },
        "IL": {
            "fillKey": get_fill(state_list['IL']),
            "electoralVotes": state_list['IL']
        },
        "IN": {
            "fillKey": get_fill(state_list['IN']),
            "electoralVotes": state_list['IN']
        },
        "IA": {
            "fillKey": get_fill(state_list['IA']),
            "electoralVotes": state_list['IA']
        },
        "KS": {
            "fillKey": get_fill(state_list['KS']),
            "electoralVotes": state_list['KS']
        },
        "KY": {
            "fillKey": get_fill(state_list['KY']),
            "electoralVotes": state_list['KY']
        },
        "LA": {
            "fillKey": get_fill(state_list['LA']),
            "electoralVotes": state_list['LA']
        },
        "MD": {
            "fillKey": get_fill(state_list['MD']),
            "electoralVotes": state_list['MD']
        },
        "ME": {
            "fillKey": get_fill(state_list['ME']),
            "electoralVotes": state_list['ME']
        },
        "MA": {
            "fillKey": get_fill(state_list['MA']),
            "electoralVotes": state_list['MA']
        },
        "MN": {
            "fillKey": get_fill(state_list['MN']),
            "electoralVotes": state_list['MN']
        },
        "MI": {
            "fillKey": get_fill(state_list['MI']),
            "electoralVotes": state_list['MI']
        },
        "MS": {
            "fillKey": get_fill(state_list['MS']),
            "electoralVotes": state_list['MS']
        },
        "MO": {
            "fillKey": get_fill(state_list['MO']),
            "electoralVotes": state_list['MO']
        },
        "MT": {
            "fillKey": get_fill(state_list['MT']),
            "electoralVotes": state_list['MT']
        },
        "NC": {
            "fillKey": get_fill(state_list['NC']),
            "electoralVotes": state_list['NC']
        },
        "NE": {
            "fillKey": get_fill(state_list['NE']),
            "electoralVotes": state_list['NE']
        },
        "NV": {
            "fillKey": get_fill(state_list['NV']),
            "electoralVotes": state_list['NV']
        },
        "NH": {
            "fillKey": get_fill(state_list['NH']),
            "electoralVotes": state_list['NH']
        },
        "NJ": {
            "fillKey": get_fill(state_list['NJ']),
            "electoralVotes": state_list['NJ']
        },
        "NY": {
            "fillKey": get_fill(state_list['NY']),
            "electoralVotes": state_list['NY']
        },
        "ND": {
            "fillKey": get_fill(state_list['ND']),
            "electoralVotes": state_list['ND']
        },
        "NM": {
            "fillKey": get_fill(state_list['NM']),
            "electoralVotes": state_list['NM']
        },
        "OH": {
            "fillKey": get_fill(state_list['OH']),
            "electoralVotes": state_list['OH']
        },
        "OK": {
            "fillKey": get_fill(state_list['OK']),
            "electoralVotes": state_list['OK']
        },
        "OR": {
            "fillKey": get_fill(state_list['OR']),
            "electoralVotes": state_list['OR']
        },
        "PA": {
            "fillKey": get_fill(state_list['PA']),
            "electoralVotes": state_list['PA']
        },
        "RI": {
            "fillKey": get_fill(state_list['RI']),
            "electoralVotes": state_list['RI']
        },
        "SC": {
            "fillKey": get_fill(state_list['SC']),
            "electoralVotes": state_list['SC']
        },
        "SD": {
            "fillKey": get_fill(state_list['SD']),
            "electoralVotes": state_list['SD']
        },
        "TN": {
            "fillKey": get_fill(state_list['TN']),
            "electoralVotes": state_list['TN']
        },
        "TX": {
            "fillKey": get_fill(state_list['TX']),
            "electoralVotes": state_list['TX']
        },
        "UT": {
            "fillKey": get_fill(state_list['UT']),
            "electoralVotes": state_list['UT']
        },
        "WI": {
            "fillKey": get_fill(state_list['WI']),
            "electoralVotes": state_list['WI']
        },
        "VA": {
            "fillKey": get_fill(state_list['VA']),
            "electoralVotes": state_list['VA']
        },
        "VT": {
            "fillKey": get_fill(state_list['VT']),
            "electoralVotes": state_list['VT']
        },
        "WA": {
            "fillKey": get_fill(state_list['WA']),
            "electoralVotes": state_list['WA']
        },
        "WV": {
            "fillKey": get_fill(state_list['WV']),
            "electoralVotes": state_list['WV']
        },
        "WY": {
            "fillKey": get_fill(state_list['WY']),
            "electoralVotes": state_list['WY']
        },
        "CA": {
            "fillKey": get_fill(state_list['CA']),
            "electoralVotes": state_list['CA']
        },
        "CT": {
            "fillKey": get_fill(state_list['CT']),
            "electoralVotes": state_list['CT']
        },
        "AK": {
            "fillKey": get_fill(state_list['AK']),
            "electoralVotes": state_list['AK']
        },
        "AR": {
            "fillKey": get_fill(state_list['AR']),
            "electoralVotes": state_list['AR']
        },
        "AL": {
            "fillKey": get_fill(state_list['AL']),
            "electoralVotes": state_list['AL']
        }
    });
}