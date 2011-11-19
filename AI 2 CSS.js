//TODO: Fix for previous Scriptographer versions
//TODO: Create UI for adding a class name to elements 

var selectedItems = document.getItems({
	    type: Group,
	    selected: true 
	});
	
	if (selectedItems.length > 0) {
	
		print("total objects:"+selectedItems.length);
		var writer = new java.io.FileWriter(new java.io.File("generated-css.txt"));
		
		for (obj = 0; obj < selectedItems.length; obj++){
			item = selectedItems[obj];
			print(item.bounds);
			writer.write("\n\n:nth-of-type("+(obj+1)+") {\n"+
							"width: "+Math.round(item.bounds.width)+"px;\n"+
							"height: "+Math.round(item.bounds.height)+"px;\n"+
							"left: "+Math.round(item.bounds.x)+"px;\n"+
							"top: "+Math.round(item.bounds.y)+"px;\n"+
							"\n}");
		}
		writer.close();
	}