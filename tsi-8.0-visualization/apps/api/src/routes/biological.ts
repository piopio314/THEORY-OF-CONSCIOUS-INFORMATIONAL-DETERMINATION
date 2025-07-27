import { Router } from 'express';
import { z } from 'zod';

const router = Router();

// Schemat walidacji dla danych biologicznych
const BiologicalDataSchema = z.object({
  metabolicRate: z.number().positive(),
  bioelectricField: z.number().positive(),
  informationEntropy: z.number().positive(),
  networkConnectivity: z.number().positive()
});

// Kalkulator M·E·I·C
function calculateComplexityProduct(data: z.infer<typeof BiologicalDataSchema>) {
  const M = data.metabolicRate / 2.3e-3; // Normalizacja do baseline ATP
  const E = data.bioelectricField / 1e6; // Normalizacja do baseline field
  const I = data.informationEntropy / 10; // Normalizacja do max entropy
  const C = Math.log(1 + data.networkConnectivity);
  
  const product = M * E * I * C;
  const consciousnessLevel = Math.tanh((product - 2.7) / 0.8);
  
  return {
    M, E, I, C,
    product,
    consciousnessLevel,
    isConscious: consciousnessLevel > 0.5
  };
}

// GET /api/v1/biological/complexity
router.get('/complexity', (req, res) => {
  try {
    const data = BiologicalDataSchema.parse(req.query);
    const result = calculateComplexityProduct(data);
    
    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Invalid input data'
    });
  }
});

// POST /api/v1/biological/calculate
router.post('/calculate', (req, res) => {
  try {
    const data = BiologicalDataSchema.parse(req.body);
    const result = calculateComplexityProduct(data);
    
    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Invalid input data'
    });
  }
});

// GET /api/v1/biological/threshold
router.get('/threshold', (req, res) => {
  res.json({
    success: true,
    data: {
      criticalValue: 2.7,
      transitionWidth: 0.8,
      description: 'Consciousness threshold based on M·E·I·C product'
    },
    timestamp: new Date().toISOString()
  });
});

export { router as biologicalRouter };