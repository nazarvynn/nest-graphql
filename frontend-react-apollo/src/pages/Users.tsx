import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function Users() {
  return (
    <>
      <div className="grid p-fluid">
        <div className="col-12 md:col-5">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user" />
            </span>
            <InputText placeholder="Username" />
          </div>
        </div>
        <div className="col-12 md:col-5">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-at" />
            </span>
            <InputText type="email" placeholder="User email" />
          </div>
        </div>
        <div className="col-12 md:col-2">
          <Button type="submit" label="Submit" />
        </div>
      </div>
    </>
  );
}
