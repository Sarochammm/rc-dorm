import httpClient from "../service/httpClient";
import { server } from "../service/constants";

export const isLoggedIn = () => {
  const token = localStorage.getItem(server.TOKEN_KEY);
  return token != null;
};

export const logoff = () => {
  localStorage.removeItem(server.TOKEN_KEY);
  localStorage.removeItem(server.USER_TYPE);
  localStorage.removeItem(server.USERNAME);
};


export const login = async values => {
  var bodyFormData = new FormData();
  bodyFormData.append("user_id", values.userid);
  bodyFormData.append("password", values.password);

  const result = await httpClient.post(server.LOGIN_URL, bodyFormData);
  if (result.data.status === "1") {
    localStorage.setItem(server.USERNAME, result.data.result.user_id);
    localStorage.setItem(server.TOKEN_KEY, "TOKEN123qweasd");
    return result.data;
  } else {
    return result.data;
  }
};