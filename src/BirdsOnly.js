import React, {Component} from 'react';
import {birds} from './birds';
import Card from './Card';

class BirdsOnly extends Component {
    state = {
      birds: birds,
      search: "",
    };
  
    closeHandler = (name) => {
      const updatedArray = this.state.birds.filter(
        (bird) => bird.name !== name
      );
      this.setState({birds: updatedArray });
      console.log(name, 'was removed');
    };
  
    addHandler = (name) => {
      this.setState(state =>  {
        const updatedArray = state.birds.map(bird => {
          if (bird.name === name) {
            return {...bird, likes: bird.likes + 1};
          } else { 
            return bird
          }
        });
        return {
          birds: updatedArray,
        };
      });
    };
  
    removeHandler = (name) => {
      this.setState(state =>  {
        const updatedArray = state.birds.map(bird => {
          if (bird.name === name) {
            return {...bird, likes: bird.likes - 1};
          } else { 
            return bird
          }
        });
        return {
          birds: updatedArray,
        };
      });
    };
  
    searchHandler = (e) => {
      this.setState({search: e.target.value});
    };
    
    render() {
  
      const birdFilter = this.state.birds.filter((bird) => { 
        return bird.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase());
    });
  
      const  birdsList = birdFilter.map((bird)=> { 
        return ( 
         <Card 
         key={bird.name} 
         name={bird.name} 
         likes={bird.likes} 
         removeCard={() => this.closeHandler(bird.name)} 
         addLikes={() => this.addHandler(bird.name)}
         removeLikes={() => this.removeHandler(bird.name)}/>
         );
        });
  
      return (
      <div>
        <h1 className='top_part'> There are <span>{this.state.birds.length}</span> birds displayed on this page</h1> 
        <div className='search_style'>
          <input type="text" onChange={this.searchHandler} placeholder="Search birds by name" />
        </div>
        <div  className='animalsContainer'> {birdsList}</div>
      </div>
      );
    }
  };
  
  
  export default BirdsOnly;