import { HelloWorld } from './index';

test("helloWorld should alert with the user's name", () => {
  const alertMock = jest.fn();
  global.alert = alertMock;

  HelloWorld('Gimli');
  expect(alertMock).toHaveBeenCalledWith('Hello Gimli !');
});
