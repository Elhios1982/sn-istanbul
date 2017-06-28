// ************************************************************************** //
//Query Example
var i = 0;
var gr = new GlideRecord('cmdb_ci_apache_web_server');
//The 'addQuery' line allows you to restrict the query to the field/value pairs specified (optional)
gr.addQuery('name', 'Apache');
gr.query(); //Execute the query

//We use while loop function to crawl all records returned
while (gr.next()) { //While the recordset contains records, iterate through them
   //Do something with the records returned
   gs.log(gr.sys_id)
   gs.log(gr.name+" "+gr.version+" "+gr.tcp_port);   
   i++;
}
gs.log(i);

// ************************************************************************** //
//'Get' Query Shortcut (used to get a single GlideRecord)
//The get method is a great way to return a single record when you know the sys_id of that record
var gr = new GlideRecord('cmdb_ci_apache_web_server');
//We pass the sys_id in the gr.get() method
gr.get('4793048cdb3af24015373c00ad96193b');
//Do something with the record returned
gs.log(gr.name+" "+gr.version+" "+gr.tcp_port);   

// ************************************************************************** //
//Use addQuery to look for partial strings
var gr = new GlideRecord('cmdb_ci_apache_web_server');
gr.addQuery('version', 'CONTAINS', 'QUALCOMM');
gr.query();
gs.log('Query count is: ' + gr.getRowCount());

// ************************************************************************** //
//The standard ‘addQuery’ parameter acts like an ‘and’ condition in your query. This example shows how you can add ‘or’ conditions to your query.
//Find all incidents with a priority of 1 or 2
var gr = new GlideRecord('cmdb_rel_ci');
gr.addQuery('type', 'STARTSWITH', 'Runs on').addOrCondition('type', 'STARTSWITH', 'Use End Point');
gr.query();
gs.log('Query count is: ' + gr.getRowCount());

// ************************************************************************** //
//Data in CMDB tables when retrieved with GlideRecord returns the actual value
//we need to use getDisplayValue method to obtain Display Value data 
var gr = new GlideRecord('cmdb_rel_ci');
gr.get('0ac7f549dbfaf64015373c00ad961920');
gs.log('Parent: ' + gr.parent + ' Type: ' + gr.type + ' Child: ' + gr.child);

//var caller = gr.type.getRefRecord(); //Gets the sys_user GlideRecord for the caller
//gs.log('Reference value of Type field: ' + caller)

gs.print('Display value for Type field ' + gr.type.getDisplayValue());
gs.log('Parent: ' + gr.parent.getDisplayValue() + ' Type: ' + gr.type.getDisplayValue() + ' Child: ' + gr.child.getDisplayValue());

















