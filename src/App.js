import React, {Component} from 'react';
import {animals} from './animals';
import Card from './Card';
import './App.css';
import './Card.css';

class App extends Component {
  state = {
    animals: animals,
    search: "",
  };

  closeHandler = (name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({animals: updatedArray });
    console.log(name, 'was removed');
  };

  addHandler = (name) => {
    this.setState(state =>  {
      const updatedArray = state.animals.map(animal => {
        if (animal.name === name) {
          return {...animal, likes: animal.likes + 1};
        } else { 
          return animal
        }
      });
      return {
        animals: updatedArray,
      };
    });
  };

  removeHandler = (name) => {
    this.setState(state =>  {
      const updatedArray = state.animals.map(animal => {
        if (animal.name === name) {
          return {...animal, likes: animal.likes - 1};
        } else { 
          return animal
        }
      });
      return {
        animals: updatedArray,
      };
    });
  };

  searchHandler = (e) => {
    this.setState({search: e.target.value});
  };

  



  render() {

    const animalFilter = this.state.animals.filter((animal) => { 
      return animal.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase());
  });

    const  animalsList = animalFilter.map((animal)=> { 
      return ( 
       <Card 
       key={animal.name} 
       name={animal.name} 
       likes={animal.likes} 
       removeCard={() => this.closeHandler(animal.name)} 
       addLikes={() => this.addHandler(animal.name)}
       removeLikes={() => this.removeHandler(animal.name)}/>
       );
      });

    return (
    <div className='firstContainer'>
      <div className='topPart'>
        <h1>{this.state.animals.length} Animals</h1>
        <input type="text" onChange={this.searchHandler} placeholder="Search Animals" />
      </div>
      <div  className='animalsList'> {animalsList}</div>
    </div>
    );
  }
};


export default App;
