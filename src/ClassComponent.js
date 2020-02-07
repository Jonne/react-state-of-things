import React from 'react';
import getData from './DataService';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {name: ''};
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    componentDidMount() {
        var response = getData();

        this.setState({name: response.name});
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return <div>
            <input value={this.state.name} onChange={this.handleNameChange} />
        </div>
    }
}

export default ClassComponent;