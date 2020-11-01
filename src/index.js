import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null
    };
  }
  
  mySubmitHandler = async (event) => {
    let username = this.state.username;
    let age = this.state.age;
    if (age < 18) {
      alert("Você deve ser maior de 18 anos!");
    }
    else if (username === '') {
      alert("Você deve preencher o nome!");
    }
    else {
      await fetch('http://localhost:5000/postData', {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      });
    }
  }

  myChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value});
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h2>Formulário</h2>
        <h4>Insira seu nome:</h4>
        <input 
          type='text' name='username'
          onChange={this.myChangeHandler}
        />
        <h4>Insira sua idade:</h4>
        <input 
          type='number' name='age'
          onChange={this.myChangeHandler}
        />
        <br/><br/>
        <input type='submit'/>
      </form>
    );
  }
}

ReactDOM.render(
  <MyForm />,
  document.getElementById('form')
);