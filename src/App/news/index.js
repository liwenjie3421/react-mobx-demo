import './index.scss';
import React from 'react';
import propTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

@inject(({ test }) => ({ test }))

@observer
class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        setTimeout(() => {
            this
                .props
                .test
                .changeName();
        }, 1500);
    }

    render() {
        return (
            <div>
                {this.props.test.testName}
            </div>
        );
    }
}

News.propTypes = {
    test: propTypes.object
};

export default News;
