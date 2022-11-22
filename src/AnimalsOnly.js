import React, {Component} from 'react';
import {animals} from './animals';
import Card from './Card';

class AnimalsOnly extends Component {
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
    <div>
      <h1 className='top_part'> There are <span>{this.state.animals.length}</span> animals displayed on this page</h1> 
         <div className='search_style'>
        <input type="text" onChange={this.searchHandler} placeholder="Search animals by name" />
      </div>
      <div  className='animalsContainer'> {animalsList}</div>
    </div> 
    );
  }
};


export default AnimalsOnly;