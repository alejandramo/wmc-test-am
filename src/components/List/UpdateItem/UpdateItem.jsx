import React, { Component } from 'react';

// Components
import UpdateItem from '../UpdateItem/UpdateItem';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
      editing: false,
    }

    this.increaseClick = this.increaseClick.bind(this);
    this.editItem = this.editItem.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  increaseClick() {
    this.setState({clicked: this.state.clicked + 1});
    this.props.changeLastClicked(this.props.id);
  }

  editItem() {
    this.setState({editing: true});
  }

  closeModal() {
    this.setState({editing: false});
    this.props.updateList();
  }

  render() {
    const {id, name, description, value} = this.props;
    return (
      <tr onClick={this.increaseClick}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{value}</td>
        <td>{this.state.clicked}</td>
        <td>{this.props.id === this.props.lastClicked && 'Last Clicked'}</td>
        <td onClick={this.editItem}>Edit</td>
        <UpdateItem show={this.state.editing} hide={this.closeModal} {...this.props} />
      </tr>
    );
  }
}

export default Item;