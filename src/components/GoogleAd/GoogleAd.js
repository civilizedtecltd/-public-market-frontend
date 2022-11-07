import {useEffect} from "react";

const GoogleAd = (props) => {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])
  return <>

      <ins className="adsbygoogle"
           style={{display:"inline-block", width: props.with+"px", height:props.height+"px"}}
           data-ad-client="ca-pub-5267492905924396"
           data-ad-slot="1234567890"></ins>
  </>
}

export default GoogleAd;