import React, { Component } from 'react';
import classes from './App.css';

import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Clock from './Clock/Clock';
import SecondsCounter from './Clock/SecondsCounter';

class App extends Component {
  state = {
    persons : [
      {id: '100', name:'Lionel Messi', age:31, country: 'Argentina'},
      {id: '200', name: 'Cristiano Ronaldo', age:33, country: 'Portugal'},
      {id: '300', name: 'Luis Suarez', age:31, country: 'Uruguay'},
      {id: '400', name: 'Neymar', age:26, country: 'Brazil'}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
     const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;

     });

     const person = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({
      persons : persons});
    }

    deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();
      //using spread operator
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({ 
        persons: persons});
    }

    togglePersosnsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      });
    }

  render() {

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div> 
            {this.state.persons.map((person, index) => {
             return <ErrorBoundary key = {person.id}> <Person 
                  click = {() => this.deletePersonHandler(index)}
                  name = {person.name}
                  age = {person.age} 
                  country ={person.country}
                  changed = {(event) => this.nameChangedHandler(event, person.id)}/>
                  </ErrorBoundary>
            })
            }
            </div>
        );
        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }


    return (
      
        <div className={classes.App}>
          <h1>Hi, I'm a rect App</h1>
          <SecondsCounter></SecondsCounter>
          <Clock></Clock>
          <p className={assignedClasses.join(' ')}>This is really working!!</p>
          <button className={btnClass} onClick={this.togglePersosnsHandler}>Toggle persons</button>
          {persons}
        </div>
      
    );
  }
}

export default App;
