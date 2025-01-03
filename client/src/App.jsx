import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';
import './app.css'

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";


export default function App() {

  const [user, setUser] = useState(null);
  console.log(user)
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);


  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar user = {user}/>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/post/:id'>
              {user ? <Post /> : <Redirect from='/post/:id' to='/login' />}
            </Route>
            <Route path='/login'>
              {user ? <Redirect from='/login' exact to='/' /> : <Login />}
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
