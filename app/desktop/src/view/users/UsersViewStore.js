Ext.define('MyApp.view.personnel.UsersViewStore', {
	extend: 'Ext.data.Store',
	alias: 'store.usersviewstore',
	fields: [
		'firstname', 'lastname', 'email'
	],
	data: { items: [
		{ firstname: 'Jean Luc',   email: "jeanluc.picard@enterprise.com", lastname: "Grey" },
		{ firstname: 'ModernWorf', email: "worf.moghsson@enterprise.com",  lastname: "Fry" },
		{ firstname: 'Deanna',     email: "deanna.troi@enterprise.com",    lastname: "Quill" },
		{ firstname: 'Data',       email: "mr.data@enterprise.com",        lastname: "Byte" }
	]},
	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});
