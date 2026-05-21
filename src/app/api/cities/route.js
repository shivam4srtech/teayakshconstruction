import { getCities } from "@/lib/trayakshApi";

export async function GET() {
  try {
    const cities = await getCities();

    return Response.json({ cities });
  } catch (error) {
    console.error("Cities API Error:", error);

    return Response.json({ cities: [] }, { status: 500 });
  }
}
