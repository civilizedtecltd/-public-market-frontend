import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import { languageCheck } from '../../helpers/Helpers';

const TermsConditions = () => {
    return (
        <> 
        <Header /> 
         <section className="location_area  pt-40 pb-80"  >
                <div className="container pt-20 section_title">
                     
                    <h3 className="text-center mt-40 banner-ad-title"> 
                      {languageCheck() === 'bn' ?  
                        "শর্তাবলী" :  
                        "Terms & Conditions"}  
                    </h3>


                    <div className="mt-40">
                        <div className="post_form mt-50">
                             
                            <div className="row justify-content-center ">
                                <p className='mt-2'>
                                {languageCheck() === 'bn' ?  
                                "publicmarket.com.bd হল পিএম এক্সপার্ট লিমিটেড দ্বারা প্রদত্ত একটি পরিষেবা (নিম্নলিখিত নিয়ম ও শর্তাবলী সহ আপনার ইচ্ছা সাপেক্ষে)। আমাদের ওয়েবসাইট এবং আমাদের পরিষেবাগুলি ব্যবহার করার আগে অনুগ্রহ করে নিয়ম ও শর্তাবলীর সমস্ত বিষয়বস্তু পড়ুন৷" :  
                                "publicmarket.com.bd is a service provided by PM Expert Limited (subject to your willingness with the Terms and Conditions are as follows). Please read all the contents on Terms and Conditions before using our Website and our services."} 
                                </p>
                            </div>
                        </div> 



                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "ভূমিকা" :  
                                    "Introduction"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "Publicmarket.com.bd বাংলাদেশের একটি অনলাইন মার্কেটপ্লেস। এটি সবচেয়ে বড় ভার্চুয়াল শ্রেণীবদ্ধ বিজ্ঞাপন প্ল্যাটফর্ম। ক্রেতা এবং বিক্রেতা নতুন বা সেকেন্ড-হ্যান্ড আইটেম বিক্রি বা কিনতে চান। বিজ্ঞাপনদাতা এবং ব্যবহারকারীরা সমস্ত প্রযোজ্য আইন অনুসারে publicmarket.com.bd-এ অন্তর্ভুক্তির জন্য আপলোড করা বিজ্ঞাপন সামগ্রী, পাঠ্য, চিত্র, গ্রাফিক্স, ভিডিও ('সামগ্রী') এর জন্য দায়ী থাকবে। Publicmarket.com.bd এবং পিএম এক্সপার্ট লিমিটেড কোন বেআইনিতা বা বিষয়বস্তুর কোন ভুলের জন্য কোন দায়বদ্ধতা গ্রহণ করে  " :  
                                " Publicmarket.com.bd is an online marketplace in Bangladesh. It is the biggest virtual classified advertising platform. Buyer and seller wish to sell or buy new or second-hand items. Advertisers and users will be responsible for the advertising content, text, images, graphics, video ('Content') that is uploaded for inclusion on publicmarket.com.bd allow with all applicable laws. Publicmarket.com.bd and PM Expert Limited assumes no responsibility for any illegality or any inaccuracy of the Content."}
                                </p>  
                            </div> 
                            </div> 
                    </div> 
                      




                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "পরিষেবা এবং লেনদেন" :  
                                    "Services & Transactions"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "publicmarket.com.bd কর্তৃপক্ষ publicmarket.com.bd এ ক্রেতা এবং বিক্রেতার মধ্যে অগ্রিম আর্থিক লেনদেনের জন্য দায়ী থাকবে না ক্রেতাকে তার নিজের ঝুঁকিতে অগ্রিম আর্থিক লেনদেন করতে হবে। উল্লেখ্য যে, publicmarket.com.bd আপনাকে সর্বজনীন স্থানে বিক্রেতাদের সাথে দেখা করতে পরামর্শ দেয়, অনুগ্রহ করে আপনি কেনার আগে আপনার আইটেমটি পরীক্ষা করে দেখুন এবং আইটেম সংগ্রহ করার পরেই অর্থ প্রদান করুন। চাকরির পোস্টিং বৈধ কিনা তা যাচাই না করে নিজের সম্পর্কে ব্যক্তিগত তথ্য দেবেন না, যেমন আপনার জাতীয় পরিচয়পত্র নম্বর, ব্যাঙ্ক অ্যাকাউন্ট, ঠিকানা ইত্যাদি। আপনি যদি এটি না শুনে থাকেন তবে কোনও সংস্থাকে অর্থ দেবেন না, যদি আপনি তাদের না জানেন তবে বিপর্যয়ের শিকার হওয়ার দাবি করে এমন কোনও ব্যক্তিকে অর্থ দেবেন না।" :  
                                "publicmarket.com.bd authority will not be liable for any advance financial transactions between the buyer and the seller at publicmarket.com.bd the buyer has to make the advance financial transaction at his own risk. Note that, publicmarket.com.bd advises you must meet sellers in a public place, please check your item before you buy and pay only after collecting the item. Do not give out personal information about yourself, such as your national ID card number, Bank account, address etc without verifying that a job posting is legitimate. Do not give money to an organization if you have not heard of it, Do not give money to an individual claiming to be the victim of a disaster if you do not know them."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 


                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "পরিবর্তন" :  
                                    "Modification"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "Publicmarket.com.bd কোনো পূর্ব বিজ্ঞপ্তি ছাড়াই যে কোনো সময়ে এই শর্তাবলী পরিবর্তন, পরিবর্তন, যোগ বা অপসারণের অধিকার সংরক্ষণ করে। আপনি আমাদের সর্বশেষ শর্তাবলী সম্পর্কে অবগত আছেন তা নিশ্চিত করার জন্য আপনি যতবার ওয়েবসাইটে প্রবেশ করবেন ততবার publicmarket.com.bd ওয়েবসাইটের শর্তাবলী সংশোধন করা আপনার দায়িত্ব। আপডেটের জন্য নিয়মিত এই শর্তাবলী চেক করুন." :  
                                "Publicmarket.com.bd reserves the right to change, modify, add or remove portions of these terms and conditions at any time without any prior notification. It is your responsibility to revise the publicmarket.com.bd website terms each time you enter the website to ensure you are aware of our latest terms and conditions. Please check these terms and conditions regularly for updates."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 



                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "কপিরাইট" :  
                                    "Copyright"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "বিক্রেতা বা বিজ্ঞাপনদাতারা কার্যকরভাবে publicmarket.com.bd একটি চিরস্থায়ী, অপরিবর্তনীয়, রয়্যালটি-মুক্ত, অ-এক্সক্লুসিভ লাইসেন্স এবং ব্যবহার, পুনরুত্পাদন, অভিযোজন, প্রকাশ, অনুবাদ, পরিবর্তন, ডেরিভেটিভ কাজ তৈরি এবং সামগ্রী বিতরণ বা সামগ্রী অন্তর্ভুক্ত করার অধিকার অফার করে। বর্তমানে পরিচিত বা পরবর্তীতে বিকশিত যেকোনো মাধ্যম, ফর্ম বা প্রযুক্তিতে। publicmarket.com.bd-এ থাকা সমস্ত উপাদান (বিষয়বস্তু, সফ্টওয়্যার এবং পরিষেবাগুলি সহ) PM Expert Limited, এর সহযোগী, সহযোগী এবং তৃতীয়-পক্ষ লাইসেন্সদাতাদের দ্বারা পরিচালিত publicmarket.com.bd এর সম্পত্তি। সাইটের কপিরাইট, ট্রেডমার্ক, ট্রেড নেম, সার্ভিস মার্ক এবং অন্যান্য ব্র্যান্ড সহ যেকোন বুদ্ধিবৃত্তিক সম্পত্তির অধিকার হল publicmarket.com.bd এর সম্পত্তি যা PM Expert Limited দ্বারা পরিচালিত। এখানে একটি সতর্কতা রয়েছে যে, publicmarket.com.bd-এর লিখিত অনুমতি ব্যতীত এই সাইটের কোনও উপাদান পুনরুত্পাদন, অনুলিপি, ইনস্টল, পুনঃপ্রকাশ, পোস্ট, প্রেরণ, বিতরণ বা সংরক্ষণ করা যাবে না।" :  
                                "Sellers or Advertisers effectively offer publicmarket.com.bd a perpetual, irrevocable, royalty-free, non-exclusive license and right to use, reproduce, adapt, publish, translate, modify, create derivative works from and distribute the content or incorporate the content into any medium, form or tech currently known, or later developed. All the material (including the content, software and services) contained in publicmarket.com.bd is the property of publicmarket.com.bd Powered by PM Expert Limited, its affiliates, subsidiaries and third-party licensors. Any intellectual property rights, including copyrights, trademarks, trade names, service marks and other brands on the site are the property of publicmarket.com.bd Powered by PM Expert Limited. Here is a Warning that, No material occurring in this site may be reproduced, copied, installed, republished, posted, transmitted, distributed, or stored without the written permission of publicmarket.com.bd."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 


                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "জলছাপ" :  
                                    "Watermarks"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "ওয়াটারমার্কযুক্ত লোগোগুলি সমস্ত ছবিতে ব্যবহার করা হয় যাতে আমরা বিজ্ঞাপনদাতার সম্মতি বা কোনো পূর্ব বিজ্ঞপ্তি ছাড়াই আপনার পোস্টে ছবিগুলি অনুলিপি করা এবং অন্য উদ্দেশ্যে ব্যবহার করা প্রতিরোধ করতে পারি।" :  
                                "Watermarked logos are used over all images so that we can prevent copying and using images on your post for other purposes, without the advertiser’s consent or any prior notification."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 


                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "নিরাপত্তা এবং ছবি" :  
                                    "Safety and Image"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "Publicmarket.com.bd সম্পাদকীয় এবং প্রচারের উদ্দেশ্যে আপনার বিষয়বস্তুর শিরোনাম পরিবর্তন করার অধিকার সংরক্ষণ করে। Publicmarket.com.bd অপ্রাসঙ্গিক বা publicmarket.com.bd ওয়েবসাইটের ব্যবহার নিয়ন্ত্রণকারী নিয়ম লঙ্ঘন করে এমন কোনো ছবি প্রকাশ না করার অধিকার সংরক্ষণ করে।" :  
                                "Publicmarket.com.bd reserves the right to change your content title for editorial and promoting purposes. Publicmarket.com.bd reserves the right not to publish any images which are irrelevant or those violate the rules governing the use of the publicmarket.com.bd website."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 



                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "গোপনীয়তা" :  
                                    "Privacy"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "publicmarket.com.bd ব্যবহারকারী এবং বিজ্ঞাপনদাতাদের কাছ থেকে বিভিন্ন উপায়ে ব্যক্তিগত শনাক্তকরণ তথ্য সংগ্রহ করবে, যার মধ্যে সীমাবদ্ধ নয়। যখন ব্যবহারকারীরা আমাদের সাইটে যান, সাইটে নিবন্ধন করুন। উপযুক্ত ব্যবহারকারীর নাম, অনন্য ইমেল ঠিকানা এবং অনন্য ফোন নম্বর হিসাবে publicmarket.com.bd ব্যবহার করার শর্ত। publicmarket.com.bd শুধুমাত্র ব্যবহারকারীদের কাছ থেকে ব্যক্তিগত শনাক্তকরণ তথ্য সংগ্রহ করবে যদি তারা স্বেচ্ছায় আমাদের কাছে এই ধরনের তথ্য জমা দেয়। publicmarket.com.bd এর প্রশাসনিক, রক্ষণাবেক্ষণ এবং সমর্থন, এবং publicmarket.com.bd এর উন্নতির উদ্দেশ্যে তার সহযোগী, সহযোগী সংস্থা এবং অন্য কোনো সংস্থা বা ব্যক্তিদের কাছে এই তথ্য প্রকাশ করার অধিকার রয়েছে। উদাহরণস্বরূপ বিপণন, গবেষণা, পরিকল্পনা এবং পণ্য বিকাশের জন্য তথ্য ব্যবহার করে।" :  
                                "publicmarket.com.bd will collect personal identification information from Users and Advertisers in a variety of ways, including, but not limited to. When Users visit our site, register on the site. It is a condition of use of the publicmarket.com.bd as appropriate User Name, unique email address and unique phone number. publicmarket.com.bd will collect personal identification information from Users only if they voluntarily submit such information to us. publicmarket.com.bd has the right to disclose this information to its affiliates, subsidiaries, and any other entities or people for the purposes of administering, maintaining, and supporting publicmarket.com.bd, and improving publicmarket.com.bd. For instance by using the info for marketing, research, planning and product development."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 



                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "কুকিজ" :  
                                    "Cookies"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "publicmarket.com.bd কুকিজ ব্যবহার করে, যা বোঝায় যে ওয়েবসাইটের সমস্ত কার্যকারিতা সঠিকভাবে কাজ করার জন্য আপনার ডিভাইসে কুকিজ সক্রিয় থাকতে হবে। কুকিগুলি হল ছোট ডেটা ফাইল যা আপনার হার্ড ড্রাইভে লেখা হয় যখন আপনি নির্দিষ্ট সাইটগুলিতে যান৷ কুকি ফাইলগুলিতে নির্দিষ্ট তথ্য থাকে, যেমন অনন্য নম্বর বা ব্যবহারকারী আইডি যা ওয়েবসাইট প্রতিটি দর্শককে তাদের পরিদর্শন করা পৃষ্ঠাগুলি ট্র্যাক করার জন্য বরাদ্দ করে। কুকিজ আপনার হার্ড ড্রাইভের ডেটা পড়তে পারে না বা অন্য সাইটগুলি তৈরি করা কুকি ফাইলগুলি পড়তে পারে না৷ ব্যবহারকারীর পরিচয় জানার জন্য কেউ একা কুকিজ ব্যবহার করতে পারবে না।" :  
                                "publicmarket.com.bd utilizes cookies, which implies that you must have cookies enabled on your device for all the website's functionalities to work properly. Cookies are small data files that are written to your hard drive when you visit specific sites. Cookie files have certain information, such as the unique number or user ID that the website assigns to each visitor to track the pages they visited. Cookies can't read the data on your hard drive or read the cookie files that other sites have created. No one can use cookies alone to find out the identity of the user."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 



                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "সাইটের প্রাপ্যতা" :  
                                    "Site availability"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "publicmarket.com.bd ওয়েব সাইটে অবিচ্ছিন্ন বা আপনার নিরাপদ অ্যাক্সেসের নিশ্চয়তা দেয় না। মেরামত, রক্ষণাবেক্ষণের অনুমতি দেওয়ার জন্য ওয়েব সাইটে আপনার অ্যাক্সেস মাঝে মাঝে স্থগিত বা সীমাবদ্ধ করা হতে পারে।" :  
                                "publicmarket.com.bd does not guarantee continuous or your secure access to the Web Site. Your access to the Web Site may also be occasionally suspended or restricted to allow for repairs, maintenance."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 


                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "বিক্রয় এবং ক্রয়" :  
                                    "Sale and Buy"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "publicmarket.com.bd এই মুহূর্তে কোনো পণ্য বিক্রি করে না, এটি শুধুমাত্র একটি বিজ্ঞাপনের ওয়েবসাইট। তাই publicmarket.com.bd ক্রেতা-বিক্রেতাদের নিজেদের মধ্যে সততা বজায় রেখে পণ্য ক্রয়-বিক্রয়ের নির্দেশনা দিচ্ছে।" :  
                                "publicmarket.com.bd does not sell any product right now, this is only an advertisement website. So publicmarket.com.bd is instructing buyers and sellers to buy and sell products while maintaining honesty among themselves."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 



                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "ব্যবহারকারীদের দায়িত্ব" :  
                                    "Responsibilities of Users"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "ব্যবহারকারীদের অবশ্যই সামগ্রীর পোস্টে ছবি এবং বর্ণনা পরিষ্কার করতে হবে এবং আপনার পোস্টিং বিষয়বস্তু, পাঠ্য, চিত্র, গ্রাফিক্স, (ভিডিও বিষয়বস্তু) তারপর publicmarket.com.bd-এ অন্তর্ভুক্তির জন্য আপলোড করা নিশ্চিত করার জন্য দায়ী৷ কিন্তু বিষয়বস্তুর কোনো বেআইনি পোস্টের জন্য দায়ী নয়।" :  
                                "Users must clean PICTURES and DESCRIPTION in the POST of CONTENT and are responsible for ensuring your Posting content, text, images, graphics, (Video Content) then uploaded for inclusion on publicmarket.com.bd. But not responsible for any illegalities post of the Content."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 
 
                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "নিয়ম এবং নির্দেশিকা" :  
                                    "Rules and Guidelines"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "publicmarket.com.bd-এ আপনার বিজ্ঞাপন পোস্ট করার মাধ্যমে, আপনাকে অবশ্যই সম্মত হতে হবে যে এটি নীচে তালিকাভুক্ত আমাদের নির্দেশিকাগুলির সাথে সঙ্গতিপূর্ণ। আমি সম্মত যে আমি এই ওয়েবসাইট publicmarket.com.bd-এ পোস্ট করা যেকোনো বিজ্ঞাপনের বিষয়বস্তুর জন্য এককভাবে দায়ী থাকব। আমি এখানে পোস্ট করি এমন কোনো বিজ্ঞাপন থেকে প্রত্যক্ষ বা পরোক্ষভাবে আমার নিজের বা অন্যদের ক্ষতি বা ক্ষতির জন্য আমি এই ওয়েবসাইটের মালিককে দায়ী করব না। আমাদের সাইটে একটি বিজ্ঞাপন পোস্ট করার মাধ্যমে, আপনি নিম্নলিখিত নির্দেশিকাগুলির সাথে আরও সম্মত হন: কোন বিজ্ঞাপনগুলি, যদি থাকে, এই নির্দেশিকাগুলি লঙ্ঘন করে তা আমরা চূড়ান্ত বিবেচনার অধিকার সংরক্ষণ করি৷ যেকোন বিজ্ঞাপন যা শুধুমাত্র একটি পরীক্ষামূলক পোস্টিং, একটি কৌতুক, বা অন্যথায় নির্দোষ বা অ-গুরুত্বপূর্ণ বলে মনে হয় তা অপসারণ সাপেক্ষে। ধর্ম, লিঙ্গ, যৌন অভিমুখীতা, জাতি, রীতিনীতি, বয়স বা অক্ষমতার ভিত্তিতে কোনো ব্যক্তি বা গোষ্ঠীর প্রতি হয়রানি, অবনমিত, ভয় দেখায় বা ঘৃণাপূর্ণ কার্যকলাপের প্রচারণামূলক কোনো বিজ্ঞাপন; এই রাষ্ট্র বা দেশের বর্তমান আইনের অধীনে অবৈধ। কোনো বর্ণবাদী, বিদ্বেষপূর্ণ বা অন্যথায় আপত্তিকর মন্তব্য সহ্য করা হবে না। কোন প্রকার অশ্লীল বা অন্যথায় অনুপযুক্ত ভাষা সহ্য করা হবে না। এই নিয়ম লঙ্ঘন করা বিজ্ঞাপন অবিলম্বে এবং সতর্কতা ছাড়াই সরানো হবে। এটি একটি প্রদত্ত বিজ্ঞাপন হলে, কোন ফেরত জারি করা হবে না. publicmarket.com.bd অপব্যবহার রোধ করতে এবং আমাদের সাধারণ দর্শকদের জন্য উপযুক্ত বিষয়বস্তু রাখার জন্য আমাদের নির্দেশিকা লঙ্ঘন করে যেকোনো বিজ্ঞাপন পরিবর্তন করার অধিকার সংরক্ষণ করে। এর মধ্যে সব বয়স, বর্ণ, ধর্ম এবং জাতীয়তার মানুষ অন্তর্ভুক্ত রয়েছে। অতএব, আমাদের নির্দেশিকা লঙ্ঘন করে এমন কোনো বিজ্ঞাপন অবিলম্বে এবং পূর্ব বিজ্ঞপ্তি ছাড়াই সরানো হবে। বুঝবার জন্য আপনাকে ধন্যবাদ." :  
                                "By posting your ad on publicmarket.com.bd, you must agree that it is in compliance with our guidelines listed below. I agree that I will be solely responsible for the content of any ads that I post on this website publicmarket.com.bd. I will not hold the owner of this website responsible for any losses or damages to myself or to others that may result directly or indirectly from any ads that I post here. By posting an ad on our site, you further agree to the following guidelines: We reserve the ultimate discretion as to which ads, if any, are in violation of these guidelines. Any ad that appears to be merely a test posting, a joke, or otherwise insincere or non-serious is subject to removal. No ad promoting activities that are harasses, degrades, intimidates or is hateful toward an individual or group on the basis of religion, gender, sexual orientation, race, customs, age, or disability; illegal under the current laws of this state or country. No racist, hateful, or otherwise offensive comments will be tolerated. No foul or otherwise inappropriate language will be tolerated. Ads in violation of this rule are subject to being removed immediately and without warning. If it was a paid ad, no refund will be issued. publicmarket.com.bd reserves the right to modify any ads in violation of our guidelines in order to prevent abuse and keep the content appropriate for our general audience. This includes people of all ages, races, religions, and nationalities. Therefore, any ads that are in violation of our guidelines are subject to being removed immediately and without prior notice. Thank you for your understanding."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 



                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "ব্যবহারকারীদের অ্যাকাউন্ট এবং ইমেল ঠিকানা" :  
                                    "Accounts and Email address of users"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "Publicmarket.com.bd আপনাকে আমাদের সাথে একটি অ্যাকাউন্ট তৈরি করতে বা আপনার ব্যক্তিগত তথ্য সরবরাহ করতে হবে, ব্যবহারকারীদের একটি অ্যাকাউন্ট সম্পূর্ণ করতে একটি বৈধ ইমেল ঠিকানা, ফোন নম্বর, Google অ্যাকাউন্ট এবং ফেসবুক অ্যাকাউন্ট জমা দিতে হবে। তারা বিজ্ঞাপন পোস্ট করার অনুমতি দেওয়া হয়. ব্যবহারকারীর নাম এবং পাসওয়ার্ড কোন কারণ বা পূর্ব নোটিশ ছাড়াই এবং কোন ক্ষতির জন্য দায়ী বা দায়ী হবে না" :  
                                "Publicmarket.com.bd are required that you create an account with us or provide your personal information, Users are required to submit a valid email address, phone number, Google Account and facebook Account to complete an account. They are allowed to post advertisements. The username and password without giving any reason or prior notice and shall not be liable or responsible for any losses suffered by."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 


                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "তৃতীয় পক্ষের ওয়েবসাইট বা পরিষেবার লিঙ্ক" :  
                                    "Link to third party website or Service"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "Publicmarket.com.bd-এ এসএমএস গেটওয়ে এবং পেমেন্ট গেটওয়ের মতো অন্যান্য ওয়েবসাইটের (তৃতীয় পক্ষের পরিষেবা) রেফারেন্স বা লিঙ্ক থাকতে পারে। Publicmarket.com.bd তৃতীয় পক্ষের ওয়েবসাইটের বিষয়বস্তুর জন্য দায়ী থাকবে না, যেহেতু এই সাইটগুলি তদন্ত বা পর্যবেক্ষণ করা হয় না। কোনো ব্যবহারকারী যদি তৃতীয় পক্ষের ওয়েবসাইট অ্যাক্সেস করার জন্য publicmarket.com.bd ত্যাগ করার সিদ্ধান্ত নেন, তবে তারা নিজের ঝুঁকিতে তা করেন।" :  
                                "Publicmarket.com.bd may have references or links to other websites (third-party services) like SMS Gateway & Payment Gateway. Publicmarket.com.bd shall not be held responsible for the contents that occur in the third-party websites, since these sites aren't investigated or monitored. Should a user decide to leave publicmarket.com.bd to access third-party websites, they do so at their own risk."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 


                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "প্রদত্ত সামগ্রী এবং পরিষেবা (পরিষেবা চার্জ)" :  
                                    "Paid content and Services (Services Charges)"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "punlicmarket.com.bd-এর প্রতিটি বিষয়বস্তু এবং পরিষেবার জন্য অর্থপ্রদান প্রয়োজন। Publicmarket.com.bd ওয়েবসাইটে কন্টেন্ট পোস্ট করার জন্য ফি নিতে পারে। পরিষেবাতে সামগ্রী পোস্ট করা প্রতিটি পক্ষ উক্ত বিষয়বস্তু এবং ব্যবহারকারীর চুক্তির সাথে সম্মতির জন্য দায়ী৷ ব্যবহারকারী চুক্তি লঙ্ঘনের জন্য ওয়েবসাইট থেকে বিষয়বস্তু সরানো হলে প্রদত্ত সমস্ত ফি অ-ফেরতযোগ্য হবে।" :  
                                "Every content and services of punlicmarket.com.bd require payment.  Publicmarket.com.bd may charge a fee to post content on the website. Each party posting Content to the service is responsible for said content and compliance with the user agreement. All fees paid will be non-refundable in the event that content is removed from the website for violating the user agreement."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 



                    <h4 className="mt-40 text-center ad-product-title">
                    {languageCheck() === 'bn' ?  
                    "চাকরি" :  
                    "Jobs"}
                    </h4>
                     

                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "শ্রেণীবদ্ধ কাজের তালিকা (একক)" :  
                                    "Classified job listing (Single)"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                {languageCheck() === 'bn' ?  
                                "Publicmarket.com.bd সাবস্ক্রাইবার/নিয়োগকারীকে শুধুমাত্র publicmarket.com.bd সাইটের শ্রেণীবদ্ধ বিভাগে তথ্য রাখার অনুমতি দেবে। publicmarket.com.bd-এর শ্রেণীবদ্ধ বিভাগে প্রদর্শিত সন্নিবেশটি সর্বোচ্চ 30 দিনের জন্য হবে, যে সময়কাল বিজ্ঞপ্তি ছাড়াই পরিবর্তন হতে পারে।" :  
                                "Publicmarket.com.bd will allow the Subscriber/Recruiter to place the information only in the classified section of the site publicmarket.com.bd. The insertion so displayed in the classified section of publicmarket.com.bd will be for a period of maximum 30 days, which period is subject to change without notice."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 



                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "দাবিত্যাগ" :  
                                    "Disclaimer"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                 {languageCheck() === 'bn' ?  
                                 "Publicmarket.com.bd এবং PM Expert লিমিটেডের publicmarket.com.bd ব্যবহারের জন্য যাই হোক না কেন কোনো দায়বদ্ধতা নেই এবং যে কোনো ধরনের আঘাত, দাবি, দায়, বা ক্ষতির জন্য সমস্ত দায় অস্বীকার করে যা এর ফলে বা এর ফলে সৃষ্ট যেকোনো উপায়ে (a) publicmarket.com.bd বা বিষয়বস্তুতে যেকোন ত্রুটি, প্রযুক্তিগত ত্রুটি সহ কিন্তু সীমাবদ্ধ নয় এবং এটি একটি টাইপোগ্রাফিক্যাল ত্রুটি, (b) কোনো তৃতীয় পক্ষের ওয়েব সাইট বা বিষয়বস্তু প্রত্যক্ষ বা পরোক্ষভাবে publicmarket.com.bd লিঙ্কের মাধ্যমে অ্যাক্সেস পেতে পারেন, (c) publicmarket.com.bd এর সাথে সংযোগে ব্যবহৃত সরঞ্জাম (বা সফ্টওয়্যার)। " :  
                                 "Publicmarket.com.bd and PM Expert Limited has no responsibility whatever for the use of publicmarket.com.bd and disclaims all responsibility for any injury, claim, liability, or damage of any kind resulting from or arising out of or any way related to (a) any errors on publicmarket.com.bd or the Content, including but not limited to technical errors and it’s a typographical errors,  (b) any third party web sites or content directly or indirectly get access through links in publicmarket.com.bd,  (c) Used equipment (or software) in connection with publicmarket.com.bd."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 


                    <div className="mt-30">
                        <div className="post_form mt-20">
                            <div className="post_title">
                                <h5 className="title">  
                                {languageCheck() === 'bn' ?  
                                    "সরকারি আইন" :  
                                    "Governing Law"}
                                </h5>
                            </div>
                            <div className="row justify-content-center ">
                                <p>   
                                 {languageCheck() === 'bn' ?  
                                 "Publicmarket.com.bd বাংলাদেশের আইন ও প্রবিধানের অধীনে পরিচালিত হয়। ভোক্তা এবং প্রদানকারী উভয়েই সম্মত হন যে publicmarket.com.bd ব্যবহার সংক্রান্ত যেকোনো বিরোধ বা দাবির বিষয়ে বাংলাদেশের আদালতের এখতিয়ার থাকবে।" :  
                                 "Publicmarket.com.bd is operated under the laws and regulations of Bangladesh. Consumers and providers both agree that Bangladesh courts will have jurisdiction over any dispute or claim relating to the use of publicmarket.com.bd."}
                                </p>  
                            </div> 
                        </div> 
                    </div> 


  
                   
                   
                  
                
                 
                   </div>
                 </div>
               </section>
             <br/>  
           <Footer />
        </>
    );
};

export default TermsConditions;