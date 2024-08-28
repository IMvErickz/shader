'use client'

import {
  LineChart as LineChartComponent,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts'

export function LineChart() {
  const data = [
    {
      name: 'Page A',
      uv: Math.floor(Math.random() * 4890),
      pv: Math.floor(Math.random() * 4890),
      amt: Math.floor(Math.random() * 4890),
    },
    {
      name: 'Page B',
      uv: Math.floor(Math.random() * 4890),
      pv: Math.floor(Math.random() * 4890),
      amt: Math.floor(Math.random() * 4890),
    },
    {
      name: 'Page C',
      uv: Math.floor(Math.random() * 4890),
      pv: Math.floor(Math.random() * 4890),
      amt: Math.floor(Math.random() * 4890),
    },
    {
      name: 'Page D',
      uv: Math.floor(Math.random() * 4890),
      pv: Math.floor(Math.random() * 4890),
      amt: Math.floor(Math.random() * 4890),
    },
    {
      name: 'Page E',
      uv: Math.floor(Math.random() * 4890),
      pv: Math.floor(Math.random() * 4890),
      amt: Math.floor(Math.random() * 4890),
    },
    {
      name: 'Page F',
      uv: Math.floor(Math.random() * 4890),
      pv: Math.floor(Math.random() * 4890),
      amt: Math.floor(Math.random() * 4890),
    },
    {
      name: 'Page G',
      uv: Math.floor(Math.random() * 4890),
      pv: Math.floor(Math.random() * 4890),
      amt: Math.floor(Math.random() * 4890),
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={506}>
      <LineChartComponent
        width={1012}
        height={506}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid stroke="#232326" />
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        <Legend />
        <Line type="linear" strokeWidth={3} dataKey="pv" stroke="#8884d8" />
        <Line type="linear" strokeWidth={3} dataKey="uv" stroke="#82ca9d" />
      </LineChartComponent>
    </ResponsiveContainer>
  )
}
