import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchAbout from './SearchAbout';

const Container = styled.div`
    width:100%;
    display:${props => props.st ? 'flex' : 'none'};
    align-items: center;
    flex-direction:column;
    justify-content: center;
    z-index:1;
    position:fixed;
    // transition: all .35s cubic-bezier(0.45,0.05,0.55,0.95);
    > form > div{
        display:flex;
        margin:10px auto;
        clear:both;
        max-width:800px;
        background-color:white;
        // justify-content:space-between;
        > div{
            margin:0px;
            width:650px;
            margin-right:1rem!important;
        }
    }
    
`;


const SearchQuery = ({ st }) => {
    const navi = useNavigate();
    const [queryCorp, setQueryCorp] = useState(null);
    const [queryJob, setQueryJob] = useState(null);
    const [keyword, setKeyword] = useState('');

    const getQueryAboutCorpUrl = process.env.REACT_APP_SPRING_URL + 'queryAboutCorp?keyword=' + keyword;
    const getQueryAboutJobUrl = process.env.REACT_APP_SPRING_URL + 'queryAboutJob?keyword=' + keyword;
    useEffect(() => {
        axios.get(getQueryAboutCorpUrl)
        .then(res => {
            setQueryCorp(res.data);
            console.log("res.data",res.data)
        })
        .catch(err => {
            console.log("1연관검색어 검색 실패여유ㅠㅠ")
        })

        axios.get(getQueryAboutJobUrl)
        .then(res => {
            setQueryJob(res.data);
            console.log("res.data",res.data)

        })
        .catch(err => {
            console.log("2연관검색어 검색 실패여유ㅠㅠ")
        })
    },[keyword])

    
    return (
        <div style={{ display: 'flex' }}>
            <Container st={st}>
                <form>
                    {/* <div className='shadow-sm p-3 mb-5 bg-body rounded'>안보여 왜,,</div> */}
                    <div className='shadow-sm p-3 bg-body rounded'>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword" 
                                onChange={(e)=>{
                                    setKeyword(e.target.value);
                                }}/>
                        </div>
                        <a href={`/search?q=${keyword}`}>
                            <button type="button" className="btn btn-outline-primary">검색</button>
                        </a>
                    </div>
                </form>
                <SearchAbout queryCorp={queryCorp} queryJob={queryJob}/>
            </Container>
        </div>
    );
};

export default SearchQuery;