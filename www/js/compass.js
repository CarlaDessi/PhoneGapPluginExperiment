// Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        navigator.compass.getCurrentHeading(onSuccess, onError);
    }

    // onSuccess: Get the current heading
    //
    function onSuccess(heading) {
		var element = document.getElementById('currentheading');
		element.innerHTML = 'Heading: ' + heading.magneticHeading;
    }

    // onError: Failed to get the heading
    //
    function onError(compassError) {
		var element = document.getElementById('currentheading');
		element.innerHTML = 'Compass Error: ' + compassError.code;
    }
