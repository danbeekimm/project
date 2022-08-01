import React from 'react';
import styled from 'styled-components';
import job from '../../../images/dashboard/developer.jpg';
import hand from '../../../images/dashboard/hand.jpg';
import cost from '../../../images/dashboard/money.jpg';

const CountingWrap = styled.div`
    display: inline-block;
    width: 1100px;
    height: 700px;
    background: rgb(241, 244, 246);
    >div{
        width: 1000px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin: auto;
    }
`;
const CountComponent = styled.div`
    width: 480px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(51, 51, 51);
    padding: 196px 0px 121px;
`;
const Img = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 50%;
`;
const CountTitle = styled.p`
    font-size: 50px;
    font-weight: bold;
    line-height: 1.4;
    margin-top: 20px;
    color: rgb(0, 0, 0);
`;
const CountSubTitle = styled.p`
    font-size: 30px;
    font-weight: normal;
    line-height: normal;
    text-align: center;
    margin-top: 4px;
`;

const countContentList = [
    {id:1, imgUrl: job, title: '700만', subtitle: '엄선된 인재 풀'},
    {id:2, imgUrl: hand, title: '60%', subtitle: '1개월 내 채용 성공률'},
    {id:3, imgUrl: cost, title: '40%', subtitle: '채용 비용 절감'},
]

const DashboardCount = () => {
    return (
        <CountingWrap>
            <div>
                {
                    countContentList.map((data) =>
                    (
                        <CountComponent>
                            <Img src={data.imgUrl}/>
                            <CountTitle>{data.title}</CountTitle>
                            <CountSubTitle>{data.subtitle}</CountSubTitle>
                        </CountComponent>
                    )
                    )
                }
            </div>
        </CountingWrap>
    );
};

export default DashboardCount;