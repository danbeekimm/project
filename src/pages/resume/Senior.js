import React, { useEffect, useState } from 'react';
import AddSenior from './AddSenior';

const Senior = ({ arr, setArr }) => {
    const [sdd, setSdd] = useState('');
    const [edd, setEdd] = useState('');

    let sd = Math.floor(new Date(sdd).getTime() / 2592000000); //시간을 밀리초로 변환 1000 * 60 * 60 * 24 * 30 
    let ed = Math.floor(new Date(edd).getTime() / 2592000000);
    let Year = 0;
    let Month = (ed - sd);
    let totalMonth = Month;

    while (Month > 11) {
        Month -= 12;
        Year += 1;
    }

    const totalYM = () => {
        setArr({
            ...arr,
            total_year: [totalMonth, arr.total_year[1]]
        })
    }

    useEffect(() => {
        totalYM();
    }, [sdd, edd])

    const addSenior = (e) => {
        const { name, value } = e.target;

        // setCom_name([name, com_name[0]]);
        if (name === 'com_name') {
            setArr({
                ...arr,
                com_name: [value, arr.com_name[1]]
            })
        }

        if (name === 'com_region') {
            setArr({
                ...arr,
                com_region: [value, arr.com_region[1]]
            })
        }

        if (name === 'com_start') {
            setArr({
                ...arr,
                com_start: [value, arr.com_start[1]]
            })
            setSdd(e.target.value);
        }

        if (name === 'com_end') {
            setEdd(e.target.value);
            setArr({
                ...arr,
                com_end: [value, arr.com_end[1]]
            })
        }

        if (name === 'quit_reason') {
            setArr({
                ...arr,
                quit_reason: [value, arr.quit_reason[1]]
            })
        }

        if (name === 'com_position') {
            setArr({
                ...arr,
                com_position: [value, arr.com_position[1]]
            })
        }

        if (name === 'com_department') {
            setArr({
                ...arr,
                com_department: [value, arr.com_department[1]]
            })
        }

        if (name === 'com_mainwork') {
            setArr({
                ...arr,
                com_mainwork: [value, arr.com_mainwork[1]]
            })

        }

        if (name === 'com_salary') {
            setArr({
                ...arr,
                com_salary: [value, arr.com_salary[1]]
            })
        }

    }

    return (
        <>
            <tr>
                <td className='name'>회사명&nbsp;<span>필수</span></td>
                <td className='input'>
                    <input type='text' placeholder='회사명 입력' required defaultValue={arr.com_name[0]} name='com_name' onBlur={addSenior} />
                </td>
            </tr>
            <tr>
                <td className='name'>지역&nbsp;<span>필수</span></td>
                <td className='input'>
                    <input type='text' placeholder='지역 입력' required defaultValue={arr.com_region[0]} name='com_region' onBlur={addSenior} />
                </td>
            </tr>
            <tr>
                <td className='name'>재직기간&nbsp;<span>필수</span></td>
                <td className='period'>
                    <input type="date" id="start"
                        min="2000-01-01" max="2022-07-31" required defaultValue={arr.com_start[0]} name='com_start' onBlur={addSenior}></input>
                    &emsp;-&emsp;
                    <input type="date" id="start"
                        min="2000-01-01" max="2022-07-31" required defaultValue={arr.com_end[0]} name='com_end' onBlur={addSenior}></input>
                    &emsp;&emsp;
                    {sdd && edd ? <b>{Year > 0 ? `총 ${Year}년 ${Month}개월` : `총 ${Month}개월`}</b> : ''}
                </td>
            </tr>
            <tr>
                <td className='name'>퇴사사유&nbsp;<span>필수</span></td>
                <td className='input'>
                    <input type='text' placeholder='퇴사사유 입력' required defaultValue={arr.quit_reason[0]} name='quit_reason' onBlur={addSenior} />
                </td>
            </tr>
            <tr>
                <td className='name'>직급/직책&nbsp;<span>필수</span></td>
                <td className='input'>
                    <input type='text' placeholder='직급/직책 입력' required defaultValue={arr.com_position[0]} name='com_position' onBlur={addSenior} />
                </td>
            </tr>
            <tr>
                <td className='name'>근무부서&nbsp;<span>필수</span></td>
                <td className='input'>
                    <input type='text' placeholder='근무부서 입력' required defaultValue={arr.com_department[0]} name='com_department' onBlur={addSenior} />
                </td>
            </tr>
            <tr>
                <td className='name'>담당업무&nbsp;<span>필수</span></td>
                <td className='input'>
                    <input type='text' placeholder='담당업무 입력' required defaultValue={arr.com_mainwork[0]} name='com_mainwork' onBlur={addSenior} />
                </td>
            </tr>
            <tr>
                <td className='name'>연봉&nbsp;</td>
                <td className='input'>
                    <input type='text' placeholder='연봉 입력' required defaultValue={arr.com_salary[0]} name='com_salary' onBlur={addSenior} />
                </td>
            </tr>

            <AddSenior arr={arr} setArr={setArr} />
        </>
    );
};

export default Senior;