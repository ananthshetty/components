import React from 'react'
import { useMemo } from 'react';
import {useTable} from 'react-table';
import styles from "./RTable.module.scss";

export default function RTable() {
    const columns = useMemo(
        () => [
          {
            Header: 'Column 1',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Column 2',
            accessor: 'col2',
          },
          {
            Header: 'Column 3',
            accessor: 'col3',
          },
        ],
        []
      );
      
    const data = useMemo(
        () => [
          {
            col1: 'Hello',
            col2: 'World',
            col3:"war3"
          },
          {
            col1: 'react-table',
            col2: 'rocks',
            col3:"war3"
          },
          {
            col1: 'whatever',
            col2: 'you want',
            col3:"war3"
          },
          {
            col1: 'hey',
            col2: 'hi hellow',
            col3:"war3"
          }
        ],
        []
      );

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })

  return (
<table {...getTableProps()}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr  className='first:rounded-tl-lg' {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr  {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
  )
}
