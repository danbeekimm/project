import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import corpImg from '../../images/corp.png';

const Container = styled.div`
    max-width:1060px;
    width: 1060px;
    margin: 0 auto;
`;
const CardWrap = styled.div`
    display:flex;
    flex-direction:column;
    margin: 60px 0;
`;
const Cards = styled.ul`
    display:flex;
    flex-wrap:wrap;
    margin-top:30px;
`;
const Title = styled.h5`
    margin: 0 auto;
`;
const Card = styled.li`
    width:245px;
    height:300px;
    border:1px solid #e1e2e3;
    border-radius: 10px;
    margin:10px;
    >a{
        position: relative;
        overflow: hidden;
        display: block;
        width: 100%;
        padding-top: 66.802%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        color: #333;
    text-decoration: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    }
    .img-box{
        position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    }
    .thumbs-img{
        background-image: url(${corpImg});
        width: 100%;
        height: 100%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
`;
const ContentBox = styled.div`
    padding: 17px 20px 16px;
    width: 100%;
    box-sizing: border-box;
    >a{
        color: #333;
        position: relative;
        display: block;
        height: 100%;
        text-decoration: none;
        cursor: pointer;
        margin: 0;
        padding: 0;
    }
    .title{
        max-height: 50px;
        font-size: 14px;
        line-height: 25px;
        font-weight: bold;
        color: #323438;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
    }
    .desc{
        margin-top: 8px;
        max-height: 44px;
        font-size: 12px;
        line-height: 22px;
        font-weight: 400;
        color: #85878c;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
    }
`

const SearchResult = () => {
    const [jobPosting, setJobPosting] = useState([]);
    useEffect(()=>{
        const jobpUrl = process.env.REACT_APP_SPRING_URL + "getJobPosting";
        axios.get(jobpUrl)
        .then(res=>{
            console.log("성공공")
            setJobPosting(res.data)
            console.log("jobPosting",jobPosting)
        })
        .catch(err=>{
            alert(err)
        })
    },[])


    return (
            <Container>         
                <CardWrap>
                    <Title>지금 뜨는 포지션 TOP4🌟</Title>
                    <Cards>
                        {
                           jobPosting.map((data,idx)=>(
                                <Card>
                                    <a href="">
                                        <div className="img_box">
                                            <img src={corpImg} alt="" className="thumns-img" />
                                        </div>
                                    </a>
                                    <ContentBox>
                                        <a class="link" href="" target="_blank" onclick="GA.event('main_test_v1','company_story_title', { label: '7' });">
                                            <h6 class="title">{data.corp_name}</h6>
                                            <div class="desc">{data.com_addr}</div>
                                            <div class="desc">{data.job_type}</div>
                                        </a>
                                    </ContentBox>
                                </Card>
                            ))
                        }
                    </Cards>
                </CardWrap>
            </Container>
    );
};

export default SearchResult;