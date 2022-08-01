import React, { useEffect, useState } from 'react';
import './JobPostingDetail.css';
import KaokaoMap from './KakaoMap';
import templete from '../../assets/templete.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CorpInfo from './CorpInfo';
import DetailBtn from './DetailBtn';
import IndivDetailBtn from './IndivDetailBtn';

const JobPostingDetail = () => {

    const { num, corp_id } = useParams();
    // const [corp_id,setCorp_id]=useState('');
    const [corp_name, setCorp_name] = useState('');
    const [corp_hp, setCorp_hp] = useState('');
    const [corp_email, setCorp_email] = useState('');
    const [corp_photo, setCorp_photo] = useState('');
    const [corp_addr, setCorp_addr] = useState(''); //회원가입시 기입한 회사 주소
    const [title, setTitle] = useState(''); //제목 
    const [job_exp, setJob_exp] = useState('신입'); //경력구분
    const [experience, setExperience] = useState(''); //총경력(년)
    const [education, setEducation] = useState(''); //최종학력
    const [salary, setSalary] = useState(''); //급여조건 
    const [position, setPosition] = useState(''); //채용직급 
    const [job_type, setJob_type] = useState(''); //채용직군
    const [hire_type, setHire_type] = useState('정규직');//고용형태 
    const [hire_num, setHire_num] = useState('0'); //고용인원
    const [preferred_tech, setPreferred_tech] = useState([]); //자격요건
    const [main_work, setMain_work] = useState(''); //담당업무 
    const [com_addr, setCom_addr] = useState(''); //근무지
    const [end_date, setEnd_date] = useState(''); //마감일 
    const [job_posting_photo, setJob_posting_photo] = useState(''); //공고사진 
    const [writeday, setWriteday] = useState(''); //작성일 
    const [com_liked, setCom_liked] = useState([]);

    //채용공고 스크랩
    const [liked, setLiked] = useState(false);
    const [unlike, setUnlike] = useState(true);
    const [job_scrap, setJob_scrap] = useState([]);
    let username = localStorage.username;

    let today = new Date(), //현재 날짜 가져오기
        dday = new Date(end_date).getTime(), //디데이
        gap = dday - today,
        result = Math.floor(gap / (1000 * 60 * 60 * 24) + 1);

    //URL
    const Navi = useNavigate();
    let jobInfoURL = "http://localhost:9000/jobposting/detail?num=" + num;
    let userInfoURL = "http://localhost:9000/jobposting/userinfo?username=" + corp_id;
    let photoUrl = "http://localhost:9000/save/";
    let scrapUrl = "http://localhost:9000/jobposting/updatescrap?username=" + corp_id + "&job_scrap=" + num;
    let unscrapUrl = "http://localhost:9000/jobposting/unscrap?username=" + corp_id + "&num=" + num;

    //회사정보 데이터
    const Info = () => {
        axios.get(userInfoURL).then(res => {
            console.log(res.data);
            setCorp_photo(res.data.user_photo);
            setCorp_email(res.data.user_email);
            setCorp_hp(res.data.user_hp);
            setCorp_addr(res.data.addr);
            setJob_scrap(res.data.job_scrap);
            setCom_liked(res.data.com_liked);
        })

        console.log(corp_addr)

        if (job_scrap.indexOf(num) !== -1) {
            setLiked(true);
            setUnlike(false);
        }
    }
    // console.log(corp_id)
    //채용공고 데이터 
    const jobInfo = () => {
        axios.get(jobInfoURL).then(res => {
            setCorp_name(res.data.corp_name);
            setTitle(res.data.title);
            setJob_exp(res.data.job_exp);
            setExperience(res.data.experience);
            setHire_type(res.data.hire_type);
            setEducation(res.data.education);
            setHire_num(res.data.hire_num);
            setSalary(res.data.salary);
            setPosition(res.data.position);
            setJob_type(res.data.job_type);
            setPreferred_tech(res.data.preferred_tech);
            setJob_posting_photo(res.data.job_posting_photo);
            setCom_addr(res.data.com_addr);
            setEnd_date(res.data.end_date);
            setMain_work(res.data.main_work);
        })
    }

    useEffect(() => {
        Info();
        jobInfo();
    })

    return (
        <>
            <div className='JobPostingDetail'>

                {/* <h2>채용 공고</h2> */}
                <div className='j_subject'>
                    <h6>{corp_name}</h6>
                    <b>{title}</b>
                </div>
                <h5>모집내용</h5>
                <div className='j_detail'>
                    <table className='jDetail'>
                        <tbody>
                            <tr>
                                <td><b>경력구분</b></td>
                                <td>{job_exp} {experience}년 이상</td>
                                <td><b>고용형태</b></td>
                                <td>{hire_type}</td>
                            </tr>
                            <tr>
                                <td><b>최종학력</b></td>
                                <td>{education}</td>
                                <td><b>모집인원</b></td>
                                <td>{hire_num}명</td>
                            </tr>
                            <tr>
                                <td><b>급여조건</b></td>
                                <td>{salary}</td>
                                <td><b>채용직급</b></td>
                                <td>{position}</td>
                            </tr>
                            <tr>
                                <td><b>직군</b></td>
                                <td>{job_type}</td>
                                <td><b>우대사항</b></td>
                                <td>{preferred_tech} 개발경험</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br /><br />
                <h5>상세내용</h5>
                <img alt='' src={templete} className='templete' />
                <br /><br />
                <div className='t_templete_p'>
                    <p>
                        {corp_name} <br />{job_exp} 채용공고
                    </p>
                </div>
                <div className='t_templete'>
                    <table className='table t_templete'>
                        <thead>
                            <tr>
                                <th colSpan='4'>채용분야 및 지원자격</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>모집부문</td>
                                <td>모집인원</td>
                                <td>담당업무</td>
                                <td>자격요건</td>
                            </tr>
                            <tr>
                                <td>{job_type}</td>
                                <td>{hire_num}명</td>
                                <td>{main_work}</td>
                                <td>{preferred_tech} 개발경험</td>
                            </tr>
                        </tbody>
                    </table><br />
                    <b>&nbsp;접수기간 및 방법</b><br />
                    <p>
                        - 접수기간 : {end_date}까지<br />
                        - 지원방법 : 온라인 채용시스템 하이어잇 지원
                    </p>
                    <b>&nbsp;문의처</b><br />
                    <p>
                        - 이메일 : {corp_email}<br />
                        - 대표전화 : {corp_hp}
                    </p>
                    <b>&nbsp;채용절차</b><br />
                    <div className='circle'>서류</div><span className='s'>▷▷</span><div className='circle'>코딩테스트</div><span className='s'>▷▷</span><div className='circle'>면접</div><span className='s'>▷▷</span><div className='circle'>채용</div>
                </div>
                <br />
                <h5>근무지역</h5>
                <KaokaoMap com_addr={com_addr} setCom_addr={setCom_addr} />
                <br /><br />
                <h5>마감일</h5>
                <div className='end'>
                    <p>
                        <b>D-{result}</b>
                        {end_date}

                    </p>
                </div>
                {username !== corp_id &&
                    <>
                        <div className='scrap'>
                            {unlike &&
                                <button type='button' className='btn btn-outline-warning' onClick={() => {
                                    setUnlike(false);
                                    setLiked(true);
                                    axios.get(scrapUrl).then(res => {
                                        alert("채용공고 스크랩이 완료되었습니다.");
                                    })
                                }}>채용공고 스크랩</button>
                            }
                            {liked &&
                                <button type='button' className='btn btn-warning' onClick={() => {
                                    setUnlike(true);
                                    setLiked(false);
                                    axios.get(unscrapUrl).then(res => {
                                        alert("채용공고 스크랩이 취소되었습니다.");
                                    })
                                }}>채용공고 스크랩 취소</button>
                            }
                        </div>
                        <IndivDetailBtn />
                    </>
                }

                {username === corp_id &&
                    <DetailBtn />
                }

                {/* 우측 기업정보 */}
                <CorpInfo com_liked={com_liked} corp_photo={corp_photo} corp_name={corp_name} corp_addr={corp_addr} corp_hp={corp_hp} corp_email={corp_email} />
            </div>
        </>
    );
};

export default JobPostingDetail;