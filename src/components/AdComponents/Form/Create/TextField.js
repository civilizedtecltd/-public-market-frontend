
import translate from "../../../../lang/translate";
const TextField = (props) => {
    const fieldName = props.LName;
    function convertToSlug(fieldName) {
        fieldName = fieldName.replace(' ', '')
        return fieldName.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    } 

    // const name = convertToSlug(fieldName)

    const name = fieldName;
    
    return (
        <>
            <div className="form-group">
                <label className="control-label"> {translate(props.LName)}</label>
                <input name={name} type="text" className="form-control"/>
            </div>
        </>
    );
};

export default TextField;
