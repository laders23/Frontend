import '../stylesheets/Common.css';
import '../stylesheets/IndexBody.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight} from "@fortawesome/free-solid-svg-icons";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css"; //basic

function IndexBody() {
    return(
        <>
        <div className='commuContainer'>
            <div className='commuTitleBox'>
                <div className='commuTitle'>
                    <span>커뮤니티</span>
                    {/* <span></span>  옵션자리 */ }
                </div>
                <div className='commuLink'>
                    <a href='#'>바로가기
                    <FontAwesomeIcon icon={faCaretRight} />
                    </a>
                </div> 
            </div>
            <div className='commuPostBox'>
            <Swiper
          spaceBetween={0} /* 슬라이드 간의 간격 조정 */
          slidesPerView={3} /* 화면에 보일 슬라이드 수 설정 */
          navigation
          modules={[Navigation]}
        >
          <SwiperSlide>
              <div className='postContainer'>
                <div className='postText'>
                오늘 회사에서 직속선배랑
                같이 밥을 먹는데 제가 
                소심한 성격이라서 말을
                잘 못걸겠습니다. 
                이럴때 아이스 브레이킹을 
                하는 방법 좀 알려주세요ㅠㅠ
                </div>
                <div className='postInfo'>
                    <div className='postAge'>20대</div>
                    <div className='postCompany'>NAVER</div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='postContainer'>
                <div className='postText'>
                현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.
                </div>
                <div className='postInfo'>
                    <div className='postAge'>20대</div>
                    <div className='postCompany'>KAKAO</div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='postContainer'>
                <div className='postText'>
                오늘 회사에서 직속선배랑
                같이 밥을 먹는데 제가 
                소심한 성격이라서 말을
                잘 못걸겠습니다. 
                이럴때 아이스 브레이킹을 
                하는 방법 좀 알려주세요ㅠㅠ
                </div>
                <div className='postInfo'>
                    <div className='postAge'>20대</div>
                    <div className='postCompany'>우아한형제들</div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='postContainer'>
                <div className='postText'>
                오늘 회사에서 직속선배랑
                같이 밥을 먹는데 제가 
                소심한 성격이라서 말을
                잘 못걸겠습니다. 
                이럴때 아이스 브레이킹을 
                하는 방법 좀 알려주세요ㅠㅠ
                </div>
                <div className='postInfo'>
                    <div className='postAge'>20대</div>
                    <div className='postCompany'>NAVER</div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='postContainer'>
                <div className='postText'>
                오늘 회사에서 직속선배랑
                같이 밥을 먹는데 제가 
                소심한 성격이라서 말을
                잘 못걸겠습니다. 
                이럴때 아이스 브레이킹을 
                하는 방법 좀 알려주세요ㅠㅠ
                </div>
                <div className='postInfo'>
                    <div className='postAge'>20대</div>
                    <div className='postCompany'>NAVER</div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='postContainer'>
                <div className='postText'>
                오늘 회사에서 직속선배랑
                같이 밥을 먹는데 제가 
                소심한 성격이라서 말을
                잘 못걸겠습니다. 
                이럴때 아이스 브레이킹을 
                하는 방법 좀 알려주세요ㅠㅠ
                </div>
                <div className='postInfo'>
                    <div className='postAge'>20대</div>
                    <div className='postCompany'>NAVER</div>
                </div>
              </div>
          </SwiperSlide>
        </Swiper>
            </div>
        </div>
        <div className='chatContainer'>
            <div className='chatTitleBox'>
                <div className='chatTitle'>
                    <span>인생선배님과 대화하고 싶은사람?
                        <span> 오픈 채팅</span>
                    </span>
                </div>
                <div className='chatLink'>
                    <a href='#'>바로가기
                    <FontAwesomeIcon icon={faCaretRight} />
                    </a>
                </div> 
            </div>
            <div className='chatRoomBox'>
            <Swiper
          spaceBetween={0} /* 슬라이드 간의 간격 조정 */
          slidesPerView={3} /* 화면에 보일 슬라이드 수 설정 */
          navigation
          modules={[Navigation]}
        >
          <SwiperSlide>
              <div className='chatRoomContainer'>
                <div className='chatRoomTitle'>개발 토론하실분~</div>
                <div className='chatText'>
                저희 방은 컴퓨터 개발업계에서 종사하고 있는 사람들이 모여 있는 방입니다.
                </div>
                <div className='chatBtnBox'>
                    <div className='peopleNum'>
                        <span>15명 / 70명</span>
                    </div>
                    <div className='chatBtn'>입장하기</div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='chatRoomContainer'>
                <div className='chatRoomTitle'>금융 관련 정보 공유방</div>
                <div className='chatText'>
                저희 방은 금융/경제 관련 정보 공유를 하는 방입니다.
                </div>
                <div className='chatBtnBox'>
                    <div className='peopleNum'>
                        <span>10명 / 70명</span>
                    </div>
                    <div className='chatBtn'>입장하기</div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='chatRoomContainer'>
                <div className='chatRoomTitle'>노동업계 정보 공유방</div>
                <div className='chatText'>
                저희 방은 컴퓨터 개발업계에서 종사하고 있는 사람들이 모여 있는 방입니다.
                </div>
                <div className='chatBtnBox'>
                    <div className='peopleNum'>
                        <span>25명 / 70명</span>
                    </div>
                    <div className='chatBtn'>입장하기</div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='chatRoomContainer'>
                <div className='chatRoomTitle'>개발 토론하실분~</div>
                <div className='chatText'>
                저희 방은 컴퓨터 개발업계에서 종사하고 있는 사람들이 모여 있는 방입니다.
                </div>
                <div className='chatBtnBox'>
                    <div className='peopleNum'>
                        <span>15 / 70명</span>
                    </div>
                    <div className='chatBtn'>입장하기</div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='chatRoomContainer'>
                <div className='chatRoomTitle'>개발 토론하실분~</div>
                <div className='chatText'>
                저희 방은 컴퓨터 개발업계에서 종사하고 있는 사람들이 모여 있는 방입니다.
                </div>
                <div className='chatBtnBox'>
                    <div className='peopleNum'>
                        <span>15 / 70명</span>
                    </div>
                    <div className='chatBtn'>입장하기</div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='chatRoomContainer'>
                <div className='chatRoomTitle'>개발 토론하실분~</div>
                <div className='chatText'>
                저희 방은 컴퓨터 개발업계에서 종사하고 있는 사람들이 모여 있는 방입니다.
                </div>
                <div className='chatBtnBox'>
                    <div className='peopleNum'>
                        <span>15 / 70명</span>
                    </div>
                    <div className='chatBtn'>입장하기</div>
                </div>
              </div>
          </SwiperSlide>
        </Swiper>
            </div>
        </div>
        </>
    )
}   
export default IndexBody;