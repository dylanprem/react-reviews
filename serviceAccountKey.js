require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY.replace(/\\n/g, "\n");
const keys = {
  type: "service_account",
  project_id: "react-reviews-project-1ecec",
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: privateKey,
  client_email:
    "firebase-adminsdk-dlbep@react-reviews-project-1ecec.iam.gserviceaccount.com",
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_CERT_URL,
};

module.exports = { keys };
