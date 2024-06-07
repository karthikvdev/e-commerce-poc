export const Button = ({ buttonName, ...props }) => {
    return (
        <button {...props}>{buttonName}</button>
    )
}