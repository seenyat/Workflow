const fetchCreator = (url, method, body) => {
  return {
    url: url,
    constructor: {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export default fetchCreator;
