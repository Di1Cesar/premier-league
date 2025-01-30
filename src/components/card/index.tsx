import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as React from "react";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

interface CardProps {
  id: number;
  nome: string;
  foto: string;
}

const Conteudo: React.FC<CardProps> = ({ id, nome, foto}) => {
  return (
    <>
      <Card key={id} sx={{ width: 300, borderRadius: 5, boxShadow: ' inset 0 0 0.7em black' , borderBottom: 8}}>
        <CardMedia
          sx={{ height: 10}}
        />
        <CardContent>
          <center>
          <Typography style={{fontFamily: 'sans-serif'}} gutterBottom variant="h5" component="div">
            {nome}
          </Typography>
            <img style={{marginTop:15}} height={70} src={foto} alt="" />
            </center>
            <ArrowForwardRoundedIcon style={{paddingLeft: 240, marginTop: 2 }}/>
        </CardContent>
      </Card>
    </>
  );
};
export default Conteudo;
