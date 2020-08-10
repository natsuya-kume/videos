import React from 'react';


class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();


        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="seach-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            value={this.state.term}
                            type="text"
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>

            </div>
        );
    };
}

export default SearchBar;