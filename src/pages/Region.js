import React, { useEffect, useState } from 'react';
import './Region.css';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { FixedSizeList } from 'react-window';
import Button from '@mui/material/Button';




//최대 n개 가능 
//버튼 누르면 db 저장

        const province = ['강원','경기','경남','경북','광주','대구','대전','부산','서울','울산','인천','전남','전북','제주','충남','충북'];
        const gangwon = ["강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군", "전체"];
        const gyeonggi = ["고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군", "전체"];
        const gyeongsangnam = ["거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군", "전체"];
        const gyeongsangbuk = ["경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군", "전체"];
        const gwangju = ["광산구", "남구", "동구", "북구", "서구", "전체"];
        const daegu = ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군", "전체"];
        const daejeon = ["대덕구", "동구", "서구", "유성구", "중구", "전체"];
        const busan = ["강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군", "전체"];
        const seoul = ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구", "전체"];
        const ulsan = ["남구","동구","북구","중구","울주군", "전체"];
        const incheon = ["계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군", "전체"];
        const jeonnam = ["광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군", "전체"];
        const jeonbuk = ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군", "전체"];
        const jeju = ["서귀포시","제주시","남제주군","북제주군", "전체"];
        const chungbuk = ["제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군", "전체"];
        const chungnam = ["천안시","아산시","서산시","당진시","논산시","공주시","홍성군","보령시","예산군","부여군","태안군","서천군"
                            ,"금산군","계룡시","청양군", "전체"];
        const district = [gangwon,gyeonggi,gyeongsangnam,gyeongsangbuk,gwangju,daegu,daejeon,busan,seoul,ulsan,incheon,jeonnam,jeonbuk,jeju,chungbuk,chungnam];


const Region = (props) => {
    
    const [nation,setNation]=useState([]);
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;
    const [newArr, setNewArr]= useState('');

    
        function renderRow(props) {
            const { index, style } = props;
            
                return (
                <ListItem style={style} key={index} component="div" disablePadding>
                    <ListItemButton>
                    <ListItemText primary={`${province[index]}`} onClick={()=>{showMenu(index);}}/>
                    </ListItemButton>
                </ListItem>
            );
        }

        function renderRow2(props) {
            const { index, style } = props;
                
                return (
                <ListItem style={style} key={index} component="div" disablePadding>
                    <ListItemButton>
                    <ListItemText primary={`${nation[index]}`} onClick={()=>{showMenu2(index)}}/>
                    </ListItemButton>
                </ListItem>
                );
            }
    
        const showMenu = (idx) => {
            setNation(district[idx]);
            setNewArr(province[idx]);
            console.log(district[idx]);
            console.log(province[idx]);
        }

        const showMenu2 = (idx) => {
            if(props.region.length >4){
                alert("5개까지 선택가능합니다");
                return;
            } 
            for (let index = 0; index < props.region.length; index++) {
                if (props.region[index].prov===newArr &&
                    props.region[index].dist===nation[idx]) {
                    return;
                }
            }
            props.setRegion(props.region.concat({
                prov : newArr,
                dist : nation[idx]
            }));
            console.log(props.region);
        }

        
        //더블클릭시  삭제 이벤트
        const dataRemove = (index) =>{
            //방법
            props.setRegion(props.region.filter((item,i)=>i!==index)); //index 번지만 걸러냄
        }

        useEffect(()=>{
            props.searchList();
        
        },[props.region]);   

    return (
        <div className={open ? 'openModal modal' : 'modal'}  >
            {open ? (
                <section>
                <header>
                    {header}
                    <button className="close" onClick={close}>
                    &times;
                    </button>
                </header>
                <main style={{textAlign:'center'}}>
                    <span className='korea'>
                        <input className='korea' type='text' readOnly='readOnly' value='한국'/>
                    </span>{/* 시/도 */}<br></br>
                <div className='row'>
                    <div className='col-lg-6' ><br/>
                        <Box
                            sx={{ width: '100%', height: 250, maxWidth: 360, bgcolor: 'background.paper' }}
                            >
                        <FixedSizeList
                            height={200}
                            width={200}
                            itemSize={46}
                            itemCount={province.length}
                            overscanCount={5}
                        >
                            {renderRow}
                        </FixedSizeList><br/>
                        <span className='message'>지역을 선택하면 상세지역을 알 수 있습니다.</span>
                        </Box>
                        </div>
                    <div className='col-lg-6' ><br/>
                    <Box
                            sx={{ width: '100%', height: 250, maxWidth: 360, bgcolor: 'background.paper' }}
                            >
                        <FixedSizeList
                            height={200}
                            width={200}
                            itemSize={46}
                            itemCount={nation.length}
                            overscanCount={5}
                        >
                            {renderRow2}
                        </FixedSizeList>
                        </Box>
                        </div>
                        </div>
                        <div className='inputs'>
                        <ul>
                            {/* 배열.map()
                            배열.map(()=>{})
                            배열.map((데이터, 인덱스)=>{}) - 하나만 쓰면 데이터만 
                            배열.map((data, idx)=>(<></>))*/}
                        {props.region &&
                        props.region.map((row,idx)=> (
                        <Button className='regionbtn' type='button' variant="outlined" key={idx}
                        style={{textAlign:'center', borderRadius:'20px', borderbottom:'10px'}}
                        onDoubleClick={()=>dataRemove(idx)}>{row.prov + row.dist}</Button>
                        
                        ))
                        }
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </ul><br/>
                        <p className='tot5'>* 최대 5개까지 선택가능 합니다. </p>
                        
                        </div>
                    
                    </main>

                <footer>
                    
                    <button className="close" onClick={close}>
                    확인
                    </button>
                </footer>
                </section>
            ) : null}
            
            </div>
            
            
    );
};


    




export default Region;