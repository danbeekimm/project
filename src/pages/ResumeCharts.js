import React, { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import { height } from '@mui/system';
import axios from 'axios';
import './ResumeCharts.css';
import img from '../image/doublequotationmark1.png';
import img2 from '../image/doublequotationmarks2.png';


let data = [];
let dotdot = [];
const ResumeCharts = () => {
    let chartUrl=process.env.REACT_APP_SPRING_URL+"chart";
    const [dto,setDto]=useState([]);
    const [tot,setTot]=useState('');
    let total=0;




    const chart =()=>{

        axios.get(chartUrl)
        .then(res=>{
            data = [];
            dotdot = [];
            total = 0;
            for (let index = 0; index < res.data.length; index++) {
            let JobType_Chart = res.data[index].split(":");
            
                total += Number(JobType_Chart[1]);
                console.log("total",total);
                // console.log("JobType_Chart",JobType_Chart);
                // console.log("res.data",res.data);
            data = data.concat({
                "id":JobType_Chart[0],
                "label":JobType_Chart[0],
                "value": JobType_Chart[1],
                "color": "hsl(1269, 70%, 50%)"
                })
                if(index%6===0){
                    dotdot = dotdot.concat({
                        
                            match: {
                                id: JobType_Chart[0],
                            },
                            id: 'lines'
                        
                        
                        })
            }
            }
            setDto(data);
            setTot(total);
        
        }); console.log("JobType_Chart"+data);
    }




    useEffect(()=>{
        chart();
    },[]); 


    return (
        <div style={{height:'600px',marginTop:'120px',marginBottom:'30px', border:'2px solid #EEEEEE',paddingBottom:'80px'}}>
            <div className='cat'>
            {/* <img className='imageResume' src={img} alt=''/>
            <h3 className='corpOpenResume'>OPEN 이력서를</h3><br/>
            <h3 className='corpOpenResume2' >열람해보세요.</h3>
            <img className='imageResume2' src={img2} alt=''/> */}
            <img className='imageResume' src={img} alt=''/>
            <h3 className='corpOpenResume'>총 {tot}명의 지원자가</h3><br/>
            <h3 className='corpOpenResume2' >구직 중입니다.</h3>
            <img className='imageResume2' src={img2} alt=''/>
            </div>
            <span className='openresume'>OPEN 이력서 페이지입니다. 이력서를 열람해주세요.</span>
    <ResponsivePie 
        
        data={data}
        margin={{ top: 20, right: -150, bottom:140, left: 350 }}
        startAngle={-116}
        innerRadius={0.5}
        // cornerRadius={2}
        activeOuterRadiusOffset={8}
        // colors={{ scheme: 'blue_purple' }}
        colors={{ scheme: 'pastel1' }}
        // colors={{ scheme: 'pastel2' }}
        // colors={{ scheme: 'set3' }}
        borderWidth={2}
        borderColor="rgba(0, 0, 0, 0)"
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLinkLabelsStraightLength={35}
        arcLinkLabelsTextOffset={20}
        // arcLinkLabelsDiagonalLength={36}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        // arcLinkLabelsDiagonalLength={15}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(132, 56, 68, 0.55)',
                size: 4,
                padding: 1,
                stagger: true
                
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={dotdot}

    />
        </div>
    );
};

export default ResumeCharts;