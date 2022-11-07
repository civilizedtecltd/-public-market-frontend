import {convertToSlug} from "../../../../helpers/Helpers";
import translate from "../../../../lang/translate";

const EditTextAria = (props) => {
    const fieldName = props.LName;
    const name = convertToSlug(fieldName)

    return (
        <>
            <div className="form-group">
                <label className="control-label"> {translate(props.LName)}</label>
                <textarea onChange={props.dataSet} defaultValue={props.dataBaseOptions[name]}  
                name={name} className="form-control"></textarea>
            </div>
        </>
    );
};


export default EditTextAria;
