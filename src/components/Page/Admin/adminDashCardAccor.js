import React from 'react';
import { MdDirectionsCar, MdPeople, MdAttachMoney } from 'react-icons/md';
import '../Admin/admCss/cardAdm.css'
const AdminDashboardCard = (props) => {
    let icon;

  switch(props.title) {
    case "Mobil":
      icon = <MdDirectionsCar size={48} />;
      break;
    case "Customer":
      icon = <MdPeople size={48} />;
      break;
    case "Pendapatan":
      icon = <MdAttachMoney size={48} />;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center">
          {icon}
          <h5 className="card-title ml-2">{props.title}</h5>
        </div>
          <a href={props.link} className="stretched-link" aria-label='Read More'>100</a>
      </div>
    </div>
  );
}

export default AdminDashboardCard;
