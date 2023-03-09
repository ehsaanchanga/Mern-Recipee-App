import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useAxiosPrivate = () => {
  const [cookies, _] = useCookies(["access_token"]);

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${cookies.access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error?.response?.status === 404) {
          throw new Error(`${error.config.url} not found`);
        }
        throw error;
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return axiosPrivate;
};

export default useAxiosPrivate;
