walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  // Get the corner cases
  if(v.match(/pray/i)) {
    // If we're not talking about weather
    v = v.replace(/(P|p)ray/gi, function(match, p1, offset, string) {
      // c - 1 = b
      f = String.fromCharCode(p1.charCodeAt(0) - 10);
      return f + "art";
    });
  }
	textNode.nodeValue = v;
}


