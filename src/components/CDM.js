import React from "react";

class CDM extends React.Component {
  state = {
    posts: [
        {
          id: 0,
          title: {
            rendered: "Default Post"
          }
        }
      ]
  };
  componentDidMount() {
    fetch("https://gatsbypress.website/wp-json/wp/v2/posts")
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts });
      })
      .catch(error => console.error(error));
  }
  render() {
    return (
      <header>
        <h1>Posts</h1>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>{post.title.rendered}</li>
          ))}
        </ul>
      </header>
    );
  }
}

export default CDM;
