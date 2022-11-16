import { useCategories } from "../Hooks/Customs";

const FetchSelect = ({ name = "", value = 0, onChange = () => {} }) => {

    const { result: dataList } = useCategories();
    
    if (dataList) {
        return (
            <select name={name} value={value} onChange={onChange} className="form-control">
                <option value={0}>-- Seleziona --</option>
                {dataList.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
        );
    }

    return (
        <select name={name} value={value} onChange={onChange} className="form-control">
            <option value={0}>-- Seleziona --</option>
        </select>
    );
}

export default FetchSelect;