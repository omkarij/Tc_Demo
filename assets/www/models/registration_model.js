var db;
var shortName = 'TCDEMO';
var version = '1.0';
var displayName = 'TC DEMO';
var maxSize = 65535;
db = openDatabase(shortName, version, displayName,maxSize);

function AddValueToDB() {
 if (!window.openDatabase) {
   alert('Databases are not supported.');
   return;
 }

 db.transaction(function(transaction) {
   transaction.executeSql('INSERT INTO Registration(Email, Pass, RePass, Class) VALUES (?,?,?,?)',[$('#txFirstName').val(), $('#txLastName').val()],
     nullHandler,errorHandler);
   });
 ListDBValues();
	
	document.getElementById("txFirstName").focus();
 return false;
}


function ListDBValues() {
 if (!window.openDatabase) {
  alert('Databases are not supported.');
  return;
 }

 $('#lbUsers').html('');

 db.transaction(function(transaction) {
   transaction.executeSql('SELECT * FROM User;', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          $('#lbUsers').append('<br>' + row.UserId + '. ' +
			row.FirstName+ ' ' + row.LastName);
        }
      }
     },errorHandler);
 },errorHandler,nullHandler);
 return;
}

function errorHandler(transaction, error)
{
	alert('Error: ' + error.message + ' code: ' + error.code);
}

function nullHandler(){};