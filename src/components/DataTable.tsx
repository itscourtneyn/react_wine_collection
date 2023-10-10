import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'upc', headerName: "UPC", flex: 1},
    { field: 'type', headerName: "Type", flex: 1},
    { field: 'brand', headerName: "Brand", flex: 1},
    { field: 'color', headerName: "Color", flex: 1},
    { field: 'alcohol_percentage', headerName: "Alcohol Percentage", flex: 1},

]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <Modal 
            upc={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-rose-200 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Wine
                </button>
            </div> 
            <Button onClick={handleOpen} className="p-3 bg-rose-200 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-rose-200 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-rose-200 my-2 rounded">My Wines</h2>
            <DataGrid 
            getRowId={(row: any) =>  row.upc}
            rows={contactData} 
            columns={columns}
            checkboxSelection={true} 
            onRowSelectionModelChange={ (item:any) => {
                setSelectionModel(item);
            }}
            componentsProps={{
                pagination: {
                    rowsPerPageOptions: [5]
                }
            }}
            />
        </div>
    </>
  )
}

export default DataTable