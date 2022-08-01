import React, { useEffect, useState } from 'react';
import './ResumeInput.css';

const AddSenior = ({ arr, setArr }) => {
    const [sdd, setSdd] = useState('');
    const [edd, setEdd] = useState('');
    const [minus, setMinus] = useState(false);
    const [add, setAdd] = useState(true);

    let sd = Math.floor(new Date(sdd).getTime() / 2592000000); //시간을 밀리초로 변환 1000 * 60 * 60 * 24 * 30 
    let ed = Math.floor(new Date(edd).getTime() / 2592000000);
    let Year = 0;
    let Month = (ed - sd);
    let totalMonth;

    while (Month > 11) {
        Month -= 12;
        Year += 1;
    }


    const totalYM = () => {
        totalMonth = Month;
        setArr({
            ...arr,
            total_year: [arr.total_year[0], totalMonth]
        })

        if (arr.com_name[1] !== '') {
            setMinus(true);
            setAdd(false);
        }
    }

    useEffect(() => {
        totalYM();
    }, [sdd, edd])


    //추가버튼 클릭시
    const btnEvent = () => {
        setMinus(true);
        setAdd(false);
    }

    const minusSenior = () => {
        setMinus(false);
        setAdd(true);
        // setCom_name(com_name.filter(name,idx => idx>0));
        // setCom_name(com_name.filter(name => name === ''));
        setArr({
            ...arr,
            com_name: [arr.com_name[0], ''],
            com_region: [arr.com_region[0], ''],
            com_start: [arr.com_start[0], ''],
            com_end: [arr.com_end[0], ''],
            com_department: [arr.com_department[0], ''],
            com_position: [arr.com_position[0], ''],
            com_mainwork: [arr.com_mainwork[0], ''],
            com_salary: [arr.com_salary[0], ''],
            quit_reason: [arr.quit_reason[0], ''],
            total_year: [arr.total_year[0], '']
        })
        setEdd(false);
    }

    const addSenior = (e) => {
        const { name, value } = e.target;

        if (name === 'com_name') {
            setArr({
                ...arr,
                com_name: [arr.com_name[0], value]
            })
        }

        if (name === 'com_region') {
            setArr({
                ...arr,
                com_region: [arr.com_region[0], value]
            })
        }

        if (name === 'com_start') {
            setArr({
                ...arr,
                com_start: [arr.com_start[0], value]
            })
            setSdd(e.target.value);
        }

        if (name === 'com_end') {
            setArr({
                ...arr,
                com_end: [arr.com_end[0], value]
            })
            setEdd(e.target.value);
        }

        if (name === 'quit_reason') {
            setArr({
                ...arr,
                quit_reason: [arr.quit_reason[0], value]
            })
        }

        if (name === 'com_position') {
            setArr({
                ...arr,
                com_position: [arr.com_position[0], value]
            })
        }

        if (name === 'com_department') {
            setArr({
                ...arr,
                com_department: [arr.com_department[0], value]
            })
        }

        if (name === 'com_mainwork') {
            setArr({
                ...arr,
                com_mainwork: [arr.com_mainwork[0], value]
            })

        }

        if (name === 'com_salary') {
            setArr({
                ...arr,
                com_salary: [arr.com_salary[0], value]
            })
        }

    }

    return (
        <>
            {add && arr.com_name[1] === '' ?
                <tr>
                    <td colSpan='2' className='addbtn1'><button type='button' className='btn btn-dark btn-sm' onClick={btnEvent}>추가</button></td>
                </tr>
                : <></>
            }
            {!add &&
                <>
                    <tr>
                        <td colSpan='2' className='addbtn2'><button type='button' className='btn btn-dark btn-sm' onClick={minusSenior}>삭제</button></td>
                    </tr>
                    <tr>
                        <td className='name'>회사명&nbsp;<span>필수</span></td>
                        <td className='input'>
                            <input type='text' placeholder='회사명 입력' required defaultValue={arr.com_name[1]} name='com_name' onBlur={addSenior} />
                        </td>
                    </tr>
                    <tr>
                        <td className='name'>지역&nbsp;<span>필수</span></td>
                        <td className='input'>
                            <input type='text' placeholder='지역 입력' required defaultValue={arr.com_region[1]} name='com_region' onBlur={addSenior} />
                        </td>
                    </tr>
                    <tr>
                        <td className='name'>재직기간&nbsp;<span>필수</span></td>
                        <td className='period'>
                            <input type="date" id="start"
                                min="2000-01-01" max="2022-07-31" required defaultValue={arr.com_start[1]} name='com_start' onBlur={addSenior}></input>
                            &emsp;-&emsp;
                            <input type="date" id="start"
                                min="2000-01-01" max="2022-07-31" required defaultValue={arr.com_end[1]} name='com_end' onBlur={addSenior}></input>
                            &emsp;&emsp;
                            {sdd && edd ? <b>{Year > 0 ? `총 ${Year}년 ${Month}개월` : `총 ${Month}개월`}</b> : ''}
                        </td>
                    </tr>
                    <tr>
                        <td className='name'>퇴사사유&nbsp;<span>필수</span></td>
                        <td className='input'>
                            <input type='text' placeholder='퇴사사유 입력' required defaultValue={arr.quit_reason[1]} name='quit_reason' onBlur={addSenior} />
                        </td>
                    </tr>
                    <tr>
                        <td className='name'>직급/직책&nbsp;<span>필수</span></td>
                        <td className='input'>
                            <input type='text' placeholder='직급/직책 입력' required defaultValue={arr.com_position[1]} name='com_position' onBlur={addSenior} />
                        </td>
                    </tr>
                    <tr>
                        <td className='name'>근무부서&nbsp;<span>필수</span></td>
                        <td className='input'>
                            <input type='text' placeholder='근무부서 입력' required defaultValue={arr.com_department[1]} name='com_department' onBlur={addSenior} />
                        </td>
                    </tr>
                    <tr>
                        <td className='name'>담당업무&nbsp;<span>필수</span></td>
                        <td className='input'>
                            <input type='text' placeholder='담당업무 입력' required defaultValue={arr.com_mainwork[1]} name='com_mainwork' onBlur={addSenior} />
                        </td>
                    </tr>
                    <tr>
                        <td className='name'>연봉&nbsp;</td>
                        <td className='input'>
                            <input type='text' placeholder='연봉 입력' required defaultValue={arr.com_salary[1]} name='com_salary' onBlur={addSenior} />
                        </td>
                    </tr>
                </>
            }
        </>
    );
};

export default AddSenior;