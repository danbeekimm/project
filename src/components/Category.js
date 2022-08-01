import React from 'react';
import CategoryDetail from './CategoryDetail';

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
    "C,C++ 개발자",
    "시스템,네트워크 관리자",
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
    "영상,음성 엔지니어",
    "DBA",
    "그래픽스 엔지니어",
    "CTO,Chief Technology",
    "VR 엔지니어",
    "ERP전문가",
    "루비온레일즈 개발자",
    "BI 엔지니어",
    "CIO,Chief Information"
]


const Category = () => {
    return (
        <div className='header-category-cat'>
            {
                category.map((cat,idx)=>(<CategoryDetail key={idx} cat={cat}/>))
            }
        </div>
    );
};

export default Category;