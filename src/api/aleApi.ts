import axios from "axios";
import { getSession } from "next-auth/react";

let token;
export const getToken = async () => {
  return new Promise<string | null>(async (resolve, reject) => {
    const session = await getSession();
    if (session) {
      if (session.user != null) {
        token = session.user.token;
        resolve(session.user.token);
      }
    }

    reject(null);
  });
};

const aleApi = axios.create({
<<<<<<< HEAD
  baseURL: `http://api.alejandria.edu.mx:3005/api-ale/v1`,
  headers: {
    "Content-Type": "application/json",
  },
=======
    baseURL: 'https://api.alejandria.edu.mx/api-ale/v1',
    headers: {
        'Content-Type': 'application/json',
        'x-token': token ? token : ''
    }
>>>>>>> df668691f6d28e1280b477d08c2fe2a23c04c02b
});

aleApi.interceptors.request.use(
  async (config) => {
    const finalToken = await getToken();
    if (finalToken && config.headers) {
      config.headers["x-token"] = finalToken;
      return Promise.resolve(config);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default aleApi;
