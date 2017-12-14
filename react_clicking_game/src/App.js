import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Counter from "./components/Counter";


let clickedObjects = [];
let pointCounter = 0;


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentFriend: "",
    count: 0,
    gameStatus: "Click an image to start the game"
  };

//   shuffle = array => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

shuffle = array => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

  removeFriend = id => {

    // this.setState({
    //   count: this.state.count + 1
    // });

    console.log("incoming id " + id);
    this.state.currentFriend = id;


    // this.setState({
    //   currentFriend: id
    // });

    console.log("this.state.currentFriend " + this.state.currentFriend);

    //if user loses by clicking an object that has already been clicked
    if(clickedObjects.indexOf(id) > -1){
      console.log("you've lost");
      clickedObjects = [];

      this.setState({
        count: 0,
        gameStatus: "You Lost! Click an image to start again!"
      });
      console.log("count: " + this.state.count);
      console.log("");
      //pointCounter = 0;
      //console.log("point counter: " + pointCounter);

      //const friends = this.state.friends.sort(friend => friend.id )
    }else {
      clickedObjects.push(id);

      this.setState({
        count: this.state.count + 1,
        gameStatus: "Correct!"
      });

      console.log("win " + clickedObjects);

      console.log("count: " + this.state.count);
      console.log("");
      //pointCounter++;
      //console.log("point counter: " + pointCounter);

    }

    this.shuffle(this.state.friends)
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    //this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game | Your Score: {this.state.count} | {this.state.gameStatus} </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
