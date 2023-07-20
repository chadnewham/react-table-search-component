import React, { useState } from 'react';

import './my-component.css';
// data prop is array of objects [{name: string, sku: int,...},{...}}
export default function MyComponent({ data }) {
  const [tableData, setTableData] = useState(data);
  const [search, setSearch] = useState('');
  return (
    <div id="component-container">
      <div>
        <h2>Search</h2>
        <input onChange={(e) => setSearch(e.target.value)} type="text" />
      </div>
      <table id="spoilage-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          <DataRows
            data={tableData.filter(
              (item) =>
                item.name.toString().includes(search.toString()) ||
                item.sku.toString().includes(search.toString())
            )}
          />
        </tbody>
      </table>
    </div>
  );
}

const DataRows = ({ data }) => {
  function dataChange(e, index) {
    console.log(e.target.value, index);
  }
  return (
    <>
      {data.map((data, index) => (
        <tr key={index}>
          <td>{data.sku}</td>
          <td>{data.name}</td>
          <td>
            <input onChange={(e) => dataChange(e, index)} />
          </td>
          <td>{data.unit}</td>
        </tr>
      ))}
    </>
  );
};
