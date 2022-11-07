import { languageCheck } from "../../../helpers/Helpers";


const ProfileUpdateRedirectModal = () => {
    return (
        <>
            <div className="modal  fade" id="ProfileUpdateRedirectModal" data-bs-backdrop="static"
                 data-bs-keyboard="false"
                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog location__width">
                    <div className="modal-content location__width">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 modal__content__scroll">
                                    <h4 style={{fontSize: '18px'}} className="category__title">
                                        {languageCheck() === 'bn' ? "ক্যাটাগরি নির্বাচন করুন" : "Select  Category"}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProfileUpdateRedirectModal;