<template>
    <div class="horizontal">
        <h2>
            <slot></slot>
        </h2>
        <!-- 横向滑屏 -->
        <Swiper :slidesPerView="swiperOption.slidesPerView" :freeMode="swiperOption.freeMode"
            :modules="swiperOption.modules">
            <Swiper-slide v-for="(item, index) in list" :key="index">
                <Item :info="item" :type="type"></Item>
            </Swiper-slide>
        </Swiper>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from "swiper";
import Item from '@/components/Item.vue'
import "swiper/css";
export default {
    props: {
        list: {
            type: Array,
            default: []
        },
        type: {
            type: String,
            default: 'movie'
        }

    },
    components: {
        Swiper,
        SwiperSlide,
        Item
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
        return {
            swiperOption
        }
    }
}
</script>


<style scoped>
/* 热门电影以及热门影人公共样式 */
.horizontal {
    background-color: #fff;
    padding: 0.45rem 0.4rem;
}

.horizontal>h2 {
    font-size: 0.4rem;
    color: #000;
    font-weight: 400;
    margin-bottom: 0.4rem;
}

.horizontal .swiper-slide {
    width: 2.35rem;
    margin-right: 0.28rem;
}

.horizontal .swiper-slide:last-child {
    margin-right: 0;
}
</style>