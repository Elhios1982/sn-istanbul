//cmdb_rel_ci.list
//cmdb_ci_apache_web_server.list


//******************************************************************************
//1. Get CIs list from cmdb_ci_apache_web_server
//2. Limit list to first 10 records
//3. For each element of this list get its sys_id
//4. Relate each sys_id to an element in cmdb_rel_ci
//******************************************************************************
var gr = new GlideRecord('cmdb_ci_apache_web_server');
var gr2 = new GlideRecord('cmdb_rel_ci');
var i = 0;
gr.setLimit(10) //Set limit of rows returned
gr.query(); //Execute the query

while(gr.next()){

    gs.print("sys_id being searched " + gr.sys_id);
    gr2.addQuery('parent', gr.sys_id)
    gr2.query();
    while(gr2.next()){
        i++;
        gs.print("Goes in: "+i);
        gs.print('Parent: ' + gr2.parent.getDisplayValue() + ' Type: ' + gr2.type.getDisplayValue() + ' Child: ' + gr2.child.getDisplayValue());        
    }
}


