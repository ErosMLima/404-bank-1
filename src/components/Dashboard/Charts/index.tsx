import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, Cell, YAxis } from 'recharts'

import { CardContainer, Card, CardDashboard } from './style'

type DataItem = {
  id: number
  date: string
  name: string
  result: string
  value: string
}

type ChartProps = {
  data?: DataItem[] | undefined
  isMobile: boolean
}

const Chart: React.FC<ChartProps> = ({ data, isMobile }) => {

  const setFillColor = (res: string): string => {
    switch (res) {
      case 'sub':
        return '#aa2323'
      default:
        return '#28b328'
    }
  }

  data?.length ? data : []

  return (
    <CardContainer>
      <Card>
      <div>
        <p>Lançamentos</p>
      </div>
      <CardDashboard>
      <BarChart width={data?.length ? data.length * 28 : 300} height={250} data={data} layout="horizontal">
        <Bar stackId="id" dataKey="value" >
          {
            data?.map((entry, index) => (
              <Cell key={index} fill={setFillColor(data[index].result)}/>
              ))
            }
        </Bar>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="1 1" />
      </BarChart>
      </CardDashboard>
      </Card>
    </CardContainer>
  )
}

export default Chart
