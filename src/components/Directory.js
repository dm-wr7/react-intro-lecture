import React, { Component } from 'react'

class Directory extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      pictureInput: '',
      nameInput: '',
    }
  }

  handlePictureChange(e) {
    this.setState({
      pictureInput: e.target.value,
    })
  }

  handleNameInput(e) {
    this.setState({
      nameInput: e.target.value,
    })
  }

  handleAddFriend() {
    const friend = {
      name: this.state.nameInput,
      picture: this.state.pictureInput,
    }

    this.setState({
      friends: [...this.state.friends, friend],
    })
  }

  render() {
    const friendsMap = this.state.friends.map((element) => {
      return (
        <div>
          <img src={element.picture} />
          <p>{element.name}</p>
        </div>
      )
    })

    return (
      <div>
        <input
          placeholder="picture"
          onChange={(e) => this.handlePictureChange(e)}
        />
        <input placeholder="name" onChange={(e) => this.handleNameInput(e)} />
        <button onClick={() => this.handleAddFriend()}>Add a new friend</button>
        {friendsMap}
      </div>
    )
  }
}

export default Directory
