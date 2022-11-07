import {useState} from "react";
import {convertToSlug} from "../../../../helpers/Helpers";
import translate from "../../../../lang/translate";

const EditSelectField = (props) => {
    const fieldName = props.LName;

    const name = convertToSlug(fieldName);

    // const [selectedOptionValue, setSelectedOptionValue] = useState([])
    const selectedOptionValue = props.options?.filter(function (option) {
        if (props.dataBaseOptions[name] === option) {
            return option
        }
    });

    return (
        <>
            <div className="form-group">
                <label htmlFor="category_id" className="control-label"> {translate(props.LName)}</label>
                <select value={selectedOptionValue[0]} onChange={props.dataSet} name={name} className="form-control">
                    <option value="">Choose Option</option>
                    {props.options?.map((option, index) => (
                        <option key={index} value={option}> {translate(option)}</option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default EditSelectField;
