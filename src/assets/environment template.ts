// Placeholder variables that can be overwritten by CI/CD
//CI/CD needs to use the envsubst command to create a new env.js file based on template
//and replace the placeholders with environemnt variables reference below for docker details
//https://pumpingco.de/blog/environment-variables-angular-docker/

(function(window) {
  window.env = window.env || {};

  // Environment variables
  window["env"]["apiUrl"] = "${API_URL}";
  window["env"]["debug"] = "${DEBUG}";

})(this);


