export const data = {
  labels: [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ],
  datasets: [
    {
      label: "Telefonda o'tkazilgan vaqt (sekundlarda)",
      data: [
        960, 0, 0, 0, 0, 300, 1800, 2400, 3600, 4200, 1800, 2400, 3000,
        3300, 3600, 4200, 4800, 3600, 2400, 1800, 900, 1200, 600, 300,
      ],
      fill: true,
      tension: 0.2,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bir kunda telefonda o'tkazilgan vaqt (sekundlarda)",
    },
  },
  scales: {
    x: {
      ticks: {
        autoSkip: false,
      },
    },
    y: {
      ticks: {
        autoSkip: true, 
      },
    },
  },
};
