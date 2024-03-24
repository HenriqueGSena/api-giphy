import {Vue} from "vue-class-component";
import searchGiphyService from '@/service/giphyService';

export default class SearchGiphy extends Vue {
    private serviceGif = new searchGiphyService();
    public gifs = [];
    public offset = 0;
    public isLoading = false;

    public async getTrendingGifs() {
        try {
            const response = await this.serviceGif.findTrendingGifsByParameter(this.offset);
            this.gifs = this.gifs.concat(response.data.data);
            this.offset += 25;
            this.isLoading = false;
        } catch (error) {
            console.error("Erro ao buscar gifs:", error);
            this.isLoading = false;
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
