import { useState } from "react";
import { Wrapper, Popup, TecnologyName } from "./Styles";
import { X } from "phosphor-react";

interface TecnologyProps {
  key?: string;
  image: string;
  tecnologyName: string;
  description?: string;
}

export function Tecnology({
  image,
  tecnologyName,
  description,
  key
}: TecnologyProps) {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Wrapper
        key={key}
        onClick={() => {
          setModalState(true);
        }}
      >
        <img src={image} alt={`logo ${tecnologyName}`} />
        <TecnologyName>{tecnologyName}</TecnologyName>
      </Wrapper>
      
      <Popup open={modalState}>
        <div>
          <button
            onClick={() => {
              setModalState(false);
            }}
            >
            <X size="20px" weight="bold" />
          </button>
          <img src={image} alt={`logo ${tecnologyName}`} />
          <TecnologyName>{tecnologyName}</TecnologyName>
          <p>{description}</p>
        </div>
      </Popup>
    </>
  );
}
