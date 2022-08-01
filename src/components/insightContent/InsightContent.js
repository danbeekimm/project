import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const InsightContent = ({tag}) => {
    const navi = useNavigate();
    if(tag == null) tag=1;

    const [contentList, setContentList] = useState([]);
    let eRror
    useEffect(() => {
        const getInsListUrl = process.env.REACT_APP_SPRING_URL + "getICList?tag=" + tag;
        axios.get(getInsListUrl)
        .then(res => {
            setContentList(res.data);
            console.log("InsightContent.js 데.이.터. 불러오기 성.콩.",contentList)
        })
        .catch(err => {
            console.log("InsightContent.js 오.류.입니다")
            eRror = err
        })
    },[tag])

    return (
        <>
            {
            contentList.map((data,idx) => {
                // console.log('inContent data : ', data)
                return (
                    <div key={idx} className="insight-list">
                        <a style={{ width: '100%' }} target='_blank' href={data.url}>
                            <div className="career-insight-content-image-wrap">
                                <img width='250' height='175' src={process.env.REACT_APP_SPRING_URL + "static/image/career_insight/" + data.title + ".jpg"} alt="" />
                            </div>
                            <p className="career-insight-content-title">{data.title}</p>
                            <p className="career-insight-content-desc">{data.description!='null'?data.description:''}</p>
                            <div className="career-insight-content-info">
                                <img src={process.env.REACT_APP_SPRING_URL + "static/image/career_insight/" + (data.platform=='brunch'?'brunch.jpg':'youtube.jpg')} alt="" />
                                <p style={{ margin: '0 5px' }}>{data.name}</p>
                            </div>
                        </a>
                    </div>
                )
                })
            }
        </>
        
    );
};

export default InsightContent;