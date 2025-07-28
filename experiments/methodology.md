# Research Methodology - TSI 8.0

## Description
Complete research methodology applied in experiments verifying TSI 8.0 theory, including procedures, standards, and protocols.

## Scope
- Experimental procedures
- Measurement standards
- Quality control
- Statistical analysis
- Results documentation

---

## Experimental Procedures

This section outlines the detailed steps for conducting experiments to verify TSI 8.0 theory.

1.  **Culture preparation**:
    *   Using 6 mature neural cultures from rat visual cortex (DIV 14-21).
    *   Placing cultures in isolated Faraday chambers (distance > 2m).
    *   Stabilizing culture conditions for 24h before measurement.

2.  **Signal recording**:
    *   Installing microelectrode arrays (MEA) in each culture.
    *   Simultaneous recording of activity for 60 minutes with 1000 Hz sampling rate.
    *   Temperature control (37°C) and CO₂ (5%) throughout the experiment.

3.  **Synchronization and control**:
    *   Using a common clock signal for all recording systems.
    *   Control of electromagnetic environment (EMG background measurement).
    *   Random introduction of light stimulus (LED, 470 nm) as an external trigger.

4.  **Data analysis**:
    *   Signal filtering (1-40 Hz Butterworth 4th order).
    *   Calculation of cross-correlation function for each pair of cultures.
    *   Coherence analysis in bands: delta (1-4 Hz), theta (4-8 Hz), alpha (8-13 Hz), beta (13-30 Hz), gamma (30-40 Hz).

5.  **Statistical validation**:
    *   Comparison with control data (dead cultures/fake signals).
    *   Permutation tests (1000 permutations) for assessing correlation significance.
    *   Bonferroni correction for multiple comparisons.

## Measurement Standards

This section details the standards for measurements and equipment used.

### Equipment
| Device | Model | Estimated Cost |
|---|---|---|
| MEA System | Multi Channel Systems MEA2100 | $8,000 |
| Amplifiers | Intan RHD2000 | $2,000 |
| Faraday Chambers | Custom-made | $500 |
| Software | MATLAB + Signal Processing Toolbox | $1,000 |
| **Total Sum** | | **$11,500** |
*Note: Cost can be reduced to $8,500 by using open-source software (Python + MNE) and equipment rental.*

### Recording Parameters
- Sampling rate: 1000 Hz
- Recording duration: 60 minutes
- Temperature: 37°C
- CO₂ concentration: 5%
- Frequency bands for analysis: delta (1-4 Hz), theta (4-8 Hz), alpha (8-13 Hz), beta (13-30 Hz), gamma (30-40 Hz).

## Quality Control

Ensuring the reliability and validity of experimental data through rigorous quality control measures.

### Synchronization and Environmental Control
- A common clock signal will be used for all recording systems to ensure temporal accuracy.
- Electromagnetic interference will be monitored via background EMG measurements.
- Faraday chambers will be used to isolate cultures from external electromagnetic influences.

### Control Groups
- **Inactivated cultures:** Neural cultures treated with Tetrodotoxin (TTX, 1 μM) to block neuronal activity.
- **Fake signals:** Generation of random signals with statistical parameters similar to biological signals.
- **Full isolation:** Measurements conducted under complete electromagnetic isolation to rule out environmental factors.

## Statistical Analysis

Methods for analyzing collected data and validating hypotheses.

### Data Analysis Techniques
- **Signal Filtering:** Butterworth 4th order filter applied for the 1-40 Hz range.
- **Cross-correlation:** Pearson correlation coefficient calculated for each pair of culture signals.
- **Coherence Analysis:** Coherence measured across specified frequency bands (delta, theta, alpha, beta, gamma).
- **Permutation Tests:** 1000 permutations used to assess the statistical significance of observed correlations.

### Hypothesis Testing
- **Null Hypothesis (H₀):** Isolated neural cultures do not show statistically significant correlations of EEG signals under conditions of no physical connection.
- **Alternative Hypothesis (H₁):** Neural cultures exhibit non-local correlations of EEG signals (p < 0.05) measured by Pearson correlation coefficient for frequency bands 1-40 Hz.

### Statistical Validation
- Comparison of results against control data.
- Application of Bonferroni correction for multiple comparisons to control for Type I errors.

## Results Documentation

Standards for documenting and reporting experimental outcomes.

### Success Criteria
- At least 3 out of 6 culture pairs must show significant correlations (p < 0.05).
- Correlations must not be attributable to known technical artifacts.
- The observed effect must be repeatable in a minimum of 3 independent experiments.

### Limitations and Error Sources
- **Potential error sources:** Electrical artifacts, mechanical micro-vibrations, temperature fluctuations.
- **Interpretation limitations:** Experiment does not directly prove holographic consciousness projection; results may be explained by unknown physical mechanisms; effect scale might be too small for practical applications.
- **What the experiment CANNOT show:** Direction of information flow (causality), mechanism of holographic projection, connection with higher dimensions, scale of effect in systems more complex than neural cultures.