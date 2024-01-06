// ... (Previous code)

// Endpoint: Total Revenue
app.get('/api/sales/total-revenue', async (req, res) => {
    try {
      const totalRevenue = await Sales.aggregate([
        { $group: { _id: null, total: { $sum: { $multiply: ['$quantity', '$price'] } } } }
      ]);
      res.json({ totalRevenue: totalRevenue[0].total });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Define other endpoints similarly
  
  // ... (Remaining code)
  