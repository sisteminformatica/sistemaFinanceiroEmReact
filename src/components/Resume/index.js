import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";


const Resume = ({ entradas, saidas, total }) => {
  return (
    <C.Container>
      <ResumeItem 
              title="Entradas"
              Icon={FaRegArrowAltCircleUp}
              value={entradas}
      />
      <ResumeItem 
              title="Saidas"
              Icon={FaRegArrowAltCircleDown}
              value={saidas}
      />
      <ResumeItem
              title="Total"
              Icon={FaDollarSign}
              value={total}
      />
    </C.Container >
  );
};

export default Resume;