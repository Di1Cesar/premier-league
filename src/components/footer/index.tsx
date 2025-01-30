import { Box } from "@mui/material";
import { Flex, Typography } from "antd";

const Footer = () => {
  return (
    <>
      <Box width={"100%"} height={10} sx={{ bgcolor: "#00a032" }} />
      <Box width={"100%"} height={10} sx={{ bgcolor: "#FFFFF" }} />
      <Box height={120} sx={{ backgroundColor: "#014dff"}}>
        <Flex style={{ marginLeft: 15
         }}>
          <img
            style={{margin: 10}}
            height={"100"}
            src="https://www.cbf.com.br/_next/image?url=%2Flogo%2Flogo-borda.png&w=96&q=100"
            alt=""
          />
            <Box width={'35%'}></Box>
          <Typography
            style={{
              marginTop: 80,
              color: "whitesmoke",
              fontFamily: "sans-serif",
              fontSize: "15px",              
            }}
          >
            {" "}
            Confederação Brasileira de Futebol Ⓒ Todos os direitos reservados
          </Typography>
        </Flex>
      </Box>
    </>
  );
};
export default Footer;
