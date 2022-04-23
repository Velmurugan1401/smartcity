import DataTable from 'react-data-table-component';
import axios from "axios";

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
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
        action:<button>hii</button>
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
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
        <DataTable
            columns={columns}
            data={data}
        />
        <button onClick={listall}>click mee</button>
        </div>

    );
    }

    export default Admin