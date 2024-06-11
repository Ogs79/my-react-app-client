import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation } from 'react-router-dom';
import { GROUPS_SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useHistory } from "react-router-dom";


const Auth = observer(() => {
  const { user } = React.useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const click = async () => {
      try {
        let data;
        if (isLogin) {
          data = await login(email, password);
        } else {
          data = await registration(email, password);
        }
        user.setUser(user);
        user.setIsAuth(true);
        history.push(GROUPS_SHOP_ROUTE);
      } catch (e) {
        alert(e.response.data.message);
      }
  };

  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 50 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? 
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
              </div>
              :
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            }
            <Button 
              variant="outline-success" 
              onClick={click}  // используем функцию click
              className="btn-sm ml-auto" 
              style={{ width: 'auto' }}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
