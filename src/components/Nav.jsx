import React from 'react';
import SearchBar from './SearchBar.jsx';


class Nav extends React.Component {
    render() {
        return (
            <div>
                {/* {console.log(this.props.logOutFunction)} */}
                <SearchBar onSearch={this.props.onSearch}
                    logOutFunction={this.props.logOutFunction}></SearchBar>
            </div>
        )
    }
}

export default Nav;
