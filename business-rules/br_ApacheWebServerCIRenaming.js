(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	gs.info("Apache web server CI renaming business rule starts");
    var apache_web_server = new GlideRecord('cmdb_ci_apache_web_server');
    var look_up_sys_id = current.sys_id;
    
    apache_web_server.addJoinQuery('cmdb_rel_ci', 'parent', 'sys_id'); //Join class table with rel where there is a sys_id match
    apache_web_server.addQuery('sys_id',look_up_sys_id);
    apache_web_server.query(); //Execute the query
    
    if(apache_web_server.getRowCount() > 0){
		gs.info("CI " + look_up_sys_id + " has a match on cmdb_rel_ci");
        var rel_ci = GlideRecord('cmdb_rel_ci');
        var type_display_value;
        rel_ci.addQuery('parent', look_up_sys_id);
        rel_ci.query();
        
        while(rel_ci.next()){
            type_display_value = rel_ci.type.getDisplayValue().toUpperCase();
    
            if(type_display_value.search('RUNS ON::') > -1){
				gs.info("Finds RUNS ON and tries to rename CI");
                current.name =  "Apache " + current.version + "@" + rel_ci.child.getDisplayValue() + ":"+current.tcp_port;
            }
        }    
    }	

})(current, previous);