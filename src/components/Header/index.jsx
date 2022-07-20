import {
  faCartPlus,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function Header() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='header__img'>
          <img src='https://canifa.com/assets/images/logo.svg'></img>
        </div>
        <div className='header__menu'>
          <ul className='header__menu--list'>
            <li className='menu__item active'>
              <a className='item--link'>Trang Chủ</a>
            </li>
            <li className='menu__item'>
              <a className='item--link'>Nam</a>
            </li>
            <li className='menu__item'>
              <a className='item--link'>Nữ</a>
            </li>
            <li className='menu__item'>
              <a className='item--link'>Bé Gái</a>
            </li>
            <li className='menu__item'>
              <a className='item--link'>Bé Trai</a>
            </li>
          </ul>
        </div>
        <div className='header__search'>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          <input type='text' placeholder='Tìm kiếm'></input>
        </div>
        <div className='header__group--icon'>
          <button>
            <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
          </button>
          <button>
            <FontAwesomeIcon
              className='icon'
              icon={faCartPlus}
            ></FontAwesomeIcon>
          </button>
          <button>
            <FontAwesomeIcon className='icon' icon={faUser}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
