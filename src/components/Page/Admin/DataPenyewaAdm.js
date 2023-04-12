import React from "react";
import { Table ,Button} from "react-bootstrap";
import SidebarAdm from "../../SidebarAdm";
import { sewaData } from "../../../data/dataPenyewa";
import './admCss/dataPenyewaAdm.css'

export default function DataPenyewa() {
  return (
    <div className="d-flex">
      <SidebarAdm title="Kelola Penyewa" />
      <div
        className="dasboardMain"
        style={{ width: "calc(100% - 200px)", height: "695px" }}
      >
        <div
          style={{
            width: "100%",
            height: "78px",
            backgroundColor: "#edeaea",
            marginBottom: "5%",
          }}
        >
          <h1 style={{ padding: "15px 10px" ,fontFamily:'sans-serif' }}>Kelola Penyewa</h1>
        </div>
        <div>
          <h4 style={{paddingLeft:'100px',paddingBottom:'50px'}}>Daftar Penyewa</h4>
          <div className="identitasPenyewa" style={{margin:'auto',overflow: 'auto', maxWidth: '900px'}} >
          <Table striped bordered hover>
            <thead >
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>No. Telepon</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Status Akun</th>
                <th>Identitas Penyewa</th>
              </tr>
            </thead>
            <tbody>
              {sewaData.map((data) => (
                <tr>
                  <th>{data.id}</th>
                  <th>{data.nama}</th>
                  <th>{data.telp}</th>
                  <th>{data.email}</th>
                  <th>{data.alamat}</th>
                 <th>
                    <select name="" id="">
                        <option value="Aktif">Aktif</option>
                        <option value="tidakAktif">Tidak Aktif</option>
                    </select>
                 </th>
                 <th><Button>Details</Button></th>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
