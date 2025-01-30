import React from "react";
import { Button, Flex, Input, Select } from "antd";
import { Box } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

const FormJogadores: React.FC = () => (
  <>
    <Box height={50}></Box>
    <Flex style={{ display: "flex", margin: 10, justifyContent: "center" }}>
      <Input
        size="large"
        placeholder="Jogador"
        style={{ width: 450, marginLeft: 10, marginRight: 10 }}
      />
      <Select
        style={{ width: 450, marginLeft: 10, marginRight: 10 }}
        size="large"
        showSearch
        placeholder="Posição"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={[
            {
                value: "GOL",
                label: "Goleiro",
              },
              {
                value: "ZG",
                label: "Zagueiros",
              },
              {
                value: "LD",
                label: "Lateral",
              },
              {
                value: "MEI",
                label: "Meio-Campo",
              },
              {
                value: "ATA",
                label: "Atacantes",
              },
        ]}
      />
      <Button size="large" type="primary" icon={<SearchOutlined />}>
        Procurar
      </Button>
    </Flex>
  </>
);

export default FormJogadores;
