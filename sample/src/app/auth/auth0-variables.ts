interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'Owu62gnGsRYhk1v9SfB3c6IUbIJcRIze',
  domain: 'lbalmaceda.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
