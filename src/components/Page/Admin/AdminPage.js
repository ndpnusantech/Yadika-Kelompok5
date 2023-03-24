import React from "react";
import SidebarAdm from "../../SidebarAdm";
import "../Admin/admCss/adminPage.css";
import AdminDashboardCard from "./adminDashCardAccor";
import Dashboard from "../../Dashboard";

export default function AdminPage() {
  return (
    <div className="d-flex">
      <SidebarAdm title="Dashboard" />
      <div
        className="dasboardMain"
        style={{ width: "100%", height: "695px" }}
      >
        <div
          style={{
            width: "100%",
            height: "78px",
            backgroundColor: "#edeaea",
            marginBottom: "2%",
          }}
        >
          <h1 style={{ padding: "15px 10px" }}>Dashboard</h1>
        </div>
        <div className="cardAdm m-auto" style={{ width: "96%" }}>
          <div className="row">
            <div className="col-md-4">
              <AdminDashboardCard title="Mobil" link="/admin/dataMobil" />
            </div>
            <div className="col-md-4">
              <AdminDashboardCard title="Customer" link="/transactions" />
            </div>
            <div className="col-md-4">
              <AdminDashboardCard title="Pendapatan" link="/revenue" />
            </div>
          </div>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
