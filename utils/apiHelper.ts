import axios from "axios";
import { useEffect } from "react";
import useSWR from "swr";

const HOST =
  "https://script.google.com/macros/s/AKfycbwIRgHys4dMoyyhFiuT7Nq3gysis1_OC_BITJGzVnxuXOWRuRWzJCj88EJc_bP5UW_1Nw/exec";

export type ApiEndpoint = {
  action: string;
  parameters?: {};
};

export const ENDPOINTS: { [key: string]: ApiEndpoint } = {
  getHomePosts: {
    action: "getHomePosts",
  },
  createPost: {
    action: "createPost",
    parameters: {
      id: "id",
      gender: "gender",
      content: "content",
    },
  },
  setPostLikeState: {
    action: "setPostLikeState",
    parameters: {
      userId: "userId",
      postId: "postId",
      state: "state",
      remove: "remove",
    },
  },
};

// export const useApiRequest = (endpoint: ApiEndpoint, params?: {}) => {
//   let url = `${HOST}?action=${endpoint.action}`;

//   if (params) {
//     console.log(params, Object.keys(params));
//     for (const key of Object.keys(params)) {
//       url = url.concat(`&${key}=${params[key]}`);
//     }
//   }

//   const { data, error, isLoading } = useSWR(url, fetcher);

//   return { data: data?.data, response: data, error, isLoading };
// };

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export const useApiRequest = (
  endpoint: ApiEndpoint,
  params?: Record<string, any>,
  enabled: boolean = true
) => {
  const url = new URL(HOST);
  url.searchParams.append("action", endpoint.action);

  if (params) {
    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });
  }

  const { data, error, isLoading, mutate } = useSWR(
    enabled ? url.toString() : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const trigger = async () => {
    return mutate(url.toString(), true);
  };

  return {
    data: data?.data,
    response: data,
    error,
    isLoading,
    trigger,
  };
};
