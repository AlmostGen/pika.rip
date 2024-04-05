const msalConfig = {
    auth: {
        clientId: 'your_client_id',
        authority: 'https://login.microsoftonline.com/your_tenant_id',
        redirectUri: 'https://pika.rip/auth/callback'
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
