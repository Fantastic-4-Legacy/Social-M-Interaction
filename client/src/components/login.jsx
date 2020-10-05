import React from "react"
import axios from "axios"
import Toast from "light-toast";
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
          username:"",
          password:""
        }
        this.AxiosLogin=this.AxiosLogin.bind(this)
    }
    AxiosLogin(){
      axios({
          url: '/login',
          method: 'post',
          data:{name:this.state.username,password:this.state.password}
        }).then(data=>{data=data.data
          console.log(data)
          if(data.Banned){
            Toast.fail(`you are banned because ${data.Reason} you will be unbanned in ${data.Periode}`,2000)
          }else{
            if(data.admin){
              this.props.admin()
            }else{
              if(data.Registred){
                Toast.success("Success Login", 2500)
                this.props.updatedata(data)
                this.props.start()
       
              }else{
                this.setState({username:"",password:""})
               setTimeout(()=>{ Toast.fail("Check Your informations",1000)},100)
              }
            }
          }
        })
  }
  
    render() {
      return  <div className="body">
      <h1 className="LoginS">Login</h1>
      <div></div>
      <input type="username" placeholder="Username" onChange={(e)=>{this.setState({username:e.target.value})}} required/>
      <br></br>
      <input type="password" placeholder="Password" onChange={(e)=>{this.setState({password:e.target.value})}} required />
      <button id="loginB" onClick={this.AxiosLogin}>Login</button>
      <h5 id='Sign'>Create new <a href="#" onClick={this.props.toogle}>Account</a></h5>
    </div>;
    }
  }

  export default Login