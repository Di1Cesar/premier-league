import { Box, Grid2 } from "@mui/material";
import Conteudo from "../components/card";
import Navbar from "../components/navbar/Navbar";
import { times } from "../static-data/Times";
import FormTimes from "../components/forms/FormTimes";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function TelaTimes() {
  return (
    <>
      <Navbar></Navbar>
      <Box sx={{ backgroundColor: "whitesmoke", height: 150 }}>
        <FormTimes />
      </Box>
      <Grid2
        sx={{ backgroundColor: "whitesmoke" }}
        justifyContent={"center"}
        container
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {times.map((time) => (
          <Link to={`/times/${time.id}`}>
            <Conteudo key={time.id} nome={time.nome} foto={time.foto} id={0} />
          </Link>
        ))}
      </Grid2>
      <Box sx={{ backgroundColor: "whitesmoke", height: 30 }}></Box>
      <Footer />
    </>
  );
}
