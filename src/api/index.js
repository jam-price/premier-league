const fetchData = () => {
  const corsProxy = "https://powerful-hamlet-05722.herokuapp.com/";
  const baseEndpoint = "https://fantasy.premierleague.com/api/";
  const request = "bootstrap-static/";
  const url = corsProxy + baseEndpoint + request;

  return actualFetch(url);
};

const actualFetch = async (url) => {
  let result;
  await fetch(url)
    .then((data) => data.json())
    .then((json) => {
      result = json;
    });
  return result;
};
export default fetchData;
