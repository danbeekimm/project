import React, { useEffect, useState } from 'react';

const category = [
    "개발 전체",
    "웹 개발자",
    "서버 개발자",
    "프론트엔드 개발자",
    "소프트웨어 엔지니어",
    "자바 개발자",
    "안드로이드 개발자",
    "iOS 개발자",
    "Node.js 개발자",
    "데이터 엔지니어",
    "파이썬 개발자",
    "DevOps / 시스템 관리자",
    "C/C++ 개발자",
    "시스템/네트워크 관리자",
    "머신러닝 엔지니어",
    "데이터 사이언티스트",
    "빅데이터 엔지니어",
    "QA,테스트 엔지니어",
    "개발 매니저",
    "기술지원",
    "보안 엔지니어",
    "프로덕트 매니저",
    "PHP 개발자",
    "블록체인 플랫폼 엔지니어",
    "임베디드 개발자",
    "웹 퍼블리셔",
    "하드웨어 엔지니어",
    "크로스플랫폼 앱 개발자",
    ".NET 개발자",
    "영상/음성 엔지니어",
    "DBA",
    "그래픽스 엔지니어",
    "CTO/Chief Technology",
    "VR 엔지니어",
    "ERP전문가",
    "루비온레일즈 개발자",
    "BI 엔지니어",
    "CIO/Chief Information"
]

const Category = ({ job_type, setJob_type }) => {
    //    const [click, setClick] = useState(new Array(category.length).fill(true));
    // const [true,setTrue1]=useState('');
    const [msg, setMsg] = useState('');
    const [true1, setTrue1] = useState('');
    const delBtn = (a, i) => {
        setJob_type(job_type.filter(job => job !== a));
    }

    const binuZZhang = (e) => {
        if (job_type.length < 3 && job_type.indexOf(e.target.value) < 0) {
            setJob_type(job_type.concat(e.target.value));
        } else {
            setMsg('3가지 이상 선택할 수 없습니다');
        }
    }

    // arr = [0, 1, 2, 3, '4', 5, 6, 7, 8, 9]
    // index=4를 바꾸고싶음
    // arr.slice(0, 4) = [0, 1, 2, 3]
    // arr의 길이 = 10
    // index + 1 =5
    // arr.slice(5, 10) = [5, 6, 7, 8, 9]
    // 앞부분 = arr.slice(0, 4)
    // 바꿀것 = arr[index] = 11
    // 뒷부분 = arr.slice(5, 10)
    // 앞부분 + 바꿀것 + 뒷부분
    // 앞부분.concat(바꿀것).concat(뒷부분)

    return (
        <>
            <select className="selectCat" onChange={binuZZhang}>
                {
                    category.map((a, idx) => (
                        <option>{a}</option>
                    ))
                }
            </select><br />
            {job_type.length > 2 ?
                <span className='msg'>{msg}</span> : <></>
            }
            <br />
            {
                job_type && job_type.map((a, i) => (
                    <button type='button' className='btn btn-dark wishBtn' onClick={() => delBtn(a, i)}>{a}<span className='delbtn'> X </span></button>
                ))
            }
            &nbsp;
        </>
    );
};

export default Category;