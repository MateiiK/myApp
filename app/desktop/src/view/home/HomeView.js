Ext.define('MyApp.view.home.HomeView',{
	xtype: 'homeview',
	 cls: 'homeview',
	 controller: {type: 'homeviewcontroller'},
	 viewModel: {type: 'homeviewmodel'},
	 requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  html: ''
});

