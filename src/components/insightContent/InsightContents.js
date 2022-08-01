import React, { useContext } from 'react';
import * as rrd from 'react-router-dom'
import InsightContent from './InsightContent';

const InsightContents = () => {
    let [searchParams, setSearchParams] = rrd.useSearchParams();
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            <InsightContent tag={searchParams.get('tag')}/>
        </div>
    );
};

export default InsightContents;