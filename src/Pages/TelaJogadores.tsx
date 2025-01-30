import { Flex } from "antd";
import FormJogadores from "../components/forms/FormJogadores";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@mui/material";
import Tabela from "../components/table/Tabelas";
import Footer from "../components/footer";

const TelaJogadores = () => {
  return (
    <>
      <Navbar />
      <Flex style={{ backgroundColor: "#ffcd00", justifyContent: "center", height: '80%' }}>
        <FormJogadores></FormJogadores>
      </Flex>
      <Box>
        <Tabela/>
      </Box>
      <Footer/>
    </>
  );
};

export default TelaJogadores;
