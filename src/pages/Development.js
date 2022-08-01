import React,{useState,useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Development2 from './Development2';
import axios from "axios";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const [data,setData]=useState({});
    
        return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
        );
    }
    
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    
    
const Development = ({dto, setSort}) => {
    const [value, setValue] = React.useState(0);
    const [data,setData]=useState({});
    const navi=useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
        setSort(newValue);

        };
        

    return (
        <div>
            
            <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="인기순" {...a11yProps(0)} onClick={()=>{navi("/search/1")}}/>
                    <Tab label="최신순" {...a11yProps(1)} onClick={()=>{navi("/search/1")}}
                    
                    />
                </Tabs>
            </Box>
                <TabPanel value={value} index={0} >
                    <Development2 item={1} dto={dto} setSort={setSort}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Development2 item={2} dto={dto} setSort={setSort}/>
                </TabPanel>
            </Box>
        </div>
    );
};

export default Development;