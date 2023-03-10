# ti.glassfy - Titanium module for glassfy

Make sure to check https://docs.glassfy.io/docs/configuration on how to setup your Play Store configuration.

<i>Work in progress</i>

```js
import glassfy from 'ti.glassfy';

glassfy.addEventListener("offerings", function(items){ console.log(items); })
glassfy.addEventListener("sku", function(item){ console.log(item); })

glassfy.initialize("your_key");

glassfy.getOfferings();
glassfy.getSku("your_sku");
```
