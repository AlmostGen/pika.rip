const msalConfig = {
    auth: {
        clientId: '25270647-3321-4e4d-9f26-3a6bc9ae725f',
        authority: 'https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a',
        redirectUri: 'https://pika.rip/auth/',
        knownAuthorities: ['https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a']
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

function signIn() {
    const loginRequest = {
        scopes: ['openid', 'profile', 'email']
    };

    msalInstance.loginPopup(loginRequest)
        .then(response => {
            // Handle successful authentication
            console.log('Authentication successful', response);
        })
        .catch(error => {
            // Handle authentication errors
            console.error('Authentication failed', error);
        });
}

function signOut() {
    msalInstance.logout();
}

// Example code for handling authentication callback
msalInstance.handleRedirectPromise()
    .then(response => {
        // Handle authentication callback
        console.log('Authentication callback handled successfully', response);
    })
    .catch(error => {
        // Handle authentication callback errors
        console.error('Failed to handle authentication callback', error);
    });
