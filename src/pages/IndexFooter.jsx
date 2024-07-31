import '../stylesheets/Common.css';
import '../stylesheets/IndexFooter.css';

function IndexFooter() {
    return(
        <>
            <footer className='footer__container'>
                <div className='foot__category'>
                    <div className='category__box'>
                        <div className='title__box'><a className='cate__title'>MeetPro</a></div>
                        <div><a href='#'>MeetPro 소개</a></div>
                        <div><a href='#'>MeetPro 비지니스</a></div>
                    </div>
                    <div className='category__box'>
                        <div className='title__box'><a className='cate__title'>개인정보처리방침</a></div>
                    </div>
                    <div className='category__box'>
                        <div className='title__box'><a className='cate__title'>이용약관</a></div>
                    </div>
                    <div className='category__box'>
                        <div className='title__box'><a className='cate__title'>고객센터</a></div>
                        <div><a href='#'>공지사항</a></div>
                        <div><a href='#'>자주 묻는 질문</a></div>
                    </div>
                </div>
                <div className='trade__name'>
                    <div className='name__container'>
                        <div className='trade__logo__box'>
                            <a href='#'>MeetPro</a>
                            <a href='#'>|&ensp;개인정보처리방침</a>
                            <a href='#'>|&ensp;이용약관</a>
                            <a href='#'>|&ensp;비지니스</a>
                        </div>
                        <div className='certificate__box'>
                            <span>
                            (주)MeetPro | 대표자: 김동현 | 사업자번호: 000-01-00612 사업자 정보 확인
                            </span>
                            <span>
                            통신판매업: 2024-계명대B-0062 | 개인정보보호책임자: 박상우 | 이메일: likelion@love.com
                            </span>
                            <span>
                            전화번호: 010-0000-0000 | 주소: 대구광역시 달서구 신당동 달구벌대로 1095
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default IndexFooter;