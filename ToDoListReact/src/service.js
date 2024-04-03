import axios from 'axios';

// הגדרת כתובת ה-API כ-default עם ה-port הנכון
axios.defaults.baseURL = 'http://localhost:5210';

// הוספת interceptor שתופס את השגיאות ב-response ורושם ללוג
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error('Request failed:', error.message);
    return Promise.reject(error);
  }
);

const TaskService = {
  getTasks: async () => {
    try {
      const result = await axios.get('/tasks');
      return result.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  },

  addTask: async (name) => {
    try {
      const result = await axios.post('/task', { name});
      return result.data;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  },

  setCompleted: async (id, isComplete) => {
    try {
      const result = await axios.put(`/task/${id}`, { isComplete });
      return result.data;
    } catch (error) {
      console.error('Error setting task completion:', error);
      throw error;
    }
  },

  deleteTask: async (id) => {
    try {
      await axios.delete(`/task/${id}`);
      console.log('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },
};

export default TaskService;