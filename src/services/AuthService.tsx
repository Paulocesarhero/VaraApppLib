import api from "./Api";
import {
  Response,
  LoginViewModel,
  RegistroCientificoRequest,
} from "./AuthServiceInterfaces";
import { AxiosError } from "axios";

export const Login = async (data: LoginViewModel): Promise<Response> => {
  try {
    const response = await api.post<Response>(
      "/Api/Autenticacion/IniciarSesion",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const RegistroCientifico = async (
  data: RegistroCientificoRequest,
): Promise<Response> => {
  try {
    const response = await api.post<Response>(
      "/Api/Autenticacion/RegistrarUsuarioExperto2",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
