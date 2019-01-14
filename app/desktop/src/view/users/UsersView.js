
Ext.define('MyApp.view.users.UsersView',{
    extend: 'Ext.tab.Panel',
    xtype: 'usersview',
	controller: {type: 'usersviewcontroller'},
	viewModel: {type: 'usersviewmodel'},
    items: [{
        title: 'Employee Directory',
        xtype: 'grid',
        iconCls: 'x-fa fa-users',
        store: { type: 'usersviewstore' },
        columns: [
            { 
                text: 'First Name',
                dataIndex: 'firstname',
                cell: {userCls: 'bold'}
            },
            {
                text: 'Last Name',
                dataIndex: 'lastname',
            },
            {
                text: 'Email',
                dataIndex: 'email',
                width: 300,
            }
         ],
         listeners: {
                select: 'onItemSelected'
        }
    
    },
        
        {
        title: 'About Sencha',
        iconCls: 'x-fa fa-info-circle',
        }
]
});