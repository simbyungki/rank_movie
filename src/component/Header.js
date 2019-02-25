import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        const {onChange} = this.props;
        return (
            <header className="Header">
                <h1 className="ProjectTitle">MOVIE RANK</h1>
                <div className="Sort">
                    <button className="Active" onClick={() => onChange('download_count', 'sortType01')} id="sortType01">다운로드순</button>
                    <button className="" onClick={() => onChange('like_count', 'sortType02')} id="sortType02">인기순</button>
                </div>
            </header>
        )
    }
}

export default Header;