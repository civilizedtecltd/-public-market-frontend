import { useEffect } from "react";
import Key from "../../lang/key"
import translate from "../../lang/translate"

const TextArea = ({
    register,
    errors,
    name,
    required,
    minLength,
    maxLength,
    onChange,
    value,
    placeholder,
    cols = 30,
    rows = 5,
    className = "form-control",
    label,
    labelClassName = "form-label",
    type = "text",
    setValue
}) => {

    useEffect(() => {
        if (setValue && value) {
          setValue(name, value, { shouldValidate: true, shouldDirty: true });
        }
      }, [value]);
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <label htmlFor={name} className={labelClassName}>
                        {label}
                    </label>
                </div>
                <div className="col-6 text-right">
                    {value?.length || 0}{maxLength ? `/${maxLength}` : ""}
                </div>
            </div>

            <textarea
                {...(register ? register(name, {
                    required: required,
                    minLength: minLength,
                    maxLength: maxLength,
                    onChange: onChange, 
                    onChange: (e) => {
                        if (onChange) onChange(e);
                    },
                    value: value,
                }) : {})}
                type={type}
                className={className}
                placeholder={placeholder}
                name={name}
                cols={cols}
                rows={rows}
            ></textarea>
            { Object.keys(errors).length ? <span style={{ color: 'red' }} >
                    {
                        errors[name]?.type === "required"
                        && translate(Key.You_must_fill_out_this_field)
                    }
                    {
                        errors[name]?.type === "minLength"
                        && translate(Key.The_information_entered_is_too_short)
                    }
                    {
                        errors[name]?.type === "maxLength"
                        && translate(Key.The_information_entered_is_too_long)
                    }
                </span> : ""  }
        </>
    )
}

export default TextArea;