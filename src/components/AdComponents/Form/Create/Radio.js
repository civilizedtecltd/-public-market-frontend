import translate from "../../../../lang/translate";
const Radio = (props) => {
    const fieldName = props.LName;

    function convertToSlug(fieldName) {
        fieldName = fieldName.replace(' ', '')
        return fieldName.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    }
  
    // const namess = convertToSlug(fieldName)

    const name = fieldName;
    return (
        <>
            <div className="form-group d-flex">
                <label htmlFor="cover_letter" className="control-label mr-2"> {translate(props.LName)}:</label>

                {props.options?.map((option, index) => (
                    <div key={index} className="radio__no mr-2">
                        <label htmlFor={name} className="mr-2">
                            <input defaultChecked={index === 0 ? 'true' : ''} 
                            value={option} type="radio" name={name} id="cover_letter_yes"/>
                        </label>
                        <span>{translate(option)}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Radio;
