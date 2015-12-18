
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
                'tweets: ' +  data.electoralVotes + ' '
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
        defaultFill: '#EDDC4E'
    },
    data:{
        "AZ": {
            "fillKey": "Republican",
            "electoralVotes": 5
        },
        "CO": {
            "fillKey": "Light Democrat",
            "electoralVotes": 5
        },
        "DE": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "FL": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 29
        },
        "GA": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "HI": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "ID": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "IL": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "IN": {
            "fillKey": "Republican",
            "electoralVotes": 11
        },
        "IA": {
            "fillKey": "Light Democrat",
            "electoralVotes": 11
        },
        "KS": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "KY": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "LA": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "MD": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "ME": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "MA": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "MN": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "MI": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "MS": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "MO": {
            "fillKey": "Republican",
            "electoralVotes": 13
        },
        "MT": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "NC": {
            "fillKey": "Light Republican",
            "electoralVotes": 32
        },
        "NE": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "NV": {
            "fillKey": "Heavy Democrat",
            "electoralVotes": 32
        },
        "NH": {
            "fillKey": "Light Democrat",
            "electoralVotes": 32
        },
        "NJ": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "NY": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "ND": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "NM": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "OH": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 32
        },
        "OK": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "OR": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "PA": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "RI": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "SC": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "SD": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "TN": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "TX": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "UT": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "WI": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "VA": {
            "fillKey": "Light Democrat",
            "electoralVotes": 32
        },
        "VT": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "WA": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "WV": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "WY": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "CA": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "CT": {
            "fillKey": "Democrat",
            "electoralVotes": 32
        },
        "AK": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "AR": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "AL": {
            "fillKey": "Republican",
            "electoralVotes": 32
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

function update_map(state_list) {
    map_usa.updateChoropleth({
        "AZ": {
            "fillKey": "Republican",
            "electoralVotes": state_list['AZ']
        },
        "CO": {
            "fillKey": "Light Democrat",
            "electoralVotes": state_list['CO']
        },
        "DE": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['DE']
        },
        "FL": {
            "fillKey": "UNDECIDED",
            "electoralVotes": state_list['FL']
        },
        "GA": {
            "fillKey": "Republican",
            "electoralVotes": state_list['GA']
        },
        "HI": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['HI']
        },
        "ID": {
            "fillKey": "Republican",
            "electoralVotes": state_list['ID']
        },
        "IL": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['IL']
        },
        "IN": {
            "fillKey": "Republican",
            "electoralVotes": state_list['IN']
        },
        "IA": {
            "fillKey": "Light Democrat",
            "electoralVotes": state_list['IA']
        },
        "KS": {
            "fillKey": "Republican",
            "electoralVotes": state_list['KS']
        },
        "KY": {
            "fillKey": "Republican",
            "electoralVotes": state_list['KY']
        },
        "LA": {
            "fillKey": "Republican",
            "electoralVotes": state_list['LA']
        },
        "MD": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['MD']
        },
        "ME": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['ME']
        },
        "MA": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['MA']
        },
        "MN": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['MN']
        },
        "MI": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['MI']
        },
        "MS": {
            "fillKey": "Republican",
            "electoralVotes": state_list['MS']
        },
        "MO": {
            "fillKey": "Republican",
            "electoralVotes": state_list['MO']
        },
        "MT": {
            "fillKey": "Republican",
            "electoralVotes": state_list['MT']
        },
        "NC": {
            "fillKey": "Light Republican",
            "electoralVotes": state_list['NC']
        },
        "NE": {
            "fillKey": "Republican",
            "electoralVotes": state_list['NE']
        },
        "NV": {
            "fillKey": "Heavy Democrat",
            "electoralVotes": state_list['NV']
        },
        "NH": {
            "fillKey": "Light Democrat",
            "electoralVotes": state_list['NH']
        },
        "NJ": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['NJ']
        },
        "NY": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['NY']
        },
        "ND": {
            "fillKey": "Republican",
            "electoralVotes": state_list['ND']
        },
        "NM": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['NM']
        },
        "OH": {
            "fillKey": "UNDECIDED",
            "electoralVotes": state_list['OH']
        },
        "OK": {
            "fillKey": "Republican",
            "electoralVotes": state_list['OK']
        },
        "OR": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['OR']
        },
        "PA": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['PA']
        },
        "RI": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['RI']
        },
        "SC": {
            "fillKey": "Republican",
            "electoralVotes": state_list['SC']
        },
        "SD": {
            "fillKey": "Republican",
            "electoralVotes": state_list['SD']
        },
        "TN": {
            "fillKey": "Republican",
            "electoralVotes": state_list['TN']
        },
        "TX": {
            "fillKey": "Republican",
            "electoralVotes": state_list['TX']
        },
        "UT": {
            "fillKey": "Republican",
            "electoralVotes": state_list['UT']
        },
        "WI": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['WI']
        },
        "VA": {
            "fillKey": "Light Democrat",
            "electoralVotes": state_list['VA']
        },
        "VT": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['VT']
        },
        "WA": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['WA']
        },
        "WV": {
            "fillKey": "Republican",
            "electoralVotes": state_list['WV']
        },
        "WY": {
            "fillKey": "Republican",
            "electoralVotes": state_list['WY']
        },
        "CA": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['CA']
        },
        "CT": {
            "fillKey": "Democrat",
            "electoralVotes": state_list['CT']
        },
        "AK": {
            "fillKey": "Republican",
            "electoralVotes": state_list['AK']
        },
        "AR": {
            "fillKey": "Republican",
            "electoralVotes": state_list['AR']
        },
        "AL": {
            "fillKey": "Republican",
            "electoralVotes": state_list['AL']
        }
    });
}