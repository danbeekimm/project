import React, { useEffect, useState } from 'react';
import './ResumeInput.css';
import { set, useForm } from 'react-hook-form';
import Resume from './Resume';
import { Link } from 'react-scroll';
import TechInput from './TechInput';
import CvInput from './CvInput';
import IntroInput from './IntroInput';
import Major from './Major';
import Senior from './Senior';
import TotalYM from './TotalYM';
import Portfolio from './Portfolio';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AddSenior from './AddSenior';
import { getElementError } from '@testing-library/react';
import { useRef } from 'react';
import UserInfo from './UserInfo';
import Category from './Category';
import SideBar from './SideBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const ResumeNewSave = () => {
    const [visible, setVisible] = useState(false); //이력서 불러오기 클릭시 보이기, 숨기기
    const [resumes, setResumes] = useState([]); //불러올 이력서 목록
    const [addTech, setAddTech] = useState(false); //기술 추가
    const [addCv, setAddCv] = useState(false); //CV 추가
    const [addIntro, setAddIntro] = useState(false); //자기소개 추가
    const [addPort, setAddPort] = useState(false); //포트폴리오 추가
    const [radio, setRadio] = useState('');
    const [radio2, setRadio2] = useState('');
    const [publicClosed, setPublicClosed] = useState('1');
    const [addRows, setAddRows] = useState(false);

    // 보내는 값
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
    const bodyFormData = tech_tags.join(','); // 배열을 String으로 바꾸는 함수
    const [job_type, setJob_type] = useState([]);
    const jobType = job_type.join(',');
    const [com_cv, setCom_cv] = useState('');
    const [intro, setIntro] = useState('');
    const [pot_link, setPot_link] = useState('');
    const [pot_file, setPot_file] = useState('');
    const [res_name, setRes_name] = useState('');
    const [writeday, setWriteday] = useState('');
    const [edu_radio, setEdu_radio] = useState('0');
    const [exp_radio, setExp_radio] = useState('0');
    const [open_radio, setOpen_radio] = useState('0');
    const middleRef = useRef();
    const highRef = useRef();
    const uniRef = useRef();
    const [nSave_idx, setNsave_idx] = useState('');
    const [detail_idx, setDetail_idx] = useState('');

    const addEvent = (e) => {  // 경력 추가 버튼 
        setAddRows(!addRows);
    }

    const setMiddle = (e) => {  // 중학교 눌렀을 때
        setEdu_radio('0');
        setRadio(e.target.value);
    }

    const setHigh = (e) => {  // 고등학교 눌렀을 때
        setEdu_radio('1');
        setRadio(e.target.value);
    }

    const setUni = (e) => {  // 대학교 눌렀을 때
        setEdu_radio('2');
        setRadio(e.target.value);
    }

    const junior = (e) => {  // 신입 눌렀을 때
        setExp_radio('0');
        setRadio2(e.target.value);
    }

    const senior = (e) => {  // 경력 눌렀을 때
        setExp_radio('1');
        setRadio2(e.target.value);
    }

    const openRes = (e) => {  // 공개 눌렀을 때
        setOpen_radio('0');
        setPublicClosed(e.target.value);
    }

    const closeRes = (e) => {  // 비공개 눌렀을 때
        setOpen_radio('1');
        setPublicClosed(e.target.value);
    }

    const Navi = useNavigate();

    const { user_id } = useParams();
    const { resume_idx } = useParams();

    //url 등록
    let insertUrl = "http://localhost:9000/resume/insert";
    let delSave = "http://localhost:9000/resume/savedelete?resume_idx=" + resume_idx;
    let getIdx = "http://localhost:9000/resume/getdetailidx?username=" + user_id;
    let saveResume = "http://localhost:9000/resume/saveresume";
    let getNewIdx = "http://localhost:9000/resume/getidx?username=" + user_id;
    let detailUrl = "http://localhost:9000/resume/detail?resume_idx=" + resume_idx;

    //info 값 불러오기 
    const savedInfo = () => {
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

            if (res.data.pot_file !== '' || res.data.pot_link !== '') {
                setPot_link(res.data.pot_link);
                setPot_file(res.data.pot_file);
                setAddPort(true);
            }

            if (res.data.job_type !== '') {
                setJob_type(res.data.job_type.split(','));
            }
        })
    }

    const edu = (i) => {
        if (i === 0) {
            return <>
                <input type="radio" defaultValue="중학교" className="btn-check btn1" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked onClick={setMiddle} />
                <label className="btn btn-outline-primary" htmlFor="btnradio1" style={{ width: '230px' }}>중학교 졸업</label>
                <input type="radio" defaultValue="고등학교" className="btn-check btn1" name="btnradio" id="btnradio2" autoComplete="off" onClick={setHigh} />
                <label className="btn btn-outline-primary" htmlFor="btnradio2" style={{ width: '230px' }}>고등학교 졸업</label>
                <input type="radio" defaultValue="대학교/대학원" className="btn-check btn1" name="btnradio" id="btnradio3" autoComplete="off" onClick={setUni} />
                <label className="btn btn-outline-primary" htmlFor="btnradio3" style={{ width: '225px' }}>대학교/대학원 졸업</label>
            </>
        }
        if (i === 1) {
            return <>
                <input type="radio" defaultValue="중학교" className="btn-check btn1" name="btnradio" id="btnradio1" autoComplete="off" onChange={setMiddle} />
                <label className="btn btn-outline-primary" htmlFor="btnradio1" style={{ width: '230px' }}>중학교 졸업</label>
                <input type="radio" defaultValue="고등학교" className="btn-check btn1" name="btnradio" id="btnradio2" autoComplete="off" defaultChecked onChange={setHigh} />
                <label className="btn btn-outline-primary" htmlFor="btnradio2" style={{ width: '230px' }}>고등학교 졸업</label>
                <input type="radio" defaultValue="대학교/대학원" className="btn-check btn1" name="btnradio" id="btnradio3" autoComplete="off" onChange={setUni} />
                <label className="btn btn-outline-primary" htmlFor="btnradio3" style={{ width: '225px' }}>대학교/대학원 졸업</label>
            </>
        }
        if (i === 2) {
            return <>
                <input type="radio" defaultValue="중학교" className="btn-check btn1" name="btnradio" id="btnradio1" autoComplete="off" onClick={setMiddle} />
                <label className="btn btn-outline-primary" htmlFor="btnradio1" style={{ width: '230px' }}>중학교 졸업</label>
                <input type="radio" defaultValue="고등학교" className="btn-check btn1" name="btnradio" id="btnradio2" autoComplete="off" onClick={setHigh} />
                <label className="btn btn-outline-primary" htmlFor="btnradio2" style={{ width: '230px' }}>고등학교 졸업</label>
                <input type="radio" defaultValue="대학교/대학원" className="btn-check btn1" name="btnradio" id="btnradio3" autoComplete="off" defaultChecked onClick={setUni} />
                <label className="btn btn-outline-primary" htmlFor="btnradio3" style={{ width: '225px' }}>대학교/대학원 졸업</label>
            </>
        }
    }

    const exp = (i) => {
        if (i === 0) {
            return <>
                <input type="radio" defaultValue="신입" className="btn-check" name="radio" id="btnradio4" autoComplete="off" defaultChecked onClick={junior} />
                <label className="btn btn-outline-primary" htmlFor="btnradio4" style={{ width: '340px' }}>신입</label>
                <input type="radio" defaultValue="경력" className="btn-check" name="radio" id="btnradio5" autoComplete="off" onClick={senior} />
                <label className="btn btn-outline-primary" htmlFor="btnradio5" style={{ width: '340px' }}>경력</label>
            </>
        }
        if (i === 1) {
            return <>
                <input type="radio" defaultValue="신입" className="btn-check" name="radio" id="btnradio4" autoComplete="off" onClick={junior} />
                <label className="btn btn-outline-primary" htmlFor="btnradio4" style={{ width: '340px' }}>신입</label>
                <input type="radio" defaultValue="경력" className="btn-check" name="radio" id="btnradio5" autoComplete="off" defaultChecked onClick={senior} />
                <label className="btn btn-outline-primary" htmlFor="btnradio5" style={{ width: '340px' }}>경력</label>
            </>
        }
    }


    const opens = (i) => {
        if (i === 0) {
            return <>
                <input type="radio" defaultValue="공개" className="btn-check" name="radio3" id="btnradio6" autoComplete="off" defaultChecked onClick={openRes} />
                <label className="btn btn-outline-primary" htmlFor="btnradio6" style={{ width: '340px' }}>공개</label>
                <input type="radio" defaultValue="비공개" className="btn-check" name="radio3" id="btnradio7" autoComplete="off" onClick={closeRes} />
                <label className="btn btn-outline-primary" htmlFor="btnradio7" style={{ width: '340px' }}>비공개</label>
            </>
        }
        if (i === 1) {
            return <>
                <input type="radio" defaultValue="공개" className="btn-check" name="radio3" id="btnradio6" autoComplete="off" onClick={openRes} />
                <label className="btn btn-outline-primary" htmlFor="btnradio6" style={{ width: '340px' }}>공개</label>
                <input type="radio" defaultValue="비공개" className="btn-check" name="radio3" id="btnradio7" autoComplete="off" defaultChecked onClick={closeRes} />
                <label className="btn btn-outline-primary" htmlFor="btnradio7" style={{ width: '340px' }}>비공개</label>
            </>
        }
    }


    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        Navi("/resume/save/" + user_id + "/" + nSave_idx);
    }

    const handleClose2 = () => {
        setOpen(false);
        Navi("/resume/detail/" + user_id + "/" + detail_idx);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleOpen = () => {
        axios.get(getNewIdx).then(res => {
            setNsave_idx(res.data.resume_idx);
            setOpen(true);
        })
    }

    const handleOpen2 = () => {
        axios.get(getIdx).then(res => {
            setDetail_idx(res.data.resume_idx);
            setOpen2(true);
        });
    }

    //수정 값 보내기 
    const save = () => {
        axios.post(saveResume, {
            user_id: user_id, username, name, user_hp, user_photo, addr, user_addr, user_birth, user_email, user_gender, sch_name, sch_region, sch_start, sch_end, sch_major, com_name: arr.com_name.join(','), com_region: arr.com_region.join(','), com_start: arr.com_start.join(','), total_year: arr.total_year.join(','), open_radio: Number(open_radio), edu_radio: Number(edu_radio), exp_radio: Number(exp_radio),
            com_end: arr.com_end.join(','), quit_reason: arr.quit_reason.join(','), com_position: arr.com_position.join(','), com_department: arr.com_department.join(','), com_mainwork: arr.com_mainwork.join(','), com_salary: arr.com_salary.join(','), tech_tags: bodyFormData, com_cv, intro, pot_link, pot_file, res_name, job_type: jobType
        })
            .then(res => {
                handleOpen();
            })
    }

    //resume 중간저장
    const SaveResume = () => {

        if (edu_radio === '0' || edu_radio === '1') { //중학교 또는 대학교 졸업 선택후 저장시
            setSch_major('');
        }

        if (exp_radio === '0') { //신입 선택시 선택후 저장시
            setArr({
                ...arr,
                com_name: ['', ''],
                com_region: ['', ''],
                com_start: ['', ''],
                com_end: ['', ''],
                com_department: ['', ''],
                com_position: ['', ''],
                com_mainwork: ['', ''],
                com_salary: ['', ''],
                quit_reason: ['', ''],
                total_year: ['', '']
            })
        }
        save();
    }

    //resume 값 보내기
    const confirmRes = (e) => {
        e.preventDefault();
        if (!window.confirm("이력서를 등록하시겠습니까?")) {
            return;
        } else {
            axios.post(insertUrl, {
                user_id, username, name, user_hp, user_photo, addr, user_addr, user_birth, user_email, user_gender, sch_name, sch_region, sch_start, sch_end, sch_major,
                com_name: arr.com_name.join(','), com_region: arr.com_region.join(','), com_start: arr.com_start.join(','), total_year: arr.total_year.join(','),
                open_radio: Number(open_radio), edu_radio: Number(edu_radio), exp_radio: Number(exp_radio), com_end: arr.com_end.join(','), quit_reason: arr.quit_reason.join(','),
                com_position: arr.com_position.join(','), com_department: arr.com_department.join(','), com_mainwork: arr.com_mainwork.join(','), com_salary: arr.com_salary.join(','),
                tech_tags: bodyFormData, com_cv, intro, pot_link, pot_file, res_name, job_type: jobType
            })
                .then(res => { });

            axios.delete(delSave, { resume_idx })
                .then(res => { handleOpen2(); });
        }
    }

    const cancel = () => {
        if (window.confirm("취소하시겠습니까?")) {
            window.history.go(-2);
        } else {
            return;
        }
    }

    //URL
    let getResumeList = "http://localhost:9000/resume/resumelist?username=" + user_id;

    const [resumeList, setResumeList] = useState([]);

    const getRes = () => {
        axios.get(getResumeList).then(res => {
            setResumeList(res.data);
        })
    }

    useEffect(() => {
        savedInfo();
        getRes();
    }, []);

    return (
        <div className='ResumeInput'>
            {/* 이력서 불러오기 */}
            <div className="BringResume" onClick={() => {
                setVisible(!visible);
            }}>
                <b className="Title">이력서 불러오기</b><br />
                <b className="SubTitle">불러올 이력서를 선택해주세요<span>▼</span></b>
            </div>
            {visible && <Resume resumeList={resumeList} />}
            {/* 우측바 */}
            <div className='SideBar'>
                <SideBar setAddTech={setAddTech} addTech={addTech} setAddCv={setAddCv} addCv={addCv} setAddIntro={setAddIntro}
                    setAddPort={setAddPort} addPort={addPort} addIntro={addIntro} writeday={writeday} />
            </div>
            {/* 입력폼 */}
            <form onSubmit={confirmRes}>
                <div className='ResumeInputForm'>
                    {/* 기본정보 */}
                    <UserInfo user_gender={user_gender} user_birthday={user_birth} user_email={user_email} user_hp={user_hp} addr={addr}
                        username={username} name={name} user_photo={user_photo} />
                    {/* 학력사항 */}
                    <table className='ResumeInput2'>
                        <tbody>
                            <tr>
                                <th colSpan='2'>학력사항</th>
                            </tr>
                            <tr>
                                <td colSpan='2' role="group" aria-label="Basic checkbox toggle button group">
                                    {edu(Number(edu_radio))}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='2' className='height'>
                                    <b>{radio} 정보 입력</b>
                                </td>
                            </tr>
                            <tr>
                                <td className='name'>학교명&nbsp;<span>필수</span></td>
                                <td className='input'>
                                    <input type='text' placeholder='학교명 입력' required value={sch_name} onChange={(e) => {
                                        setSch_name(e.target.value);
                                    }} />
                                </td>
                            </tr>
                            <tr>
                                <td className='name'>지역&nbsp;<span>필수</span></td>
                                <td className='input'>
                                    <input type='text' placeholder='지역 입력' required value={sch_region} onChange={(e) => {
                                        setSch_region(e.target.value);
                                    }} />
                                </td>
                            </tr>
                            <tr>
                                <td className='name'>재학기간&nbsp;<span>필수</span></td>
                                <td className='period'>
                                    <input type="date" id="start" name="trip-start"
                                        min="2000-01-01" max="2022-07-31" required value={sch_start} onChange={(e) => {
                                            setSch_start(e.target.value);
                                        }}></input>
                                    &emsp;-&emsp;
                                    <input type="date" id="start" name="trip-start"
                                        min="2000-01-01" max="2022-07-31" required value={sch_end} onChange={(e) => {
                                            setSch_end(e.target.value);
                                        }}></input>
                                </td>
                            </tr>
                            <tr>
                                {radio === '대학교/대학원' || edu_radio === '2' ? <Major sch_major={sch_major} setSch_major={setSch_major} /> : <></>}
                            </tr>
                        </tbody>
                    </table>
                    {/* 경력사항 */}
                    <table className='ResumeInput2'>
                        <tbody>
                            <tr>
                                <th colSpan='2'>경력사항</th>
                            </tr>
                            <tr>
                                <td colSpan='2' role="group" aria-label="Basic checkbox toggle button group">
                                    {exp(Number(exp_radio))}
                                </td>
                            </tr>
                            {radio2 === '경력' || exp_radio === 1 ? <Senior arr={arr} setArr={setArr} /> : <></>}
                        </tbody>
                    </table>
                    <table className='ResumeInput2'>
                        <tbody>
                            {radio2 !== '신입' ? <TotalYM arr={arr} setArr={setArr} /> : <></>}
                        </tbody>
                    </table>
                    {addTech &&
                        <table className='ResumeInput2'>
                            <tbody id='1'>
                                <TechInput setTech_tags={setTech_tags} tech_tags={tech_tags} />
                            </tbody>
                        </table>
                    }
                    {addCv &&
                        <table className='ResumeInput2'>
                            <tbody id='2'>
                                <CvInput setCom_cv={setCom_cv} com_cv={com_cv} />
                            </tbody>
                        </table>
                    }
                    {addIntro &&
                        <table className='ResumeInput2'>
                            <tbody id='3'>
                                <IntroInput setIntro={setIntro} intro={intro} />
                            </tbody>
                        </table>
                    }
                    {addPort &&
                        <table className='ResumeInput2'>
                            <tbody id='4'>
                                <Portfolio setPot_link={setPot_link} pot_link={pot_link} setPot_file={setPot_file} pot_file={pot_file} />
                            </tbody>
                        </table>
                    }
                    <table className='ResumeInput2'>
                        <tbody>
                            <tr>
                                <th colSpan='2'>이력서 제목</th>
                            </tr>
                            <tr>
                                <td className='name'>이력서 제목&nbsp;<span>필수</span></td>
                                <td className='input'>
                                    <input type='text' placeholder='이력서 제목 입력' required defaultValue={res_name} onChange={(e) => {
                                        setRes_name(e.target.value);
                                        console.log(res_name);
                                    }} />
                                </td>
                            </tr>
                            <tr>
                                <th colSpan='2'>이력서 공개여부</th>
                            </tr>
                            <tr>
                                <td colSpan='2' role="btn-group" aria-label="Basic checkbox toggle button group">
                                    {opens(Number(open_radio))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div className="Button">
                        <button type='button' className='btn btn-outline-dark' onClick={cancel}>취소</button>
                        <button type='button' className='btn btn-outline-dark' onClick={SaveResume}>저장</button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
                                    이력서 저장이 완료되었습니다.<br />
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 1 }} style={{ textAlign: 'center' }}>
                                    <button type='button' className='btn btn-dark' onClick={handleClose} style={{ width: '150px' }}>확인</button>
                                </Typography>
                            </Box>
                        </Modal>
                        <button type='submit' className='btn btn-outline-dark'>등록</button>
                        <Modal
                            open={open2}
                            onClose={handleClose2}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
                                    이력서 등록이 완료되었습니다.<br />
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 1 }} style={{ textAlign: 'center' }}>
                                    <button type='button' className='btn btn-dark' onClick={handleClose2} style={{ width: '150px' }}>확인</button>
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ResumeNewSave;