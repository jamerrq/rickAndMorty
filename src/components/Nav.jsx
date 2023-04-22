import React from 'react';
import SearchBar from './SearchBar.jsx';


class Nav extends React.Component {
    render() {
        return (
            <div>
                <SearchBar onSearch={this.props.onSearch}></SearchBar>
            </div>
        )
    }
}

export default Nav;
