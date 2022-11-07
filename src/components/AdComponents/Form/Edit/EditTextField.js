import {convertToSlug} from "../../../../helpers/Helpers";
import translate from "../../../../lang/translate";

const EditTextField = (props) => {
    const fieldName = props.LName;
    const name = convertToSlug(fieldName)
    return (
        <>
            <div className="form-group">
                <label className="control-label"> {translate(props.LName)}</label>
                <input onChange={props.dataSet} name={name} value={props.dataBaseOptions[name]} 
                type="text" className="form-control"/>
            </div>
        </>
    );
};

export default EditTextField;
