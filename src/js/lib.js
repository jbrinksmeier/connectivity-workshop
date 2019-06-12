function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return (JSON.parse c.substring(nameEQ.length,c.length));
	}
	return null;
}

function parseUrlQueryParameters(url) {
  var regex = /[?&]([^=#]+)=([^&#]*)/g,
    url = window.location.href,
    params = {},
    match;
  while(match = regex.exec(url)) {
    params[match[1]] = match[2];
  }
  return params;
}
