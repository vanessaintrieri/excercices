import "./Square.scss";

const Square = ({backgroundColor = "", onClick = () => {}}) => {
    return (
        <div className={"square-200 " + backgroundColor } onClick={onClick}></div>
    );
}

export default Square;