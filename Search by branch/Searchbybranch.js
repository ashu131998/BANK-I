const { Client } = require('pg');

var http = require('http');
var express = require('express');

var app = express();

var port = process.env.PORT || 8080;


app.listen(port);
console.log('Server started! At http://localhost:' + port);

const con= new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
});

var v;
app.get('/api/branches/autocomplete', function(req, result) {
    var branch = req.query.q;
    var limit = req.query.limit;
    var offset= req.query.offset;
   
    con.connect(function(err) {
            con.query("SELECT * from bank_branches where branch like"+"'"+"?"+"%"+"'"+"order by IFSC"+" limit "+"?"+" offset "+"?",[branch,limit,offset], (err, res) => {
                if (err) {
                    
                    console.error(err);
                }
                else{
                    v=JSON.stringify(res,null,2);
                    result.end(v);
                    console.log(res);
                    
                    
                }
            });
    
    });
   
});
  
