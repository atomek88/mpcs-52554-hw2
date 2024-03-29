import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NeosTable from './neosTable';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      asteroids: []
    }
    this.getNEOs()
  }
  getNEOs = () => {
    //event.preventDefault();
    let nowDate = new Date();
    let date = nowDate.getFullYear()+'-'+(nowDate.getMonth()+1)+'-'+nowDate.getDate();
    console.log(date)
    let end_date = nowDate.getFullYear()+'-'+(nowDate.getMonth()+1)+'-'+ (nowDate.getDate()+7);
    console.log(end_date)
    let url = "https://api.nasa.gov/"
    let dates = "neo/rest/v1/feed?start_date=2017-11-01&end_date=2017-11-08"
    let api = "&api_key=bQZlcpOVkVZMM2V8Y3uCmXQTzS1GmW7Pq2Z3qHuW"
    const NEO_url = url + dates + api
    fetch(NEO_url).then(this.parseResponse).then(this.setData)
  }

  parseResponse = (response) => { return response.json(); }

  // event.target.value for switching checkbox

  setData = (data) => {
    console.debug(data)
    let all = data['near_earth_objects']
    let completeArray = []
    let newArray = []
    console.log(all)
    Object.keys(all).forEach(date => Object.keys(all[date]).forEach(event => {
      completeArray = completeArray.concat(all[date][event])


      completeArray.forEach(function (item) {
        newArray.concat(item);
      })
    }))
    console.log(completeArray[0])
    console.log(completeArray[0].absolute_magnitude_h)
    console.log(completeArray[0].is_potentially_hazardous_asteroid)
    console.log(newArray)
    this.setState({ asteroids: newArray})
  }


// callback for getNEOS
  detailsNEOS = (data) => {
    console.debug(data) // show data
    if (data.length >0){
      let new_data = data.results[2]
      this.setState({ asteroids: new_data})
      console.log(new_data.length)
// save the asteroid array to state
      }
    else { this.setState({ asteroids: null })}
    }

// call to update asteroids array when checkbox changes
  hazardousOnly = (event) => {

  }

// call to update asteroids array based on speed
  filterAsteroids = (event) => {

  }
  render() {
    return (
      <div className="App">
      <div class="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the NEO (Near-Earth Object) Radar</h1>
        </header>
        <p className="App-intro">
          Mddify the speed to find the asteroid you are looking for!
        </p>
      </div>

        <NeosTable asteroids={this.state.asteroids}/>
      </div>


    )
  }
}

export default App;
