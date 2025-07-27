import { Router } from 'express';

const router = Router();

// GET /api/v1/quantum/state
router.get('/state', (req, res) => {
  const { qubits = 2 } = req.query;
  const n = Number(qubits);
  
  // Prosta symulacja stanu kwantowego
  const stateVector = Array.from({ length: Math.pow(2, n) }, () => ({
    real: Math.random() * 2 - 1,
    imag: Math.random() * 2 - 1
  }));
  
  // Normalizacja
  const norm = Math.sqrt(stateVector.reduce((sum, comp) => 
    sum + comp.real * comp.real + comp.imag * comp.imag, 0
  ));
  
  const normalized = stateVector.map(comp => ({
    real: comp.real / norm,
    imag: comp.imag / norm,
    probability: (comp.real * comp.real + comp.imag * comp.imag) / (norm * norm)
  }));
  
  res.json({
    success: true,
    data: {
      qubits: n,
      stateVector: normalized,
      dimension: Math.pow(2, n)
    }
  });
});

// GET /api/v1/quantum/coherence
router.get('/coherence', (req, res) => {
  const { complexity = 1 } = req.query;
  const c = Number(complexity);
  
  // Prosta symulacja czasu koherencji
  const baseTime = 1e-6; // 1 mikrosekunda
  const enhancedTime = baseTime * (1 + 0.084 * Math.pow(c, 0.75));
  
  res.json({
    success: true,
    data: {
      baseCoherenceTime: baseTime,
      enhancedCoherenceTime: enhancedTime,
      enhancementFactor: enhancedTime / baseTime,
      complexity: c
    }
  });
});

export { router as quantumRouter };