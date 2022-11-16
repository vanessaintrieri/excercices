import useSWR from "swr";
import axios from "axios";

const GAMES_URL = "http://localhost:3005/games";
const CATEGORY_URL = "http://localhost:3005/categories";

const fetcher = async (url) => {
    const result = await axios
        .get(url);
    return result.data;
};

const useGet = (url) => {

    const { data, error } = useSWR(url, fetcher);

    return {
        result: data,
        isLoading: !data && !error,
        error: error
    }
}


const useGames = (params = { id: 0, includeCategory: false }) => {
    let fetchUrl = GAMES_URL;

    if(params.includeCategory) {
        if (params.id > 0) {
            fetchUrl += ("?id=" + params.id + "&includeCategory=true")
        }
        else {
            fetchUrl += "?includeCategory=true";
        }
    }else {
        if (params.id > 0) {
            fetchUrl += ("?id=" + params.id)
        }
    }

    const { data, error, mutate } = useSWR(fetchUrl, fetcher);

    return {
        result: data,
        isLoading: !data && !error,
        error: error,
        mutate: mutate
    }
}

const useCategories = (params = { id: 0, includeGames: false }) => {
    let fetchUrl = CATEGORY_URL;

    if (params.includeGames) {
        if (params.id > 0) {
            fetchUrl += ("?id=" + params.id + "&includeGames=true");
        }
        else {
            fetchUrl += "?includeGames=true";
        }
    } else {
        if (params.id > 0) {
            fetchUrl += ("?id=" + params.id);
        }
    }


    const { data, error, mutate } = useSWR(fetchUrl, fetcher);

    return {
        result: data,
        isLoading: !data && !error,
        error: error,
        mutate
    }
}

const useSubmit = (url = "", id = 0) => {
    let submitUrl = url;
    if (id > 0) {
        submitUrl += ("?id=" + id);

        return (e, submitData, successFunction) => {
            e.preventDefault();
            axios.put(submitUrl, submitData).then(result => {
                if (result.data) {
                    successFunction();
                }
            });
        }
    }
    else {
        return (e, submitData, successFunction) => {
            e.preventDefault();
            axios.post(submitUrl, submitData).then(result => {
                if (result.data) {
                    successFunction();
                }
            });
        }
    }
}

const useDelete = (url, id = 0) => {
    let deleteUrl = url + "?id=" + id;

    return (successFunction) => {
        axios.delete(deleteUrl).then(result => {
            if (result.data) {
                successFunction();
            }
        });
    }
}

export { useGet, useGames, useCategories, useSubmit, useDelete, GAMES_URL, CATEGORY_URL };