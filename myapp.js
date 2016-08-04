let express = require('express');
let app = new express();

app.get('/',function(req,res){
	res.send('Hello');
});

app.listen(3000);