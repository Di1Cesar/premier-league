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

const FormTimes: React.FC = () => (
  <>
    <Box height={50}></Box>
    <Flex style={{ display: "flex", margin: 10, justifyContent: "center" }}>
      <Input
        size="large"
        placeholder="Time"
        style={{ width: 450, marginLeft: 10, marginRight: 10 }}
      />
      <Select
        style={{ width: 450, marginLeft: 10, marginRight: 10 }}
        size="large"
        showSearch
        placeholder="Estado"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={[
          {
            value: "AC",
            label: "Acre",
          },
          {
            value: "AL",
            label: "Alagoas",
          },
          {
            value: "AP",
            label: "Amapá",
          },
          {
            value: "AM",
            label: "Amazonas",
          },
          {
            value: "BA",
            label: "Bahia",
          },
          {
            value: "CE",
            label: "Ceará",
          },
          {
            value: "DF",
            label: "Distrito Federal",
          },
          {
            value: "ES",
            label: "Espírito Santo",
          },
          {
            value: "GO",
            label: "Goiás",
          },
          {
            value: "MA",
            label: "Maranhão",
          },
          {
            value: "MT",
            label: "Mato Grosso",
          },
          {
            value: "MS",
            label: "Mato Grosso do Sul",
          },
          {
            value: "MG",
            label: "Minas Gerais",
          },
          {
            value: "PA",
            label: "Pará",
          },
          {
            value: "PB",
            label: "Paraíba",
          },
          {
            value: "PR",
            label: "Paraná",
          },
          {
            value: "PE",
            label: "Pernambuco",
          },
          {
            value: "PI",
            label: "Piauí",
          },
          {
            value: "RJ",
            label: "Rio de Janeiro",
          },
          {
            value: "RN",
            label: "Rio Grande do Norte",
          },
          {
            value: "RS",
            label: "Rio Grande do Sul",
          },
          {
            value: "RO",
            label: "Rondônia",
          },
          {
            value: "RR",
            label: "Roraima",
          },
          {
            value: "SC",
            label: "Santa Catarina",
          },
          {
            value: "SP",
            label: "São Paulo",
          },
          {
            value: "SE",
            label: "Sergipe",
          },
          {
            value: "TO",
            label: "Tocantins",
          },
        ]}
      />
      <Button size="large" type="primary" icon={<SearchOutlined />}>
        Procurar
      </Button>
    </Flex>
  </>
);

export default FormTimes;
