var log;
var db;
var shortName = 'WebSqlDB';
var version = '1.0';
var displayName = 'WebSqlDB';
var maxSize = 65535;

function onBodyLoad(){
	if (!window.openDatabase)
 	{
 		alert('Databases are not supported in this browser.');
    	return;
 	}

 	db = openDatabase(shortName, version, displayName,maxSize);

 	db.transaction(function(tx)
 	{
 		tx.executeSql( 'CREATE TABLE IF NOT EXISTS User(UserId INTEGER NOT NULL PRIMARY KEY, FirstName TEXT NOT NULL, LastName TEXT NOT NULL)', [],nullHandler,errorHandler);
 	},errorHandler);
 
	function errorHandler(transaction, error)
	{
   		alert('Error: ' + error.message + ' code: ' + error.code);
	}

	<!--function successCallBack()
	{
   		alert("Success");
	}-->
	
	function nullHandler(){};
}