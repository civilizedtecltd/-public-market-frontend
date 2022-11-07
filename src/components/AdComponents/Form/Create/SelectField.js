
import translate from "../../../../lang/translate";
const SelectField = (props) => {
    const fieldName = props.LName;
    function convertToSlug(fieldName) {
        fieldName = fieldName.replace(' ', '')
        return fieldName.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    } 

    // const names = convertToSlug(fieldName);
    const name = fieldName;
     
        return (
            <>
                <div className="form-group"> 
                    <label htmlFor="category_id" className="control-label">{translate(props.LName)}</label>
                    <select name={name} className="form-control">
                        {props.options?.map( (option, index)=>(
                            <option key={index} value={option}> {translate(option)}</option>
                        ))}
                    </select>
                </div>
            </>
        );
};

export default SelectField;
