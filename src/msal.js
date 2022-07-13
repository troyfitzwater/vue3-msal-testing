import { PublicClientApplication,EventType } from "@azure/msal-browser"

// let account
// or set this to a store

const msalConfig = {
    auth: {
        clientId: "<<client id from auzre>>",
        redirectUri: "http://localhost:8080"
    }
}

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.addEventCallback((event) => {
  // set active account after redirect
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    console.log('account')
    console.log(account)
    msalInstance.setActiveAccount(account);
  }
}, error=>{
  console.log('error', error);
});

export default msalInstance;
