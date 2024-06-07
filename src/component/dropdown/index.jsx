export const Dropdown = ({ options, bindValue, bindLabel, ...props }) => {
    return (
        <select {...props}>
            <option  hidden>{props?.placeholder}</option>
            {options?.map((option, index) => <option key={index} value={bindValue ? option[bindValue] : option}>{bindLabel ? option[bindLabel] : option}</option>)}
        </select>
    )
}