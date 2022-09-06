import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Pagination,
} from 'swiper/core';

import RoadmapItem from './items/roadmap';
import 'swiper/css';
import { useRef } from 'react';
import { Navigation } from 'swiper';

const list = [
    [
        "Website Development", "Contract Development", "Community Building", "Private Presale"
    ],
    [
        "Marketing", "AMAs", "Public Presale", "AMAs"
    ],
    [
        "Token launch on pancakeswap", "Liquidity lock / DEX listing", "CMC and CG listing", "DEX tool Trending", "Airdropping", "Community contest and Giveaways"
    ],
    [
        "NFT whitelisting", "Marketing", "Staking Dapp / NFT Marketplace", "NFT Launch", "Tax Implementation", "Key Partnership", "CEX listing", "Latest Roadmap"
    ]
];

SwiperCore.use([Pagination]);

export default function Roadmap() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    
    return (
        <section
            className='roadmap-container mb-5'
        >
            <div
                className="container position-relative"
            >
                <div
                    className="roadmap-title-group my-5 text-center"
                >
                    <h4 className="color-primary">Roadmap</h4>
                    <h2>How All Started</h2>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    modules={[Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }
                    }}
                    navigation={{
                        // enabled: true,
                        prevEl: prevRef.current ? prevRef.current : undefined,
                        nextEl: nextRef.current ? nextRef.current : undefined,
                      }}
                    onBeforeInit={(swiper) => {
                        if (swiper?.params) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.update();
                        }
                    }}
                >
                    {
                        list.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <RoadmapItem
                                    count={idx + 1}
                                    list={item}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div ref={prevRef} className='roadmap-slider-prev'>
                    <i className='fas fa-angle-left'/>
                </div>
                <div ref={nextRef} className='roadmap-slider-next'>
                    <i className='fas fa-angle-right'/>
                </div>
            </div>
        </section>
    )
}