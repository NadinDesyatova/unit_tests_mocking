import fetchData from './http.js';


export default function getLevel (userId) {
  const response = fetchData(`https://server/user/${userId}`);
  
  try {
    const data = JSON.parse(response);
    return `Ваш текущий уровень: ${data.level}`;
  } catch {
    return `Информация об уровне временно недоступна`;
  }
}
