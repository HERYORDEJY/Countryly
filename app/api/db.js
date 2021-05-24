import axios from 'axios';
const baseUrl = 'http://192.168.43.19:3000/articles';

export const getArticles = async () => {
  try {
    const response = await axios.get(baseUrl);
    // alert(JSON.stringify(response.data));
    return [...response.data];
  } catch (error) {
    alert(error.message);
  }
};
