import { Info } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Category from './Category';
import './JobPostingInput.css';
import Post from './Post';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const JobPostingUpdate = () => {
    const [endDate, setEndDate] = useState('');
    const [popup, setPopup] = useState(false);
    const [address, setAddress] = useState('');
    const [addssDetail, setAddressDetail] = useState('');
    const techTegs = [
        'Java', 'Spring Boot', 'Python', 'Spring Framework',
        'AWS', 'Git', 'iOS', 'HTML', 'JavaScript', 'MySQL', 'Linux', 'Android',
        'Kotlin', 'Swift', 'C', 'PHP', 'Docker', 'React', 'Github', 'JPA', 'C++', 'Node.js', 'TypeScript', 'Vue.js', 'Angular', 'Next.js'
    ];

    const handleChange = (e) => {
        const isChecked = e.target.checked;
        const name = e.target.name;

        if (isChecked) {
            setPreferred_tech([...preferred_tech, name]);
        } else {
            setPreferred_tech(preferred_tech.filter(e => e !== name));
        }
    }

    const saveChecked = (tech, idx) => {
        if (preferred_tech.indexOf(tech) !== -1) {
            return true;
        } else {
            return false;
        }
    }

    const { user_id, num } = useParams();

    const [corp_id, setCorp_id] = useState('');
    const [corp_name, setCorp_name] = useState('');
    const [title, setTitle] = useState(''); //제목 
    const [job_exp, setJob_exp] = useState('신입'); //경력구분
    const [experience, setExperience] = useState(''); //총경력(년)
    const [education, setEducation] = useState(''); //최종학력
    const [salary, setSalary] = useState(''); //급여조건 
    const [position, setPosition] = useState(''); //채용직급 
    const [job_type, setJob_type] = useState(''); //채용직군
    const [hire_type, setHire_type] = useState('정규직');//고용형태 
    const [hire_num, setHire_num] = useState(''); //고용인원
    const [preferred_tech, setPreferred_tech] = useState([]); //자격요건
    const [main_work, setMain_work] = useState(''); //담당업무 
    const [com_addr, setCom_addr] = useState(''); //근무지
    const [end_date, setEnd_date] = useState(''); //마감일 
    const [job_posting_photo, setJob_posting_photo] = useState(''); //공고사진 
    const [writeday, setWriteday] = useState(''); //작성일 
    const [show, setShow] = useState(false);

    //URL
    const Navi = useNavigate();
    let userInfoURL = "http://localhost:9000/jobposting/userinfo?username=" + user_id;
    let insertURL = "http://localhost:9000/jobposting/insert";
    let getNum = "http://localhost:9000/jobposting/getnum?corp_id=" + corp_id;
    let uploadUrl = "http://localhost:9000/jobposting/upload";
    let jobInfoURL = "http://localhost:9000/jobposting/detail?num=" + num;
    let updateURL = "http://localhost:9000/jobposting/update";
    //file change 호출 이벤트
    const uploadImage = (e) => {
        const uploadFile = e.target.files[0]; //업로드한 파일
        //객체에 전달 
        const imageFile = new FormData();
        imageFile.append("uploadFile", uploadFile); //백앤드에 저장한 변수명과 동일해야한다

        axios({
            method: 'post',
            url: uploadUrl,
            data: imageFile,
            headers: { 'Context-Type': 'multipart/form-data' }
        }).then(res => {
            setJob_posting_photo(res.data);//백앤드에서 보낸 변경된 이미지명 //백앤드 return값 photoName 
            console.log(res.data)
        }).catch(err => {
            alert(err);
        });
    }

    const [open, setOpen] = React.useState(false);
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
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        Navi('/job_posting/detail/' + user_id + '/' + num);
    }

    const JobUpdate = () => {
        if (!window.confirm("채용공고를 수정하시겠습니까?")) {
            return;
        } else {
            axios.post(updateURL, {
                num, title, job_exp, experience, education, salary, position, job_type, hire_type,
                hire_num: Number(hire_num), preferred_tech: preferred_tech.join(','), main_work, com_addr, end_date, job_posting_photo
            })
                .then(res => {
                    handleOpen();
                })
        }
    }

    const exChange = (e) => {
        setJob_exp(e.target.value);
        if (e.target.value === '경력') {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    const typeChange = (e) => {
        setHire_type(e.target.value);
    }

    //채용공고 데이터 
    const jobInfo = () => {
        axios.get(jobInfoURL).then(res => {
            setCorp_id(res.data.corp_id);
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
            setPreferred_tech(res.data.preferred_tech.split(','));
            setJob_posting_photo(res.data.job_posting_photo);
            setCom_addr(res.data.com_addr);
            setEnd_date(res.data.end_date);
            setMain_work(res.data.main_work);
        })
    }

    useEffect(() => {
        // Info();
        jobInfo();
    }, [])

    return (
        <div className='JobPostingInput'>
            <br />
            <h2>채용공고 등록</h2>
            <table className='jobInput'>
                <tbody>
                    <tr className='job_subject'>
                        <td className='job_input_subject' colSpan='2'>
                            <input type='text' placeholder='제목을 입력하세요' defaultValue={title} />
                        </td>
                    </tr>
                    <br />
                    <h5>모집 내용</h5>
                    <tr className='job_detail'>
                        <td className='job_name'>경력구분&nbsp;</td>
                        <td className='job_input'>
                            <label><input type="radio" name="workEx" value="신입" checked={job_exp === '신입'} onChange={exChange} /> 신입</label>&emsp;
                            <label><input type="radio" name="workEx" value="경력" checked={job_exp === '경력'} onChange={exChange} />경력</label>&nbsp;
                            {job_exp === '경력' &&
                                <label>(<input type="text" className='inputEx' defaultValue={experience} onChange={(e) => {
                                    setExperience(e.target.value);
                                }} /> 년 이상)</label>
                            }
                            &emsp;
                            <label><input type="radio" name="workEx" value="임원/간부" checked={job_exp === '임원/간부'} onChange={exChange} /> 임원/간부</label>&emsp;
                            <label><input type="radio" name="workEx" value="경력무관" checked={job_exp === '경력무관'} onChange={exChange} /> 경력무관</label>&emsp;
                        </td>
                    </tr>
                    <tr className='job_detail'>
                        <td className='job_name'>고용형태&nbsp;</td>
                        <td className='job_input'>
                            <label><input type="radio" name="type" value="정규직" checked={hire_type === '정규직'} onChange={typeChange} />정규직</label>&emsp;
                            <label><input type="radio" name="type" value="계약직" checked={hire_type === '계약직'} onChange={typeChange} /> 계약직</label>&emsp;
                            <label><input type="radio" name="type" value="인턴" checked={hire_type === '인턴'} onChange={typeChange} /> 인턴</label>&emsp;
                            <label><input type="radio" name="type" value="기타" checked={hire_type === '기타'} onChange={typeChange} /> 기타</label>&emsp;
                        </td>
                    </tr>
                    <tr className='job_detail'>
                        <td className='job_name'>고용인원&nbsp;</td>
                        <td className='input_num'>
                            <input type='text' defaultValue={hire_num} onChange={(e) => {
                                setHire_num(e.target.value);
                            }} />&nbsp;명
                        </td>
                    </tr>
                    <tr className='job_detail'>
                        <td className='job_name'>최종학력&nbsp;</td>
                        <td className='job_input'>
                            <select className='select' defaultValue={education} key={education} onChange={(e) => {
                                setEducation(e.target.value);
                            }}>
                                <option>최종학력 선택</option>
                                <option>초등학교 졸업</option>
                                <option>중학교 졸업</option>
                                <option>고등학교 졸업</option>
                                <option>대학교 졸업</option>
                                <option>대학원 졸업</option>
                            </select>
                        </td>
                    </tr>
                    <tr className='job_detail'>
                        <td className='job_name'>급여조건&nbsp;</td>
                        <td className='job_input'>
                            <select className='select' defaultValue={salary} key={salary} onChange={(e) => {
                                setSalary(e.target.value);
                            }}>
                                <option>급여조건 선택</option>
                                <option>2200~2600만원</option>
                                <option>2600~3000만원</option>
                                <option>3000~3400만원</option>
                                <option>3400~4000만원</option>
                                <option>4000만원 이상</option>
                                <option>협의</option>
                            </select>
                        </td>
                    </tr>
                    <tr className='job_detail'>
                        <td className='job_name'>채용직급&nbsp;</td>
                        <td className='job_input'>
                            <select className='select' defaultValue={position} key={position} onChange={(e) => {
                                setPosition(e.target.value);
                            }}>
                                <option>채용직급 선택</option>
                                <option >사원</option>
                                <option>주임</option>
                                <option>대리</option>
                                <option>과장</option>
                                <option>차장</option>
                                <option>부장</option>
                            </select>
                        </td>
                    </tr>
                    <tr className='job_detail'>
                        <td className='job_name'>직군&nbsp;</td>
                        <td className='job_input'>
                            <Category job_type={job_type} setJob_type={setJob_type} />
                        </td>
                    </tr>
                    <tr className='job_detail'>
                        <td className='job_name'>담당업무 <br />및 세부조건&nbsp;</td>
                        <td className='input_todo'>
                            <textarea className='txt' defaultValue={main_work} onChange={(e) => {
                                setMain_work(e.target.value);
                            }}></textarea>
                        </td>
                    </tr>
                    <tr className='job_detail'>
                        <td className='job_name'>자격요건&nbsp;</td>
                        <td className='job_pre'>
                            {
                                techTegs.map((tech, idx) => (
                                    <label><input type="checkbox" checked={saveChecked(tech, idx)} name={tech} value={tech} onChange={handleChange} />{tech}</label>
                                ))
                            }
                            <br />
                            {
                                preferred_tech.map((tech, idx) => (
                                    <button type='button' className='btn btn-warning btn-sm'>{tech}</button>
                                ))
                            }
                        </td>
                    </tr>
                    <tr className='job_detail'>
                        <td className='job_name'>근무지&nbsp;</td>
                        <td className='input_addr'>
                            <button type='button' className='btn btn-light' onClick={() => {
                                setPopup(!popup)
                            }}>🔍 주소검색</button>
                            {
                                popup &&
                                <Post com_addr={com_addr} setCom_addr={setCom_addr} />
                            }
                        </td>
                    </tr>
                    <tr className='job_detail'>
                        <td className='job_name'>마감일</td>
                        <td className='end_date'>
                            <span className='redfont'>*달력을 클릭하여 마감일을 설정하세요</span><br />
                            <input type="date" id="end" name="end_date"
                                min="2022-07-01" max="2023-07-31" defaultValue={end_date} onChange={(e) => {
                                    setEnd_date(e.target.value)
                                }}></input>
                            &emsp;{end_date}
                        </td>
                    </tr>
                    <tr className='job_detail'>
                        <td className='job_name'>공고 이미지 등록</td>
                        <td className='file_input'>
                            <input type='file' onChange={uploadImage} />&emsp;{job_posting_photo}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2' className='button'>
                            <button type='button' className='btn btn-light' onClick={() => {
                                window.history.go(-1);
                            }}>취소</button>
                            <button type='button' className='btn btn-dark' onClick={JobUpdate}>수정</button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
                                        채용공고 수정이 완료되었습니다.<br />
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 1 }} style={{ textAlign: 'center' }}>
                                        <button type='button' className='btn btn-dark' onClick={handleClose} style={{ width: '150px' }}>확인</button>
                                    </Typography>
                                </Box>
                            </Modal>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default JobPostingUpdate;