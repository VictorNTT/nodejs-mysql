/* 
Step 1: install mysql first 
$  npm install mysql
Run app
$ npm mysql-conn.js print_option (json or csv)

Example:
$ npm mysql-conn.js json
$ npm mysql-conn.js csv
*/

var program_name = process.argv[0]; 
var script_path = process.argv[1]; 
var first_arg = process.argv[2]; 


var mysql = require('mysql');

var con = mysql.createConnection({

  // change to fit your env
  host: "localhost",
  user: "user1",   
  password: "user1"
});




con.connect(function(err) {
	if (err)
		throw err;
  
	con.query("SELECT * FROM WORLD.CITY WHERE COUNTRYCODE ='CAN'", function (err, rows, fields) {
  
    if (err) 
		throw err;
	
	if(first_arg == 'json') {
		console.log(rows); // print in JSON
	}  
    else {		
		for (var i = 0; i < rows.length; i++) {
			a_row = rows[i];
			str = "";
			for (fieldName in a_row) {
			   str += a_row[fieldName] + ', '
			}
			console.log(str);
		}
	}
  });
  
});