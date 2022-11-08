import Tab from 'react-bootstrap/Table';
import "./Table.scss";

const Table = ({ data: {  id = 0, email = "", first_name = "", last_name = "" , avatar } }) => {
    return(
      <Tab striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{email}</td>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td><img src={avatar}/></td>
        </tr>
      </tbody>
    </Tab>
    );
};

export default Table; 