import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import { useAuthContext } from "../contexts/AuthProvider";
import useAuthCalls from "../hooks/useAuthCalls";

export default function NavBar() {
  const { currentUser } = useAuthContext();
  const { logout } = useAuthCalls();
  const auth = true;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#171026" }}>
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            variant="overline"
            sx={{
              flexGrow: 1,
              color: "#BCBABF",
              fontSize: "20px",
            }}
          >
            <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              {"EKREM/U"}
            </span>
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar
                  sx={{
                    textTransform: "uppercase",
                    bgcolor: "#BCBABF",
                    color: "#171026",
                  }}
                >
                  {currentUser
                    ? currentUser?.displayName?.split(" ").map((n) => n[0])
                    : ""}
                </Avatar>
                {/* {currentUser?.displayName || ""}
                <AccountCircle sx={{ marginLeft: ".5rem" }} /> */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    style={{ textDecoration: "none", color: "#171026" }}
                    to="/"
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {currentUser?.email ? (
                    <Link
                      style={{ textDecoration: "none", color: "#171026" }}
                      to="/login"
                      onClick={logout}
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      style={{ textDecoration: "none", color: "#171026" }}
                      to="/login"
                    >
                      Login
                    </Link>
                  )}
                </MenuItem>
                {!currentUser?.email && (
                  <MenuItem onClick={handleClose}>
                    <Link
                      style={{ textDecoration: "none", color: "#171026" }}
                      to="/register"
                    >
                      Register
                    </Link>
                  </MenuItem>
                )}

                {currentUser?.email && (
                  <MenuItem onClick={handleClose}>
                    <Link
                      style={{ textDecoration: "none", color: "#171026" }}
                      to="/newblog"
                    >
                      New Blog
                    </Link>
                  </MenuItem>
                )}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
