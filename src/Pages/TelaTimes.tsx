import { Box, Grid2 } from "@mui/material";
import Conteudo from "../components/card";
import Navbar from "../components/navbar/Navbar";
import { times } from "../static-data/Times";
import FormTimes from "../components/forms/FormTimes";
import Footer from "../components/footer";

export default function TelaTimes() {
  return (
    <>
      <Navbar></Navbar>
      <Box sx={{ backgroundColor: "#ffcd00", height: 150 }}>
        <FormTimes />
      </Box>
      <Grid2
        sx={{ backgroundColor: "#ffcd00" }}
        justifyContent={"center"}
        container
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {times.map((time) => (
          <Conteudo key={time.id} nome={time.nome} foto={time.foto} id={0} />
        ))}
      </Grid2>
      <Box sx={{ backgroundColor: "#ffcd00", height: 30 }}></Box>
      <Footer/>
    </>
  );
}
