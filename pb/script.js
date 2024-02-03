document.addEventListener('DOMContentLoaded', function () {
    const selectedGenres = [];
    const songPreviews = [];
    let currentPreviewIndex = 0;
    const genreSearchButton = document.getElementById('genre-search-button');
    const genreInput = document.getElementById('genre-input');
    const songPreview = document.getElementById('song-preview');
    const prevPreviewButton = document.getElementById('prev-preview-button');
    const nextPreviewButton = document.getElementById('next-preview-button');
    const addToPlaylistButton = document.getElementById('add-to-playlist-button');
    const reRollButton = document.getElementById('re-roll-button');
    const CLIENT_ID = 'f701a85032634a93ab874d1289851276';
    const REDIRECT_URI = 'https://pika.rip/pb';
    function getAccessTokenFromUrl() {
        const urlParams = new URLSearchParams(window.location.hash.substring(1));
        return urlParams.get('access_token');
    }
    const accessToken = getAccessTokenFromUrl();
    async function fetchUserProfile(accessToken) {
        try {
            const response = await fetch('https://api.spotify.com/v1/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const userData = await response.json();
                return userData;
            } else {
                console.error('Error fetching user profile:', response.status, response.statusText);
                return null;
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
            return null;
        }
    }
    loginButton.addEventListener('click', async () => {
        if (accessToken) {
            const user = await fetchUserProfile(accessToken);
            if (user) {
                const userNameElement = document.getElementById('user-name');
                userNameElement.textContent = `Logged in as ${user.display_name}`;

                const userPfpElement = document.getElementById('user-profile-picture');
                userPfpElement.src = user.images[0].url;
            }
        } else {
            console.error('Access token is missing or invalid');
        }
    });
    genreSearchButton.addEventListener('click', async () => {
        const genre = genreInput.value;
        if (genre) {
            selectedGenres.push(genre);
            genreInput.value = '';
            displayCurrentPreview();
        }
    });
    prevPreviewButton.addEventListener('click', () => {
        if (currentPreviewIndex > 0) {
            currentPreviewIndex--;
            displayCurrentPreview();
        }
    });
    nextPreviewButton.addEventListener('click', () => {
        if (currentPreviewIndex < songPreviews.length - 1) {
            currentPreviewIndex++;
            displayCurrentPreview();
        }
    });
    addToPlaylistButton.addEventListener('click', () => {
    });
    reRollButton.addEventListener('click', () => {
        currentPreviewIndex = 0;
        displayCurrentPreview();
    });
    function displayCurrentPreview() {
        songPreview.src = songPreviews[currentPreviewIndex];
        songPreview.load();
    }
});
