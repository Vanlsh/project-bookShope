import axios from "axios";

const BASE_URL = 'https://books-backend.p.goit.global';

const TIMEOUT = 1000 * 60;

export const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

 
  // Додаткова обробка помилки
  function handleAxiosError(error) {
    console.error('Помилка виконання запиту:', error);
  };


  // Встановлення обробника помилок для всіх запитів через інстанс Axios
  instance.interceptors.response.use(response => {
    // Обробка успішної відповіді
    return response;
  }, handleAxiosError);
  //виклик додаткової обробки