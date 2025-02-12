import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Clubes", "Jogadores"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
      <Box
        className="menu"
        component="nav"
        sx={{ backgroundColor: "#0d67e7", color: "#fff" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
           <Link to="/"> <img src="https://www.cbf.com.br/logo/logo-verde.svg" alt="" /> </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#FFFFFF", fontFamily: "oxanium" }}>
                {item === "Home" ? (
                  <Link to="/" style={{color: '#FFFFFF'}}>Home</Link>
                ) : item === "Clubes" ? (
                  <Link to="/times" style={{color: '#FFFFFF'}}>Clubes</Link>
                ) : item === "Jogadores" ? (
                  <Link to="/jogadores" style={{color: '#FFFFFF'}}>Jogadores</Link>
                ) : (
                  
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
  );
}
