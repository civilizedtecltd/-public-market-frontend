import React from 'react';
import { Link } from 'react-router-dom';
import {capitalizeFirst, stringLimitShow, titlecConvertToSlug} from "../../../helpers/Helpers"

const MyFilterCVTables = ({data, offset, index}) => {
    const serial = parseInt(offset+1)+parseInt(index);
    return (
        index%2 === 0 ?
        <>
            <tr>
                <td>{serial}</td>
                <td>
                    <Link
                   to={"/job/details/"+titlecConvertToSlug(data?.job_title)+"/"+data?.id+"/"} >{capitalizeFirst(stringLimitShow(data.job_title, 10))}
                </Link>
                </td>
                <td>5346</td>
                <td>
                    {data?.photo===null?'not found':<img src={data?.photo} alt="" width="50px" height="50px" />  }
                </td>
                <td>
                    {data?.resume===null?'not found':<a href={data?.resume} style={{textDecoration: "underline"}} >View</a>}
                </td>
                <td>
                    {data?.cover_letter===null?'not found':<a href={data?.cover_letter} style={{textDecoration: "underline"}}>View</a>}
                </td>
            </tr>
        </>
    :
    <>
        <tr>
            <td>{serial}</td>
            <td></td>
            <td><Link className="no-border customYellowBtn" to="/my/CVBank/CVList">Click To View This Resume</Link></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </>
    );
};

export default MyFilterCVTables;