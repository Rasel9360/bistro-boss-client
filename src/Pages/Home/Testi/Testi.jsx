import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import quo from "../../../assets/shop/quote-left 1.png"

const Testi = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-six-kohl.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="w-10/12 mx-auto">
            <SectionTitle
                subHeading="What Our Clients Say"
                heading="TESTIMONIALS"
            ></SectionTitle>
            <div className="flex justify-center items-center mb-10">
                <img src={quo} alt="" />
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <div >
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className="flex flex-col justify-center items-center text-center space-y-3 px-10  mb-20 ">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <p>{review.details}</p>
                                    <h2 className="text-xl font-bold text-orange-500">{review.name}</h2>
                                </div>
                            </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Testi;