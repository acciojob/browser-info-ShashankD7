function displayBrowserInfo() {
	const browserName = navigator.appName;
    const version = navigator.appVersion;
	const message = "You are using " + browserName + " version " + version;
	const browserInfoElement = document.getElementById("browser-info");
	browserInfoElement.textContent = message;
    }
displayBrowserInfo();