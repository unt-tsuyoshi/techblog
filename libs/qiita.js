const QIITAURL = process.env.QIITA_ENDPOINT_URL;
const QIITAAPIKEY = process.env.QIITA_API_KEY;

export const getQiitaPosts = async () => {
  const key = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${QIITAAPIKEY}`,
    },
  };
  const res = await fetch(QIITAURL, key).catch((err) => {
    console.error(err);
  });
  const json = await res.json();
  if (json.message) {
    console.error(json.message);
    throw new Error('Failed to fetch API');
  }
  return json;
};
