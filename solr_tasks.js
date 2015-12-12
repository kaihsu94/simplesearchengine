var solr = require('solr');

var client = solr.createClient();
var doc1 = {
    id: '1',
    title_t: 'Foo bar',
    text_t: 'Fizz buzz frizzle'
};
var doc2 = {
    id: '2',
    title_t: 'Far boo',
    text_t: 'Wuzz fizz drizzle'
};

client.add(doc1, function(err) {
    if (err) throw err;
});