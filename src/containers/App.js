import React, {Component} from 'react';
import './App.css';
import CardList from '../components/CardList';
import { functionTypeAnnotation } from '@babel/types';
import { async } from 'q';


class App extends Component {

  constructor(){
    super();
    this.state = {
      people: [],
      pre: null,
      cur: 'https://swapi.co/api/people/?page=1',
      next: ''
    }
  }

  peopleFecth = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json();
    this.setState({pre: data.previous});
    this.setState({next:data.next});
    this.setState({people: data.results});
  }

  componentDidMount(){
    this.peopleFecth(this.state.cur);
  }
  

  render(){
    const nextPage = (event) =>{
      if(this.state.next != null){
        this.peopleFecth(this.state.next);
      }
    }

    const prePage = (event) =>{
      if(this.state.pre != null){
        this.peopleFecth(this.state.pre);
      }
    }

    return(
      <div >
        <div className="heading">
          <h1><strong className="shadow">Starwars</strong></h1>
        </div>
        <div className="main">
          <CardList people={this.state.people}/>
        </div>
        <div className='tc'>
          <button onClick={prePage} name="back" className="f3 bg-yellow no-underline green bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba mr4 ma3 br3">Back</button>
          <button onClick={nextPage} name="next" className="f3 bg-yellow no-underline green bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba mr4 ma3 br3">Next</button>
        </div>
      </div>
    )
  }
}

export default App;
