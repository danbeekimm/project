import React from 'react';
import { Link } from 'react-scroll';
import './ResumeInput.css';

const SideBar = ({ setAddTech, writeday, addTech, setAddCv, addCv, setAddIntro, setAddPort, addPort, addIntro }) => {
    return (
        <>
            <table className='SideBar'>
                <tbody>
                    <tr>
                        <th>이력서 항목</th>
                    </tr>
                    <tr>
                        <td className='required'>기본정보&nbsp;<span>필수</span></td>
                    </tr>
                    <tr>
                        <td className='required'>학력사항&nbsp;<span>필수</span></td>
                    </tr>
                    <tr>
                        <td className='required'>경력사항&nbsp;<span>필수</span></td>
                    </tr>
                    <tr>
                        <td>보유기술 및 능력
                            <Link to="1" spy={true} smooth={false}>
                                <button type='button' className='btn btn-light' onClick={() => {
                                    setAddTech(!addTech);
                                }}>{addTech === false ? '추가 +' : '삭제 -'}</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>경력기술서
                            <Link to="2" spy={true} smooth={false}>
                                <button type='button' className='btn btn-light' onClick={() => {
                                    setAddCv(!addCv);
                                }}>{addCv === false ? '추가 +' : '삭제 -'}</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>자기소개서
                            <Link to="3" spy={true} smooth={false}>
                                <button type='button' className='btn btn-light' onClick={() => {
                                    setAddIntro(!addIntro);
                                }}>{addIntro === false ? '추가 +' : '삭제 -'}</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>포트폴리오
                            <Link to="4" spy={true} smooth={false}>
                                <button type='button' className='btn btn-light' onClick={() => {
                                    setAddPort(!addPort);
                                }}>{addPort === false ? '추가 +' : '삭제 -'}</button>
                            </Link>
                        </td>
                    </tr>
                    {writeday &&
                        <tr>
                            <td className='date'>
                                최종저장 : {writeday}
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    );
};

export default SideBar;