import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper, useSwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import styled from "styled-components";
import { fonts } from "../var";
import { ReviewsProps } from "../interfaces/PropsInterface";

const Reviews_Container = styled.div`
    width: 75%;
    margin-left: 25%;
    position: relative;
    bottom: -15em;
    h2 {
        font-family: ${fonts.poppins.family};
        font-size: 1.25rem;
        font-weight: ${fonts.poppins.weight};
        color: #393939;
    }
`;

const SliderData = styled.div`
    width: 75%;
    margin: 1.5em auto;
    border-radius: 10px;
    h3 {
        font-family: ${fonts.poppins.family};
        font-size: 0.9rem;
        color: #262626;
        margin-bottom: 0.5em;
    }
    p {
        font-family: ${fonts.poppins.family};
        font-size: 0.85rem;
        font-weight: 300;
        color: #4E4E4E;
        padding: 0.5em;
    }
`;

const CustomerData = styled.div`
    position: relative;
    display: flex;
    justify-content: left;
    padding: 0.5em;
    img {
        margin: 0 0.5em;
    }
    p, small {
        font-family: ${fonts.poppins.family};
        font-size: 1rem;
        font-weight: 700;
        color: #262626;
        text-align: left;
        padding: 0;
    }
    small {
        font-size: 0.875rem;
    }
    div:last-of-type {
        position: absolute;
        bottom: 0.5em;
        right: 1.5em;
        svg {
            width: 2em;
            height: 2em;
            path {
                fill: #E23428;
            }
        }
    }
`;

export const Reviews = (props: ReviewsProps) => {
    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();
    
    const data = props.reviews.map((review) => {
        return(
            <SwiperSlide>
                <SliderData>
                    <div>
                        <h3>{review.subject}</h3>
                        <p>{review.review}</p>   
                    </div>
                    <CustomerData>
                        <img src={review.picture} alt="picture" />
                        <div>
                            <p>{review.customer_name}</p>
                            <small>{review.phone}</small>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </div>
                    </CustomerData>
                </SliderData>
            </SwiperSlide>
        );
    })

    return(
        <>
            <Reviews_Container >
                <div>
                    <h2>Latest Reviews by Customers</h2>
                    <Swiper 
                        modules={[Navigation]}
                        slidesPerView={3}
                        navigation
                    >
                        {data}
                    </Swiper>
                </div>
            </Reviews_Container>
        </>
    );
}