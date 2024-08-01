import '../stylesheets/Common.css';
import '../stylesheets/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

// function hideSearchBar() {
//     return(
//         <>
//             <div className='hideBarContainer'>
//                 <div>
//                     <div>
//                         <input type='text'/>
//                     </div>
//                     <div>
//                         <input type='text' />
//                     </div>
//                     <div>
//                         <input />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


function Header() {
    return(
        <header className='headerContainer'>
            <nav className='navContainer'>
                <ul className='ulContainer'>
                    <div className='logoBox'>
                        <li>
                            <a href='/'>
                                <div className="logo">MeetPro</div>
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input className='searchBar' type='text' placeholder='나의 인생 선배를 찾아보세요'/>
                        </li>
                    </div>
                    <div className='linkBox'>
                        <li className='linkItem'>
                            <a href='#'>로그인</a>
                        </li>
                        <li className='linkItem'>
                            <a href='/register'>회원가입</a>
                        </li>
                        <li className='linkItem'>
                            <a href='#'>마이페이지</a>
                        </li>
                    </div> 
                </ul>
            </nav>
        </header>
    )
}
export default Header;
