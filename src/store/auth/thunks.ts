import aleApiNT from "api/aleApiNT";
import Router from "next/router";
import { AppDispatch } from "store/store";
import { setLoadingAUTH, setUser } from "./authSlice";
import { IAuthResponse } from "interfaces/Auth.interface";
import { signIn } from "next-auth/react";

export interface User {
  id_teacher: string;
  name: string;
}

export const startLogIn =
  (id: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoadingAUTH(true));
    const router = Router;
    try {
      // const { data } = await aleApiNT.post<IAuthResponse>("/auth/login", {
      //   id,
      //   password,
      // });
      // dispatch(setUser({ id }));
      // localStorage.setItem("token", data.token);
      const res = await signIn("login", {
        redirect: false,
        id,
        password,
      });
      if (res?.ok) {
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
    // dispatch(setLoadingAUTH(false));
  };

export const startLogOut = () => async (dispatch: AppDispatch) => {
  dispatch(setLoadingAUTH(true));
  const router = Router;

  try {
    localStorage.removeItem("token");
    router.push("/login");
  } catch (error) {
    console.log(error);
  }
  dispatch(setLoadingAUTH(false));
};
