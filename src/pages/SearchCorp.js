import React,{useState,useEffect} from 'react';
import { useNavigate ,useParams} from "react-router-dom";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import './SearchCorp.css';
import CategoryDetail from './CategoryDetail';
import { Button } from '@mui/material';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Development from './Development';
import { click } from '@testing-library/user-event/dist/click';
import ResumeSearch from './ResumeSearch';
import axios from 'axios';
import Region from './Region';
import TechTeg from './TechTeg';
import ResumeCharts from './ResumeCharts';
import Development2 from './Development2';
import CategoryDetail2 from './CategoryDetail2';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




//경력
function valuetext(value) {
    return `${value}`;
    }


const SearchCorp = (props) => {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenTeg, setModalOpenTeg] = useState(false);
    const [newArrTeg, setNewArrTeg]= useState([]);
    const [region,setRegion]=useState([]);
    const [showTeg,setShowTeg]= useState(['']);
    const [total_year,setTotal_year]=useState(0);
    const [dto,setDto]=useState([]);
    const {currentPage}=useParams();

    //url 선언

    let pagelistUrl=process.env.REACT_APP_SPRING_URL+"pagelist";
    let resumelistUrl=process.env.REACT_APP_SPRING_URL+"resumelist?currentPage="+currentPage;

    const navi=useNavigate();

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
        console.log("total_year",total_year);
        let tegtech = newArrTeg.join();
        console.log("tegtech",tegtech);
        axios.post(pagelistUrl,{job_type:showTeg, user_addr:totregion(), total_year:total_year, tech_tags:tegtech})
        .then(res=>{
            // navi("/search");
            // console.log("Res"+res.data.list.total_year);
            console.log("/search",res.data);
            setDto(res.data);
            
        })
    }
    const list =()=>{
        axios.get(resumelistUrl)
        .then(res=>{
            console.log(res.data);
            setDto(res.data);
        })
    }
    
    useEffect(()=>{
        list();

    },[currentPage]);
    

    useEffect(()=>{
        searchList();
    
    },[total_year]);  

    //경력
    function valuetext(value) {
        setTotal_year(value);
        return `${value}`;
    }

    // useEffect(()=>{
    //     searchList();
    // },[showTeg,total_year,newArrTeg,totregion,currentPage]);

    
    return (
        <div className='container' style={{fontFamily:'S-CoreDream-5Medium'}}>
            <br/>
                <ResumeCharts/><br/>
                <div className='btn-wrap2 row'>
                    <div className='col-lg-1'  ><h4 style={{textAlign:'center',marginTop:'10px'}}>개발</h4></div>
                {/* 개발 */}
                {/* <b style={{grid:''}}>개발</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                <div className='col-lg-11'>
                <CategoryDetail2 setShowTeg={setShowTeg} showTeg={showTeg} searchList={searchList}dto={dto} /></div>
                </div>
                <br/>
                <div className='btn-wrap' style={{display:'flex',justifyContent:'space-between',width:'470px'}}>
                {/* 지역 */}
                <React.Fragment>
                <button variant="outlined" size="large" type="button" className='regionbtn' onClick={openModal}
                >
                    지역<ArrowDropDownIcon/>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {region.length}
                        
                    </span>
                </button>
                
                <Region open={modalOpen} close={closeModal} header="지역" region={region} setRegion={setRegion} searchList={searchList}>
                
                </Region>
                </React.Fragment>
                {/* 경력 */}
                <PopupState variant="popper" popupId="demo-popup-popper">
                    {(popupState) => (
                        <div>
                            
                        <button variant="outlined" size="large" type="button" className='experiencebtn' {...bindToggle(popupState)}
                        handleClick={handleClick} >
                            경력<ArrowDropDownIcon/>
                        </button>
                        <Popper {...bindPopper(popupState)} transition>
                            {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                <Typography sx={{ p: 2 }}>
                                    
                                    <Box sx={{ width: 400 ,height:125}}>
                                    경력을 선택하세요.
                                    <Slider
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
                    
                    <button variant="outlined" size="large"className='techbtn' onClick={openModalTechTeg}
                    
                    >기술스택<ArrowDropDownIcon/>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {newArrTeg.length}
                    
                    </span>
                    </button>
                
                    <TechTeg open2={modalOpenTeg} close2={closeModalTechTeg} header2="기술" newArrTeg={newArrTeg} setNewArrTeg={setNewArrTeg}searchList={searchList}>
                
                    </TechTeg>
                    </React.Fragment>
            </div>
                <br/>
            <div>
            <ResumeSearch dto={dto}/>
            </div>
        </div>
    );
};

    
export default SearchCorp;