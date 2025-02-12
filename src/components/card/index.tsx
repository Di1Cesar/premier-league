import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as React from "react";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import '../../styles/variables.scss'

interface CardProps {
  id: number;
  nome: string;
  foto: string;
}



const Conteudo: React.FC<CardProps> = ({ id, nome, foto}) => {
  return (
    <>
      <Card key={id} sx={{ width: 300, borderRadius: 5 }} className="card">
        <CardMedia
          sx={{ height: 10}}
        />
        <CardContent>
          <center>
          <Typography fontFamily={'oxanium'} gutterBottom variant="h6" component="div">
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
