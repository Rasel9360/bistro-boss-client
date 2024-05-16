import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle';

const Category = () => {
    return (
        <div className='w-10/12 mx-auto my-20'>
            <SectionTitle 
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide} alt="" />
                    <h2 className='text-3xl font-serif text-white text-center -mt-10'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-3xl font-serif text-white text-center -mt-10'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-3xl font-serif text-white text-center -mt-10'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-3xl font-serif text-white text-center -mt-10'>Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='text-3xl font-serif text-white text-center -mt-10'>Salads</h2>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Category;