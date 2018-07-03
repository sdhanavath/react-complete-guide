import React, { PureComponent } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Clock from '../components/Clock/Clock';
import SecondsCounter from '../components/Clock/SecondsCounter';

class App extends PureComponent {
constructor(props){
super(props);
console.log('[App.js] Inside constructor',props);
this.state = {
    persons : [
      {id: '100', name:'Lionel Messi', age:31, country: 'Argentina'},
      {id: '200', name: 'Cristiano Ronaldo', age:33, country: 'Portugal'},
      {id: '300', name: 'Luis Suarez', age:31, country: 'Uruguay'},
      {id: '400', name: 'Neymar', age:26, country: 'Brazil'}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCode: false
  }
}

componentWillMount(){
console.log('[App.js] Inside componentWillMount()');
}

componentDidMount(){
console.log('[App.js] Inside componentDidMount()');
}

componentWillReceiveProps(nextProps){
console.log('[UPDATE App.js] Inside componentWillReceiveProps()', nextProps);
}

/**
shouldComponentUpdate(nextProps, nextState){
console.log('[UPDATE App.js] Inside shouldComponentUpdate()',nextProps,nextState);
return nextState.persons !== this.state.persons ||
       nextState.showPersons !== this.showPersons;
}
*/

componentWillUpdate(nextProps, nextState){
console.log('[UPDATE App.js] Inside componentWillUpdate()',nextProps,nextState);
}
componentDidUpdate(){
console.log('[UPDATE App.js] Inside componentDidUpdate()');
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

    showCodeHandler = () => {
      const doesShow = this.state.showCode;
      this.setState({
        showCode: !doesShow
      });
    }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons 
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
              changed = {this.nameChangedHandler} />  
    }

    return (  
        <div className={classes.App}>
        <button onClick={()=> {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit
            appTitle = {this.props.title}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersosnsHandler}/>
          <SecondsCounter></SecondsCounter>
          <Clock></Clock>
          {persons}
        </div>
    );
  }
}

export default App;
