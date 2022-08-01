import React from 'react';

const ExpInfo = ({ radioChange, radio, setSch_name, setSch_region, setSch_start,
    setSch_end, setSch_major, sch_major, Major }) => {
    return (
        <>
            <table className='ResumeInput2'>
                <tbody>
                    <tr>
                        <th colSpan='2'>학력사항</th>
                    </tr>
                    <tr>
                        <td colSpan='2' role="group" aria-label="Basic checkbox toggle button group">
                            <input type="radio" defaultValue="중학교" className="btn-check btn1" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked onChange={radioChange} />
                            <label className="btn btn-outline-primary" htmlFor="btnradio1" style={{ width: '230px' }}>중학교 졸업</label>

                            <input type="radio" defaultValue="고등학교" className="btn-check btn1" name="btnradio" id="btnradio2" autoComplete="off" onChange={radioChange} />
                            <label className="btn btn-outline-primary" htmlFor="btnradio2" style={{ width: '230px' }}>고등학교 졸업</label>
                            <input type="radio" defaultValue="대학교/대학원" className="btn-check btn1" name="btnradio" id="btnradio3" autoComplete="off" onChange={radioChange} />
                            <label className="btn btn-outline-primary" htmlFor="btnradio3" style={{ width: '225px' }}>대학교/대학원 졸업</label>
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
                            <input type='text' placeholder='학교명 입력' required onChange={(e) => {
                                setSch_name(e.target.value);
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td className='name'>지역&nbsp;<span>필수</span></td>
                        <td className='input'>
                            <input type='text' placeholder='지역 입력' required onChange={(e) => {
                                setSch_region(e.target.value);
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td className='name'>재학기간&nbsp;<span>필수</span></td>
                        <td className='period'>
                            <input type="date" id="start" name="trip-start"
                                min="2000-01-01" max="2022-07-31" required onChange={(e) => {
                                    setSch_start(e.target.value);
                                }}></input>
                            &emsp;-&emsp;
                            <input type="date" id="start" name="trip-start"
                                min="2000-01-01" max="2022-07-31" required onChange={(e) => {
                                    setSch_end(e.target.value);
                                }}></input>
                        </td>
                    </tr>
                    <tr>
                        {radio === '대학교/대학원' ? <Major setSch_major={setSch_major} sch_major={sch_major} /> : <></>}
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ExpInfo;