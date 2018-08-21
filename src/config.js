module.exports = {
    PORT: process.env.PORT || 8080,
    API_USER_URL: process.env.REACT_APP_API_USER_URL || "http://localhost:3000/api/users",
    API_AUTH_URL: process.env.REACT_APP_API_AUTH_URL || "http://localhost:3000/api/auth/login"
  };