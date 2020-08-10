import oauth2 from "client-oauth2";
const CLIENT_ID = process.env.BNET_CLIENT_ID ?? "";
const CLIENT_SECRET = process.env.BNET_CLIENT_SECRET ?? "";
const REGION = process.env.BNET_REGION ?? "eu";

export const getToken = async (): Promise<string> => {
  const bnetAuth = new oauth2({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    accessTokenUri: `https://${REGION}.battle.net/oauth/token`,
    authorizationUri: `https://${REGION}.battle.net/oauth/authorize`,
    redirectUri: "/",
  });
  const accessToken = await bnetAuth.credentials
    .getToken()
    .then((res) => res.accessToken);
  return `Bearer ${accessToken}`;
};
