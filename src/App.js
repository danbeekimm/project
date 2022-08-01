import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import { useState } from 'react';
import { LoginContext } from './contexts/LoginContext';
import SignUp from './pages/SignUp';
import Main from './components/Main';
import HeaderCorp from './components/HeaderCorp';
import FooterCorp from './components/FooterCorp';
import Dashboard from './pages/corporation/Dashboard/Dashboard';
import ApplicantManagement from './pages/corporation/applicantManagement/ApplicantManagement';
import SearchResult from './pages/SearchResult';
import ResumeDetail from './pages/resume/ResumeDetail';
import JobPostingInput from './pages/job_posting/JobPostingInput';
import JobPostingUpdate from './pages/job_posting/JobPostingUpdate';
import JobPostingDetail from './pages/job_posting/JobPostingDetail';
import ResumeSave from './pages/resume/ResumeSave';
import ResumeUpdate from './pages/resume/ResumeUpdate';
import ResumeInput from './pages/resume/ResumeInput';
import ResumeNewSave from './pages/resume/ResumeNewSave';
import './App.css';
import Community from './pages/Community';
import Comm_Total from './pages/Comm_Total';
import Comm_MyPage from './pages/Comm_MyPage';
import BoardForm from './pages/BoardForm';
import Board from './pages/Board';
import BoardDetail from './pages/BoardDetail';
import CommunityHeader from './components/CommunityHeader';
import CommunityFooter from './components/CommunityFooter';
import { CommunitySaveContext } from './contexts/CommunitySaveContext';
import BoardUpdateForm from './pages/BoardUpdateForm';
import Memo from './pages/Memo';
import CommCareer from './pages/CommCareer';
import CommChwieob from './pages/CommChwieob';
import CommIjig from './pages/CommIjig';
import CommJabdam from './pages/CommJabdam';
import CommToesa from './pages/CommToesa';
import CommQandA from './pages/CommQandA';
import Search from './pages/Search';
import SearchCorp from './pages/SearchCorp';

function App() {
  const [login, setLogin] = useState({
    ok: 'no',
    id: '',
    role: '',
    token: ''
  });
  const [indivLogin, setIndivLogin] = useState(true);
  const [corpLogin, setCorpLogin] = useState(false);
  const [category, setCategory]=useState([]);

  return (
      <LoginContext.Provider value={{login, setLogin, indivLogin,setIndivLogin,corpLogin}}>
        <div className="headder">
          <Routes>
            <Route path='/corp/*' element={<HeaderCorp />} />
            <Route path='*' element={<Header />} />
            <Route path='/login' element={<></>}/>
            <Route path='/signup' element={<></>}/>
            <Route path='/board/*' element={<></>}/>
            <Route path='/community' element={<></>}/>
            <Route path="/comm_total" element={<></>}/>
            <Route path="/community/comm_mypage" element={<></>}/>
          </Routes>
        </div>
        <div className='communityheader'>
          <Routes>
            <Route path='/board/*' element={<CommunityHeader/>}/>
            <Route path='/community' element={<CommunityHeader/>}/>
            <Route path="/comm_total" element={<CommunityHeader/>}/>
            <Route path="/community/comm_mypage" element={<CommunityHeader/>}/>
            <Route path='*' element={<></>}/>
          </Routes>
        </div>
    <div className="container base">
        <div className="body">
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/corp/welcome' element={<Dashboard />} />
            <Route path='/corp/applicantManagement' element={<ApplicantManagement/>} />
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='/search' element={<SearchResult/>} />
            <Route path='/search/:currentPage' element={<Search/>}/>
            <Route path='/pagelist/:currentPage' element={<SearchCorp/>}/>
            <Route path='*' element={<></>}/>

            {/* resume */}
            <Route path='/resume/input/:user_id' element={<ResumeInput />} />
            <Route path='/resume/save/:user_id/:resume_idx' element={<ResumeSave />} />
            <Route path='/resume/new/save/:user_id/:resume_idx' element={<ResumeNewSave />} />
            <Route path='/resume/detail/:user_id/:resume_idx' element={<ResumeDetail />} />
            <Route path='/resume/update/:user_id/:resume_idx' element={<ResumeUpdate />} />

            {/* job_posting */}
            <Route path='/job_posting/input/:user_id' element={<JobPostingInput />} />
            <Route path='/job_posting/update/:user_id/:num' element={<JobPostingUpdate />} />
            <Route path='/job_posting/detail/:corp_id/:num' element={<JobPostingDetail />} /> {/* user_id일때와 corp_id일때 보여지는 버튼이 다름 */}
          </Routes>
          <CommunitySaveContext.Provider value = {{category, setCategory}}>
            <Routes>
              <Route path='/community' element={<Community/>}/>
              <Route path="/comm_total" element={<Comm_Total/>}/>
              <Route path="/community/comm_mypage" element={<Comm_MyPage/>}/>
              {/* Board */}
              <Route path='/board' element={<Board/>}/>
              <Route path="/board/list/:currentPage" element={<Board/>}/>
              <Route path="/board/category" element={<Memo/>}/>
              <Route path="/board/form" element={<BoardForm/>}/>
              <Route path="/board/detail/:board_id" element={<BoardDetail/>}/>
              <Route path="/board/update/:board_id" element={<BoardUpdateForm/>}/>
              <Route path="/board/career" element={<CommCareer/>}/>
              <Route path="/board/chwieob" element={<CommChwieob/>}/>
              <Route path="/board/ijig" element={<CommIjig/>}/>
              <Route path="/board/jabdam" element={<CommJabdam/>}/>
              <Route path="/board/toesa" element={<CommToesa/>}/>
              <Route path="/board/qanda" element={<CommQandA/>}/>
              <Route path='*' element={<></>}/>
              {/* Board
              <Route path="/comm_total/list/:currentPage" element={<Comm_Total/>}/>
              <Route path="/comm_total/form" element={<BoardForm/>}/>
              <Route path="/comm_total/detail/:num/:currentPage" element={<BoardDetail/>}/> */}
            </Routes>
          </CommunitySaveContext.Provider>
        </div>
    </div>
        <div className="footerr">
          <Routes>
            <Route path='/corp/*' element={<FooterCorp/>}/>
            <Route path='*' element={<Footer/>}/>
            <Route path='/login' element={<></>}/>
            <Route path='/signup' element={<></>}/>
            <Route path='/board/*' element={<></>}/>
            <Route path='/community' element={<></>}/>
            <Route path="/comm_total" element={<></>}/>
            <Route path="/community/comm_mypage" element={<></>}/>
          </Routes>
        </div>
        <div className="CommunityFooter">
          <Routes>
            <Route path='/board/*'element={<CommunityFooter/>}/>
            <Route path='/community' element={<CommunityFooter/>}/>
            <Route path="/comm_total" element={<CommunityFooter/>}/>
            <Route path="/community/comm_mypage" element={<CommunityFooter/>}/>
            <Route path='*' element={<></>}/>
          </Routes>
        </div>
      </LoginContext.Provider>
  );
}

export default App;