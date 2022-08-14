import aleApiNT from "api/aleApiNT";
import Router from "next/router";
import { AppDispatch } from "store/store";
import { setLoadingAUTH, setUser } from "./authSlice";


export interface AuthResponse {
    ok: boolean;
    token: string;
    id_user: number;
    email: string;
    user_type: string;
    roles: number[];
    user: User;
}

export interface User {
}


export const startLogIn = (id: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoadingAUTH(true));
    const router = Router;

    try {
        const { data } = await aleApiNT.post<AuthResponse>("/auth/login", { id, password });
        dispatch(setUser({ id }));
        localStorage.setItem("token", data.token);
        router.push("/home");
    } catch (error) {

        console.log(error);
    }
    dispatch(setLoadingAUTH(false));

}