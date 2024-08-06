// src/components/Dashboard.js
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Container, Grid, Typography, Box, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartDataLabels,
  annotationPlugin
);

const Dashboard = () => {
  const lineChartData = {
    labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [1600, 800, 800],
        borderColor: 'orange',
        fill: false,
        tension: 0.1,
        pointBackgroundColor: 'orange',
        pointBorderColor: 'orange',
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'orange',
        pointHoverBorderColor: 'orange',
      },
      {
        label: 'Sales',
        data: [1404, 800, 500],
        borderColor: 'teal',
        fill: false,
        tension: 0.1,
        pointBackgroundColor: 'teal',
        pointBorderColor: 'teal',
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'teal',
        pointHoverBorderColor: 'teal',
      },
    ],
  };

  const pieChartData = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [1485, 1174],
        backgroundColor: ['#ff6384', '#36a2eb'],
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true, // Use point style for legends
          boxWidth: 8,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toFixed(2);
            }
            if (context.dataset.label === 'Sales') {
              const avgOrderValue = 351;
              label += ` (Avg Order Value: ${avgOrderValue})`;
            }
            return label;
          },
        },
      },
      annotation: {
        annotations: {
          label1: {
            type: 'label',
            xValue: '7/21/2024 - 7/27/2024',
            yValue: 1600,
            content: '4',
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'black',
            xAdjust: 40,
            yAdjust: 0,
          },
          label2: {
            type: 'label',
            xValue: '7/21/2024 - 7/27/2024',
            yValue: 1200,
            content: '3',
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'black',
            xAdjust: 40,
            yAdjust: 0,
          },
          label3: {
            type: 'label',
            xValue: '7/21/2024 - 7/27/2024',
            yValue: 800,
            content: '2',
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'black',
            xAdjust: 40,
            yAdjust: 0,
          },
          label4: {
            type: 'label',
            xValue: '7/21/2024 - 7/27/2024',
            yValue: 400,
            content: '1',
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'black',
            xAdjust: 40,
            yAdjust: 0,
          },
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Date Range',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        ticks: {
          callback: function (value) {
            return value / 1000 + 'k';
          },
          stepSize: 400,
        },
        suggestedMax: 1600,
        suggestedMin: 0,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.1)',
        backgroundColor: 'rgba(0,0,0,0.1)',
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },
    },
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      datalabels: {
        color: '#fff',
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return `${value} (${percentage}%)`;
        },
      },
    },
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 1, height: '100%', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6">Sales vs Orders</Typography>
              <IconButton size="small" sx={{ ml: 1 }}>
                <InfoIcon fontSize="small" />
              </IconButton>
            </Box>
            <Line data={lineChartData} options={lineChartOptions} height={300} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ position: 'relative' }}>
          <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 1, height: '100%', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6">Portion of Sales</Typography>
              <IconButton size="small" sx={{ ml: 1 }}>
                <InfoIcon fontSize="small" />
              </IconButton>
            </Box>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Pie data={pieChartData} options={pieChartOptions} height={300} />
              <Typography
                variant="h5"
                sx={{
                  position: 'absolute',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                2659
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
