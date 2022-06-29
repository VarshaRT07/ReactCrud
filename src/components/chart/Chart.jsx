import './chart.scss'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    Total:1200,
    target:700,

  },
  {
    name: 'February',
    Total:1100,
    target:600,
  },
  {
    name: 'March',
    Total:800,target:1100,
  },
  {
    name: 'April',
   Total:1900,target:1200,
  },
  {
    name: 'May',
   Total:1000,target:400,
  },
  {
    name: 'June',
    Total:2200,target:500,
  },
  {
    name: 'July',
    Total:1900,target:200,
  },
];


const Chart = ({aspect,title}) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect} >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total" stackId="a" fill="#8884d8" />
          <Bar dataKey="target" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart