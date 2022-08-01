import React, { useRef, Component, useState, useEffect } from 'react';
import './ResumeDetail.css';
import ReactToPrint from 'react-to-print';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ResumeInput from './ResumeInput';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { set } from 'react-hook-form';
import PDFViewer from './PDFViewer';

const ResumeDetail = () => {
    const componentRef = useRef(); // 스캔 구역 지정 
    //이미지 캡쳐 후 PDF 변환
    const exportPDF = () => {
        const input = document.getElementById("PDF")
        html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
            const imgWidth = 310;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const pageHeight = 280;
            let heightLeft = imgHeight;
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            let position = 0;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save("resume.pdf");
        })
    }

    //불러올 데이터 담을 변수 
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [user_photo, setUser_photo] = useState('');
    const [user_birth, setUser_birth] = useState('');
    const [user_gender, setUser_gender] = useState('');
    const [user_email, setUser_email] = useState('');
    const [user_hp, setUser_hp] = useState('');
    const [addr, setAddr] = useState('');
    const [addr_detail, setAddr_detail] = useState('');
    const [user_addr, setUser_addr] = useState('');
    const [sch_name, setSch_name] = useState('');
    const [sch_region, setSch_region] = useState('');
    const [sch_start, setSch_start] = useState('');
    const [sch_end, setSch_end] = useState('');
    const [sch_major, setSch_major] = useState('');
    const [arr, setArr] = useState({
        com_name: ['', ''],
        com_region: ['', ''],
        com_start: ['', ''],
        com_end: ['', ''],
        quit_reason: ['', ''],
        com_position: ['', ''],
        com_department: ['', ''],
        com_mainwork: ['', ''],
        com_salary: ['', ''],
        total_year: ['0', '0']
    })
    const [tech_tags, setTech_tags] = useState([]);
    const [job_type, setJob_type] = useState([]);
    const [com_cv, setCom_cv] = useState('');
    const [intro, setIntro] = useState('');
    const [pot_link, setPot_link] = useState('');
    const [pot_file, setPot_file] = useState('');
    const [res_name, setRes_name] = useState('');
    const [writeday, setWriteday] = useState('');
    const [edu_radio, setEdu_radio] = useState('0');
    const [exp_radio, setExp_radio] = useState('0');
    const [open_radio, setOpen_radio] = useState('0');

    //데이터 유무에 따라 보여질 변수       
    const [radio2, setRadio2] = useState(false); //경력 추가 
    const [addTech, setAddTech] = useState(false); //기술 추가
    const [addCv, setAddCv] = useState(false); //CV 추가
    const [addIntro, setAddIntro] = useState(false); //자기소개 추가
    const [addPort, setAddPort] = useState(false); //포트폴리오 추가
    const [publicClosed, setPublicClosed] = useState(false); //공개,비공개 여부
    const [showEx, setShowEx] = useState(false); //경력일때

    //주소창에서 가져올 변수 
    const { user_id } = useParams();
    const { resume_idx } = useParams();

    //URL
    const Navi = useNavigate();
    let detailUrl = "http://localhost:9000/resume/detail?resume_idx=" + resume_idx;
    let photoUrl = "http://localhost:9000/save/";

    //resume 테이블에서 데이터 가져오기
    const resumeInfo = () => {
        axios.get(detailUrl).then(res => {
            setUsername(res.data.username);
            setName(res.data.name);
            setUser_hp(res.data.user_hp);
            setUser_photo(res.data.user_photo);
            setAddr(res.data.addr);
            setAddr_detail(res.data.addr_detail);
            setUser_addr(res.data.user_addr);
            setUser_birth(res.data.user_birth);
            setUser_email(res.data.user_email);
            setUser_gender(res.data.user_gender);
            setSch_name(res.data.sch_name);
            setSch_region(res.data.sch_region);
            setSch_start(res.data.sch_start);
            setSch_end(res.data.sch_end);
            setSch_major(res.data.sch_major);
            setEdu_radio(res.data.edu_radio);
            setExp_radio(res.data.exp_radio);
            setOpen_radio(res.data.open_radio);
            setRes_name(res.data.res_name);
            setWriteday(res.data.writeday);
            if (res.data.exp_radio !== 0) {
                setArr({
                    ...arr,
                    com_name: res.data.com_name.split(','),
                    com_region: res.data.com_region.split(','),
                    com_start: res.data.com_start.split(','),
                    com_end: res.data.com_end.split(','),
                    quit_reason: res.data.quit_reason.split(','),
                    com_position: res.data.com_position.split(','),
                    com_department: res.data.com_department.split(','),
                    com_mainwork: res.data.com_mainwork.split(','),
                    com_salary: res.data.com_salary.split(','),
                    total_year: res.data.total_year.split(',')
                })
                setRadio2(true);
            }
            if (res.data.tech_tags !== '') {
                setTech_tags(res.data.tech_tags.split(',')); //String을 배열로 바꾸는 함수 
                setAddTech(true);
            }
            if (res.data.com_cv !== '') {
                setCom_cv(res.data.com_cv);
                setAddCv(true);
            }
            if (res.data.intro !== '') {
                setIntro(res.data.intro);
                setAddIntro(true);
            }
            if (res.data.pot_file !== null || res.data.pot_link !== '') {
                setPot_link(res.data.pot_link);
                setPot_file(res.data.pot_file);
                setAddPort(true);
            }
            if (res.data.job_type !== '') {
                setJob_type(res.data.job_type);
            }
        })
    }
    console.log(job_type);
    //처음 랜더링시 resumeInfo 함수 호출 
    useEffect(() => {
        resumeInfo();
    }, []);

    //총경력 구하는 함수 
    const changeNum = Number(arr.total_year[0]) + Number(arr.total_year[1]);
    let Year = 0;
    let Month = changeNum;
    // 12개월 => 1년으로 환산 
    while (Month > 11) {
        Month -= 12;
        Year += 1;
    }

    return (
        <>
            <div className='ResumeDetail' style={{ paddingLeft: '100px' }}>
                <div ref={componentRef} id='PDF'>
                    <table className='ResumeDetail'>
                        <tbody>
                            <tr className='Info'>
                                <th colSpan={3}>
                                    {res_name}
                                    <hr />
                                </th>
                            </tr>
                            <tr>
                                <td className='photo2' rowSpan={7}>
                                    <img alt='' src={photoUrl + user_photo} />
                                </td>
                            </tr>
                            <tr className='infoDetail'>
                                <td className='nameOne'>
                                    <b>{name}</b>
                                </td>
                                <td className='detail'>
                                    {user_gender}, {user_birth}
                                </td>
                            </tr>
                            <tr className='infoDetail'>
                                <td className='nameOne'>
                                    이메일
                                </td>
                                <td className='detail'>
                                    {user_email}
                                </td>
                            </tr>
                            <tr className='infoDetail'>
                                <td className='nameOne'>
                                    휴대폰
                                </td>
                                <td className='detail'>
                                    {user_hp}
                                </td>
                            </tr>
                            <tr className='infoDetail'>
                                <td className='nameOne'>
                                    주 소
                                </td>
                                <td className='detail'>
                                    {addr}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className='first'>
                        <tbody>
                            <tr className='subName'>
                                <td>
                                    <b>학력사항</b>
                                </td>
                                <td>
                                    <b>경력사항</b>
                                </td>
                                <td>
                                    <b>희망 직군</b>
                                </td>
                                <td>
                                    <b>희망 근무지</b>
                                </td>
                                <td>
                                    <b>포트폴리오</b>
                                </td>
                            </tr>
                            <tr className='subName2'>
                                <td>{sch_name} 졸업</td>
                                <td>
                                    {Year > 0 ? `총 경력 ${Year}년 ${Month}개월` : Month !== 0 && Month < 12 ? `총 경력 ${Month}개월` : Month === 0 ? '신입' : ''}
                                </td>
                                <td>{job_type}</td>
                                <td>{user_addr}</td>
                                <td>{addPort === true ? pot_link + '\n' + pot_file : '-'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='ResumeDetail table table-borderd'>
                        <thead>
                            <tr>
                                <th>최종학력</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='comTableT table-light'>
                                <td>재학기간</td>
                                <td>학교명</td>
                                <td>지역</td>
                                <td>전공</td>
                            </tr>
                            <tr className='comTable'>
                                <td>{sch_start}~{sch_end}</td>
                                <td>{sch_name}</td>
                                <td>{sch_region}</td>
                                <td>{sch_major === '' ? '-' : sch_major}</td>
                            </tr>
                        </tbody>
                    </table>
                    {radio2 &&
                        <table className='ResumeDetail table'>
                            <thead>
                                <tr>
                                    <th colSpan='2'>경력&emsp;<span className='totalY'>{Year > 0 ? `${Year}년 ${Month}개월` : `${Month}개월`}</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='comTableT table-light'>
                                    <td>재직기간</td>
                                    <td>회사명</td>
                                    <td>지역</td>
                                    <td>부서</td>
                                    <td>직급/직책</td>
                                    <td>담당업무</td>
                                    <td>퇴사사유</td>
                                    <td>연봉</td>
                                </tr>
                                <tr className='comTable'>
                                    <td>{arr.com_start[0]}~<br />{arr.com_end[0]}</td>
                                    <td>{arr.com_name[0]}</td>
                                    <td>{arr.com_region[0]}</td>
                                    <td>{arr.com_department[0]}</td>
                                    <td>{arr.com_position[0]}</td>
                                    <td>{arr.com_mainwork[0]}</td>
                                    <td>{arr.quit_reason[0]}</td>
                                    <td>{arr.com_salary[0]}</td>
                                </tr>
                                {
                                    arr.com_name[1] !== '' ?
                                        <>
                                            <tr className='comTable'>
                                                <td>{arr.com_start[1]}~<br />{arr.com_end[1]}</td>
                                                <td>{arr.com_name[1]}</td>
                                                <td>{arr.com_region[1]}</td>
                                                <td>{arr.com_department[1]}</td>
                                                <td>{arr.com_position[1]}</td>
                                                <td>{arr.com_mainwork[1]}</td>
                                                <td>{arr.quit_reason[1]}</td>
                                                <td>{arr.com_salary[1]}</td>
                                            </tr>
                                        </> : <></>
                                }

                            </tbody>
                        </table>
                    }
                    {addTech &&
                        <table className='ResumeDetail table table-borderd'>
                            <thead>
                                <tr>
                                    <th>보유기술</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan='4'>
                                        {
                                            tech_tags.map((a, idx) => (
                                                <button type='button' className='btn techBtn'>#{a} </button>
                                            ))
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    }
                    {addPort &&
                        <table className='ResumeDetail table table-borderd'>
                            <thead>
                                <tr>
                                    <th>포트폴리오</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan='2'>
                                        {pot_link !== '' &&
                                            <><a href={pot_link}>{pot_link}</a><br /></>
                                        }
                                        {pot_file}
                                        {/* <PDFViewer photoUrl={photoUrl} pot_file={pot_file} /> */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    }
                    {addCv &&
                        <table className='ResumeDetail table table-borderd'>
                            <thead>
                                <tr>
                                    <th>경력기술서</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan='4' style={{ border: '1px solid lightgray', textAlign: 'left' }}>
                                        {com_cv}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    }
                    {addIntro &&
                        <table className='ResumeDetail table table-borderd'>
                            <thead>
                                <tr>
                                    <th>자기소개서</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan='4' style={{ border: '1px solid lightgray', textAlign: 'left' }}>
                                        {intro}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    }
                </div>
                {/* 우측바 */}
                <div className='detailSideBar'>
                    <table className='detailSideBar table table-hover'>
                        <tbody>
                            <tr>
                                <td className='noHover'>최근 수정일&emsp;<span>{writeday}</span></td>
                            </tr>
                            <tr>
                                <td className='required_edit' onClick={() => {
                                    Navi("/resume/update/" + user_id + "/" + resume_idx);
                                }}>이력서 수정</td>
                            </tr>
                            <tr>
                                <ReactToPrint
                                    trigger={() => <td className='required'>프린트 하기</td>}
                                    content={() => componentRef.current}
                                />
                            </tr>
                            <tr>
                                <td className='required' onClick={() => exportPDF()}>PDF로 저장</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
//}};


export default ResumeDetail;