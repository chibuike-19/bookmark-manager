import React from 'react'
import "../styles/rides_table.css"
import { ridesData } from './ridesData';
import { tableHead } from './ridesData';

const RidesTable = () => {
    
  return (
    <section>
      <table className="table-desktop">
        <thead>
          <tr>
            {tableHead.map((head: string) => (
              <th key={head}>{head}</th>
            ))}
            <th>View User</th>
          </tr>
        </thead>
        <tbody>
          {ridesData.map((data) => (
            <tr key={data.id}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.phoneNumber}</td>
              <td>
                <span
                  className={`${
                    data.isCertified ? "verified-user" : "unverified-user"
                  }`}
                >
                  {data.isCertified ? "True" : "False"}
                </span>
              </td>
              <td>
                <button type="button" className="view-user-button">
                  {data.isCertified ? "View Details" : "View Details"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table-mobile">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>View User</th>
          </tr>
        </thead>
        <tbody>
          {ridesData.map((data) => (
            <tr key={data.id}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>

              <td>
                <button type="button" className="view-user-button">
                  {data.isCertified ? "View Details" : "View Details"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default RidesTable