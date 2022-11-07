import React from 'react';
import { Link } from 'react-router-dom';
import { languageCheck } from '../../helpers/Helpers';

const MyApplyJobTables = ({data, offset, index}) => { 
    const serial = parseInt(offset+1)+parseInt(index);
    return ( 
        <>
          <tr>
            <td>{serial}</td> 
            <td>{data.job_title}</td>
            <td>{data?.expected_salary===null?'not found':<p>{data.expected_salary}</p>}</td>  
            <td>
              {data?.photo===null?'not found':<img src={data?.photo} alt="" width="50px" height="50px" />  } 
            </td>   
            <td>
            {data?.resume===null?'not found':<a href={data?.resume} style={{textDecoration: "underline"}} >
            {languageCheck() === 'bn' ? "দেখুন" : "View"}</a>} 
            </td>
            <td>
            {data?.cover_letter===null?'not found':<a href={data?.cover_letter} style={{textDecoration: "underline"}}>
            {languageCheck() === 'bn' ? "দেখুন" : "View"}</a>} 
            </td>
          </tr>
        </>
    );
};

export default MyApplyJobTables;