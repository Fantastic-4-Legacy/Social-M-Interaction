import React from "react"
import axios from "axios"
class Signup0 extends React.Component {
    constructor(props){
        super(props)
        this.state={
          charsSrc:["./chars/0/FD/fd0.png","./chars/1/FD/fd0.png","./chars/2/FD/fd0.png","./chars/3/FD/fd0.png","./chars/4/FD/fd0.png"],
          i:0
        }
        this.AxiosSelect=this.AxiosSelect.bind(this)
        this.ScrollL=this.ScrollL.bind(this)
        this.ScrollR=this.ScrollR.bind(this)
    }
    AxiosSelect(){ //send axios request To register the user
      axios({
          url: '/selectChar',
          method: 'post',
          data:{id:this.props.id,currentskin:this.state.i}
        }).then((data)=>{
          console.log(data)
          this.props.login()
        })
  }
  ScrollL(){
    if(this.state.i>0){
      this.setState({i:this.state.i-1})
    }  
  }
  ScrollR(){
    if(this.state.i<4){
      this.setState({i:this.state.i+1})
    }  
  }
    render() {
      return <div className="body">
         <h1 id="Selectchar">Select A Character</h1>
         <a href="#" onClick={this.ScrollR}> <img src="arrow.png" alt="" id="arrowR"/></a>
         
        <div id="CardPlayer">
        <img src={this.state.charsSrc[this.state.i]} width="75px"/>
        </div>
       <a href="#"  onClick={this.ScrollL}>   <img src="arrow.png" alt="" id="arrowL"/></a>
        <button id="BTNS" onClick={this.AxiosSelect}>Select</button>
    </div>;
    }
  }

  
  export default Signup0