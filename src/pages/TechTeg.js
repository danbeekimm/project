import React, {  useEffect, useState } from 'react';
import './TechTeg.css';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

const techTegs = ['Java','Spring Boot','Python','Spring Framework',
'AWS','Git','iOS','HTML','JavaScript','MySQL','Linux','Android',
'Kotlin','Swift','C','PHP','Docker','React','Github','JPA','C++'];

const TechTeg = (props) => {

    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open2, close2, header2 } = props;
    
    const [clicked, setClicked] = useState(new Array(techTegs.length).fill(true));
    const [search,setSearch]=useState("");
    
        const showMenu = (data, idx) => {
            if (clicked[idx]===true) {
                if(props.newArrTeg.length >4){
                    alert("5개까지 선택가능합니다");
                    return;
                } 
                props.setNewArrTeg(props.newArrTeg.concat(
                    techTegs[idx]
                ));
                
                setClicked({...clicked,[idx]: !clicked[idx]});
            }else{
                setClicked({...clicked,[idx]: !clicked[idx]}); //...전체중 [idx]만 바꾼다.
                //filter: 건더기는 남기고 국물은 버린다. 비누명언.
                props.setNewArrTeg(props.newArrTeg.filter((value,i)=>value !== data));
            }
            
        }

        const addbtn = (idx)=>{
            if(props.newArrTeg.length >4){
                alert("5개까지 선택가능합니다");
                return;
            } 
            props.setNewArrTeg(props.newArrTeg.concat(search));
            console.log(techTegs);
        }
        
        //더블클릭시  삭제 이벤트
        const dataRemoveTeg = (data, index) =>{
            const techIndex=techTegs.indexOf(data); 
            //배열.indexOf(값) : 배열에서 값이처음나오는 index
            console.log(techIndex);
            //방법
            props.setNewArrTeg(props.newArrTeg.filter((item,i)=>i!==index)); //index 번지만 걸러냄
            setClicked({...clicked, [techIndex]: !clicked[techIndex]});
        }
        
        //입력key
        const txtEnter=(e)=>{
            if (e.key==='Enter') {
                for (let index = 0; index < props.newArrTeg.length; index++) {
                    if (props.newArrTeg[index]===e.target.value) {

                    setSearch('');
                    e.target.value='';
                        return;
                    }
                }
                addbtn();
                setSearch('');
                e.target.value='';
            }
        }

        //입력 change이벤트
        const txtInput=(e)=>{
            
            setSearch(e.target.value);
        }

        useEffect(()=>{
            props.searchList();
        
        },[props.newArrTeg]);   
        
    return (
        <div className={open2 ? 'openModal modal' : 'modal'}  >
            {open2 ? (
                <section>
                <header>
                    {header2}
                    <button className="close" onClick={close2}>
                    &times;
                    </button>
                </header>
                <main style={{textAlign:'center'}}>
                    <span className='korea'>
                        <input type='text' className='search' placeholder='검색어를 입력하세요' maxLength={15}
                        onChange={txtInput} onKeyUp={txtEnter} value={search} 
                        />
                        <SearchIcon
                        sx={{position:'absolute',
                        top:"2px",
                        left:"10px"}}/><KeyboardVoiceIcon sx={{position:'absolute',
                        top:"2px",
                        right:"10px"}}/>
                    </span>
                    
                    <div className='col-lg-6' ><br/>
                        <Box
                            sx={{width:400, height: 250, bgcolor: 'background.paper' }}
                            >
                        {techTegs &&
                        techTegs
                            
                        .map((data, idx)=> (
                        <Button className='techTegBtn' type='button' variant="outlined" key={idx}
                        style={{textAlign:'center', borderRadius:'20px', borderbottom:'10px'}}
                        /* 삼항연산자
                            {() ? () : ()}
                            {(조건 혹은 true/false) ? (조건이 맞을때/true는 {}자체가 이 값이 됨) : (조건이 안맞을때/false는 {}자체가 이 값이 됨) }
                        */
                        onClick={()=>showMenu(data, idx)}>{data}
                            { clicked[idx] ? <AddIcon style={{fontSize:'1rem'}}/>:<CheckIcon style={{fontSize:'1rem'}}/>}
                        </Button>
                        
                        ))
                        }
                    
                            
                        <br/>
                        <br/>
                        
                        </Box>
                        </div>
                    <br></br><br/>
                        
                        <span className='coment'>* 기술스택을입력하세요</span>
                        <br/>
                        <div className='inputst'>
                        <ul>
                        {props.newArrTeg &&
                        props.newArrTeg.map((data,idx)=> (
                        <Button className='techTegBtn' type='button' variant="outlined" key={idx}
                        
                        onDoubleClick={()=>dataRemoveTeg(data, idx)}>{data}</Button>
                        ))
                        }
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </ul>
                        <br/>
                        </div>
                    
                    </main>
                <footer>
                    
                    <button className="close2" onClick={close2}>
                    확인
                    </button>
                </footer>
                </section>
            ) : null}
            
            </div>
    );
};

export default TechTeg;