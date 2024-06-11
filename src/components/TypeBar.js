import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { ListGroup } from "react-bootstrap";


const TypeBar = observer(() => {
  const { group } = useContext(Context);
  return (
    <ListGroup>
      {group.types.map(type => (
        <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={type.id === group.selectedType.id}
            onClick={() => group.setSelectedType(type)}
            key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
