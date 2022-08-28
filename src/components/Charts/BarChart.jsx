import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function BarChart(props){
  const {arrLevelName,arrData} = props
 
  return(
    <>
    <Bar
  datasetIdKey='id'
  data={{
    labels: arrLevelName,
    datasets: [
      {
        id: 1,
        label: [arrLevelName],
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

export default BarChart;