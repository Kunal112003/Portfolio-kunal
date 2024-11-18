import React, { useEffect, useState, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;
const navItems = [
  ["Expertise", "expertise"],
  ["History", "history"],
  ["Projects", "projects"],
  ["Contact", "contact"]
];

interface NavigationProps {
  parentToChild: string; // Adjust type as needed
  modeChange: () => void; // Callback for mode switching
}

const Navigation: React.FC<NavigationProps> = ({ parentToChild, modeChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      console.log(`Scrolling to section: ${sectionId}`);
    } else {
      console.warn(`Section with id "${sectionId}" not found.`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        setScrolled(window.scrollY > navbar.clientHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = useMemo(
    () => (
      <Box
        className="navigation-bar-responsive"
        onClick={handleDrawerToggle}
        sx={{ textAlign: "center" }}
      >
        <p className="mobile-menu-top">
          <ListIcon />
          Menu
        </p>
        <Divider />
        <List>
          {navItems.map(([label, sectionId]) => (
            <ListItem key={label} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => scrollToSection(sectionId)}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    ),
    []
  );

  return (
    <Box sx={{ display: "flex", fontFamily: 'Roboto, sans-serif' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top ${scrolled ? "scrolled" : ""}`}
        sx={{ fontFamily: 'Roboto, sans-serif' }}
      >
        <Toolbar className="navigation-bar">
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer for mobile navigation"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(([label, sectionId]) => (
              <Button
                key={label}
                onClick={() => scrollToSection(sectionId)}
                sx={{ color: "#fff", fontSize: "1.2rem", mx: 3, fontFamily: 'Roboto, sans-serif' }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navigation;