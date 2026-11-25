import axios from 'axios';

// כתובת ה-API נלקחת ממשתנה הסביבה (קובץ .env או הגדרות Render)
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`);
    return result.data;
  },

  addTask: async (name) => {
    const result = await axios.post(`/items`, { name, isComplete: false });
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    const result = await axios.put(`/items/${id}`, { id, isComplete });
    return result.data;
  },

  deleteTask: async (id) => {
    await axios.delete(`/items/${id}`);
  }
};
