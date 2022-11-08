import Tab from 'react-bootstrap/Table';
import "./Table.scss";

const Table = ({ data: {  id = 0, name = "", surname = "", address = "" , departmentId } }) => {
    return(
      <Tab striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Adress</th>
          <th>Department Id</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{surname}</td>
          <td>{address}</td>
          <td>{departmentId}</td>
        </tr>
      </tbody>
    </Tab>
    );
};

export default Table; 