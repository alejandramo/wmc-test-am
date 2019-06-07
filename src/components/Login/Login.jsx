import React from 'react';

/*
function Login(props) {
  return (
    <div >
        {props.name}
    </div>
  );
}
*/
/*
// Otra manera de definir la función de arriba
const Login = ({name}) => (
    <div>
        {name}
    </div>
);
*/

class Login extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
            name: this.props.name,
        };
        this.changeClicked = this.changeClicked.bind(this);
    }

    changeClicked(event){
        console.log(event.target);
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return (
            <div onClick={this.changeClicked}>
                {this.state.name}
                {this.state.clicked.toString()}
            </div>
        )
    }
}

export default Login;
