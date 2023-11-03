import { useLocation, useNavigate } from 'react-router-dom';

import chatIcon from '@/assets/chat.svg';
import hamburgerIcon from '@/assets/hamburger.svg';
import homeIcon from '@/assets/home.svg';
import mapIcon from '@/assets/map.svg';
import plusIcon from '@/assets/plus.svg';

import { NavbarButton, NavbarContainer } from './Navbar.style';

export const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavbarClick = (page: string) => {
    navigate(`/${page}`);
  };

  const navbarMenu = [
    { name: '홈', page: '', image: homeIcon },
    { name: '지도', page: 'map', image: mapIcon },
    { name: '', page: 'create', image: plusIcon },
    { name: '메세지', page: 'message', image: chatIcon },
    { name: '전체', page: 'all-services', image: hamburgerIcon },
  ];

  return (
    <NavbarContainer>
      {navbarMenu.map(({ name, page, image }) =>
        `/${page}` === pathname ? (
          <NavbarButton key={image} onClick={() => handleNavbarClick(page)}>
            <img
              key={location.pathname}
              className={`${page} currentPage`}
              src={image}
              alt={name}
            />
            <p className="currentPage">{name}</p>
          </NavbarButton>
        ) : (
          <NavbarButton key={image} onClick={() => handleNavbarClick(page)}>
            <img className={`${page}`} src={image} alt={name} />
            <p>{name}</p>
          </NavbarButton>
        )
      )}
    </NavbarContainer>
  );
};
