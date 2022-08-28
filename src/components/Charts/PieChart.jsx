import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function PieChart(props){
  const {level_name, arrData} = props

  return(
    <>
    <Pie
  datasetIdKey='id'
  data={{
    labels: level_name,
    datasets: [
      {
        id: 1,
        label: 'avg salary',
        data: arrData,
        backgroundColor: [
      '#4CCA9C',
      '#0181F3',
      '#F9CE67'
    ],
      }
    ],
    
  }}
/>
    </>
  )
}

export default PieChart;