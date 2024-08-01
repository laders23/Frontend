import { useEffect , useRef } from "react";

import RegisterHeader from '../components/RegisterHeader';

import '../stylesheets/Common.css';
import '../stylesheets/OpenChat.css';

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 

function OpenChat() {
    return(
        <>  
            <RegisterHeader/> 
        </>
    )
}

export default OpenChat;