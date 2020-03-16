const express = require('express');
const app = express();
var path = require('path');
app.listen(4000, function() {
	console.log('Listening on 4000')
});

app.get('/', (req, res) => {

	res.sendFile(path.join(__dirname+'/index.html'));
});