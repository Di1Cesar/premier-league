import { Box, Container } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import { Button, Flex, Typography } from "antd";

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
            <h1>Times</h1>
          </Button>
          <span style={{ width: "2em" }}></span>
          <Button style={{ height: "15em", width: "70em" }} type="primary">
            <h1>Jogadores</h1>
          </Button>
        </Container>
      </Box>
    </>
  );
}
