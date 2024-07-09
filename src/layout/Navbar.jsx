import React from "react";
import logo from "../assets/images/logo.svg";
import { styled } from "@mui/material/styles";
import { IconButton, Badge, Menu, MenuItem } from "@mui/material";
import { AccountCircle, Notifications, Search } from "@mui/icons-material";

const Navbar = ({ onLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const menuId = "primary-search-account-menu";
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const Searchs = styled("div")(({ theme }) => ({
    position: "relative",
    border: "1px solid #fefefe",

    borderRadius: theme.shape.borderRadius,
    backgroundColor: "transparent",
    color: "#fefefe",
    marginRight: "24px",
    marginLeft: "24px",
    width: "100%",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    color: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
  }));

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={onLogout}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem></MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <section className="pt-[12px] pb-[12px] container">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center ">
            <div className="">
              <img src={logo} className="w-[300px] h-[36px]" alt="logo" />
            </div>
            <Searchs>
              <SearchIconWrapper>
                <Search className="" />
              </SearchIconWrapper>
              <input
                type="search"
                name="search"
                id="serach"
                className="bg-transparent outline-none p-4 pl-16 transition-all w-full focus:bg-[#fefe] focus:text-black"
                placeholder="Search for any training you want "
              />
            </Searchs>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={1} color="error">
                  <Notifications className="" />
                </Badge>
              </IconButton>
            </div>
            <div>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </div>
          {renderMobileMenu}
          {renderMenu}
        </div>
      </div>
    </section>
  );
};

export default Navbar;

Navbar.propTypes = {
  onLogout: Function,
};
