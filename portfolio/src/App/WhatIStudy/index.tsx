import { Wrapper } from "./Styles";

import { Title } from "../../Components/Title/Styles";
import { Tecnology } from "../../Components/Tecnology/index";

import { TecnologiesIStudy } from "./TecnologiesIStudy";

export function WhatIStudy() {
  return (
    <Wrapper>
      <Title>O que estudo</Title>
      <div>
        {TecnologiesIStudy.map((item) => {
          return (
            <Tecnology
              image={item.image}
              tecnologyName={item.tecnologyName}
              description={item.description}
              key={item.id}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}
