import React, { Component } from "react";
import { Header } from "./Header";
import DataGrid from "react-data-grid";
// import "react-data-grid/dist/react-data-grid.css";

export class AdminPage extends Component {
    // const grid = () => {
    //     const [gridState, setGridState] = useState<any>(rows);
      
    //     const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    //       setGridState(gridState => {
    //         const rows = gridState.slice();
    //         for (let i = fromRow; i <= toRow; i++) {
    //           rows[i] = { ...rows[i], ...updated };
    //         }
    //         return { rows };
    //       });
    //     };
  render() {
    // const rows = [
    //   { id: 0, title: "row1", count: 20 },
    //   { id: 1, title: "row1", count: 40 },
    //   { id: 2, title: "row1", count: 60 }
    // ];
    // const columns = [
    //   { key: "id", name: "ID" },
    //   { key: "title", name: "Title" },
    //   { key: "count", name: "Count" }
    // ];
    return (
      <div>
        <Header {...this.props} />
        <DataGrid
          columns={[
              {
                  key:'name',
                  name:'Name',
                  filterable:true,
                  sortable:true,

              },
              {
                key:'name',
                name:'Name1',
                filterable:true,
                sortable:true,

            },
            {
                key:'name',
                name:'Name2',
                filterable:true,
                sortable:true,

            }
          ]}
          rows={this.state.rows}
          filterable
          allowCsvExport
        //   actionCell={}
        />
        {/* <ReactDataGrid
          columns={columns}
          rows={rows}
        //   rowGetter={i => rows[i]}
        //   rowsCount={3}
          minHeight={150}
        /> */}
      </div>
    );
  }
}

export default AdminPage;
