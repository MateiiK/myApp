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
            itemtap: function() {
                Ext.Viewport.add({
                    xtype: 'formpanel',
                    title: 'Update Record',
                    floating: true,
                    centered: true,
                    width:300,
                    modal: true,
                    items: [{
                        xtype: 'textfield',
                        name: 'firstname',
                        label: 'First Name'
                    }, {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        items: ['->', {
                            xtype: 'button',
                            text: 'Submit',
                            iconCls: 'x-fa fa-check',
                            handler: function() {
                                this.up('formpanel').destroy();
                            }
                        }, {
                            xtype: 'button',
                            text: 'Cancel',
                            iconCls: 'x-fa fa-close',
                            handler: function() {
                                this.up('formpanel').destroy();
                            }
                        }]
                    }]
                });
            }
        }
    
    },
        
        {
        title: 'About Sencha',
        iconCls: 'x-fa fa-info-circle',
        }
]
});