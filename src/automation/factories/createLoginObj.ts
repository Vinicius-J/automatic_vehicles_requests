import { LoginPageAutomation } from "../../core/interfaces/LoginProtocol";
import { loginPageObj } from "../selectors/loginPageObj";

export const createLoginObj = (): LoginPageAutomation => {
  return {
    username: loginPageObj.username,
    password: loginPageObj.password,
  };
};
