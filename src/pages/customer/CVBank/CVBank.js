import Header from "../../../components/Header/Header";
import UserSidebar from "../../../components/UserSidebar";
import {Link} from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import {languageCheck} from "../../../helpers/Helpers";

const CVBank = () => {
    return <>
        <Header/>
        <section className="dashboard_page pt-70 pb-120">
            <div className="container">
                <div className="row">
                    {/* user dashbord sidebar */}
                    <UserSidebar my_membership={'active'}/>

                    <div className="col-lg-8">
                        <div className="post_form mt-50">
                            <div className="review__title shadow-none p-2 mb-2 rounded" style={{background: "red"}}>
                                <h3 style={{color: 'white', fontSize: "18px", background: "red"}}>
                                    CV Bank Membership
                                </h3>
                            </div>
                            <p>{languageCheck() === "bn" ? 'আপনি বাংলাদেশর সব ধরণের  কর্মচারীর জীবনবিতান্ত সংগ্রহ করতে পারবেন।' : 'You can collect all types of employee resumes in Bangladesh.'}</p>
                            <div className=" d-flex justify-content-end">
                                <Link className="no-border customYellowBtn" to="/my/CVBank/CVList">Subscribe
                                    Now</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/>
        <Footer/>
    </>
}
export default CVBank;