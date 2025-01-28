import React from "react";
import { Flex, Input } from "antd";

const Forms: React.FC = () => (
  <>
    <Flex style={{display:'flex'}}>
      <Input size="large" placeholder="Time"/>
      <Input size="large" placeholder="Estado" />
    </Flex>
  </>
);

export default Forms;
