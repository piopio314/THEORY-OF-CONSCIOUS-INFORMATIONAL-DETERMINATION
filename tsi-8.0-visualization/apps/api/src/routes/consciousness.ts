import { Router } from 'express';

const router = Router();

// GET /api/v1/consciousness/level
router.get('/level', (req, res) => {
  const { m, e, i, c } = req.query;
  
  if (!m || !e || !i || !c) {
    return res.status(400).json({
      success: false,
      error: 'Missing parameters: m, e, i, c are required'
    });
  }
  
  const M = Number(m);
  const E = Number(e);
  const I = Number(i);
  const C = Number(c);
  
  const product = M * E * I * C;
  const consciousnessLevel = Math.tanh((product - 2.7) / 0.8);
  
  res.json({
    success: true,
    data: {
      M, E, I, C,
      product,
      consciousnessLevel,
      isConscious: consciousnessLevel > 0.5,
      levelDescription: consciousnessLevel > 0.8 ? 'High' : 
                       consciousnessLevel > 0.5 ? 'Medium' : 
                       consciousnessLevel > 0.2 ? 'Low' : 'None'
    }
  });
});

// GET /api/v1/consciousness/monitor
router.get('/monitor', (req, res) => {
  // Symulacja danych monitoringu
  const data = {
    timestamp: new Date().toISOString(),
    participants: Math.floor(Math.random() * 10) + 1,
    averageConsciousness: Math.random() * 0.8 + 0.2,
    synchronization: Math.random(),
    activeSystems: ['biological', 'quantum', 'holographic']
  };
  
  res.json({
    success: true,
    data
  });
});

export { router as consciousnessRouter };