import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { Spinner } from 'react-bootstrap';
import { check } from './http/userAPI';


const App = observer(() => {
  const { user } = React.useContext(Context);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
      check().then(data => {
        user.setUser(data);
        user.setIsAuth(false);
      }).finally(() => setLoading(false));
  }, []);


  if (loading) {
    return <Spinner animation={"grow"} />
  }



  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;