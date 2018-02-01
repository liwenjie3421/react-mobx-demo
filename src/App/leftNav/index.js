import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';


class LeftNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>
                    left
                </h1>
                <Link to="/news">news</Link>
                <Link to="/activities">activities</Link>
            </div>
        );
    }
}

export default LeftNav;
