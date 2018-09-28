import * as Axios from "axios";

const baseUrl: string = "";
const axios: Axios.AxiosInstance = Axios.default.create({
  baseURL: baseUrl,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  transformResponse: [
    data => {
      try {
        data = JSON.parse(data);
      } catch (e) {
        data = {};
      }
      //   if (data.status === 403) {
      //   }
      return data;
    }
  ]
});

export const get: (req: any) => Axios.AxiosPromise<any> = (req: any) => {
  return axios.get(req.url, { params: req.data });
};

export const post: (req: any) => Axios.AxiosPromise<any> = (req: any) => {
  return axios({ method: "post", url: `/${req.url}`, data: req.data });
};

export const put: (req: any) => Axios.AxiosPromise<any> = (req: any) => {
  return axios({ method: "put", url: `/${req.url}`, data: req.data });
};

export const Delete: (req: any) => Axios.AxiosPromise<any> = (req: any) => {
  return axios({ method: "delete", url: `/${req.url}`, data: req.data });
};
