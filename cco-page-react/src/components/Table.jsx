import React from 'react';
import technologies from '../technologies';
import './css/Table.css';

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Technology</th>
          <th>Estimated learning time</th>
        </tr>
      </thead>
      <tbody>
        {
          technologies.map((item) => {
            return (
              <tr key={item.technology}>
                <td>{item.technology}</td>
                <td>{item.time}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Table;