export const STAMP_DUTY_RATES = [
  { name: "Andhra Pradesh", stampDutyLabel: "5%", registrationLabel: "0.5%", stampDutyRate: 0.05, registrationRate: 0.005 },
  { name: "Arunachal Pradesh", stampDutyLabel: "6%", registrationLabel: "1%", stampDutyRate: 0.06, registrationRate: 0.01 },
  { name: "Assam", stampDutyLabel: "6% (up to 8.25% based on local body)", registrationLabel: "1% to 2% (varies by sub-registrar)", stampDutyRate: 0.06, registrationRate: 0.02, note: "Registration estimated at the upper 2% rate from the sheet." },
  { name: "Bihar", stampDutyLabel: "6%", registrationLabel: "2%", stampDutyRate: 0.06, registrationRate: 0.02 },
  { name: "Chhattisgarh", stampDutyLabel: "5%", registrationLabel: "4%", stampDutyRate: 0.05, registrationRate: 0.04 },
  { name: "Goa", stampDutyLabel: "3.5% to 5% (slab-based on property value)", registrationLabel: "3%", stampDutyRate: 0.05, registrationRate: 0.03, note: "Stamp duty estimated at the upper 5% rate from the sheet." },
  { name: "Gujarat", stampDutyLabel: "4.9%", registrationLabel: "1%", stampDutyRate: 0.049, registrationRate: 0.01 },
  { name: "Haryana", stampDutyLabel: "7% (Urban) / 5% (Rural)", registrationLabel: "Capped on a slab up to maximum INR 50,000", stampDutyRate: 0.07, registrationRate: 0.01, registrationCap: 50000, note: "Stamp duty uses the urban 7% rate from the sheet." },
  { name: "Himachal Pradesh", stampDutyLabel: "6%", registrationLabel: "2%", stampDutyRate: 0.06, registrationRate: 0.02 },
  { name: "Jharkhand", stampDutyLabel: "4%", registrationLabel: "3%", stampDutyRate: 0.04, registrationRate: 0.03 },
  { name: "Karnataka", stampDutyLabel: "5% (> INR 45L) / 3% (INR 21L-INR 45L) / 2% (< INR 20L)", registrationLabel: "1%", stampDutyRate: 0.05, registrationRate: 0.01, stampDutySlabs: [{ max: 2000000, rate: 0.02 }, { max: 4500000, rate: 0.03 }, { max: Infinity, rate: 0.05 }] },
  { name: "Kerala", stampDutyLabel: "8%", registrationLabel: "2%", stampDutyRate: 0.08, registrationRate: 0.02 },
  { name: "Madhya Pradesh", stampDutyLabel: "7.5% (includes municipal cesses)", registrationLabel: "3%", stampDutyRate: 0.075, registrationRate: 0.03 },
  { name: "Maharashtra", stampDutyLabel: "5% to 7% (varies by municipality & local cesses)", registrationLabel: "1% (capped at INR 30,000 for values over INR 30L)", stampDutyRate: 0.07, registrationRate: 0.01, registrationCapThreshold: 3000000, registrationCap: 30000, note: "Stamp duty estimated at the upper 7% rate from the sheet." },
  { name: "Manipur", stampDutyLabel: "7%", registrationLabel: "3%", stampDutyRate: 0.07, registrationRate: 0.03 },
  { name: "Meghalaya", stampDutyLabel: "9.9%", registrationLabel: "1%", stampDutyRate: 0.099, registrationRate: 0.01 },
  { name: "Mizoram", stampDutyLabel: "3%", registrationLabel: "1%", stampDutyRate: 0.03, registrationRate: 0.01 },
  { name: "Nagaland", stampDutyLabel: "8.25%", registrationLabel: "1%", stampDutyRate: 0.0825, registrationRate: 0.01 },
  { name: "Odisha", stampDutyLabel: "5%", registrationLabel: "2%", stampDutyRate: 0.05, registrationRate: 0.02 },
  { name: "Punjab", stampDutyLabel: "7%", registrationLabel: "1%", stampDutyRate: 0.07, registrationRate: 0.01 },
  { name: "Rajasthan", stampDutyLabel: "6%", registrationLabel: "1% (capped at INR 4 Lakhs in specific cases)", stampDutyRate: 0.06, registrationRate: 0.01, registrationCap: 400000 },
  { name: "Sikkim", stampDutyLabel: "5% (Sikkimese origin) / 10% (Others)", registrationLabel: "1%", stampDutyRate: 0.1, registrationRate: 0.01, note: "Stamp duty estimated at the 10% non-Sikkimese rate from the sheet." },
  { name: "Tamil Nadu", stampDutyLabel: "7%", registrationLabel: "4%", stampDutyRate: 0.07, registrationRate: 0.04 },
  { name: "Telangana", stampDutyLabel: "5%", registrationLabel: "0.5%", stampDutyRate: 0.05, registrationRate: 0.005 },
  { name: "Tripura", stampDutyLabel: "5%", registrationLabel: "1%", stampDutyRate: 0.05, registrationRate: 0.01 },
  { name: "Uttar Pradesh", stampDutyLabel: "7%", registrationLabel: "1%", stampDutyRate: 0.07, registrationRate: 0.01 },
  { name: "Uttarakhand", stampDutyLabel: "5%", registrationLabel: "2%", stampDutyRate: 0.05, registrationRate: 0.02 },
  { name: "West Bengal", stampDutyLabel: "5% (Properties > INR 25L) / 4% (< INR 25L)", registrationLabel: "1%", stampDutyRate: 0.05, registrationRate: 0.01, stampDutySlabs: [{ max: 2500000, rate: 0.04 }, { max: Infinity, rate: 0.05 }] },
  { name: "Andaman & Nicobar Islands", stampDutyLabel: "5%", registrationLabel: "1%", stampDutyRate: 0.05, registrationRate: 0.01 },
  { name: "Chandigarh", stampDutyLabel: "6%", registrationLabel: "1%", stampDutyRate: 0.06, registrationRate: 0.01 },
  { name: "Dadra & Nagar Haveli and Daman & Diu", stampDutyLabel: "5%", registrationLabel: "1%", stampDutyRate: 0.05, registrationRate: 0.01 },
  { name: "Delhi", stampDutyLabel: "6%", registrationLabel: "1% (plus a minor INR 100 paste fee)", stampDutyRate: 0.06, registrationRate: 0.01, fixedRegistrationFee: 100 },
  { name: "Jammu & Kashmir", stampDutyLabel: "7%", registrationLabel: "1.2%", stampDutyRate: 0.07, registrationRate: 0.012 },
  { name: "Ladakh", stampDutyLabel: "7%", registrationLabel: "1.2%", stampDutyRate: 0.07, registrationRate: 0.012 },
  { name: "Lakshadweep", stampDutyLabel: "5%", registrationLabel: "1%", stampDutyRate: 0.05, registrationRate: 0.01 },
  { name: "Puducherry", stampDutyLabel: "5%", registrationLabel: "1%", stampDutyRate: 0.05, registrationRate: 0.01 },
];

export function getStampDutyRate(stateName) {
  return STAMP_DUTY_RATES.find((state) => state.name === stateName) || null;
}

function getStampDutyRateForValue(rateConfig, propertyValue) {
  const slab = rateConfig.stampDutySlabs?.find((item) => propertyValue <= item.max);
  return slab?.rate ?? rateConfig.stampDutyRate;
}

export function calculateStampDuty(propertyValue, stateName) {
  const numericValue = Number(propertyValue);
  const rateConfig = getStampDutyRate(stateName);

  if (!rateConfig || !Number.isFinite(numericValue) || numericValue <= 0) {
    return null;
  }

  const appliedStampDutyRate = getStampDutyRateForValue(rateConfig, numericValue);
  const stampDuty = Math.round(numericValue * appliedStampDutyRate);
  let registrationFee = Math.round(numericValue * rateConfig.registrationRate);

  if (rateConfig.registrationCap && (!rateConfig.registrationCapThreshold || numericValue > rateConfig.registrationCapThreshold)) {
    registrationFee = Math.min(registrationFee, rateConfig.registrationCap);
  }

  registrationFee += rateConfig.fixedRegistrationFee || 0;

  return {
    state: rateConfig.name,
    propertyValue: Math.round(numericValue),
    stampDuty,
    registrationFee,
    totalFees: stampDuty + registrationFee,
    totalOutlay: Math.round(numericValue + stampDuty + registrationFee),
    stampDutyRate: appliedStampDutyRate,
    registrationRate: rateConfig.registrationRate,
    stampDutyLabel: rateConfig.stampDutyLabel,
    registrationLabel: rateConfig.registrationLabel,
    note: rateConfig.note || "",
  };
}
