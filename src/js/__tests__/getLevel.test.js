import getLevel from '../getLevel.js';
import fetchData from '../http.js';


jest.mock('../http.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test("should call user's level", () => {
  fetchData.mockReturnValue(JSON.stringify({"level": "5"}));

  const response = getLevel(1);

  expect(response).toEqual("Ваш текущий уровень: 5");
  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});

test("should return error", () => {
  fetchData.mockReturnValue(new Error('User not found [403]'));

  const response = getLevel(88);

  expect(response).toEqual("Информация об уровне временно недоступна");
  expect(fetchData).toHaveBeenCalledWith('https://server/user/88');
});
