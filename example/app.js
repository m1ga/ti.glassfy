const win = Ti.UI.createWindow();
win.open();

import glassfy from 'ti.glassfy';
glassfy.addEventListener("offerings", function(items){
	console.log(items);
})
glassfy.addEventListener("sku", function(item){
	console.log(item);
})
glassfy.addEventListener("purchase", function(item){
	console.log(item);
})
glassfy.addEventListener("permissions", function(item){
	console.log(item);
})

glassfy.initialize("your_key");

glassfy.getOfferings();
glassfy.getSku("your_sku");
glassfy.purchase("your_sku");
glassfy.getPermissions();