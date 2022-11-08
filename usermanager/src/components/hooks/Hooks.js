import useSWR from "swr"; //consente di usare fetcher in tutti i componenti
import axios from "axios";

const fetcher = (url) => {
  return axios.get(url).then((result) => {
    return result.data.data;
  });
};

const useRest = (url) => {
  const { data: resultData, error } = useSWR(url, fetcher);
  return {
    resultData: resultData,
    isLoading: !resultData && !error,
    error: error,
  };
};

export {useRest} ;
