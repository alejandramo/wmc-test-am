
import React, {Component} from 'react';

// Componentes 
import Item from './Item/Item';

/*
function renderItems(items){
    return items.map((item, i) => (<Item key = {`item-${i}`} {...item} />));
}
*/

// NUEVA MANERA
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            lastClicked: null,
        }
        this.changeLastClicked = this.changeLastClicked.bind(this);
    }

    changeLastClicked(id){
        this.setState({lastClicked:id});
    }

    renderItems(){
        return this.props.items.map((item, i) => (
            <Item
                key = {`item-${i}`}
                lastClicked = {this.state.lastClicked}
                changeLastClicked = {this.changeLastClicked}
                {...item}
            />    
        ));
    }

    render(){
        return (
            <table className = "list">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Value</th>
                    <th></th>
                </tr> 
            </thead>
            <tbody>
                {this.renderItems()}
            </tbody>
            </table>
        );
    }
}



export default List;