
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  
 state =  {
   progress : 0
 }

 setProgress = (progress) =>{
    this.setState({
      progress : progress
    })
  }
  
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height = {3}
        progress={this.state.progress}
      />
        <Routes>
          <Route path="/" exact element={<News apiKey = {this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country = 'in' category='general'/>} />
        </Routes>
        <Routes>
          <Route path="/business" exact element={<News apiKey = {this.apiKey}  setProgress={this.setProgress} pageSize={this.pageSize} country = 'in' category='business'/>} />
        </Routes>
        <Routes>
          <Route path="/entertainment" exact element={<News apiKey = {this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country = 'in' category='entertainment'/>} />
        </Routes>
        <Routes>
          <Route path="/health" exact element={<News apiKey = {this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country = 'in' category='health'/>} />
        </Routes>
        <Routes>
          <Route path="/science" exact element={<News apiKey = {this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country = 'in' category='science'/>} />
        </Routes>
        <Routes>
          <Route path="/sports" exact element={<News apiKey = {this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country = 'in' category='sports'/>} />
        </Routes>
        <Routes>
          <Route path="/technology" exact element={<News apiKey = {this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country = 'in' category='technology'/>} />
        </Routes>
        <Routes>
          <Route path="/general" exact element={<News apiKey = {this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country = 'in' category='general'/>} />
        </Routes>
      </div>
      </Router>
    )
  }
}


