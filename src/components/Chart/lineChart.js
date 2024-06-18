import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy previous chart instance
    }

    if (chartRef.current && data) {
      const ctx = chartRef.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.months,


          datasets: [
            {
              label: 'Monthly Bookings',
              data: data.counts,
              fill:true,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.3,
              borderWidth: 2,
              pointRadius: 5,
              pointBackgroundColor: 'rgba(75, 192, 192, 1)',
              pointBorderColor: 'rgba(75, 192, 192, 1)',
              pointHoverRadius: 7,
              pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
              pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return tooltipItem.raw.toFixed(0);
                },
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Clean up on component unmount
      }
    };
  }, [data]);

  return (
    <div className="flex-auto p-4">
      <div>
        <canvas ref={chartRef} id="chart-line" height="300"></canvas>
      </div>
    </div>
  );
};

export default LineChart;
