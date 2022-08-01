import React from 'react';

const TotalYear = (props) => {

    
    let years = props.year;
    let arr = years.split(",");
    let result = parseInt((Number(arr[0])+Number(arr[1]))/12);
    console.log("result",result);
    
    return (
        <>
        {result}
        </>
    );
};

export default TotalYear;