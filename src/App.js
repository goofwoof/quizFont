import React, { Component } from 'react';
import './App.scss';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import Shop from './components/Shop/Shop'
import Add from './components/Add/Add'
import Order from './components/Order/Order'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Routers:[{
        id:1,
        name: "商城",
        url: "/",
        component: Shop
      },{
        id:2,
        name: "订单",
        url: "/order",
        component: Order
      },{
        id:3,
        name: "添加商品",
        url: "/add",
        component: Add
      }]
    }
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="header">
          {
            this.state.Routers.map(router=>
              <div className="menu">
                <Link className="table" id={router.name} to={router.url} key={router.id} >{router.name}</Link>
              </div>
            )
          }
          </div>
          <Switch>
          {
            this.state.Routers.map(router=>{
              if(router.url==='/')
                return <Route exact key={router.id} path={router.url} component={router.component} />
              else return <Route  key={router.id} path={router.url} component={router.component} />
            })
          }
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;