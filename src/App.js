import './App.css';
import { Component } from 'react';

class App extends Component{
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
      },
    ]
  };

  timeoutUpdate = null; 

  componentDidMount(){
    this.handleTimeout(); 
  }

  componentDidUpdate(){
    this.handleTimeout();
  }
  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () =>{
    const {posts, counter} = this.state; 
    posts[0].title = 'O título mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({posts, counter: counter+1});
    }, 1000)
  } 

  render(){   
    const { posts, counter } = this.state;
    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post =>(
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

}

export default App;
