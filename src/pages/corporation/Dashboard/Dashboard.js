import React from 'react';
import FooterCorp from '../../../components/FooterCorp';
import HeaderCorp from '../../../components/HeaderCorp';
// import '../../components/corpCommon.css'
import citiview from '../../../images/dashboard/corp-dashboard-citi-view.jpg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DashboardSlick from './DashboardSlick';
import DashboardMain from './DashboardMain';
import DashboardCount from './DashboardCount';
import DashboardDesc from './DashboardDesc';

const Dashboard = () => {

    return (
        <>
            {/* <div className="padding" style={{ height: '50px' }}></div> */}
            <div style={{display:'flex'}} className="corp-dashboard-wrap">
                <div className="corp-dash-learn-more">
                    더 알아 볼까요?
                    <KeyboardArrowDownIcon sx={{color:'rgb(239, 239, 239)'}}/>
                </div>
                <DashboardMain/>
                <DashboardCount/>
                <DashboardDesc/>
                <section className="corp-dashboard-review-wrap">
                    <img src={citiview} alt="" />
                    <div>
                        <p className="corp-review-title titles">
                            진짜 채용이 이뤄지는 곳
                        </p>
                        <p className="corp-review-subtitle subtitles">
                            <span>
                                700만 유저의 합격 데이터에 기반하여
                                <br/>
                                우리 기업에 맞는 최고의 인재를 채용할 수 있어요.
                            </span>
                        </p>
                        <div style={{display:'flex',justifyContent:'center',marginTop:'100px'}}>
                            <DashboardSlick/>
                        </div>
                    </div>
                </section>
                <section className="corp-faq-section-wrap">
                    <div>
                        <p className="corp-faq-title titles">
                            하이어잇 기업서비스가 궁금해요.
                        </p>
                        <p className="corp-faq-subtitle subtitles">
                            자주 묻는 기업회원 질문
                        </p>
                    </div>
                    <div>
                        <div className="corp-faq-wrap">
                            <div className="corp-faq-question">
                                <span>기업 서비스 가입, 이용 절차가 궁금해요.</span>
                                <div className="corp-faq-close-button-wrap">
                                    <svg width="40" height="40" viewBox="0 0 40 40">
                                        <g fill="none" fill-rule="evenodd">
                                            <g stroke="#36f" stroke-width="1.5">
                                                <g transform="translate(-1210 -1414) translate(0 1197) translate(190 217) translate(1020)">
                                                    <circle cx="20" cy="20" r="19.25"></circle>
                                                    <path stroke-linecap="round" d="M26 14L14 26M14 14L26 26"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="corp-faq-wrap">
                            <div className="corp-faq-question">
                                <span>기업 서비스 가입, 이용 절차가 궁금해요.</span>
                                <div className="corp-faq-close-button-wrap">
                                <svg width="40" height="40" viewBox="0 0 40 40">
                                    <g fill="none" fill-rule="evenodd">
                                        <g stroke="#36f" stroke-width="1.5">
                                            <g transform="translate(-1210 -1414) translate(0 1197) translate(190 217) translate(1020)">
                                                <circle cx="20" cy="20" r="19.25"></circle>
                                                <path stroke-linecap="round" d="M26 14L14 26M14 14L26 26"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                </div>
                            </div>
                        </div>
                        <div className="corp-faq-wrap">
                            <div className="corp-faq-question">
                                <span>기업 서비스 가입, 이용 절차가 궁금해요.</span>
                                <div className="corp-faq-close-button-wrap">
                                <svg width="40" height="40" viewBox="0 0 40 40">
                                    <g fill="none" fill-rule="evenodd">
                                        <g stroke="#36f" stroke-width="1.5">
                                            <g transform="translate(-1210 -1414) translate(0 1197) translate(190 217) translate(1020)">
                                                <circle cx="20" cy="20" r="19.25"></circle>
                                                <path stroke-linecap="round" d="M26 14L14 26M14 14L26 26"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                </div>
                            </div>
                        </div>
                        <div className="corp-faq-wrap">
                            <div className="corp-faq-question">
                                <span>기업 서비스 가입, 이용 절차가 궁금해요.</span>
                                <div className="corp-faq-close-button-wrap">
                                <svg width="40" height="40" viewBox="0 0 40 40">
                                    <g fill="none" fill-rule="evenodd">
                                        <g stroke="#36f" stroke-width="1.5">
                                            <g transform="translate(-1210 -1414) translate(0 1197) translate(190 217) translate(1020)">
                                                <circle cx="20" cy="20" r="19.25"></circle>
                                                <path stroke-linecap="round" d="M26 14L14 26M14 14L26 26"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                </div>
                            </div>
                        </div>
                        <div className="corp-faq-wrap">
                            <div className="corp-faq-question">
                                <span>기업 서비스 가입, 이용 절차가 궁금해요.</span>
                                <div className="corp-faq-close-button-wrap">
                                <svg width="40" height="40" viewBox="0 0 40 40">
                                    <g fill="none" fill-rule="evenodd">
                                        <g stroke="#36f" stroke-width="1.5">
                                            <g transform="translate(-1210 -1414) translate(0 1197) translate(190 217) translate(1020)">
                                                <circle cx="20" cy="20" r="19.25"></circle>
                                                <path stroke-linecap="round" d="M26 14L14 26M14 14L26 26"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                </div>
                            </div>
                        </div>
                        <div className="button-group">
                            <a href="" className="corp-linked-button">
                                자세히 문의하기
                            </a>
                        </div>
                    </div>

                </section>
                <div>
                    <section className="corp-guide-wrap">
                        <div>
                            <div className="corp-guide">
                                <p className="corp-guide-title">
                                    <span>
                                        우리 기업에 딱 맞는 인재,
                                        <br/>
                                        하이어잇에서 만나보세요.
                                    </span>
                                </p>
                                <div>
                                    <a className="corp-guide-service-button corp-common-style-button" href="">
                                        서비스 소개서
                                    </a>
                                    <button className='corp-guide-start-button'>
                                        바로 시작하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Dashboard;