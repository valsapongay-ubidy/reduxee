import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPosts } from '../actions/postActions';

class Postform extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      url: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  //fileSelected = e => {
    //console.log(e.target.files[0]);
  //}

  onSubmit(e){
    e.preventDefault();

    const post = {
      title: this.state.title,
      url: this.state.url
    };

    this.props.createPosts(post);

  }

  render() {
    return (
      <div>
        <h1> Add Post </h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label> title : </label> <br />
            <input type="text" name = "title"
              onChange={this.onChange}
              value={this.state.title}/>
          </div>
          <br />
          <div>
            <label> body : </label> <br />
            <input type="text" name = "url"
              onChange={this.onChange}
              value={this.state.url}
              />
          </div>
          <br />
            <button type="submit" > pass </button>
        </form>


      </div>
    );
  }
}

createPosts.propTypes = {
  createPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};


export default connect(null, {createPosts})(Postform);
