import React,{useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import RecommendCorp from './RecommendCorp';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Region from './Region';
import '../App.css';
import TechTeg from './TechTeg';
import CategoryDetail from './CategoryDetail';
import { Button } from '@mui/material';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Development from './Development';
import { click } from '@testing-library/user-event/dist/click';
import axios from 'axios';
import { useEffect } from 'react';
import './Search.css';



const Search = (props) => {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenTeg, setModalOpenTeg] = useState(false);
    const [newArrTeg, setNewArrTeg]= useState([]);
    const [showTeg,setShowTeg]= useState(['']);
    const [region,setRegion]=useState([]);
    const [experi,setExperi]=useState(10);
    const [dto,setDto]=useState([]);
    const [sort,setSort]=useState(0);
    const {currentPage}=useParams();
    const navi=useNavigate();
    const [preferred_tech, setPreferred_tech] = useState('');

    
    let searchlistUrl=process.env.REACT_APP_SPRING_URL+"list?currentPage="+currentPage+"&sort="+sort;
    //https://localhost:9000/list?currentPage=1&sort=0
    let searchUrl=process.env.REACT_APP_SPRING_URL+"search";

    
    //모달
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const openModalTechTeg = () => {
        setModalOpenTeg(true);
    };
    const closeModalTechTeg = () => {
        setModalOpenTeg(false);
    };

    //로그인 ok
    let loginok=localStorage.loginok;
    let id=localStorage.myid;

    const initFunc=()=>{
        if(loginok==null){
            alert("먼저 로그인 후 글을 작성해주세요");
            //navi("/login"); //login으로 가기

        }
    }

    //지역
    const totregion =()=>{
        let totalRegion='';
        for (let index = 0; index < region.length; index++) {
            totalRegion += region[index].prov+' '+region[index].dist;
            if (index+1==region.length) {
                totalRegion += "";
                break;
            }
            totalRegion += ',';
            
        }
        return totalRegion;
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };


    
    const searchList=()=>{
        console.log("showteg",showTeg);
        console.log("totregion",totregion());
        console.log("experi",experi);
        let tegtech = newArrTeg.join();
        console.log("tegtech",tegtech);
        axios.post(searchUrl,{job_type:showTeg, com_addr:totregion(), experience:experi, preferred_tech:tegtech,currentPage:currentPage}).then(res=>{
            // navi("/search");
            console.log(res.data);
            setDto(res.data);
            
        })
    }

    const list =()=>{
        axios.get(searchlistUrl)
        .then(res=>{
            console.log(res.data);
            setDto(res.data);
            
        
        }) 
    }


    //경력
    function valuetext(value) {
        setExperi(value);
        console.log(experi);
        return `${value}`;
    }


    useEffect(()=>{
        initFunc();
    },[]);

    useEffect(()=>{
        list();
    },[sort]);

    useEffect(()=>{
        searchList();
    },[currentPage,experi]);  

    return (
        <div className='container'>
            <br/>
                <div className='cla1 btn-wrap2 row'>
                    <div className='cla2 col-lg-1'>
                        <b className='developt' >개발</b></div>
                        {/* 개발 */}
                        {/* <b style={{grid:''}}>개발</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    <div className='col-lg-11'>
                    <CategoryDetail setShowTeg={setShowTeg} showTeg={showTeg} searchList={searchList}dto={dto} /></div>
                </div>
                <br/>
                    <div className='nationst btn-wrap'>
                        {/* 지역 */}
                    <React.Fragment>
                        <button type="button" className='ico col-lg-6 badge bg-light text-dark position-relative' onClick={openModal}
                        >
                            지역
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {region.length}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    
                        <Region open={modalOpen} close={closeModal} header="지역" region={region} dto={dto} setRegion={setRegion} searchList={searchList} >
                        </Region>
                    </React.Fragment>
                        {/* 경력 */}
                    <PopupState variant="popper" popupId="demo-popup-popper">
                        {(popupState) => (
                            <div>
                                <button type="button" className='ico col-lg-6 badge bg-light text-dark position-relative'
                                variant="outlined" {...bindToggle(popupState)} handleClick={handleClick}>
                                    경력
                                </button>
                                <Popper {...bindPopper(popupState)} transition>
                                    {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Paper>
                                        <Typography sx={{ p: 2 }}>
                                            
                                            <Box cla sx={{ width: 400 ,height:125}}>
                                                경력을 선택하세요.
                                            <Slider className='slider'
                                                aria-label="Temperature"
                                                defaultValue={0}
                                                getAriaValueText={valuetext}
                                                valueLabelDisplay="auto"
                                                step={1}
                                                marks
                                                min={0}
                                                max={10}
                                            />
                                            <hr/>
                                            <Button className='ok' variant="contained" {...bindToggle(popupState)}  >선택완료</Button>
                                            </Box>
                                        </Typography>
                                        
                                        </Paper>
                                    </Fade>
                                    )}
                                </Popper>
                            </div>
                        )}
                        </PopupState>
                    
                    
                        {/* 기술스택 */}
                
                            <React.Fragment>
                    
                                <button  variant="outlined" className='col-lg-6 badge bg-light text-dark position-relative' onClick={openModalTechTeg}
                                style={{height:'48px',width:'150px',fontSize:'1rem'}}
                                >기술스택
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {newArrTeg.length}
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                
                                <TechTeg open2={modalOpenTeg} close2={closeModalTechTeg} header2="기술" newArrTeg={newArrTeg} setNewArrTeg={setNewArrTeg} searchList={searchList}>
                                </TechTeg>
                            </React.Fragment>
                </div>
                            <br/>
                            <h4>적극채용중인 회사</h4>
                            <RecommendCorp dto={dto}/>
                            <Development dto={dto} setSort={setSort}/>
            
        </div>
    );
};

    
export default Search;