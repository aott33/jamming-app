let userAccessToken;

const Spotify = {

    getAccessToken () {
        if(userAccessToken) {
            return userAccessToken;
        }

        // let url = 'https://example.com/callback#access_token=NwAExz...BV3O2Tk&token_type=Bearer&expires_in=3600&state=123';
        let url = window.location.href;
        let accessToken = url.match(/access_token=([^&]*)/);
        let expires_in = url.match(/expires_in=([^&]*)/);
        
        
    }
}

export default Spotify;