export const CITIES_LIST = [
  "Bengaluru",
  "Mumbai",
  "Delhi NCR",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Ahmedabad",
  "Kolkata",
  "Jaipur",
  "Lucknow",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Visakhapatnam",
  "Surat",
  "Patna",
  "Vadodara",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Ranchi",
  "Coimbatore",
  "Kanpur",
  "Madurai",
  "Guwahati",
  "Others",
];

export function calculateMaterialEstimate(slabArea, floors) {
  const totalBuiltUpArea = Math.round(Number(slabArea) * Number(floors));

  if (!Number.isFinite(totalBuiltUpArea) || totalBuiltUpArea <= 0) {
    return {
      totalBuiltUpArea: 0,
      steel: 0,
      bricks: 0,
    };
  }

  return {
    totalBuiltUpArea,
    steel: Math.round(totalBuiltUpArea * 4),
    bricks: Math.round(totalBuiltUpArea * 15),
  };
}
