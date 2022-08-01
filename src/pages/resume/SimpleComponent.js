import React, { Component } from 'react';

const SimpleComponent = props => {
    const { printRef } = props;

    return (
        <div ref={printRef}>
            <table className='ResumeInput' id='div'>
                <tbody>
                    <tr className='Info'>
                        <th colSpan={3}>
                            이력서
                            <hr />
                        </th>
                    </tr>
                    <tr>
                        <td className='photo1' rowSpan={5}>
                            <img alt='' src={IndivPhoto} />
                        </td>
                    </tr>
                    <tr className='infoDetail'>
                        <td className='nameOne'>
                            <b>김주희</b>
                        </td>
                        <td className='detail'>
                            여, 1995(28세)
                        </td>
                    </tr>
                    <tr className='infoDetail'>
                        <td className='nameOne'>
                            이메일
                        </td>
                        <td className='detail'>s
                            jaja321@naver.com
                        </td>
                    </tr>
                    <tr className='infoDetail'>
                        <td className='nameOne'>
                            휴대폰
                        </td>
                        <td className='detail'>
                            010-6521-7750
                        </td>
                    </tr>
                    <tr className='infoDetail'>
                        <td className='nameOne'>
                            주 소
                        </td>
                        <td className='detail'>
                            서울시 중랑구 신내동 661
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};


export default SimpleComponent;