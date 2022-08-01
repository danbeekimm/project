import React from 'react';

const UserInfo = ({ user_gender, user_birth, user_email, user_hp, addr, addr_detail, user_photo, username, name }) => {
    let photoUrl = "http://localhost:9000/save/";


    return (
        <>
            <table className='ResumeInput'>
                <tbody>
                    <tr className='Info'>
                        <th colSpan={3}>기본정보
                            <button type='button' className='btn'>수정하기</button>
                        </th>

                    </tr>
                    <tr>
                        <td className='photo1' rowSpan={5}>
                            <img alt='' src={photoUrl + user_photo} />
                        </td>
                    </tr>
                    <tr className='infoDetail'>
                        <td className='nameOne'>
                            <b>{name}</b>
                        </td>
                        <td className='detail'>
                            {user_gender},{user_birth}
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
                            {addr} {addr_detail}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default UserInfo;