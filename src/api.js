const API_BASE_URL = process.env.REACT_APP_API_URL;

const api = {
  getStudents: async () =>
    fetch(`${API_BASE_URL}?results=100`).then((res) => res.json()),
};

export default api;
