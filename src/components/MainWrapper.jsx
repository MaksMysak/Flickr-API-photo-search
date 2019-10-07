import React, { Component } from 'react';

import Header from './Header';
import Grid from './Grid';

class MainWrapper extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
      value: 'random',
    };
  }

  componentDidMount(){
    this.loadPhotos();
  }
  
  handleChange = (e) => {
    this.setState({value: e.target.value}, () =>{
      this.loadPhotos(this.state.value);
    })
  }

  loadPhotos = () => {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6b3575d10435de5f010fc941f5eff94a&tags='+this.state.value+'&text&per_page=100&page=1&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(obj){
      let picArray = obj.photos && obj.photos.photo.map((pic) => {

        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <div className="wrapper">
            <img className="image" alt={this.state.value} src={srcPath} />
            <p className="title">{pic.title}</p>
          </div>
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
  }

  render() {
    const { value, pictures } = this.state;
    return (
      <div className="App">
        <Header value={value} pictures={pictures} handleChange={this.handleChange}/>
        <Grid pictures={pictures}/>
      </div>
    );
  }
}

export default MainWrapper;