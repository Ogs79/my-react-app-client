import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"; 
import { NavLink } from "react-router-dom"; 
import Container from "react-bootstrap/Container";
import { ADMIN_ROUTE, GROUPS_SHOP_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }



    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <NavLink style={{color:'white'}}  to={GROUPS_SHOP_ROUTE} >ELOG</NavLink>
          {user.isAuth ?

            <Nav className="ms-auto" style={{color: 'white'}}>

              <Button 
                variant={"outline-light"}
                onClick={() => history.push(ADMIN_ROUTE)}
              > Админ панель</Button>

              <Button 
                variant={"outline-light"} 
                onClick={() => logOut()}
                className="ms-2"
              >Выйти</Button>

            </Nav>
            :
            <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
            </Nav>
          }
          </Container>
          
      </Navbar>
    );
});

export default NavBar;
