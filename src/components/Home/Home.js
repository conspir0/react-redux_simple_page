import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";

import Burger from "./../../img/burger.png";

class Home extends Component {
  // state = {
  //   posts: []
  // };

  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  //     console.log(response);
  //     this.setState({
  //       posts: response.data.splice(0, 10)
  //     });
  //   });
  // }

  render() {
    console.log(this.props);
    // const { posts } = this.state;
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Burger} alt="burger" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title orange-text">{post.title}</span>
              </Link>
              <p className="card-text brown-text">{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
