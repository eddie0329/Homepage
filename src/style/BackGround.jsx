import { Row } from 'antd';
import styled from 'styled-components';

const BackGround = styled(Row).attrs(() => ({
    type: "flex",
    align: "middle",
    justify: "center",
  }))`
    background: #0a262e;
    height: 100vh;
  `;

export default BackGround;