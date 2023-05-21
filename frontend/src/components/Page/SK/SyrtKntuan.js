import NavScroll from '../../Navbar';
import { ListGroup } from 'react-bootstrap';
import Lower from '../../Footer';
import React from 'react';
import './syartKntuan.css';
import { Card } from 'react-bootstrap';
import SkPng from './sk.png';

const SyrtKntuan = () => {
  return (
    <div className="bodySK" style={{ backgroundColor: 'gray' }}>
      <NavScroll />
      <section className="SYARAT">
        <div className="layoutSK" style={{ marginBottom: '150px' }}>
          <h3>
            Sebelum menggunakan layanan kami, mohon perhatikan syarat dan
            ketentuan yang berlaku agar Anda dapat memahami hak dan kewajiban
            Anda sebagai pengguna.
          </h3>
          <img style={{ height: '400px', widht: '400px' }} alt='' src={SkPng} />
        </div>
        <div className="containerSyarat">
          <h1>Ketentuan Pengguna Layanan</h1>
          <div className="mainSyarat">
            <Card style={{ width: '70%', margin: 'auto', textAlign: 'left' }}>
              <Card.Body>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Umur minimal 21 tahun, dengan masa berkendara minimal 1
                      tahun.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Memiliki SIM Surat Izin Mengemudi yang masih berlaku.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {' '}
                      Diharapkan agar tidak merusak mobil rental.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Mengembalikan mobil pada waktu yang ditentukan.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Deposit yang harus dibayarkan sebelum penyewaan mobil
                      dimulai.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Tidak menggunakan mobil sewaan untuk kegiatan ilegal.
                    </ListGroup.Item>
                    <ListGroup.Item>
                    Waktu pengambilan dan pengembalian harus sesuai dengan waktu yang telah disepakati. Jika waktu pengembalian melebihi waktu yang telah disepakati, maka akan dikenakan denda.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Membaca dan menyetujui syarat dan ketentuan sewa mobil
                      yang diberikan oleh perusahaan.
                    </ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <h1 style={{ paddingTop: '5%' }}>Jamianan Untuk Rental</h1>
          <div className="jaminanRent">
            <Card style={{ width: '70%', margin: 'auto', textAlign: 'left' }}>
              <Card.Body>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>KTP(Kartu Tanda Penduduk)</ListGroup.Item>
                    <ListGroup.Item>
                      BPJS(Badan Penyelenggara Jaminan Sosial)
                    </ListGroup.Item>
                    <ListGroup.Item>Pasport</ListGroup.Item>
                    <ListGroup.Item>SIM C: Surat Izin Mengemudi</ListGroup.Item>
                    <ListGroup.Item>NPWP</ListGroup.Item>
                    <ListGroup.Item><h3 style={{textAlign:'center'}}>Harap Menyerahkan Tiga dari persyaratan diatas</h3></ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>

                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <Lower />
    </div>
  );
};

export default SyrtKntuan;
