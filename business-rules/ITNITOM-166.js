//******************************************************************************
//This sys_id has matches in cmdb_rel_ci: 000f7333db2a72403c7930cf9d96193b
//******************************************************************************
var apache_web_server = new GlideRecord('cmdb_ci_apache_web_server');
var look_up_sys_id = '275384c8db3af24015373c00ad961986';

apache_web_server.addJoinQuery('cmdb_rel_ci', 'parent', 'sys_id'); //Join class table with rel where there is a sys_id match
apache_web_server.addQuery('sys_id',look_up_sys_id)
apache_web_server.query(); //Execute the query

if(apache_web_server.getRowCount() > 0){
    var rel_ci = GlideRecord('cmdb_rel_ci');
    var type_display_value;
    rel_ci.addQuery('parent', look_up_sys_id);
    rel_ci.query();
    
    gs.print(look_up_sys_id);
    
    while(rel_ci.next()){
        type_display_value = rel_ci.type.getDisplayValue().toUpperCase();

        if(type_display_value.search('RUNS ON::') > -1){
            gs.print('For sys_id: '+ look_up_sys_id +' | Parent: ' + rel_ci.parent.getDisplayValue() + ' | Type: ' + rel_ci.type.getDisplayValue() + ' | Child: ' + rel_ci.child.getDisplayValue());
        }
    }    
}





