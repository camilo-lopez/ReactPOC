import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip'
import Contacts from './components/contacts'

class App extends Component {
    state = {
      contacts: []
    }

    handleClick = () => {
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => { this.setState({ contacts: data }) })
      .catch(console.log)

    }

  render(){
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Editar <code>src/App.js</code> guarda y recarga.
        </p>
        <Contacts contacts = {this.state.contacts}/>
        <button data-tip="Haz click aqui" onClick={this.handleClick}>Click</button>
        <ReactTooltip/>


      </header>
    </div>
  );
  }
}

export default App;
