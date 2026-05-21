import "server-only";

const API_BASE_URL = "https://backend.trayakshconstruction.com/api";

function getApiHeaders() {
  const secret = process.env.API_SECRET_KEY;

  return {
    Accept: "application/json",
    ...(secret
      ? {
          "X-API-KEY": secret,
          Authorization: `Bearer ${secret}`,
        }
      : {}),
  };
}

async function fetchApi(path, { allowNotFound = false } = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: getApiHeaders(),
    next: { revalidate: 3600 },
  });

  if (allowNotFound && response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Trayaksh API request failed: ${path}`);
  }

  return response.json();
}

function unwrapList(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.value)) return payload.value;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

export async function getEstimatorCatalog() {
  const [citiesPayload, packageRatesPayload, pricingTiersPayload] =
    await Promise.all([
      fetchApi("/cities"),
      fetchApi("/packages"),
      fetchApi("/pricing-tiers"),
    ]);

  return {
    cities: unwrapList(citiesPayload),
    packageRates: packageRatesPayload || {},
    pricingTiers: unwrapList(pricingTiersPayload),
  };
}

export async function getProjects() {
  const projectsPayload = await fetchApi("/projects");

  return unwrapList(projectsPayload);
}

export async function getCities() {
  const citiesPayload = await fetchApi("/cities");

  return unwrapList(citiesPayload);
}

export async function getProjectByUrl(projectUrl) {
  if (!projectUrl) return null;

  const encodedProjectUrl = encodeURIComponent(projectUrl);

  const project = await fetchApi(`/project/${encodedProjectUrl}`, { allowNotFound: true });

  return project || fetchApi(`/${encodedProjectUrl}`, { allowNotFound: true });
}
