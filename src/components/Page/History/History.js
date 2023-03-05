import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck, faTimes, faFire } from '@fortawesome/free-solid-svg-icons';


export default function History() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nama Anda</th>
            <th>Mobil</th>
            <th>Tanggal Peminjaman</th>
            <th>Tanggal Pengembalian</th>
            <th>Jumlah Hari</th>
            <th>Total Harga</th>
            <th>Uang Muka (30%)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rully</td>
            <td>Tesla Malibu</td>
            <td>3/10/2023</td>
            <td>3/11/2023</td>
            <td>1</td>
            <td>850,000</td>
            <td>255,000</td>
            <td>
            <select>
              <option value="proses" selected>
                Proses <FontAwesomeIcon icon={faSpinner} />
              </option>
              <option value="setuju">
                Setuju <FontAwesomeIcon icon={faCheck} />
              </option>
              <option value="tolak">
                Tolak <FontAwesomeIcon icon={faTimes} />
              </option>
              <option value="Hangus">
                Hangus <FontAwesomeIcon icon={faFire} />
              </option>
            </select>
          </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
