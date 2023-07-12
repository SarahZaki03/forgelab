const forgeSDK = require("forge-apis");
const config = require("../config/config");

module.exports = {
  getCredentials: function (tokenScope) {
    const client_id = config.credentials.client_id;
    const client_secret = config.credentials.client_secret;
    const scopes = config.scopes[tokenScope];
    const autoRefresh = true;

    return new forgeSDK.AuthClientTwoLegged(
      client_id,
      client_secret,
      scopes,
      autoRefresh
    );
  },
};
