import { Box } from "@mui/material";
import { Flex, Typography } from "antd";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#014dff" }}>
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "5em",
          backgroundColor: "#0d67e7",
        }}
      >
        <img src="https://www.cbf.com.br/logo/logo-verde.svg" height={'60px'} style={{marginRight: 10}}/>
        <Typography style={{ color: "white", textWrap: 'wrap', fontFamily: 'oxanium' }}>
          Confederação Brasileira de Futebol Ⓒ Todos os direitos reservados
        </Typography>
      </Flex>
    </Box>
  );
};
export default Footer;
