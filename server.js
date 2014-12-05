var express = require('express'),
    bodyParser = require('body-parser'),
    app = express()

app.use(bodyParser.json());
app.use('/api/posts/',require('./controllers/api/posts'));
app.use(require('./controllers/static'));
app.use('/api/sessions',require('./controllers/api/sessions'));
app.use('/api/users',require('./controllers/api/users'));

app.listen(3000,function(){
    console.log('server listening on', 3000)
})