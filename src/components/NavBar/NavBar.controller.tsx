import { useState } from 'react';
import { NavbarView } from './NavBar.view';


const pages = ['Contacto', 'Artículos'];
const settings = ['Login','Perfil', 'Cuenta', 'Logout'];

export const NavBarController = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <NavbarView 
        anchorElUser={anchorElUser}
        anchorElNav={anchorElNav}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        handleOpenUserMenu={handleOpenUserMenu}
        handleCloseUserMenu={handleCloseUserMenu}
        settings={settings}
        pages={pages}
    />
  );
}

