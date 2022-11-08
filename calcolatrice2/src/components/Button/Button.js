
const Button = ({action = () =>{}, data = {value: "", isOperation: false, order: 0}}) => {
    let classes = "btn ";
    classes += (data.isOperation ? "btn-warning" : "btn-secondary") + " ";
    classes += (data.value === 0 ? "col-6" : "col-3") + " "; //bottone 0 occupa due colonne (più largo)
    classes += "border-white";
    return (
        <button className={classes} style={{order: data.order}} onClick={() => {action(data.value)}}>{data.value}</button>
    );
}

export default Button;