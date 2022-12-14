import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ApplicantContext } from '../applicantManagement/ApplicantManagement';
import EmailModal from './EmailModal';
import ResumeStateButton from './buttons/ResumeStateButton';
import Chip from '@mui/material/Chip';

const Container = styled.div`
    max-width: 1060px;
    height: 1000px;
    margin: 10px auto;
    border: 1px solid lightgray;
    border-radius: 10px;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
`;
const HeaderRow = styled.div`
    padding: 10px;
    border-bottom: 1px solid #dbdbdb;
`;
const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const BodyRow = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
`;
const ToggleSelect = styled.button`
    
`;
const LeftWrap = styled.div`
    display:flex;
    align-items: center;
    flex-grow:1;
`

export const ResumeListContext = createContext();


const NewResume = ({ resumeList, setCat }) => {
    const { cat, cat2, setCat2 } = useContext(ApplicantContext);

    const navi = useNavigate();
    const [toProgress, setToProgress] = useState(null);

    const buttonMatch = { 0: [1, 3], 1: [2, 3], 2: [3] }

    //κΈ°μνμ idx
    let corp_idx = 1;

    useEffect(() => {

    }, [])

    //popper
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    const [checkedList, setCheckedList] = useState([]);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    // μ μ²΄ μ²΄ν¬ ν΄λ¦­ μ λ°μνλ ν¨μ
    const onCheckedAll = useCallback(
        (checked) => {
            if (checked) {
                const checkedListArray = [];

                resumeList.forEach((list) => checkedListArray.push(list));

                setCheckedList(checkedListArray);
            } else {
                setCheckedList([]);
            }
        },
        [resumeList]
    );

    // κ°λ³ μ²΄ν¬ ν΄λ¦­ μ λ°μνλ ν¨μ
    const onCheckedElement = useCallback(
        (checked, list, userId) => {
            if (checked) {
                setCheckedList([...checkedList, list]);
            } else {
                setCheckedList(checkedList.filter((el) => el !== list));
            }
        },
        [checkedList]
    );


    //ννΈ μ²΄ν¬ λ±λ‘ axios
    const [hc, setHc] = useState(false);
    const insertHeart = (corpId, apply_num) => {
        const insertHeartUrl = process.env.REACT_APP_SPRING_URL + "corpManagement/insertCheckedHeart?corp_id=" + corpId + "&apply_num=" + apply_num;
        axios.post(insertHeartUrl)
            .then(res => {
                console.log("λ±λ‘ μλ£")
                setHc(!hc)
            })
            .catch(err => {
                console.log("λ±λ‘ μ€ν¨")
            })
    }

    //ννΈ μ²΄ν¬ νμΈ axios
    useEffect(() => {
        const getCheckedHeartsUrl = process.env.REACT_APP_SPRING_URL + "corpManagement/getCheckedHeart?corp_id=" + corp_idx;
        axios.get(getCheckedHeartsUrl)
            .then((res) => {
                console.log("2λ°μ΄ν°res.data", res.data)
                setHeartCheckedList(res.data)
            })
            .catch(err => {
                console.log("2μλ¬κ° λ¬μ~")
            })
    }, [hc])

    //ννΈ μ²΄ν¬ μ­μ  axios
    const deleteHeart = (corpId, applyNum) => {
        const deleteHeartUrl = process.env.REACT_APP_SPRING_URL + "corpManagement/deleteCheckedHeart?corp_id=" + corpId + "&apply_num=" + applyNum;
        axios.delete(deleteHeartUrl)
            .then(res => {
                console.log("μ’μμ μ­μ ")
                setHc(!hc)
            })
            .catch(err => {
                console.log("μ­μ κ° λμ§ μμ κ±΄ κΈ°λΆνμ΄ μλ κ±°μΌ.")
            })
    }

    // const {setCorp_id, setApply_num, heartCheckedList, setHeartCheckedList} = useContext(ApplicantContext);
    const [corp_id, setCorp_id] = useState();
    const [apply_num, setApply_num] = useState();
    const [heartCheckedList, setHeartCheckedList] = useState([]);


    //μλ₯ν΅κ³Ό, λΆν©κ²© λλ₯Ό μ νΈμΆ
    const passCheckList = (passUrl) => {
        axios.get(passUrl)
            .then(res => {
                console.log("resume μ λ¬ μ±κ³΅")
                setCheckedList([]);
                setCat2(!cat2);
            })
            .catch(err => {
                console.log("resume μμ  μ€ν¨")
            })
    }
    const alarmAndProgress = (passUrl, insertAlarmUrl) => {
        axios.get(passUrl)
            .then(
                axios.spread((response1, response2) => {
                    // setUri1(response1.data);
                    // setUri2(response2.data);
                })
            )
            .catch((err) => console.log(err));
    }

    //μ΄λ ₯μ μλ₯ν΅κ³Ό, λΆν©κ²© μλ. λ²νΌ ν΄λ¦­ μ νΈμΆ
    // const userIdSet = new Set();
    // const [title, setTitle] = useState();
    // const [content, setContent] = useState();
    const [alarm, setAlarm] = useState(false);

    const num = [];
    checkedList.map(data => {
        num.push(data.num)
    })

    console.log("num", num)
    const resumeStateAlarm = (toProgress) => {
        const passUrl = process.env.REACT_APP_SPRING_URL + "corpManagement/updateResumeProgress?num=" + num + "&corp_idx=" + corp_idx + "&toProgress=" + toProgress;
        // const insertAlarmUrl = process.env.REACT_APP_SPRING_URL + "corpManagement/updateResumeProgress?num=" + num + "&corp_idx=" + corp_idx + "&title=" + title + "&content=" + content;
        passCheckList(passUrl)
        // if (alarm) {
        //     // alarmAndProgress(passUrl, insertAlarmUrl)
        // } else {
        // }
    }

    function timeForToday(value) {
        const today = new Date();
        const timeValue = new Date(value);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}μΌμ§Έ κΈ°λ€λ¦Ό`;
        }

        return `${Math.floor(betweenTimeDay / 365)}λμ§Έ κΈ°λ€λ¦Ό`;
    }
    return <>
        <ResumeListContext.Provider value={{ alarm, open, anchorEl, handleClick, canBeOpen, id, checkedList, resumeStateAlarm, buttonMatch }}>
            <Container>
                <HeaderRow>
                    <label onChange={(e) => onCheckedAll(e.target.checked)} htmlFor="">
                        <Checkbox {...label}
                            defaultChecked size="small"
                            checked={
                                checkedList.length === 0
                                    ? false
                                    : checkedList.length === resumeList.length
                                        ? true
                                        : false
                            }
                        />
                        μ μ²΄μ ν
                    </label>
                    {cat == 0 || cat == 1 ? <Button variant="outlined" style={{ margin: '0 20px' }} size="small"
                        aria-describedby={id} type="button"
                        onClick={handleClick}>μνλ³κ²½</Button> : ''}
                    <ResumeStateButton setCat={setCat} />
                    {cat == 0 || cat == 1 ? <FormControlLabel
                        style={{ fontSize: '11px' }}
                        value="start"
                        control={<Switch color="primary" />}
                        label="μ§μμμκ² κ²°κ³Όλ₯Ό μλ¦Ό"
                        labelPlacement="start"
                        onClick={(e) => {
                            //e.target.value μ λ¬. value κ° && μ²΄ν¬νκ³  λ²νΌ λλ₯΄λ©΄ dbμ μ μ‘
                            alarm ? setAlarm(!alarm) : setAlarm(!alarm)
                        }}
                    /> : ''}
                    {console.log("resumeList", resumeList)}
                    {console.log('checkedList', checkedList)}
                    {console.log('alarm', alarm)}
                    {/* <Search/> */}
                </HeaderRow>
                <BodyContainer>
                    {resumeList.map((list) => (
                        <BodyRow key={list.num}>
                            <LeftWrap>
                                <Checkbox {...label}
                                    defaultChecked size="small"
                                    checked={checkedList.includes(list) ? true : false}
                                    onChange={(e) => {
                                        onCheckedElement(e.target.checked, list, list.user_id);
                                    }}
                                />
                                {/* ννΈ */}
                                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}
                                    checked={heartCheckedList.includes(list.num) ? true : false}
                                    onClick={(e) => {
                                        e.target.checked ? insertHeart(list.corp_idx, list.num) : deleteHeart(list.corp_idx, list.num)
                                    }}
                                />
                                {/* μ¬μ§ */}
                                {list.user_photo != null ?
                                    <i className="bi bi-person-circle fs-2" style={{ color: 'rgba(0, 0, 0, 0.3)' }}></i> :
                                    <Avatar alt={list.user_name} src="/static/images/avatar/1.jpg" />}
                                {/* <AccountCircleIcon sx={{color:'rgba(0, 0, 0, 0.3)',fontSize:'40px'}}/> */}
                                <div className="new-resume-profile">
                                    {list.user_name} |
                                </div>
                                <Chip label={list.tech_tags} variant="outlined" />
                                <div>
                                    {list.tech_tags} |
                                </div>
                            </LeftWrap>
                            <div style={{paddingRight:'10px'}}>
                                {timeForToday(list.applyday)}
                            </div>
                        </BodyRow>
                    ))}
                </BodyContainer>
            </Container>
        </ResumeListContext.Provider>

    </>
};

export default NewResume;