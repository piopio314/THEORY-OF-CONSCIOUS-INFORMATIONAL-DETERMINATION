import { Router } from 'express';

const router = Router();

// GET /api/v1/holographic/field
router.get('/field', (req, res) => {
  const { dimensions = 6, size = 10 } = req.query;
  
  // Prosta symulacja pola holograficznego
  const field = Array.from({ length: Number(size) }, () => 
    Array.from({ length: Number(size) }, () => 
      Array.from({ length: Number(dimensions) }, () => Math.random() * 2 - 1)
    )
  );
  
  res.json({
    success: true,
    data: {
      field,
      dimensions: Number(dimensions),
      size: Number(size),
      timestamp: new Date().toISOString()
    }
  });
});

// GET /api/v1/holographic/correlation
router.get('/correlation', (req, res) => {
  const { distance = 1, dimensions = 6 } = req.query;
  const d = Number(dimensions);
  const r = Number(distance);
  
  // C(r) ∝ r^(-(n-4)/2)
  const exponent = -(d - 4) / 2;
  const correlation = Math.pow(r, exponent);
  
  res.json({
    success: true,
    data: {
      distance: r,
      dimensions: d,
      correlation,
      formula: `C(r) ∝ r^(-(${d}-4)/2) = ${correlation.toFixed(4)}`
    }
  });
});

export { router as holographicRouter };