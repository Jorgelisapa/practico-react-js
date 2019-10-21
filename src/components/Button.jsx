
import React from 'react';
/* 
const Button = props => {
    const {text} = props;
    return(
        <div>
            <button type="button" >{props.text}</button>
            <button type="button">{text}</button>
        </div>
    )
};
 */
// Componente  Statefull

class Button extends React.Component {
    state = {
        count: 0,
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    render() {
        const {count} = this.state
       return(
        <div>
            <h1>Tengo {count} Manzanas</h1>
            <button onClick={this.handleClick} type="button">Obten más Manzanas</button>
        </div>
       ) 
    };
};

export default Button;