import React, {Component} from 'react';
import './Add.css';

class Add extends Component {
  constructor(props){
    super(props);
    this.state={
        name:"",
        price:"",
        unit:"",
        src:""
    }
  }

    checkin = ()=>{
        return this.state.name.length !==0 && this.state.unit.length !== 0 && this.state.price>0 && this.state.src.length !==0
    }

    getButtonCss(){
        return this.checkin() ? "submitbtn" : "btndisabled"
    }

    handleNameChange = event =>{
        this.setState({
            name: event.target.value
        })
    }

    handlePriceChange = event =>{
    this.setState({
        price: event.target.value
    })
    }

    handleUnitChange = event =>{
        this.setState({
            unit: event.target.value
        })
    }

    handleSrcChange = event =>{
        this.setState({
            src: event.target.value
        })
    }

    handleCheckChange = event =>{
    this.setState({
        check: !this.state.check
    })
    }

    submitData = ()=>{
        let url = 'http://localhost:8080/good';
        return fetch(url,{
            headers: {'content-type':'application/json'},
            method:'POST',
            body:JSON.stringify({
                "goodName":this.state.name,
                "price":this.state.price,
                "unit":this.state.unit,
                "src":this.state.src
            }) 
        });
    }
     


    submit = ()=>{
        alert(JSON.stringify(this.state) )
        this.submitData()
        .then(result => {
            alert("添加成功，返回商品页");
        })
        .catch(error => {
            alert("添加商品数据失败")
        });
        window.location.replace("/") 
    }

    render() {
        return (
        <div className="addGood">
            <form className="addForm">
                <h1>添加商品</h1>
                <div className="putin">
                    <h5 className="titleo">*名称</h5>
                    <input className="inputo" type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="名称" />
                </div>
                <div className="putin">
                    <h5 className="titleo">*价格</h5>
                    <input className="inputo" type="text" value={this.state.price} onChange={this.handlePriceChange} placeholder="价格" />
                </div>
                <div className="putin">
                    <h5 className="titleo">*单位</h5>
                    <input className="inputo" value={this.state.unit} onChange={this.handleUnitChange} placeholder="单位" />
                </div>
                <div className="putin">
                    <h5 className="titleo">*图片</h5>
                    <input className="inputo" value={this.state.src} onChange={this.handleSrcChange} placeholder="URL"  />
                </div>
                <div className="putin">
                    <input type="button" value="Submit" className={this.getButtonCss()} disabled={!this.checkin() === true}  onClick={this.submit}/>  
                </div>
                </form>  
        </div>
        );
    }
}

export default Add;