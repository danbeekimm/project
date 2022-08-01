import React from 'react';
import styled from 'styled-components';

const SearchResult = styled.div`
    display:${props=>(props.queryCorp==0&&props.queryJob==0)?'none;':"flex;"}
    flex-direction:column;
    max-width:756px;
    width:756px;
    background-color:#fff;
    opacity:0.95;
    border: 1px solid transparent;
    box-shadow: 0 1px 5px 1px rgb(40 40 60 / 10%);
    border-radius:3px;
    // padding:16px;
    p{
        margin-bottom: 6px;
        font-weight: bold;
    }
    .query-info{
        margin-bottom: 3px;
    }
    .common-wrap{
        padding:16px;

    }
    span{
        font-size: 14px;
        color: #6381b0;
    }
`;
const CorpWrap = styled.div`
    ${props => {if(props.queryCorp!=0&&props.queryJob!=0)
            return(
                'border-bottom:1px solid #e2e7e8;'
            )
    }}
`;
const JobPostingWrap = styled.div`

`;


const SearchAbout = ({queryCorp,queryJob}) => {
    return (
        <SearchResult queryCorp={queryCorp} queryJob={queryJob}>
            {queryCorp!=0&&<CorpWrap className='common-wrap' queryCorp={queryCorp} queryJob={queryJob}>
            {queryCorp&&queryCorp.length!=0&&<p>기업<span>{queryCorp.length}</span></p>}
                {queryCorp&&queryCorp.map((data,idx) => (
                    <div key={idx} className="query-corp query-info">
                        {data.corpName}
                    </div>
                ))}
            </CorpWrap>}
            {queryJob!=0&&<JobPostingWrap className='common-wrap'>
            {queryJob&&queryJob.length!=0&&<p>채용정보<span>{queryJob.length}</span></p>}
                {queryJob&&queryJob.map((data,idx) => (
                    <div key={idx} className="query-job query-info">
                        {data.jobPostingTitle}
                    </div>
                ))}
            </JobPostingWrap>}
        </SearchResult>
    );
};

export default SearchAbout;