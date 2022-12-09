import { useState } from "react";
import { Wrapper, Popup } from "./Styles";
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
}: TecnologyProps) {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Wrapper
        onClick={() => {
          setModalState(true);
        }}
      >
        <img src={image} alt={`logo ${tecnologyName}`} />
        <span>{tecnologyName}</span>
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
          <p>{description}</p>
        </div>
      </Popup>
    </>
  );
}
