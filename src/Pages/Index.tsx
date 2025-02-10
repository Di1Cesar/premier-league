import { Box, Container } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function Principal() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          justifyContent: "center",
          backgroundColor: "#ffcd00",
          display: "flex",
          minHeight: "800px",
        }}
      >
        <Container style={{ display: "flex", alignItems: "center" }}>
          <Button style={{ height: "15em", width: "70em" }} type="primary">
            <Link to={"/times"}>
              <h1>Times</h1>
            </Link>
          </Button>
          <span style={{ width: "2em" }}></span>
          <Button style={{ height: "15em", width: "70em" }} type="primary">
            <Link to={"/jogadores"}>
              <h1>Jogadores</h1>
            </Link>
          </Button>
        </Container>
      </Box>
      <Footer/>
    </>
  );
}
