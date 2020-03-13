import React, { useContext } from "react";
import {Context} from '../../context'

export default function Alert() {

  const context = useContext(Context);

  const { alert } = context;

  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  );
}
