function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
		console.log('User signed out.');
		alert("You have successfully signed out the web app;\nhowever, you are still signed in your google account")
    });
}

/*
Client ID:
425905091385-902854slqu9kc3o2576agtvsp0ejsnn2.apps.googleusercontent.com
Client Secret:
m-lvlVLj8I3o9CA86l1KZy9W
*/