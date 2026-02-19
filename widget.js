const STATION_CODE = "Q312003001";
const REFRESH_INTERVAL_MS = 60_000;

const CANDIDATE_ENDPOINTS = [
  `https://www.vigicrues.gouv.fr/services/observations.json/index.php?CdStationHydro=${STATION_CODE}&GrdSerie=H&FormatSortie=simple`,
  `https://www.vigicrues.gouv.fr/services/observations.json?CdStationHydro=${STATION_CODE}&GrdSerie=H&FormatSortie=simple`,
  `https://hubeau.eaufrance.fr/api/v1/hydrometrie/observations_tr?code_entite=${STATION_CODE}&grandeur_hydro=H&size=20&sort=desc`,
];

const heightEl = document.getElementById("height");
const timeEl = document.getElementById("observation-time");
const statusEl = document.getElementById("status");
const refreshButton = document.getElementById("refresh");

function setStatus(message, level = "ok") {
  statusEl.textContent = message;
  statusEl.classList.remove("warning", "error");

  if (level === "warning" || level === "error") {
    statusEl.classList.add(level);
  }
}

function formatObservedAt(rawDate) {
  if (!rawDate) {
    return "Observation time unavailable";
  }

  const date = new Date(rawDate);

  if (Number.isNaN(date.getTime())) {
    return `Observed at: ${rawDate}`;
  }

  return `Observed at: ${date.toLocaleString([], {
    dateStyle: "medium",
    timeStyle: "short",
  })}`;
}

function parseVigicrues(payload) {
  if (!Array.isArray(payload?.Serie) || payload.Serie.length === 0) {
    return null;
  }

  const last = payload.Serie[payload.Serie.length - 1];

  return {
    value: Number(last?.H),
    observedAt: last?.DateObs,
    source: "Vigicrues",
  };
}

function parseHubeau(payload) {
  if (!Array.isArray(payload?.data) || payload.data.length === 0) {
    return null;
  }

  const point = payload.data[0];

  return {
    value: Number(point?.resultat_obs),
    observedAt: point?.date_obs,
    source: "Hubeau",
  };
}

function parseObservation(payload, endpoint) {
  if (endpoint.includes("hubeau")) {
    return parseHubeau(payload);
  }

  return parseVigicrues(payload);
}

async function fetchFrom(endpoint) {
  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const payload = await response.json();
  const observation = parseObservation(payload, endpoint);

  if (!observation || !Number.isFinite(observation.value)) {
    throw new Error("Missing or invalid observation payload");
  }

  return observation;
}

async function loadLatestObservation() {
  setStatus("Refreshing…", "ok");

  for (const endpoint of CANDIDATE_ENDPOINTS) {
    try {
      const observation = await fetchFrom(endpoint);
      heightEl.textContent = observation.value.toFixed(2);
      timeEl.textContent = formatObservedAt(observation.observedAt);
      setStatus(`Live data source: ${observation.source}`, "ok");
      return;
    } catch (error) {
      console.warn(`Failed endpoint: ${endpoint}`, error);
    }
  }

  setStatus("Unable to refresh right now. Retrying automatically.", "warning");
}

refreshButton.addEventListener("click", () => {
  loadLatestObservation();
});

loadLatestObservation();
setInterval(loadLatestObservation, REFRESH_INTERVAL_MS);
