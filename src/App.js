
import './App.css';
import Profile from './profile';

import React, { Component } from 'react'

export class App extends Component {
  state={
    person:{fullName:'wahiba',bio:'web devlopper', profession:'devlopper',imgsrc:'https://pixlr.com/studio/template/6264364c-b8cc-4f4f-92d8-28c69a2b756w/thumbnail.webp'},
show:true,
    
  }
HandelClick=()=> {
this.setState({show:!this.state.show})

}


  render() {
  
    return (
      
      <div className='category'>
      
      {this.state.show && <Profile /> }
      <div >
     
        {(this.state.show)?
        <div>
      <img src={this.state.person.imgsrc} alt='profile' /> 
        <h1 className='name' >{this.state.person.fullName}</h1>
        <h1 className='bio'>{this.state.person.bio}</h1>
        <h1 className='profession'>{this.state.person.profession}</h1>
        
       </div>
       : <div>
       </div>
       }
       <button style={{marginLeft:'210px' , borderRadius:'20px' ,fontSize:'30px'}} type='button' onClick={this.HandelClick}>{(this.state.show)? 'HIDE':'Show'}</button>
       
       </div></div>
    )
  }
}


export default App