

Ext.define('MyApp.view.users.UsersViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.usersviewcontroller',

	
	onItemSelected: function() {
		console.log("tap tap");
		var panel = Ext.create({
			xtype: 'formpanel',
			fullscreen: true,
			floating: true,
			centered: true,
			width: 300,
			//modal: true,
	   
			controller: 'usersviewcontroller',
	   
			buttons: {
				submit: 'onSubmit',
				cancel: 'onCancel'
			},
	   
			items: [{
				xtype: 'textfield',
				name: 'firstname',
				label: 'First Name'
			}, {
				xtype: 'textfield',
				name: 'lastname',
				label: 'Last Name'
			}, {
				xtype: 'emailfield',
				name: 'email',
				label: 'Email'
			}]
		});
	},

	onCancel: function () {
		console.log("taped cancel");
		this.destroy();
		
	},
	onSubmit: function () {
		console.log("taped submit");
		var form = this.getView();
		form.submit({
			success: function () {
				Ext.Msg.alert('Form submitted successfully!');
			}
		});
	}
});
