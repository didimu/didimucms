import React from 'react';
import {Link} from 'react-router-dom'
import imgLogo from '../../assets/img/common/img_logo.png'


const Footer = (props) => {
  return (
    <footer id="footer" role="contentinfo" className={props.attr}>
      <div className="footer__inner">
        <div className='padding_inner'>
          <div className='f_menu_wrap'>
            <ul className="f_menu_list"> 
              <li>
                <Link to="/">개인정보처리방침</Link>
              </li>
              <li>
                <Link to="/">이용약관</Link>
              </li>
              <li>
                <Link to="/">오시는길</Link>
              </li> 
            </ul>
            <div class="family_site">
              <div class="family_site_wrap">
                <select className="select_ty1 " name="relationSite" title="Family site">
                  <option value="">Family site</option>
                  <option value="http://ss.dmy.co.kr/">수행과 수능</option>  
                  <option value="http://hr.dmy.co.kr/ys/">역사화랑</option>  
                  <option value="http://dmy.co.kr/">(주)독서문화연구원</option>  
                </select>		
                <Link to="/" className="site_move"  >이동</Link>
              </div> 	
            </div>



          </div>
          <div className="footer__body">
            <div className='f_logo'>    
                <img src={imgLogo} />  
            </div> 
            <div className='f_info'>    
              <p>주소  / 사업자등록번호 000-00-0000</p>
              <p>대표전화번호: 000-0000-0000  / 대표팩스번호: 000-0000-0000 / 이메일:admin@cms.com</p>
            </div> 
          </div> 
          <div className="footer__right">
            COPYRIGHT TORD CMS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;