
import translate from "../../../../lang/translate";
const TextAria = (props) => {
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
                <textarea name={name} className="form-control"></textarea>
            </div>
        </>
    );
};


export default TextAria;
