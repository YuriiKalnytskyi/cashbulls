export interface IForgotPassword {
  email: string;
}

export interface ILogin extends IForgotPassword {
  password: string;
}

export interface ISingUp extends ILogin {
  first_name: string;
}
