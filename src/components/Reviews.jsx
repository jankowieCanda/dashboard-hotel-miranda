import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper, useSwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import styled from "styled-components";

const Reviews_Container = styled.div`
    width: 70%;
    margin-left: 21.568em;
    position: relative;
    bottom: -15em;
`;

export const Reviews = () => {
    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();

    return(
        <>
            <Reviews_Container>
                <div>
                    <h2>Latest Reviews by Customers</h2>
                    <Swiper 
                        modules={[Navigation]}
                        slidesPerView={3}
                        navigation
                    >
                        <SwiperSlide>
                            <div>
                                <h3>subject's review</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsam mollitia iste omnis blanditiis tempora molestias porro assumenda fugit rerum, eligendi esse laboriosam, corporis, voluptatibus aut delectus id voluptates hic!
                                </p>
                            </div>
                            <div>
                                <img src="src\assets\react.svg" alt="" />
                                <div>
                                    <p>customer name</p>
                                    <small>phone number</small>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        

                    </Swiper>
                </div>
            </Reviews_Container>
        </>
    );
}