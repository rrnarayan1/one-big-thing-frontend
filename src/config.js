// Sets base url for server calls. Feel free to change the
// dev environment to point to the running server for front-end testing

const dev = {
  backendBase: "http://localhost:5000"
};

const prod = {
  backendBase: "http://35.203.94.32:5000"
};

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default config;
