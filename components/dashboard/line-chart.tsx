'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
)

export function LineChart() {
  const labels = ['1', '2', '3', '4', '5', '6', '7']
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset vermelho',
        data: labels.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'red',
        borderWidth: 1,
      },
      {
        label: 'Dataset azul',
        data: labels.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'blue',
        borderWidth: 1,
      },
    ],
  }

  return <Line options={{ responsive: true }} data={data} />
}
