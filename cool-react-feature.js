import React from "react";
import { formatPrice } from "../helpers";

class Snack extends React.Component {
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }
    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        return (
            <li className="menu-snack">
                <img src={ image } alt={ name } />
                <h3 className="snack-name">
                    { name }
                    <span className="price">{ formatPrice(price) }</span>
                </h3>
                <p>{desc}</p>
                <button onClick={this.handleClick} disabled={!isAvailable}>{isAvailable ? 'Add To Order' : 'Sold out!'}</button>
            </li>
        );
    }
}

export default Snack;
