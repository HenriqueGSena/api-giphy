import axios from "axios";

const apiKey = '62QpHTgMuRj1eYGwjEZ5kN9N4Q4NDvy3';

export default class searchGiphy {
    public findTrendingGifsByParameter(
        offset: number = 0,
    ) {
        return axios.get(`https://api.giphy.com/v1/gifs/trending`, {
            params: {
                api_key: apiKey,
                offset: offset,
            }
        });
    };

    public findSearchingGifsByParameter(
        q: string
    ) {
        return axios.get(`https://api.giphy.com/v1/gifs/search`, {
            params: {
                api_key: apiKey,
                q: q,
            }
        });
    };
}
