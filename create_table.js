const { Client } = require('pg');

const con= new Client({
    user: 'postgres',
    host: 'localhost',
    database:'mydb1',
    password: '9079268890ashu',
    port: 5432,
});



con.connect(function(err) {
  
  con.query("DROP TABLE bank_branches", (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table is  dropped');
});

  con.query("CREATE TABLE bank_branches (ifsc varchar, bank_id int,branch varchar,address varchar,city varchar, district varchar, state varchar,bank_name varchar);", (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table is successfully created');
    con.end();
});
});
