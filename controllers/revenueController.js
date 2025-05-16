exports.getRevenueData = (req, res) => {
  const category = req.query.category;

  const allData = {
    totalOrders: 120,
    totalSales: 15000,
    trends: {
      daily: [100, 120, 110, 150],
      weekly: [700, 800, 650, 900],
      monthly: [2000, 3000, 2500, 3500],
      annually: [24000, 36000, 30000, 42000],
    },
  };

  const categoryDataMap = {
    Electronics: {
      totalOrders: 50,
      totalSales: 7000,
      trends: {
        monthly: [1500, 1800, 1700, 2000],
      },
    },
    Grocery: {
      totalOrders: 40,
      totalSales: 5000,
      trends: {
        monthly: [1200, 1300, 1250, 1400],
      },
    },
    Fashion: {
      totalOrders: 30,
      totalSales: 3000,
      trends: {
        monthly: [800, 900, 850, 1000],
      },
    },
  };

  if (category && categoryDataMap[category]) {
    res.json(categoryDataMap[category]);
  } else {
    res.json(allData);
  }
};
