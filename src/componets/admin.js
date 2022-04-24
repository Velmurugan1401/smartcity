import DataTable from 'react-data-table-component';
import axios from "axios";
import "../css/admin.css"
const columns = [
    {
        name: 'Name',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Address',
        selector: row => row.year,
        sortable: true,
    },
    {
        name: 'Action',
        selector: row => row.action
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        action:<button type="button" class="btn btn-outline-info">Edit</button>
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
        action:<button type="button" class="btn btn-outline-info">Edit</button>
    }
]

function Admin() {
    const listall=()=>{
        axios.get("http://localhost:7000/api/listusers").then((response) => {
            console.log(response);
          });
    }
    return (
        <div>
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    {/* <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" /> */}
    Places needed for Student/Employes/Tourist
  </a>
</nav>
        <DataTable
            columns={columns}
            data={data}
        />
        {/* <button onClick={listall}>click mee</button> */}
        </div>

    );
    }

    export default Admin