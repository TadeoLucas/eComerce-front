import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Key } from 'react';

type navBarProps = {
    anchorElUser: HTMLElement | null,
    anchorElNav: HTMLElement | null,
    handleOpenNavMenu: Function,
    handleCloseNavMenu: Function,
    handleOpenUserMenu: Function,
    handleCloseUserMenu: Function,
    settings: String[],
    pages:  String[] 
}

export const NavbarView = (
    {
        anchorElUser,
        anchorElNav,
        handleOpenNavMenu,
        handleCloseNavMenu,
        handleOpenUserMenu,
        handleCloseUserMenu,
        settings,
        pages
    } : navBarProps
) => {
    return (
        <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              component='button'
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event)=>handleOpenNavMenu(event)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={(event)=>handleCloseNavMenu(event)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                    key={page as Key} 
                    onClick={(event)=>handleCloseNavMenu(event)}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page as Key}
                onClick={(event)=>handleCloseNavMenu(event)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton 
                onClick={(event)=>handleOpenUserMenu(event)} 
                sx={{ p: 0 }}
            >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={(event)=>handleCloseUserMenu(event)}
            >
              {settings.map((setting) => (
                <MenuItem 
                    key={setting as Key} 
                    onClick={(event)=>handleCloseUserMenu(event)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    )
}
