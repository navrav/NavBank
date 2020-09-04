// Log the supplied message
function logMsg(message) {
    if (typeof console == "object") console.error(message);
    else alert(message);
}

// Do something like display a message to the user
// or update the interface
function onApplicationSuccess() {
    // ...
}

// Handle the response provided by the <iframe>
function handleIFrameResponse(response, data) {
    switch (response) {
        case "1":
            logMsg('Initialised iFrame');
            break;
        case "99": // Example status code (Bank status success)
            logMsg('Bank details collected successfully');
            break;
        case "100": // Example status code
            onApplicationSuccess();
            break;
    }
}

$(document).ready(function () {
    $.CreditSense.Iframe({
        client: "NAVB001",
        elementSelector: "#creditSenseIFrame",
        params: {
            debugBanks: true,
            // bgcolour: "ee6e73",
            // termsBeforeCredentials: true,
            // multibank: true
        },
        callback: handleIFrameResponse
    });
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
    if (event.origin === "https://creditsense.com.au") {
        let response = event.data;
        switch (response) {
            case "1":
                logMsg('Initialised iFrame');
                break;
            case "99": // Example status code (Bank status success)
                logMsg('Bank details collected successfully');
                break;
            case "100": // Example status code
                onApplicationSuccess();
                break;
        }
    }
}