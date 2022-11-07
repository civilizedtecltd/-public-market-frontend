import {convertToSlug} from "../../../../helpers/Helpers";
import {useEffect, useState} from "react";
import translate from "../../../../lang/translate";

const EditRadio = (props) => {
    const fieldName = props.LName;
    const [checkRadio, setCheckRadio] = useState('');
    const name = convertToSlug(fieldName)

    useEffect(() => {
        setCheckRadio(props.dataBaseOptions[name])
    }, [props.dataBaseOptions[name]])
    // console.log(props.dataBaseOptions[name])

    return (
        <>
            <div className="form-group d-flex">
                <label htmlFor="cover_letter" className="control-label mr-2"> {translate(props.LName)}:</label>
                {props.options?.map((option, index) => (
                    <div key={index} className="radio__no mr-2">
                        <label htmlFor={name} className="mr-2">
                            <input
                                onChange={(e) => setCheckRadio(e.target.value)}
                                checked={checkRadio === option}
                                value={option}
                                type="radio" name={name}
                                id={name}
                            />
                        </label>
                        <span>{translate(option)}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default EditRadio;
