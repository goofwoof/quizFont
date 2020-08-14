import React, {Component} from 'react';
import './Shop.css';
import Submit from './pick.png'

class Shop extends Component {
  constructor(props){
    super(props);
    this.state={
        data:[]
    }
  }
    componentDidMount(){
      this.getData()
      .then(result => {
          this.setState({
            data: result
        })
      })
      .catch(error => {
        alert("获取商品数据失败")
      });
    }

    getData = ()=>{
        let url = 'http://localhost:8080/goods';
        return fetch(url,{
          headers: {'content-type':'application/json',},
          method:'GET'
      }).then(response => response.json());    
  }

  pickGoods= goodsid=>{
    alert('点击了'+goodsid)
  }


  render() {
    return (
        <div className="Shop">
        {
          this.state.data.map(good=>{
            return (<div className="goods" key ={good.id}>
              <img src={good.src} alt={good.description} className="googsimg"/>
              <p className={good.name}>{good.name}</p>
              <p>单价:{good.price}元/{good.unit}</p>
              <img  className="pick" src={Submit} onClick={()=>{this.pickGoods(good.id)}} alt="购买" />
          </div>);
          })
        }
        </div>
    );
  }
}

export default Shop;