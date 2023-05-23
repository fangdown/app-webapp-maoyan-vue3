<template>
    <Swiper :slidesPerView="swiperOption.slidesPerView" :direction="swiperOption.direction"
        :freeMode="swiperOption.freeMode" :modules="swiperOption.modules" class="swiper-container">
        <Swiper-slide style="height: 5.9rem">
            <Slider :list="hotMovieData.movieData" type="movie">热门电影</Slider>
        </Swiper-slide>
        <Swiper-slide v-for="(item, index) in hotMovieData.movieData" :key="index" style="height:3.11rem">
            <div class="movieList">
                <MovieInfo :movieInfo="item" type="movie"></MovieInfo>
            </div>

        </Swiper-slide>
        <Swiper-slide style="height: 5.9rem; margin: 0.3rem 0">
            <Slider :list="hotMovieData.actorData" type="actor">热门影人</Slider>
        </Swiper-slide>
        <Swiper-slide style="height: 11.6rem">
            <div class="movieNews">
                <h2>娱乐热点</h2>
                <ul>
                    <li v-for="(item, index) in hotMovieData.news" :key="index">
                        <a href="#">{{ item.newsName }}</a>
                    </li>
                </ul>
            </div>
        </Swiper-slide>
        <Swiper-slide style="height:7rem;"></Swiper-slide>
    </Swiper>
</template>

<script>
import { reactive, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from "swiper";
import "swiper/css";
import axios from 'axios'
import Slider from '@/components/Slider.vue'
import MovieInfo from '@/components/MovieInfo.vue'
export default {
    components: {
        Swiper,
        SwiperSlide,
        Slider,
        MovieInfo
    },
    setup() {

        let swiperOption = reactive({
            slidesPerView: "auto",
            direction: "vertical",
            freeMode: {
                enabled: true,
                momentumRatio: 2,
                momentumVelocityRatio: 3,
            },
            modules: [FreeMode],
        })
        let hotMovieData = reactive({
            movieData: [],
            actorData: [],
            news: []
        })
        function getMovieList() {
            axios.get('/data/movieList.json').then(({ data }) => {
                console.log(data);
                hotMovieData.movieData = data
            })
        }
        function getActorList() {
            axios.get('/data/actorList.json').then(({ data }) => {
                console.log(data);
                hotMovieData.actorData = data
            })
        }
        function getNews() {
            axios.get('/data/entertainmentNews.json').then(({ data }) => {
                console.log(data);
                hotMovieData.news = data
            })
        }
        onMounted(() => {
            getMovieList()
            getActorList()
            getNews()
        })

        return {
            swiperOption,
            hotMovieData
        }
    }
}
</script>

<style scoped>
.swiper-container {
    margin-top: 4.25rem;
}

.movieList {
    background-color: #fff;
}

/* 娱乐新闻 */
.movieNews {
    height: auto;
    background-color: #fff;
    margin-bottom: 1.5rem;
    padding: 0.45rem 0.4rem;
}

.movieNews>h2 {
    font-size: 0.4rem;
    color: #000;
    font-weight: 400;
    margin-bottom: 0.5rem;
}

.movieNews li>a {
    font-size: 0.38rem;
    color: #000;
    font-weight: 300;
    margin-bottom: 0.5rem;
}
</style>