import React from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/models.js/CreateBrand";
import CreateType from "../components/models.js/CreateType";
import CreateGroup from "../components/models.js/CreateGroup";

const Admin = () => {
  const [brandVisible, setBrandVisible] = React.useState(false)
  const [typeVisible, setTypeVisible] = React.useState(false)
  const [groupVisible, setGroupVisible] = React.useState(false)
  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setTypeVisible(true)}>Добавить курс</Button>
      <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setBrandVisible(true)}>Добавить уровень обучения</Button>
      <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setGroupVisible(true)}>Добавить группу</Button>

      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateGroup show={groupVisible} onHide={() => setGroupVisible(false)} />
    </Container>
  );
};

export default Admin;
