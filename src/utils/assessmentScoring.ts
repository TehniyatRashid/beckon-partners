export interface DiagnosticScoreInput {
  teamSize: string;
  primaryFriction: string;
  selectedTools: string[];
  systemIntegrationStatus: string;
  wastedHours: string;
}

export interface DiagnosticScoreResult {
  healthScore: number;
  healthTier: 'Aligned Architecture' | 'Moderate Alignment' | 'Severe Operational Friction';
  healthDetail: string;
  recoverableHours: number;
  recoverableRange: string;
  deductions: {
    connectivity: number;
    toolSprawl: number;
    frictionSeverity: number;
    statedWaste: number;
    scaleStress: number;
  };
}

const has = (value: string, text: string) => value.toLowerCase().includes(text.toLowerCase());

const connectivityValues = (status: string) => {
  if (has(status, 'mostly manual')) return { deduction: 28, multiplier: 1.0 };
  if (has(status, 'no —') || has(status, 'largely separate')) return { deduction: 35, multiplier: 1.3 };
  if (has(status, 'some do') || has(status, "others are disconnected")) return { deduction: 15, multiplier: 0.6 };
  if (has(status, "i'm not sure")) return { deduction: 15, multiplier: 0.6 };
  return { deduction: 0, multiplier: 0.2 };
};

const teamValues = (teamSize: string) => {
  if (has(teamSize, '150+')) return { baseHours: 180, ceiling: 180, scaleDeduction: 10 };
  if (has(teamSize, '51')) return { baseHours: 90, ceiling: 95, scaleDeduction: 8 };
  if (has(teamSize, '16')) return { baseHours: 40, ceiling: 45, scaleDeduction: 6 };
  if (has(teamSize, '6')) return { baseHours: 18, ceiling: 22, scaleDeduction: 4 };
  if (has(teamSize, '2')) return { baseHours: 8, ceiling: 10, scaleDeduction: 2 };
  return { baseHours: 8, ceiling: 10, scaleDeduction: 0 };
};

const wasteValues = (wastedHours: string) => {
  if (has(wastedHours, '30+')) return { deduction: 15, representativeHours: 30 };
  if (has(wastedHours, '15')) return { deduction: 10, representativeHours: 22.5 };
  if (has(wastedHours, '5')) return { deduction: 5, representativeHours: 10 };
  return { deduction: 0, representativeHours: 2.5 };
};

const frictionDeduction = (friction: string) => {
  if (has(friction, 'disconnected software')) return 18;
  if (has(friction, 'manual work') || has(friction, 'administration')) return 16;
  if (has(friction, 'costs') || has(friction, 'profitability') || has(friction, 'management visibility')) return 14;
  if (has(friction, 'missed enquiries') || has(friction, 'sales opportunities')) return 12;
  if (has(friction, 'retaining customers') || has(friction, 'operations consistent') || has(friction, 'staff')) return 10;
  // Custom/unspecified friction receives the lowest defined severity, avoiding an unsupported deduction.
  return 10;
};

export const calculateDiagnosticScore = (input: DiagnosticScoreInput): DiagnosticScoreResult => {
  const connectivity = connectivityValues(input.systemIntegrationStatus);
  const team = teamValues(input.teamSize);
  const waste = wasteValues(input.wastedHours);
  const usesSpreadsheetGlue = input.selectedTools.some(tool =>
    has(tool, 'spreadsheet') || has(tool, 'google sheets') || has(tool, 'excel') || has(tool, 'manual processes')
  );
  const toolCount = input.selectedTools.filter(tool =>
    !has(tool, 'not sure')
  ).length;
  const baseToolDeduction = toolCount >= 6 ? 12 : toolCount >= 3 ? 6 : 0;
  const toolSprawl = Math.min(20, baseToolDeduction + (usesSpreadsheetGlue ? 8 : 0));
  const frictionSeverity = frictionDeduction(input.primaryFriction);

  const deductions = {
    connectivity: connectivity.deduction,
    toolSprawl,
    frictionSeverity,
    statedWaste: waste.deduction,
    scaleStress: team.scaleDeduction,
  };
  const totalDeduction = Object.values(deductions).reduce((sum, value) => sum + value, 0);
  const healthScore = Math.max(0, Math.min(100, 100 - totalDeduction));

  const modeledInefficiency = team.baseHours * connectivity.multiplier * (1 + toolCount * 0.08);
  const rawYield = ((0.6 * waste.representativeHours) + (0.4 * modeledInefficiency)) * 0.65;
  const recoverableHours = Math.min(team.ceiling, Math.max(0, rawYield));
  // The specification mandates a range but not its width. A conservative ±15% band
  // communicates estimation uncertainty while retaining the prescribed calculation.
  const rangeLow = Math.max(0, Math.floor(recoverableHours * 0.85));
  const rangeHigh = Math.min(team.ceiling, Math.max(rangeLow + 1, Math.ceil(recoverableHours * 1.15)));

  if (healthScore >= 75) {
    return {
      healthScore,
      healthTier: 'Aligned Architecture',
      healthDetail: 'Solid foundations, ready for advanced workflow automation and AI telemetry.',
      recoverableHours,
      recoverableRange: `${rangeLow}–${rangeHigh} hrs/week*`,
      deductions,
    };
  }
  if (healthScore >= 45) {
    return {
      healthScore,
      healthTier: 'Moderate Alignment',
      healthDetail: 'Core operations function, but manual bridges and data gaps create drag.',
      recoverableHours,
      recoverableRange: `${rangeLow}–${rangeHigh} hrs/week*`,
      deductions,
    };
  }
  return {
    healthScore,
    healthTier: 'Severe Operational Friction',
    healthDetail: 'Critical fragmentation is creating labor waste and operational blindspots.',
    recoverableHours,
    recoverableRange: `${rangeLow}–${rangeHigh} hrs/week*`,
    deductions,
  };
};
