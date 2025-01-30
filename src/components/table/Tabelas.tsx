import React from "react";
import { Flex, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { times } from "../../static-data/Times";
import { Box, Container } from "@mui/material";

interface DataType {
  id: string;
  nome: string;
  idade: number;
  nacionalidade: string;
  posicao: string;
  clube: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Nome",
    dataIndex: "nome",
    key: "nome",
  },
  {
    title: "Idade",
    dataIndex: "idade",
    key: "idade",
  },
  {
    title: "Nacionalidade",
    dataIndex: "nacionalidade",
    key: "nacionalidade",
  },
  {
    title: "Posição",
    key: "posicao",
    dataIndex: "posicao",
  },
  {
    title: "Clube",
    key: "action",
    dataIndex: "clube",
  },
];

const data: DataType[] = [
  {
    id: "1",
    nome: "Villasanti",
    idade: 32,
    nacionalidade: "Argentino",
    posicao: "MEI",
    clube: "Grêmio",
  },
  {
    id: "2",
    nome: "Wesley",
    idade: 32,
    nacionalidade: "Brasileiro",
    posicao: "MEI",
    clube: "Inter",
  },
  {
    id: "3",
    nome: "Nicolas De La Cruz",
    idade: 32,
    nacionalidade: "Uruguaio",
    posicao: "MEI",
    clube: "Flamengo",
  },
  {
    id: "4",
    nome: "Rapahel Veiga",
    idade: 32,
    nacionalidade: "Brasileiro",
    posicao: "MEI",
    clube: "S.E. Palmeiras",
  },
  {
    id: "5",
    nome: "Júnior Santos",
    idade: 32,
    nacionalidade: "Brasileiro",
    posicao: "ATA",
    clube: "Atlético Mineiro",
  },
  {
    id: "6",
    nome: "Flávio Caça-Rato",
    idade: 32,
    nacionalidade: "Uruguaio",
    posicao: "MEI",
    clube: "Flamengo",
  },
];

const Tabela: React.FC = () => (
  <>
    <Box height={20} sx={{backgroundColor: '#ffcd00'}}></Box>
    <Flex style={{ backgroundColor: "#ffcd00" }}>
      <Container>
        {" "}
        <Table<DataType>
          size={'large'}
          columns={columns}
          dataSource={data}
          rowHoverable={true}
        />{" "}
      </Container>
    </Flex>
  </>
);

export default Tabela;
