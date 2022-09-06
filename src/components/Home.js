import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";

export default function Home() {
  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>
                        <Button onClick={() => alert(item.id)}>Edit</Button>
                        &nbsp;
                        <Button onClick={() => alert(item.id)}>Delete</Button>
                      </td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}
