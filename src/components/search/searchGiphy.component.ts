import {Vue} from "vue-class-component";
import searchGiphyService from '@/service/giphyService';

export default class SearchGiphy extends Vue {

    private serviceGif = new searchGiphyService();

    public gifs = [];
    public offset = 0;
    public isLoading = false;
    public query = '';

    public search() {
        this.searchGifs(this.query);
    }

    public async getTrendingGifs() {
        try {
            const response = await this.serviceGif.findTrendingGifsByParameter(this.offset);
            this.gifs = this.gifs.concat(response.data.data);
            this.offset += 25;
            this.isLoading = false;
        } catch (error) {
            console.error("Error trending gifs:", error);
            this.isLoading = false;
        }
    }

    public async searchGifs(query: string) {
        try {
            this.offset = 0;
            const response = await this.serviceGif.findSearchingGifsByParameter(query);
            this.gifs = response.data.data;
        } catch (error) {
            console.error("Error search gifs:", error);
        }
    }

    public mounted() {
        this.getTrendingGifs();
        window.addEventListener('scroll', this.handleScroll);
    }

    public beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    private handleScroll() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if (!this.isLoading) {
                this.isLoading = true;
                this.getTrendingGifs();
            }
        }
    }
}
