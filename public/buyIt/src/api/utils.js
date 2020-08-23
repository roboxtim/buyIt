const api = {
    url : (typeof process.env.VUE_APP_API_URL !== 'undefined') ? process.env.VUE_APP_API_URL : 'localhost:4848'
};

export default api;