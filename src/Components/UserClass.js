import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count : 0 ,
        }
    }
    componentDidMount(){
        console.log("start");
    }
   render(){

      return (
        
        <div className="user">
            <h1>Count= {this.state.count}</h1>
            <button 
                onClick ={()=>{
                this.setState({
                    count : this.state.count+ 1 ,
                });
            }}>Increase</button>
        <h1>{this.props.name}</h1>
        <h2>INSTAGRAM</h2>
        <h2>ankitmishra2612</h2>
      </div>
      )
   }
}

export default UserClass ; 