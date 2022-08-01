import { ForkRight } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import './common.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Category from './Category';
import SearchQuery from './search/SearchQuery';
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const navi = useNavigate();
    
    const [searchToggle, setSearchToggle] = useState(false);
    const [catDisplay, setCatDisplay] = useState('none');
    const catToggle=()=>{
        if(catDisplay == 'none')
            setCatDisplay('block')
        else
            setCatDisplay('none')
    }

    return (
        <>
            <div role='presentation' className="header-wrap" style={{position:'fixed',paddingRight:'initial',fontFamily:'S-CoreDream-5Mediumz ',color:'#333'}}>
                {/* <div className='header-main-wrap'> */}
                <nav className='header-main-nav'>

                    <div className="header-main-nav-top">
                        {/* <button className="header-main-hamberger-button">
                            <MenuIcon 
                                onClick={e=>{
                                    catToggle()
                                }}/>
                        </button> */}
                        
                        <a href="/" className="header-main-logo" style={{color:'#333'}}>
                        <img style={{width:'25px',marginRight:'10px',marginLeft:'5px'}} src={logo} alt="" />

                            HIREiT
                        </a>
                    </div>

                    <ul className="header-main-nav-menu">
                        <li className="header-main-navs">
                            <a href="/search/num">채용</a>
                        </li>
                        <li className="header-main-navs">
                            <a 
                               >이력서</a>
                        </li>
                        <li className="header-main-navs">
                            <a href="/community">커뮤니티</a>
                        </li>
                    </ul>

                    <aside className="header-main-nav-aside">
                        <ul>
                            <li>
                                <button className='search-button' style={{outline:'none'}}
                                onClick={()=>{
                                    setSearchToggle(!searchToggle);
                                }}>
                                    <SearchIcon sx={{color:searchToggle?'#0a58ca':''}}/>
                                </button>
                            </li>
                            
                                <i class="bi bi-person-circle" style={{fontSize:'23px', color:'#333',cursor:'pointer'}}></i>
                                <i class="bi bi-bell" style={{fontSize:'20px', color:'#333',cursor:'pointer'}}></i>
                            
                            <li>
                                
                            </li>
                            <li className='visible left-division'>
                                <a className='dashboard-button' href="/corp/welcome">기업 서비스</a>
                            </li>
                            <li></li>
                        </ul>
                    </aside>
                </nav>
                {/* </div> */}
            </div>
            <div className='main-header-category' style={{display:catDisplay}}>
                <Category/>            
            </div>
            <div className="padding-main-padding"></div>
            <SearchQuery st={searchToggle}/>
        </>        
    );
};

export default Header;