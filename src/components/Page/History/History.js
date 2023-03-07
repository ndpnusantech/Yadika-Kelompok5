import React from "react";
import NavScroll from "../../Navbar";
import Lower from "../../Footer";


export default function History() {
  return (
    <div style={{marginTop:'10%'}}>
    <NavScroll/>
      <table>
        <thead>
          <tr>
            <th>Nama Anda</th>
            <th>Mobil</th>
            <th>Tanggal Peminjaman</th>
            <th>Tanggal Pengembalian</th>
            <th>Jumlah Hari</th>
            <th>Uang Masuk</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Johm</td>
            <td>Tesla Malibu</td>
            <td>3/10/2023</td>
            <td>3/11/2023</td>
            <td>1</td>
            <td>300,000</td>
            <td>
            <select>
              <option value="proses" selected>
                Proses
              </option>
              <option value="setuju">
                Setuju
              </option>
              <option value="tolak">
                Tolak
              </option>
              <option value="Hangus">
                Hangus
              </option>
            </select>
          </td>
          </tr>
        </tbody>
      </table>
      <Lower/>
    </div>
  );
}