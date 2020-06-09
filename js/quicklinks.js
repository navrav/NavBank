function createQuickLink() {
    $.ajax({
        url: 'https://api.creditsense.com.au/v2/0B8AA6F4-4FFA-480C-B646-F28EEE596480/quicklinks/create',
        type: 'POST',
        data: JSON.stringify({
            "Settings": {
                "API_Token": "FCBF5EBA-AECE-4945-843B-7BF798B21BCB"
            },
            "Payload": {
                "Store_Code": "NAVB002"
            }
        }),
        success: (data) => {
            let token = data.Response.Token
            $('.log').append(`<a href='https://creditsense.com.au/q/${token}'>https://creditsense.com.au/q/${token}</p>`);
            $('#sms').attr('data-token', token);
            $('#email').attr('data-token', token);
        },
        error: (error) => {
            console.error(error);
        }
    });
}

function sendSms(token) {
    $.ajax({
        url: 'https://api.creditsense.com.au/v2/0B8AA6F4-4FFA-480C-B646-F28EEE596480/quicklinks/sms',
        type: 'POST',
        data: JSON.stringify({
            "Settings": {
                "API_Token": "FCBF5EBA-AECE-4945-843B-7BF798B21BCB"
            },
            "Payload": {
                "Token": token,
                "Name": "Naveen",
                "Mobile": "0429214096"
            }
        }),
        success: (data) => {
            $('.log').append(`<p>SMS Sent</p>`);
        },
        error: (error) => {
            console.error(error);
        }
    });
}

function sendEmail(token) {
    $.ajax({
        url: 'https://api.creditsense.com.au/v2/0B8AA6F4-4FFA-480C-B646-F28EEE596480/quicklinks/email',
        type: 'POST',
        data: JSON.stringify({
            "Settings": {
                "API_Token": "FCBF5EBA-AECE-4945-843B-7BF798B21BCB"
            },
            "Payload": {
                "Token": token,
                "Name": "Naveen",
                "Email": "nkumar@creditsense.com.au"
            }
        }),
        success: (data) => {
            $('.log').append(`<p>Email Sent</p>`);
        },
        error: (error) => {
            console.log(error);
        }
    });
}

document.querySelector("#create").addEventListener("click", createQuickLink);
document.querySelector("#sms").addEventListener("click", (e) => {
    sendSms(e.currentTarget.getAttribute('data-token'));
});
document.querySelector("#email").addEventListener("click", (e) => {
    sendEmail(e.currentTarget.getAttribute('data-token'));
});
$('#clear').click((e) => {
    $('.log').empty();
});