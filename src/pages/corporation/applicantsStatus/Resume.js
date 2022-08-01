import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';


const Resume = ({data, checkedItems, checkedItemHandler}) => {
    const [isChecked, setIsChecked] = useState(null);

    const onCheck = ({target}) => {
        checkedItemHandler(target.value, target.checked)
        setIsChecked(target.checked)
    }

    useEffect(() => {
        if(checkedItems.includes(data)){
            setIsChecked(true)
        }else{
            setIsChecked(false)
        }
    },[checkedItems])

    return (
        <>
            <Checkbox 
                name='applicantResume'
                checked={isChecked}
                value={data}
                onChange={e=>onCheck(e)}/>
        </>
    );
};

export default Resume;