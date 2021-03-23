export default {
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Qt3gRHQr8",
    APP_CLIENT_ID: "45n0gm13ajb2ddkuglo6o6qpt1",
  },
  oauth: {
    domain: "abogapps-auth.auth.us-east-2.amazoncognito.com",
    scope: ['openid'],
    redirectSignIn: "https://localhost:3000/",
    redirectSignOut: "https://localhost:3000/",
    responseType: "code"
  }
};