const fetchData = () => {
  const corsProxy = "https://powerful-hamlet-05722.herokuapp.com/";
  const baseEndpoint = 'https://fantasy.premierleague.com/api/'
  const request = "bootstrap-static/";
  const url = corsProxy + baseEndpoint + request

  fetch(url)
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
    });
};

export default fetchData;
