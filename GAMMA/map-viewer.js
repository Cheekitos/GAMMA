(function () {
'use strict';

const MAP_LEVELS = {"global_map":{"width":1024,"height":2634},"levels":[{"id":"l03_agroprom","name":"Agroprom","underground":false,"global_rect":{"x1":164,"y1":1848,"x2":332,"y2":2016},"worldBounds":{"minX":-275,"maxX":335,"minZ":-370,"maxZ":240}},{"id":"l07_military","name":"Army Warehouses","underground":false,"global_rect":{"x1":425,"y1":1231,"x2":590,"y2":1396},"worldBounds":{"minX":-420,"maxX":180,"minZ":-105,"maxZ":495}},{"id":"l12_stancia","name":"CNPP (North)","underground":false,"global_rect":{"x1":322,"y1":298,"x2":728,"y2":495},"worldBounds":{"minX":-600.105,"maxX":1729.65,"minZ":-747.782,"maxZ":850.523}},{"id":"l12_stancia_2","name":"CNPP (South)","underground":false,"global_rect":{"x1":322,"y1":101,"x2":728,"y2":298},"worldBounds":{"minX":-603.302,"maxX":1729.65,"minZ":-930.571,"maxZ":966.97}},{"id":"l01_escape","name":"Cordon","underground":false,"global_rect":{"x1":358,"y1":2022,"x2":564,"y2":2434},"worldBounds":{"minX":-335,"maxX":415,"minZ":-630,"maxZ":870}},{"id":"l04_darkvalley","name":"Dark Valley","underground":false,"global_rect":{"x1":728,"y1":1705,"x2":852,"y2":1953},"worldBounds":{"minX":-215,"maxX":235,"minZ":-665,"maxZ":235}},{"id":"k01_darkscape","name":"Darkscape","underground":false,"global_rect":{"x1":701,"y1":2071,"x2":1020,"y2":2392.344727},"worldBounds":{"minX":-702,"maxX":708.5,"minZ":-704.09,"maxZ":716.778}},{"id":"l09_deadcity","name":"Dead City","underground":false,"global_rect":{"x1":-6,"y1":1220,"x2":248,"y2":1481},"worldBounds":{"minX":-481.497,"maxX":379.976,"minZ":-412.284,"maxZ":474.479}},{"id":"l02_garbage","name":"Garbage","underground":false,"global_rect":{"x1":369,"y1":1776,"x2":573,"y2":1980},"worldBounds":{"minX":-370,"maxX":370,"minZ":-422,"maxZ":327.867}},{"id":"l13_generators","name":"Generators","underground":false,"global_rect":{"x1":195,"y1":-40,"x2":414,"y2":179},"worldBounds":{"minX":-525.205,"maxX":540.927,"minZ":-853.156,"maxZ":209.524}},{"id":"k00_marsh","name":"Great Swamps","underground":false,"global_rect":{"x1":22,"y1":2113,"x2":352,"y2":2443},"worldBounds":{"minX":-445,"maxX":755,"minZ":-445,"maxZ":755}},{"id":"l11_hospital","name":"Hospital","underground":false,"global_rect":{"x1":194,"y1":694,"x2":246,"y2":798},"worldBounds":{"minX":-180,"maxX":10,"minZ":537,"maxZ":917}},{"id":"jupiter","name":"Jupiter","underground":false,"global_rect":{"x1":277,"y1":783,"x2":459,"y2":965},"worldBounds":{"minX":-600,"maxX":600,"minZ":-600,"maxZ":600}},{"id":"l10_limansk","name":"Limansk","underground":false,"global_rect":{"x1":66,"y1":874,"x2":182,"y2":1105},"worldBounds":{"minX":-210,"maxX":210,"minZ":-415,"maxZ":425}},{"id":"y04_pole","name":"Meadow","underground":false,"global_rect":{"x1":457,"y1":1965,"x2":698.98,"y2":2205},"worldBounds":{"minX":-544.541,"maxX":555.461,"minZ":-615.296,"maxZ":484.704}},{"id":"pripyat","name":"Pripyat (CoP)","underground":false,"global_rect":{"x1":679,"y1":718,"x2":888,"y2":927},"worldBounds":{"minX":-550,"maxX":550,"minZ":-550,"maxZ":550}},{"id":"l11_pripyat","name":"Pripyat (SoC)","underground":false,"global_rect":{"x1":607,"y1":762,"x2":740,"y2":909},"worldBounds":{"minX":-628.133,"maxX":671.867,"minZ":-520.743,"maxZ":779.257}},{"id":"l10_radar","name":"Radar","underground":false,"global_rect":{"x1":527,"y1":975,"x2":769,"y2":1218.704712},"worldBounds":{"minX":-320.405,"maxX":890.625,"minZ":-658.741,"maxZ":557.681}},{"id":"l10_red_forest","name":"Red Forest","underground":false,"global_rect":{"x1":198,"y1":1028,"x2":380,"y2":1210},"worldBounds":{"minX":-285,"maxX":375,"minZ":-485,"maxZ":175}},{"id":"l05_bar","name":"Rostok","underground":false,"global_rect":{"x1":407,"y1":1414,"x2":556,"y2":1712},"worldBounds":{"minX":0,"maxX":512,"minZ":-512.03,"maxZ":512.001}},{"id":"k02_trucks_cemetery","name":"Truck Cemetery","underground":false,"global_rect":{"x1":706,"y1":1382,"x2":1025,"y2":1703.3447270000001},"worldBounds":{"minX":-543.948,"maxX":387.099,"minZ":-472.689,"maxZ":467.012}},{"id":"l06_rostok","name":"Wild Territory","underground":false,"global_rect":{"x1":258,"y1":1414,"x2":407,"y2":1712},"worldBounds":{"minX":-512,"maxX":0,"minZ":-512.03,"maxZ":512.001}},{"id":"l08_yantar","name":"Yantar","underground":false,"global_rect":{"x1":101,"y1":1572,"x2":249,"y2":1720},"worldBounds":{"minX":-270,"maxX":270,"minZ":-405,"maxZ":135}},{"id":"zaton","name":"Zaton","underground":false,"global_rect":{"x1":291,"y1":574,"x2":473,"y2":756},"worldBounds":{"minX":-600,"maxX":600,"minZ":-615,"maxZ":585}},{"id":"l03u_agr_underground","name":"Agroprom Underground","underground":true,"global_rect":{"x1":245,"y1":1960,"x2":246,"y2":1961},"worldBounds":{"minX":-21.868,"maxX":161.91,"minZ":-208.824,"maxZ":195.815}},{"id":"l08u_brainlab","name":"Brain Lab","underground":true,"global_rect":{"x1":172,"y1":1612,"x2":174,"y2":1614},"worldBounds":{"minX":-149.45,"maxX":157.072,"minZ":-45.408,"maxZ":25.718}},{"id":"l10u_bunker","name":"Bunker","underground":true,"global_rect":{"x1":588,"y1":1082,"x2":590,"y2":1084},"worldBounds":{"minX":-75.655,"maxX":30.716,"minZ":-112.497,"maxZ":85.01}},{"id":"fake_start","name":"Fake Start","underground":true,"global_rect":{"x1":10,"y1":20,"x2":10,"y2":20}},{"id":"jupiter_underground","name":"Jupiter Underground","underground":true,"global_rect":{"x1":425,"y1":886,"x2":426,"y2":887},"worldBounds":{"minX":-390.808,"maxX":349.192,"minZ":-265.132,"maxZ":474.868}},{"id":"l04u_labx18","name":"Lab X-18","underground":true,"global_rect":{"x1":824,"y1":1840,"x2":825,"y2":1841},"worldBounds":{"minX":-52.316,"maxX":49.368,"minZ":-39.219,"maxZ":82.368}},{"id":"labx8","name":"Lab X-8","underground":true,"global_rect":{"x1":761,"y1":841,"x2":761,"y2":841},"worldBounds":{"minX":-122.441,"maxX":-40.441,"minZ":44.614,"maxZ":126.614}},{"id":"l12u_control_monolith","name":"Monolith Control Center","underground":true,"global_rect":{"x1":393,"y1":302,"x2":394,"y2":303},"worldBounds":{"minX":-43.996,"maxX":43.947,"minZ":-44.348,"maxZ":40.702}},{"id":"l12u_sarcofag","name":"Sarcophagus","underground":true,"global_rect":{"x1":434,"y1":296,"x2":435,"y2":297},"worldBounds":{"minX":-34.982,"maxX":102.851,"minZ":-43.51,"maxZ":55.244}},{"id":"l13u_warlab","name":"Warlab","underground":true,"global_rect":{"x1":327,"y1":100,"x2":328,"y2":101},"worldBounds":{"minX":-51.513,"maxX":51.513,"minZ":-80.721,"maxZ":43.721}}]};

const LEVELS_BY_ID = {};
for (const l of MAP_LEVELS.levels) LEVELS_BY_ID[l.id] = l;

const surfaceLevels = MAP_LEVELS.levels.filter(l => !l.underground);

const LEVEL_CHANGERS = [
  {"id":184,"name":"mil_level_changer_to_bar_1","level":"l07_military","mapX":443.51,"mapY":1363.39},
  {"id":185,"name":"mil_level_changer_to_dead_city_1","level":"l07_military","mapX":427.96,"mapY":1258.14},
  {"id":186,"name":"mil_level_changer_to_radar_1","level":"l07_military","mapX":573.21,"mapY":1249.8},
  {"id":187,"name":"mil_level_changer_to_red_1","level":"l07_military","mapX":516.35,"mapY":1252.41},
  {"id":188,"name":"mil_level_changer_to_tc","level":"l07_military","mapX":485.38,"mapY":1375.67},
  {"id":833,"name":"pri_level_changer_to_cop_pripyat","level":"l11_pripyat","mapX":693.34,"mapY":826.54},
  {"id":834,"name":"pri_level_changer_to_jupiter","level":"l11_pripyat","mapX":657.02,"mapY":838.72},
  {"id":835,"name":"pri_level_changer_to_radar","level":"l11_pripyat","mapX":675.67,"mapY":883.15},
  {"id":836,"name":"pri_level_changer_to_stancia","level":"l11_pripyat","mapX":674.59,"mapY":794.5},
  {"id":1221,"name":"yan_level_changer_to_agroprom_1","level":"l08_yantar","mapX":154.29,"mapY":1716.09},
  {"id":1222,"name":"yan_level_changer_to_dead_city_1","level":"l08_yantar","mapX":158.6,"mapY":1602.98},
  {"id":1223,"name":"yan_level_changer_to_rostok_1","level":"l08_yantar","mapX":245.91,"mapY":1686.84},
  {"id":1224,"name":"yan_level_changer_to_x16","level":"l08_yantar","mapX":174.36,"mapY":1612.09},
  {"id":1561,"name":"ds_level_changer_to_darkvalley","level":"k01_darkscape","mapX":765.08,"mapY":2083.6},
  {"id":1562,"name":"ds_level_changer_to_escape","level":"k01_darkscape","mapX":718.46,"mapY":2316.94},
  {"id":2406,"name":"red_level_changer_to_jupiter","level":"l10_red_forest","mapX":271.96,"mapY":1045.07},
  {"id":2407,"name":"red_level_changer_to_limansk","level":"l10_red_forest","mapX":220.57,"mapY":1164.64},
  {"id":2408,"name":"red_level_changer_to_military_1","level":"l10_red_forest","mapX":273.27,"mapY":1203.14},
  {"id":2409,"name":"red_level_changer_to_radar_1","level":"l10_red_forest","mapX":356.6,"mapY":1164.35},
  {"id":3443,"name":"ros_level_changer_to_bar_1","level":"l06_rostok","mapX":419.61,"mapY":1522.21},
  {"id":3444,"name":"ros_level_changer_to_garbage_1","level":"l06_rostok","mapX":403.11,"mapY":1615.09},
  {"id":3445,"name":"ros_level_changer_to_yantar_1","level":"l06_rostok","mapX":370.66,"mapY":1636.9},
  {"id":4566,"name":"cop_pripyat_level_changer_to_soc_pripyat","level":"pripyat","mapX":733.51,"mapY":851.03},
  {"id":4567,"name":"pri_to_jup_und","level":"pripyat","mapX":818.72,"mapY":871.99},
  {"id":4568,"name":"pripyat_level_changer","level":"pripyat","mapX":812.17,"mapY":877.21},
  {"id":4569,"name":"pripyat_level_changer_0000","level":"pripyat","mapX":809.93,"mapY":877.2},
  {"id":4570,"name":"pripyat_level_changer_0001","level":"pripyat","mapX":768.67,"mapY":803.37},
  {"id":5765,"name":"tc_level_changer_to_bar","level":"k02_trucks_cemetery","mapX":771.46,"mapY":1518.42},
  {"id":5766,"name":"tc_level_changer_to_darkvalley","level":"k02_trucks_cemetery","mapX":877.37,"mapY":1683.45},
  {"id":5767,"name":"tc_level_changer_to_military","level":"k02_trucks_cemetery","mapX":912.6,"mapY":1404.14},
  {"id":6366,"name":"zaton_level_changer","level":"zaton","mapX":452.87,"mapY":660.77},
  {"id":6367,"name":"zaton_level_changer_0000","level":"zaton","mapX":452.86,"mapY":662.24},
  {"id":6368,"name":"zaton_level_changer_to_stancia_1","level":"zaton","mapX":332.21,"mapY":564.59},
  {"id":6369,"name":"zaton_to_jupiter","level":"zaton","mapX":447.2,"mapY":728.71},
  {"id":7700,"name":"exit_to_bunker_01","level":"l10_radar","mapX":619.78,"mapY":1093.87},
  {"id":7701,"name":"rad_level_changer_to_military_01","level":"l10_radar","mapX":701.28,"mapY":1170.71},
  {"id":7702,"name":"rad_level_changer_to_pripyat_01","level":"l10_radar","mapX":667.6,"mapY":1054.14},
  {"id":7703,"name":"rad_level_changer_to_red_forest","level":"l10_radar","mapX":583.77,"mapY":1103.26},
  {"id":8237,"name":"aes2_level_changer_to_aes1","level":"l12_stancia_2","mapX":425.89,"mapY":195.13},
  {"id":8238,"name":"aes2_level_changer_to_gen","level":"l12_stancia_2","mapX":574.02,"mapY":147.44},
  {"id":8239,"name":"aes2_level_changer_to_hospital","level":"l12_stancia_2","mapX":451.41,"mapY":166.17},
  {"id":8240,"name":"exit_to_control_monolith_01","level":"l12_stancia_2","mapX":429.95,"mapY":194.67},
  {"id":8732,"name":"agr_level_changer_to_garbage_1","level":"l03_agroprom","mapX":311.75,"mapY":1982.93},
  {"id":8733,"name":"agr_level_changer_to_garbage_2","level":"l03_agroprom","mapX":318.78,"mapY":1911.34},
  {"id":8734,"name":"agr_level_changer_to_marsh_1","level":"l03_agroprom","mapX":241.77,"mapY":2006.66},
  {"id":8735,"name":"agr_level_changer_to_underground_1","level":"l03_agroprom","mapX":255.67,"mapY":1991.26},
  {"id":8736,"name":"agr_level_changer_to_underground_2","level":"l03_agroprom","mapX":217.84,"mapY":1945.32},
  {"id":8737,"name":"agr_level_changer_to_underground_3","level":"l03_agroprom","mapX":226.73,"mapY":1922.34},
  {"id":8738,"name":"agr_level_changer_to_underground_4","level":"l03_agroprom","mapX":228.72,"mapY":1907.34},
  {"id":8739,"name":"agr_level_changer_to_underground_5","level":"l03_agroprom","mapX":205.9,"mapY":1953.08},
  {"id":8740,"name":"agr_level_changer_to_underground_6","level":"l03_agroprom","mapX":218.75,"mapY":1912.7},
  {"id":8741,"name":"agr_level_changer_to_yantar_1","level":"l03_agroprom","mapX":175.04,"mapY":1854.31},
  {"id":9171,"name":"lim_level_changer_to_dead_city","level":"l10_limansk","mapX":106.97,"mapY":1058.47},
  {"id":9172,"name":"lim_level_changer_to_hospital","level":"l10_limansk","mapX":140.8,"mapY":889.49},
  {"id":9173,"name":"lim_level_changer_to_red_forest","level":"l10_limansk","mapX":127.3,"mapY":1097.13},
  {"id":10345,"name":"val_level_changer_to_darkscape","level":"l04_darkvalley","mapX":775.42,"mapY":1924.61},
  {"id":10346,"name":"val_level_changer_to_garbage_1","level":"l04_darkvalley","mapX":736.67,"mapY":1852.89},
  {"id":10347,"name":"val_level_changer_to_garbage_2","level":"l04_darkvalley","mapX":733,"mapY":1821.37},
  {"id":10348,"name":"val_level_changer_to_labx18","level":"l04_darkvalley","mapX":819.96,"mapY":1840.27},
  {"id":10349,"name":"val_level_changer_to_pole_1","level":"l04_darkvalley","mapX":741.23,"mapY":1885.48},
  {"id":10350,"name":"val_level_changer_to_tc","level":"l04_darkvalley","mapX":808.16,"mapY":1732.41},
  {"id":11338,"name":"jup_level_changer","level":"jupiter","mapX":366.92,"mapY":850.63},
  {"id":11339,"name":"jup_level_changer_0000","level":"jupiter","mapX":365.52,"mapY":852.34},
  {"id":11340,"name":"jup_level_changer_0001","level":"jupiter","mapX":437.77,"mapY":918.81},
  {"id":11341,"name":"jupiter_level_changer_to_soc_pripyat","level":"jupiter","mapX":438.87,"mapY":898.41},
  {"id":11342,"name":"jupiter_to_jupiter_ug_level_changer","level":"jupiter","mapX":438.69,"mapY":906.84},
  {"id":11343,"name":"jupiter_to_red_forest_level_changer","level":"jupiter","mapX":351.05,"mapY":952.16},
  {"id":11344,"name":"jupiter_to_zaton","level":"jupiter","mapX":440.45,"mapY":795.23},
  {"id":12986,"name":"bar_level_changer_to_garbage_01","level":"l05_bar","mapX":519.1,"mapY":1656.76},
  {"id":12987,"name":"bar_level_changer_to_military_01","level":"l05_bar","mapX":415.11,"mapY":1470.22},
  {"id":12988,"name":"bar_level_changer_to_rostok_01","level":"l05_bar","mapX":417.76,"mapY":1521.94},
  {"id":12989,"name":"bar_level_changer_to_tc","level":"l05_bar","mapX":490.64,"mapY":1555.74},
  {"id":13475,"name":"aes_level_changer_to_aes2","level":"l12_stancia","mapX":419.14,"mapY":411.19},
  {"id":13476,"name":"aes_level_changer_to_pripyat","level":"l12_stancia","mapX":586.6,"mapY":453.55},
  {"id":13477,"name":"aes_level_changer_to_zaton","level":"l12_stancia","mapX":491.01,"mapY":433.89},
  {"id":13478,"name":"exit_to_sarcofag_01","level":"l12_stancia","mapX":490.71,"mapY":398.38},
  {"id":14392,"name":"cit_level_changer_to_limansk","level":"l09_deadcity","mapX":118.23,"mapY":1328.75},
  {"id":14393,"name":"cit_level_changer_to_military","level":"l09_deadcity","mapX":186.56,"mapY":1374.47},
  {"id":14394,"name":"cit_level_changer_to_yantar","level":"l09_deadcity","mapX":132.41,"mapY":1433.87},
  {"id":14754,"name":"gar_level_changer_to_agroprom_1","level":"l02_garbage","mapX":394.13,"mapY":1914.82},
  {"id":14755,"name":"gar_level_changer_to_agroprom_2","level":"l02_garbage","mapX":385.72,"mapY":1869.27},
  {"id":14756,"name":"gar_level_changer_to_bar_1","level":"l02_garbage","mapX":468.52,"mapY":1783.63},
  {"id":14757,"name":"gar_level_changer_to_darkvalley_1","level":"l02_garbage","mapX":554.01,"mapY":1888.2},
  {"id":14758,"name":"gar_level_changer_to_darkvalley_2","level":"l02_garbage","mapX":552.73,"mapY":1826.03},
  {"id":14759,"name":"gar_level_changer_to_escape_1","level":"l02_garbage","mapX":481.01,"mapY":1957.92},
  {"id":14760,"name":"gar_level_changer_to_escape_2","level":"l02_garbage","mapX":428.55,"mapY":1948.79},
  {"id":14761,"name":"gar_level_changer_to_rostok_1","level":"l02_garbage","mapX":400.27,"mapY":1808.88},
  {"id":15725,"name":"esc_level_changer_to_darkscape_1","level":"l01_escape","mapX":556.52,"mapY":2278.61},
  {"id":15726,"name":"esc_level_changer_to_garbage_1","level":"l01_escape","mapX":458.58,"mapY":2070.33},
  {"id":15727,"name":"esc_level_changer_to_garbage_2","level":"l01_escape","mapX":404.37,"mapY":2154.2},
  {"id":15728,"name":"esc_level_changer_to_marsh_1","level":"l01_escape","mapX":370.63,"mapY":2333.71},
  {"id":15729,"name":"esc_level_changer_to_marsh_2","level":"l01_escape","mapX":390.37,"mapY":2194.79},
  {"id":15730,"name":"esc_level_changer_to_pole_1","level":"l01_escape","mapX":535.94,"mapY":2166.83},
  {"id":16600,"name":"mar_level_changer_to_agroprom_1","level":"k00_marsh","mapX":191.87,"mapY":2154.97},
  {"id":16601,"name":"mar_level_changer_to_escape_1","level":"k00_marsh","mapX":302.63,"mapY":2370.87},
  {"id":16602,"name":"mar_level_changer_to_escape_2","level":"k00_marsh","mapX":329.65,"mapY":2205.31},
  {"id":17340,"name":"pol_level_changer_to_escape_1","level":"y04_pole","mapX":530.04,"mapY":2076.87},
  {"id":17341,"name":"pol_level_changer_to_val","level":"y04_pole","mapX":568.78,"mapY":2030.73},
  {"id":17645,"name":"gen_level_changer_to_aes2","level":"l13_generators","mapX":287.28,"mapY":116.99},
  {"id":17646,"name":"gen_level_changer_to_warlab","level":"l13_generators","mapX":335.8,"mapY":104.99},
  {"id":17959,"name":"katacomb_level_changer_to_aes_1","level":"l11_hospital","mapX":224.49,"mapY":789.64},
  {"id":17960,"name":"katacomb_level_changer_to_limansk","level":"l11_hospital","mapX":223.34,"mapY":709.28},
];

// When the trail crosses from one level to another, route it through the real
// level-changer position rather than drawing a straight line across the map.
function distancePointToRect(px, py, rect) {
  const dx = Math.max(rect.x1 - px, 0, px - rect.x2);
  const dy = Math.max(rect.y1 - py, 0, py - rect.y2);
  return Math.hypot(dx, dy);
}

// Among the changers physically located in `levelId`, find the one geographically
// closest to `targetLevelId` — i.e. the one that actually leads toward it.
function nearestChangerToward(levelId, targetLevelId) {
  const targetLevel = LEVELS_BY_ID[targetLevelId];
  if (!targetLevel) return null;
  const changers = LEVEL_CHANGERS.filter(c => c.level === levelId);
  if (!changers.length) return null;
  let best = null, bestDist = Infinity;
  for (const c of changers) {
    const d = distancePointToRect(c.mapX, c.mapY, targetLevel.global_rect);
    if (d < bestDist) { bestDist = d; best = c; }
  }
  return best;
}

const _transitionWaypointCache = new Map();
function getTransitionWaypoint(levelAId, levelBId) {
  if (!levelAId || !levelBId || levelAId === levelBId) return null;
  const key = [levelAId, levelBId].sort().join('|');
  if (_transitionWaypointCache.has(key)) return _transitionWaypointCache.get(key);

  const cA = nearestChangerToward(levelAId, levelBId); // changer in A nearest to B
  const cB = nearestChangerToward(levelBId, levelAId); // changer in B nearest to A
  let wp = null;
  if (cA && cB) wp = { x: (cA.mapX + cB.mapX) / 2, y: (cA.mapY + cB.mapY) / 2 };
  else if (cA)  wp = { x: cA.mapX, y: cA.mapY };
  else if (cB)  wp = { x: cB.mapX, y: cB.mapY };

  _transitionWaypointCache.set(key, wp);
  return wp;
}

// ─────────────────────────────────────────
// VIEWPORT STATE
// ─────────────────────────────────────────
const canvas = document.getElementById('mv-map-canvas');
const ctx = canvas.getContext('2d');

// The map draws in a fixed 1024x2048 internal space
const MAP_W = 1024;
const MAP_H = 2048;

// Reference space is 1024x2634 — we scale levels into MAP_H
const REF_W = 1024;
const REF_H = 2634;

// Scale factors from reference to our internal map space
const mapScaleX = MAP_W / REF_W;
const mapScaleY = MAP_H / REF_H;

let panX = 0, panY = 0, zoom = 1.0;
const MIN_ZOOM = 0.15, MAX_ZOOM = 2.5;
let fitZoom = 1.0; // zoom set by fitAll(); used to detect "still at default view"
let isDragging = false;
let dragStart = { x: 0, y: 0 };
let panStart  = { x: 0, y: 0 };
let drawPending = false;
let selectedLevelId = null; // level currently highlighted from a map click

// ─────────────────────────────────────────
// APPLICATION STATE
// ─────────────────────────────────────────
const state = {
  kills: [],
  deaths: [],
  artifacts: [],
};

const layers = {
  levelBoxes:       true,
  killsStalker:     true,
  killsMutant:      true,
  deaths:           true,
  artifacts:        true,
  heatmapKills:     false,
  heatmapDeaths:    false,
  heatmapArtifacts: false,
  movementTrail:    false,
  soundEffects:     false,
};

let mapImage = null;
const mapImg = new Image();
mapImg.onload = () => { mapImage = mapImg; requestDraw(); };

// ─────────────────────────────────────────
// COORDINATE TRANSFORMS
// ─────────────────────────────────────────
function worldToReference(x, z, levelId) {
  const level = LEVELS_BY_ID[levelId];
  if (!level) return null;
  const wb = level.worldBounds;
  if (!wb) return null;
  const rr = level.global_rect;
  const normX = (x - wb.minX) / (wb.maxX - wb.minX);
  const normZ = (z - wb.minZ) / (wb.maxZ - wb.minZ);
  return {
    x: rr.x1 + normX * (rr.x2 - rr.x1),
    y: rr.y2 - normZ * (rr.y2 - rr.y1),
  };
}

function referenceToCanvas(refX, refY) {
  return {
    x: refX * mapScaleX,
    y: refY * mapScaleY,
  };
}

function canvasToReference(cx, cy) {
  // Invert: pan+zoom → map coords → ref coords
  const wx = (cx - panX) / zoom;
  const wy = (cy - panY) / zoom;
  return { x: wx / mapScaleX, y: wy / mapScaleY };
}

// ─────────────────────────────────────────
// CANVAS PAN / ZOOM
// ─────────────────────────────────────────
function resizeCanvas() {
  const area = document.getElementById('mv-map-area');
  canvas.width  = area.offsetWidth;
  canvas.height = area.offsetHeight;
  requestDraw();
}

function requestDraw() {
  if (drawPending) return;
  drawPending = true;
  requestAnimationFrame(() => { drawPending = false; draw(); });
}

function fitAll() {
  const scaleX = canvas.width  / MAP_W;
  const scaleY = canvas.height / MAP_H;
  zoom = Math.min(scaleX, scaleY) * 0.92;
  fitZoom = zoom; // remember the "wide" default zoom
  panX = (canvas.width  - MAP_W * zoom) / 2;
  panY = (canvas.height - MAP_H * zoom) / 2;
  document.getElementById('mv-zoom-indicator').textContent = Math.round(zoom * 100) + '%';
  requestDraw();
}

canvas.addEventListener('mousedown', e => {
  // Ctrl+click: copy coordinates to clipboard
  if (e.ctrlKey && e.button === 0) {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const ref = canvasToReference(e.clientX - rect.left, e.clientY - rect.top);
    const text = `${ref.x.toFixed(1)}, ${ref.y.toFixed(1)}`;
    navigator.clipboard.writeText(text).then(() => {
      const tracker = document.getElementById('mv-coord-tracker');
      tracker.classList.add('copied');
      setTimeout(() => tracker.classList.remove('copied'), 800);
    });
    return;
  }
  if (timeline.playInterval) { disableFollow(); }
  isDragging = true;
  canvas.classList.add('dragging');
  dragStart = { x: e.clientX, y: e.clientY };
  panStart  = { x: panX, y: panY };
});

window.addEventListener('mousemove', e => {
  if (isDragging) {
    panX = panStart.x + (e.clientX - dragStart.x);
    panY = panStart.y + (e.clientY - dragStart.y);
    document.getElementById('mv-zoom-indicator').textContent = Math.round(zoom * 100) + '%';
    requestDraw();
    return;
  }
  // Tooltip hit test
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  // Update coordinate tracker
  if (mx >= 0 && my >= 0 && mx <= rect.width && my <= rect.height) {
    const ref = canvasToReference(mx, my);
    document.getElementById('mv-coord-x').textContent = ref.x.toFixed(1);
    document.getElementById('mv-coord-y').textContent = ref.y.toFixed(1);
  }

  const hit = findEventAtMouse(mx, my);
  const tooltip = document.getElementById('mv-tooltip');
  if (hit) {
    tooltip.style.display = 'block';
    tooltip.style.left = (e.clientX + 16) + 'px';
    tooltip.style.top  = (e.clientY + 12) + 'px';
    tooltip.innerHTML  = buildTooltipHTML(hit);
    canvas.classList.add('hovering');
  } else {
    tooltip.style.display = 'none';
    canvas.classList.remove('hovering');
  }
});

canvas.addEventListener('click', e => {
  if (e.ctrlKey) return;
  // Suppress if this was a drag (moved more than 4px)
  const dx = e.clientX - dragStart.x, dy = e.clientY - dragStart.y;
  if (Math.hypot(dx, dy) > 4) return;
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  const hit = findEventAtMouse(mx, my);
  if (hit) return;
  const ref   = canvasToReference(mx, my);
  const level = getLevelAtRef(ref.x, ref.y);
  if (level) {
    selectedLevelId = level.id;
    showLevelPopup(level);
  } else {
    selectedLevelId = null;
    document.getElementById('mv-level-popup').style.display = 'none';
  }
  requestDraw();
});

window.addEventListener('mouseup', () => {
  if (isDragging && timeline.playInterval) { refollow(); }
  isDragging = false;
  canvas.classList.remove('dragging');
});

canvas.addEventListener('wheel', e => {
  e.preventDefault();
  if (timeline.playInterval || timeline.holdTimeout !== null) { disableFollow(); scheduleWheelRefollow(); }
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
  const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoom * factor));
  panX = mx - (mx - panX) * (newZoom / zoom);
  panY = my - (my - panY) * (newZoom / zoom);
  zoom = newZoom;
  document.getElementById('mv-zoom-indicator').textContent = Math.round(zoom * 100) + '%';
  requestDraw();
}, { passive: false });

// Touch support
let lastTouchDist = 0;
canvas.addEventListener('touchstart', e => {
  if (timeline.playInterval || timeline.holdTimeout !== null) { disableFollow(); }
  if (e.touches.length === 1) {
    isDragging = true;
    dragStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    panStart  = { x: panX, y: panY };
  } else if (e.touches.length === 2) {
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    lastTouchDist = Math.hypot(dx, dy);
  }
}, { passive: true });

canvas.addEventListener('touchmove', e => {
  e.preventDefault();
  if (e.touches.length === 1 && isDragging) {
    panX = panStart.x + (e.touches[0].clientX - dragStart.x);
    panY = panStart.y + (e.touches[0].clientY - dragStart.y);
    requestDraw();
  } else if (e.touches.length === 2) {
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    const dist = Math.hypot(dx, dy);
    if (lastTouchDist) {
      const factor = dist / lastTouchDist;
      const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - canvas.getBoundingClientRect().left;
      const my = (e.touches[0].clientY + e.touches[1].clientY) / 2 - canvas.getBoundingClientRect().top;
      const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoom * factor));
      panX = mx - (mx - panX) * (newZoom / zoom);
      panY = my - (my - panY) * (newZoom / zoom);
      zoom = newZoom;
      requestDraw();
    }
    lastTouchDist = dist;
  }
}, { passive: false });

canvas.addEventListener('touchend', () => {
  if (isDragging && timeline.playInterval) { refollow(); }
  isDragging = false;
  lastTouchDist = 0;
}, { passive: true });

// ─────────────────────────────────────────
// DRAW
// ─────────────────────────────────────────
function drawDot(ctx, refX, refY, color, radius) {
  const p = referenceToCanvas(refX, refY);
  const r = (radius || 4) / zoom;
  ctx.beginPath();
  ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLevelBoxes(ctx) {
  for (const level of surfaceLevels) {
    const rr = level.global_rect;
    const x1 = rr.x1 * mapScaleX;
    const y1 = rr.y1 * mapScaleY;
    const x2 = rr.x2 * mapScaleX;
    const y2 = rr.y2 * mapScaleY;
    const w  = x2 - x1;
    const h  = y2 - y1;
    if (w < 1 || h < 1) continue;

    if (w * zoom > 30) {
      const fontSize = Math.max(7, Math.min(13, 11 / zoom));
      ctx.fillStyle = 'rgba(141, 191, 160, 0.85)';
      ctx.font = `${fontSize}px "IBM Plex Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(level.name, x1 + w / 2, y1 + h / 2);
    }
  }
}

function drawSelectedLevelHighlight(ctx) {
  if (!selectedLevelId) return;
  const level = LEVELS_BY_ID[selectedLevelId];
  if (!level) return;
  const rr = level.global_rect;
  const x1 = rr.x1 * mapScaleX;
  const y1 = rr.y1 * mapScaleY;
  const x2 = rr.x2 * mapScaleX;
  const y2 = rr.y2 * mapScaleY;
  const w  = x2 - x1;
  const h  = y2 - y1;
  if (w < 1 || h < 1) return;

  ctx.save();
  ctx.fillStyle = 'rgba(201, 151, 58, 0.14)';
  ctx.fillRect(x1, y1, w, h);
  ctx.strokeStyle = '#c9973a';
  ctx.lineWidth = 2 / zoom;
  ctx.strokeRect(x1, y1, w, h);
  ctx.restore();
}

// drawPositionTrail, drawDeaths, drawArtifacts replaced by timeline-aware versions below

function drawMapImage(ctx) {
  if (!mapImage) return;
  ctx.globalAlpha = 0.55;
  ctx.drawImage(mapImage, 0, 0, MAP_W, MAP_H);
  ctx.globalAlpha = 1.0;
}

// ─────────────────────────────────────────
// HEATMAP
// ─────────────────────────────────────────
function buildHeatmap(points, radius, colorFn) {
  // Render onto an offscreen canvas in reference space, scaled to map space
  const oc = document.createElement('canvas');
  oc.width  = Math.ceil(MAP_W);
  oc.height = Math.ceil(MAP_H);
  const octx = oc.getContext('2d');

  // Accumulate intensity into a Float32 grid at 1/4 resolution for speed
  const GW = Math.ceil(MAP_W / 4);
  const GH = Math.ceil(MAP_H / 4);
  const grid = new Float32Array(GW * GH);
  const R = radius * mapScaleX / 4;

  for (const pt of points) {
    if (pt.refX === null) continue;
    const gx = Math.round((pt.refX * mapScaleX) / 4);
    const gy = Math.round((pt.refY * mapScaleY) / 4);
    const x0 = Math.max(0, gx - Math.ceil(R));
    const x1 = Math.min(GW - 1, gx + Math.ceil(R));
    const y0 = Math.max(0, gy - Math.ceil(R));
    const y1 = Math.min(GH - 1, gy + Math.ceil(R));
    for (let iy = y0; iy <= y1; iy++) {
      for (let ix = x0; ix <= x1; ix++) {
        const dx = ix - gx, dy = iy - gy;
        const d = Math.hypot(dx, dy) / R;
        if (d < 1) grid[iy * GW + ix] += (1 - d * d) * (1 - d * d);
      }
    }
  }

  // Find max for normalisation
  let maxVal = 0;
  for (let i = 0; i < grid.length; i++) if (grid[i] > maxVal) maxVal = grid[i];
  if (maxVal === 0) return null;

  // Paint onto offscreen canvas
  const imgData = octx.createImageData(GW, GH);
  for (let i = 0; i < grid.length; i++) {
    const t = grid[i] / maxVal;
    if (t < 0.01) continue;
    const [r, g, b, a] = colorFn(t);
    imgData.data[i * 4]     = r;
    imgData.data[i * 4 + 1] = g;
    imgData.data[i * 4 + 2] = b;
    imgData.data[i * 4 + 3] = Math.round(a * 255);
  }
  octx.putImageData(imgData, 0, 0);

  // Scale up to full map size
  const fc = document.createElement('canvas');
  fc.width  = MAP_W;
  fc.height = MAP_H;
  const fctx = fc.getContext('2d');
  fctx.imageSmoothingEnabled = true;
  fctx.imageSmoothingQuality = 'high';
  fctx.drawImage(oc, 0, 0, GW, GH, 0, 0, MAP_W, MAP_H);
  return fc;
}

function heatColorKills(t) {
  // Cold: dark green → Hot: bright yellow-white
  const ease = t * t * (3 - 2 * t); // smoothstep for more contrast in mid-range
  const r = Math.round(ease * 255);
  const g = Math.round(180 + (1 - ease) * 60);
  const b = Math.round(20 + (1 - ease) * 30);
  const a = 0.15 + ease * 0.75; // 0.15 at cold edge → 0.90 at peak
  return [r, g, b, a];
}
function heatColorDeaths(t) {
  // Cold: dark maroon → Hot: vivid red → near-white red at extreme
  const ease = t * t * (3 - 2 * t);
  const r = Math.round(140 + ease * 115);
  const g = Math.round(ease * 60);
  const b = Math.round(10 + ease * 10);
  const a = 0.15 + ease * 0.75;
  return [r, g, b, a];
}
function heatColorArtifacts(t) {
  // Cold: dark brown → Hot: vivid amber-gold
  const ease = t * t * (3 - 2 * t);
  const r = Math.round(140 + ease * 115);
  const g = Math.round(80 + ease * 130);
  const b = Math.round(10 + ease * 20);
  const a = 0.15 + ease * 0.75;
  return [r, g, b, a];
}

// Lazily cached heatmap canvases — cleared when data changes
let _heatKills = undefined, _heatDeaths = undefined, _heatArtifacts = undefined;
let _orderedEventPoints = undefined; // cache for the movement trail
function invalidateHeatmaps() {
  _heatKills = undefined; _heatDeaths = undefined; _heatArtifacts = undefined;
  _orderedEventPoints = undefined;
}

// All kills+deaths+artifacts with a known position, merged and sorted chronologically.
// This is the point sequence the movement trail walks through.
function getOrderedEventPoints() {
  if (_orderedEventPoints !== undefined) return _orderedEventPoints;
  const all = [];
  for (const e of state.kills)     if (e.refX !== null) all.push({ timestamp: e.timestamp, levelId: e.levelId, refX: e.refX, refY: e.refY });
  for (const e of state.deaths)    if (e.refX !== null) all.push({ timestamp: e.timestamp, levelId: e.levelId, refX: e.refX, refY: e.refY });
  for (const e of state.artifacts) if (e.refX !== null) all.push({ timestamp: e.timestamp, levelId: e.levelId, refX: e.refX, refY: e.refY });
  all.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
  _orderedEventPoints = all;
  return all;
}

function drawMovementTrail(ctx) {
  // Always shown during timeline playback; in static view it's gated by the sidebar toggle.
  if (!timeline.active && !layers.movementTrail) return;
  const pts = getOrderedEventPoints();
  const visible = timeline.active ? pts.filter(p => p.timestamp <= timeline.cutoff) : pts;
  if (visible.length < 2) return;

  ctx.save();
  ctx.lineWidth = 1.5 / zoom;
  ctx.setLineDash([5 / zoom, 4 / zoom]);

  // Draws the section (link) between visible[i-1] and visible[i], routing through
  // a level-transition waypoint if the two events are on different levels.
  function strokeSection(i, alpha) {
    const prev = visible[i - 1];
    const cur  = visible[i];
    ctx.strokeStyle = `rgba(157, 163, 172, ${alpha})`;
    ctx.beginPath();
    const p0 = referenceToCanvas(prev.refX, prev.refY);
    ctx.moveTo(p0.x, p0.y);
    if (cur.levelId !== prev.levelId) {
      const wp = getTransitionWaypoint(prev.levelId, cur.levelId);
      if (wp) {
        const pw = referenceToCanvas(wp.x, wp.y);
        ctx.lineTo(pw.x, pw.y);
      }
    }
    const p1 = referenceToCanvas(cur.refX, cur.refY);
    ctx.lineTo(p1.x, p1.y);
    ctx.stroke();
  }

  if (!timeline.active) {
    // Default view: show the full trail at constant opacity.
    for (let i = 1; i < visible.length; i++) strokeSection(i, 0.55);
  } else {
    // Playback mode: only the last 6 sections, fading out the older ones.
    const lastSection = visible.length - 1; // index of the most recent section
    const firstSection = Math.max(1, lastSection - 5);
    for (let i = firstSection; i <= lastSection; i++) {
      const age = lastSection - i; // 0 = most recent section
      strokeSection(i, 0.55 * (1 - age / 6));
    }
  }

  ctx.restore();
}

function getHeatKills()  {
  if (_heatKills  === undefined) _heatKills  = buildHeatmap(state.kills,         12, heatColorKills);
  return _heatKills;
}
function getHeatDeaths() {
  if (_heatDeaths === undefined) _heatDeaths = buildHeatmap(state.deaths,        14, heatColorDeaths);
  return _heatDeaths;
}
function getHeatArtifacts() {
  if (_heatArtifacts === undefined) _heatArtifacts = buildHeatmap(state.artifacts, 14, heatColorArtifacts);
  return _heatArtifacts;
}

function drawHeatmap(ctx, heatCanvas) {
  if (!heatCanvas) return;
  ctx.globalAlpha = 1.0;
  ctx.drawImage(heatCanvas, 0, 0, MAP_W, MAP_H);
}

// ─────────────────────────────────────────
// CLUSTER DRAW (low zoom kill dots)
// ─────────────────────────────────────────
const CLUSTER_ZOOM_THRESHOLD = 1.2;
const CLUSTER_RADIUS_REF     = 12; // reference-space cluster merge radius

function buildClusters(points) {
  const used = new Uint8Array(points.length);
  const clusters = [];
  const r = CLUSTER_RADIUS_REF;
  for (let i = 0; i < points.length; i++) {
    if (used[i]) continue;
    let cx = points[i].refX, cy = points[i].refY, count = 1;
    used[i] = 1;
    for (let j = i + 1; j < points.length; j++) {
      if (used[j]) continue;
      const dx = points[j].refX - cx;
      const dy = points[j].refY - cy;
      if (Math.hypot(dx, dy) < r) {
        cx = (cx * count + points[j].refX) / (count + 1);
        cy = (cy * count + points[j].refY) / (count + 1);
        count++;
        used[j] = 1;
      }
    }
    clusters.push({ refX: cx, refY: cy, count });
  }
  return clusters;
}

function drawKillPass(ctx, isMutant, baseColor) {
  const visibleKills = state.kills.filter(k =>
    k.isMutant === isMutant &&
    (!timeline.active || k.timestamp <= timeline.cutoff)
  );
  if (!visibleKills.length) return;

  if (zoom >= CLUSTER_ZOOM_THRESHOLD) {
    // Normal individual dots
    for (const e of visibleKills) {
      if (e.refX === null) continue;
      drawDot(ctx, e.refX, e.refY, baseColor, 4);
    }
    return;
  }

  // Clustered
  const clusters = buildClusters(visibleKills.filter(k => k.refX !== null));
  for (const cl of clusters) {
    const p = referenceToCanvas(cl.refX, cl.refY);
    const baseR = 4 / zoom;
    const r = cl.count === 1 ? baseR : baseR * (1 + Math.log2(cl.count) * 0.4);

    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
    if (isMutant) {
      // Purple (#a07ac9 = rgb(160,122,201)): red rises, green falls, blue fades slightly
      ctx.fillStyle = cl.count === 1 ? '#a07ac9' : `rgba(${Math.min(255, 160 + cl.count * 8)}, ${Math.max(40, 122 - cl.count * 10)}, ${Math.max(120, 201 - cl.count * 8)}, 0.9)`;
    } else {
      // Green (#4fa35a = rgb(79,163,90)): red rises, green falls
      ctx.fillStyle = cl.count === 1 ? '#4fa35a' : `rgba(${Math.min(255, 79 + cl.count * 10)}, ${Math.max(60, 163 - cl.count * 8)}, 90, 0.9)`;
    }
    ctx.fill();

    if (cl.count > 1) {
      const fontSize = Math.max(6, Math.min(10, r * zoom * 0.9));
      ctx.font = `bold ${fontSize}px "IBM Plex Mono", monospace`;
      ctx.fillStyle = '#e6edf3';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(cl.count, p.x, p.y);
    }
  }
}

function drawKillsClustered(ctx) {
  if (layers.killsStalker) drawKillPass(ctx, false, '#4fa35a');
  if (layers.killsMutant)  drawKillPass(ctx, true,  '#a07ac9');
}

// ─────────────────────────────────────────
// TIMELINE STATE
// ─────────────────────────────────────────
const timeline = {
  active: false,   // false = show everything
  cutoff: '',      // ISO timestamp string
  allTimestamps: [], // sorted array of all event timestamps
  locatedEvents: [], // sorted [{timestamp,levelId}] for auto-follow
  playInterval: null,
  playIndex: 0,
  followLevelId: null, // level currently tracked by auto-follow
  autoFollow: true,    // false when user manually pans/zooms during playback
  holdTimeout: null,   // setTimeout id for hold-on-transition pause window
  refollowTimeout: null, // setTimeout id for re-engaging autoFollow after user interaction
  lastSoundCutoff: null, // previous cutoff timestamp, used to detect newly-crossed events for sound effects
};

// Smooth camera pan tween for auto-follow level switches
const camTween = { active: false, fromX: 0, fromY: 0, toX: 0, toY: 0, startTime: 0, duration: 560 };

// When the user pans/zooms during playback, disable autoFollow but schedule a
// refocus back to the active level after 3 seconds of inactivity.
// Called when user starts interacting with the map during playback.
// Disables autoFollow and kills active tweens.
function disableFollow() {
  timeline.autoFollow = false;
  camTween.active = false;
  zoomTween.active = false;
  if (timeline.refollowTimeout !== null) {
    clearTimeout(timeline.refollowTimeout);
    timeline.refollowTimeout = null;
  }
}

// Re-engages autoFollow and pans back to the active level, keeping whatever
// zoom level the user manually chose (mouseup, touchend, wheel settle).
function refollow() {
  if (!document.getElementById('mv-tl-play-btn').classList.contains('playing')) return;
  timeline.autoFollow = true;
  const levelId = getFollowLevelAtCutoff();
  if (!levelId) return;
  const level = LEVELS_BY_ID[levelId];
  if (!level) return;
  panToLevelCenter(level);
}

// Wheel has no "end" event — debounce 300ms after the last scroll tick to let it settle.
function scheduleWheelRefollow() {
  if (timeline.refollowTimeout !== null) {
    clearTimeout(timeline.refollowTimeout);
  }
  if (!timeline.playInterval && timeline.holdTimeout === null) return;
  timeline.refollowTimeout = setTimeout(() => {
    timeline.refollowTimeout = null;
    refollow();
  }, 300);
}

// Zoom tween for the initial auto-zoom-in when play starts at default wide view
const zoomTween = { active: false, fromZoom: 1, toZoom: 1, fromX: 0, fromY: 0, toX: 0, toY: 0, startTime: 0, duration: 700 };

function buildTimestamps() {
  const ts = new Set();
  const locEv = [];
  for (const e of state.kills) {
    ts.add(e.timestamp);
    if (e.refX !== null && e.levelId && LEVELS_BY_ID[e.levelId])
      locEv.push({ timestamp: e.timestamp, levelId: e.levelId });
  }
  for (const e of state.deaths) {
    ts.add(e.timestamp);
    if (e.refX !== null && e.levelId && LEVELS_BY_ID[e.levelId])
      locEv.push({ timestamp: e.timestamp, levelId: e.levelId });
  }
  for (const e of state.artifacts) {
    ts.add(e.timestamp);
    if (e.refX !== null && e.levelId && LEVELS_BY_ID[e.levelId])
      locEv.push({ timestamp: e.timestamp, levelId: e.levelId });
  }
  timeline.allTimestamps = [...ts].sort();
  timeline.locatedEvents = locEv.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
  timeline.playIndex = timeline.allTimestamps.length - 1;
}

// ─────────────────────────────────────────
// SOUND EFFECTS
// Custom audio files are loaded via HTMLAudioElement (works on file://).
// fetch()/XHR are blocked on file:// by Chrome, so Web Audio buffer
// decoding is not used here. playTone() is kept as a synthesized fallback
// for any kind whose file is missing or fails to load.
// ─────────────────────────────────────────

// Edit paths to match your actual filenames. OGG is safest on file://.
const SOUND_SOURCES = {
  'kill-stalker': 'sounds/kill_stalker.ogg',
  'kill-mutant':  'sounds/kill_mutant.ogg',
  'death':        'sounds/death.ogg',
  'artifact':     'sounds/artifact.ogg',
};
const SOUND_VOLUME = {
  'kill-stalker': 0.25,
  'kill-mutant':  0.4,
  'death':        0.4,
  'artifact':     0.4,
};

// Preload one Audio element per kind. Cloned on each play so the same
// sound can overlap itself (e.g. several kills in a single timeline tick).
const _audioEls = {};
(function preloadSounds() {
  for (const [kind, src] of Object.entries(SOUND_SOURCES)) {
    const el = new Audio(src);
    el.preload = 'auto';
    el.volume  = SOUND_VOLUME[kind] ?? 0.6;
    _audioEls[kind] = el;
  }
})();

// Web Audio context kept only for the synthesized fallback tones.
let audioCtx = null;
function unlockAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
}
function playTone(freq, duration) {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const osc  = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function playEventSound(kind) {
  const src = _audioEls[kind];
  if (src) {
    // Clone so rapid same-kind events overlap rather than restart.
    // The browser reuses the decoded audio data under the hood — cheap.
    const el = src.cloneNode();
    el.volume = src.volume;
    el.play().catch(() => {}); // swallow autoplay-policy rejections silently
    return;
  }
  // Synthesized fallback — fires when the sound file is missing or failed.
  switch (kind) {
    case 'kill-stalker': playTone(520, 0.12); break;
    case 'kill-mutant':  playTone(360, 0.16); break;
    case 'death':        playTone(140, 0.30); break;
    case 'artifact':     playTone(880, 0.20); break;
  }
}

// Plays a sound for every kill/death/artifact whose timestamp falls in (fromCutoff, toCutoff].
function playSoundsForRange(fromCutoff, toCutoff) {
  for (const e of state.kills)
    if (e.timestamp > fromCutoff && e.timestamp <= toCutoff)
      playEventSound(e.isMutant ? 'kill-mutant' : 'kill-stalker');
  for (const e of state.deaths)
    if (e.timestamp > fromCutoff && e.timestamp <= toCutoff)
      playEventSound('death');
  for (const e of state.artifacts)
    if (e.timestamp > fromCutoff && e.timestamp <= toCutoff)
      playEventSound('artifact');
}

function setTimelineCutoff(idx) {
  const ts = timeline.allTimestamps;
  if (!ts.length) return;
  const i = Math.max(0, Math.min(ts.length - 1, idx));
  const prevCutoff = timeline.lastSoundCutoff;
  timeline.cutoff = ts[i];
  timeline.active = (i < ts.length - 1);
  timeline.playIndex = i;

  if (layers.soundEffects && prevCutoff !== null && timeline.cutoff > prevCutoff) {
    playSoundsForRange(prevCutoff, timeline.cutoff);
  }
  timeline.lastSoundCutoff = timeline.cutoff;

  // Update UI
  const fill = document.getElementById('mv-tl-track-fill');
  const pct  = (i / (ts.length - 1)) * 100;
  fill.style.width = pct + '%';

  const t = ts[i];
  document.getElementById('mv-tl-time').textContent = t ? t.split(' ')[1]?.split('.')[0] || '' : '—';

  if (timeline.playInterval) updateFollowLevel();
  requestDraw();
  updateStats();
}

function tlPlay() {
  if (timeline.playInterval || timeline.holdTimeout !== null) {
    clearInterval(timeline.playInterval);
    timeline.playInterval = null;
    if (timeline.holdTimeout !== null) {
      clearTimeout(timeline.holdTimeout);
      timeline.holdTimeout = null;
    }
    if (timeline.refollowTimeout !== null) {
      clearTimeout(timeline.refollowTimeout);
      timeline.refollowTimeout = null;
    }
    document.getElementById('mv-tl-play-btn').textContent = '▶';
    document.getElementById('mv-tl-play-btn').classList.remove('playing');
    return;
  }
  // If at end, rewind — clear auto-follow state first
  if (timeline.playIndex >= timeline.allTimestamps.length - 1) {
    timeline.followLevelId = null;
    selectedLevelId = null;
    document.getElementById('mv-level-popup').style.display = 'none';
    timeline.playIndex = 0;
    setTimelineCutoff(0);
  }
  // Restore auto-follow on every play press (even resume from pause)
  timeline.autoFollow = true;
  document.getElementById('mv-tl-play-btn').textContent = '⏸';
  document.getElementById('mv-tl-play-btn').classList.add('playing');

  // Auto zoom-in: if user is still at the default wide zoom, smoothly zoom in on
  // the first located event's level after a short delay so the transition feels natural.
  if (Math.abs(zoom - fitZoom) < 0.001 && timeline.locatedEvents.length > 0) {
    const firstLevelId = timeline.locatedEvents[0].levelId;
    const firstLevel   = LEVELS_BY_ID[firstLevelId];
    if (firstLevel) {
      setTimeout(() => {
        // Only proceed if still playing and zoom hasn't been changed manually
        if (!document.getElementById('mv-tl-play-btn').classList.contains('playing')) return;
        startZoomTween(firstLevel);
      }, 450);
    }
  }

  timeline.playInterval = setInterval(() => {
    timeline.playIndex++;
    if (timeline.playIndex >= timeline.allTimestamps.length) {
      clearInterval(timeline.playInterval);
      timeline.playInterval = null;
      document.getElementById('mv-tl-play-btn').textContent = '▶';
      document.getElementById('mv-tl-play-btn').classList.remove('playing');
      timeline.active = false;
      requestDraw();
      return;
    }
    document.getElementById('mv-tl-range').value =
      Math.round((timeline.playIndex / (timeline.allTimestamps.length - 1)) * 1000);
    setTimelineCutoff(timeline.playIndex);
  }, 115); // ~8.7 events/sec (~20% slower than before)
}

function initTimeline() {
  buildTimestamps();
  timeline.lastSoundCutoff = null; // reset so the initial full-range jump below stays silent
  const bar = document.getElementById('mv-timeline-bar');
  if (!timeline.allTimestamps.length) { bar.classList.add('no-data'); return; }
  bar.classList.remove('no-data');
  document.getElementById('mv-tl-range').value = 1000;
  setTimelineCutoff(timeline.allTimestamps.length - 1);
}

// Jumps back to the full "everything that happened" view — same end state
// the timeline reaches naturally at idx === allTimestamps.length - 1, just
// triggered on demand (e.g. after the user pauses playback partway through).
function resetToStaticView() {
  // Stop playback first, same teardown as the range input below.
  if (timeline.playInterval) {
    clearInterval(timeline.playInterval);
    timeline.playInterval = null;
    document.getElementById('mv-tl-play-btn').textContent = '▶';
    document.getElementById('mv-tl-play-btn').classList.remove('playing');
  }
  if (timeline.holdTimeout !== null) {
    clearTimeout(timeline.holdTimeout);
    timeline.holdTimeout = null;
  }
  if (timeline.refollowTimeout !== null) {
    clearTimeout(timeline.refollowTimeout);
    timeline.refollowTimeout = null;
  }
  timeline.followLevelId = null;
  selectedLevelId = null;
  document.getElementById('mv-level-popup').style.display = 'none';
  document.getElementById('mv-tl-range').value = 1000;
  timeline.lastSoundCutoff = null; // silence the jump — same as initTimeline()
  setTimelineCutoff(timeline.allTimestamps.length - 1);
}

document.getElementById('mv-tl-range').addEventListener('input', e => {
  // Stop playback first so setTimelineCutoff won't trigger auto-follow
  if (timeline.playInterval) {
    clearInterval(timeline.playInterval);
    timeline.playInterval = null;
    document.getElementById('mv-tl-play-btn').textContent = '▶';
    document.getElementById('mv-tl-play-btn').classList.remove('playing');
  }
  const frac = parseInt(e.target.value) / 1000;
  const idx  = Math.round(frac * (timeline.allTimestamps.length - 1));
  setTimelineCutoff(idx);
});
document.getElementById('mv-tl-play-btn').addEventListener('click', tlPlay);

// ─────────────────────────────────────────
// AUTO-FOLLOW (timeline play → camera + popup)
// ─────────────────────────────────────────

function tickZoomTween() {
  if (!zoomTween.active) return;
  const elapsed = performance.now() - zoomTween.startTime;
  const t = Math.min(1, elapsed / zoomTween.duration);
  const ease = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
  zoom = zoomTween.fromZoom + (zoomTween.toZoom - zoomTween.fromZoom) * ease;
  panX = zoomTween.fromX   + (zoomTween.toX   - zoomTween.fromX)   * ease;
  panY = zoomTween.fromY   + (zoomTween.toY   - zoomTween.fromY)   * ease;
  document.getElementById('mv-zoom-indicator').textContent = Math.round(zoom * 100) + '%';
  draw();
  if (t < 1) {
    requestAnimationFrame(tickZoomTween);
  } else {
    zoomTween.active = false;
    zoom = zoomTween.toZoom;
    panX = zoomTween.toX;
    panY = zoomTween.toY;
  }
}

// Zoom in on a level's centre, animating both zoom and pan simultaneously.
// targetZoom defaults to ~45% of MAX_ZOOM for a comfortable close-up.
function startZoomTween(level, targetZoom) {
  const rr = level.global_rect;
  const centerRefX = (rr.x1 + rr.x2) / 2;
  const centerRefY = (rr.y1 + rr.y2) / 2;
  const cp = referenceToCanvas(centerRefX, centerRefY);
  const toZoom = targetZoom || Math.min(MAX_ZOOM, fitZoom * 4.5);
  const toX = canvas.width  / 2 - cp.x * toZoom;
  const toY = canvas.height / 2 - cp.y * toZoom;
  zoomTween.fromZoom = zoom;
  zoomTween.fromX    = panX;
  zoomTween.fromY    = panY;
  zoomTween.toZoom   = toZoom;
  zoomTween.toX      = toX;
  zoomTween.toY      = toY;
  zoomTween.startTime = performance.now();
  zoomTween.active   = true;
  requestAnimationFrame(tickZoomTween);
}

function tickCameraTween() {
  if (!camTween.active) return;
  const elapsed = performance.now() - camTween.startTime;
  const t = Math.min(1, elapsed / camTween.duration);
  // Ease-in-out cubic
  const ease = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
  panX = camTween.fromX + (camTween.toX - camTween.fromX) * ease;
  panY = camTween.fromY + (camTween.toY - camTween.fromY) * ease;
  draw();
  if (t < 1) {
    requestAnimationFrame(tickCameraTween);
  } else {
    camTween.active = false;
    panX = camTween.toX;
    panY = camTween.toY;
  }
}

function startCameraTween(toX, toY) {
  // Skip if already essentially there
  if (Math.abs(panX - toX) < 1 && Math.abs(panY - toY) < 1) return;
  camTween.fromX = panX;
  camTween.fromY = panY;
  camTween.toX   = toX;
  camTween.toY   = toY;
  camTween.startTime = performance.now();
  camTween.active = true;
  requestAnimationFrame(tickCameraTween);
}

// Smoothly pan so level's global_rect centre is in the middle of the viewport.
// Zoom is intentionally left unchanged.
function panToLevelCenter(level) {
  const rr = level.global_rect;
  const centerRefX = (rr.x1 + rr.x2) / 2;
  const centerRefY = (rr.y1 + rr.y2) / 2;
  const cp = referenceToCanvas(centerRefX, centerRefY);
  startCameraTween(
    canvas.width  / 2 - cp.x * zoom,
    canvas.height / 2 - cp.y * zoom
  );
}

// Binary-search locatedEvents for the latest levelId at or before timeline.cutoff
function getFollowLevelAtCutoff() {
  const evs = timeline.locatedEvents;
  if (!evs.length) return null;
  const cutoff = timeline.cutoff;
  let lo = 0, hi = evs.length - 1, result = null;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (evs[mid].timestamp <= cutoff) { result = evs[mid].levelId; lo = mid + 1; }
    else                               { hi = mid - 1; }
  }
  return result;
}

// Called on each timeline tick while playing; updates selectedLevelId, popup, camera
function updateFollowLevel() {
  const levelId = getFollowLevelAtCutoff();

  if (!levelId) {
    // No located event visible yet — clear any previous auto-selection
    if (timeline.followLevelId !== null) {
      timeline.followLevelId = null;
      selectedLevelId = null;
      document.getElementById('mv-level-popup').style.display = 'none';
    }
    return;
  }

  const level = LEVELS_BY_ID[levelId];
  if (!level) return;

  if (levelId !== timeline.followLevelId) {
    // Level changed — update highlight, popup, optionally pan camera
    timeline.followLevelId = levelId;
    selectedLevelId = levelId;
    showLevelPopup(level);
    if (timeline.autoFollow) { panToLevelCenter(level); pausePlaybackForTween(); }
  } else if (document.getElementById('mv-level-popup').style.display !== 'none') {
    // Same level — just refresh the live stats in-place
    updateLevelPopupStats(level);
  }
}

function resumePlayback() {
  timeline.holdTimeout = null;
  // Don't restart if the user paused manually during the hold window
  if (!document.getElementById('mv-tl-play-btn').classList.contains('playing')) return;
  timeline.playInterval = setInterval(() => {
    timeline.playIndex++;
    if (timeline.playIndex >= timeline.allTimestamps.length) {
      clearInterval(timeline.playInterval);
      timeline.playInterval = null;
      document.getElementById('mv-tl-play-btn').textContent = '▶';
      document.getElementById('mv-tl-play-btn').classList.remove('playing');
      timeline.active = false;
      requestDraw();
      return;
    }
    document.getElementById('mv-tl-range').value =
      Math.round((timeline.playIndex / (timeline.allTimestamps.length - 1)) * 1000);
    setTimelineCutoff(timeline.playIndex);
  }, 115);
}

function pausePlaybackForTween() {
  // No interval running means we have nothing to suspend
  if (!timeline.playInterval) return;
  // Guard: reset if a hold is already pending (shouldn't happen since ticking is paused)
  if (timeline.holdTimeout !== null) {
    clearTimeout(timeline.holdTimeout);
    timeline.holdTimeout = null;
  }
  clearInterval(timeline.playInterval);
  timeline.playInterval = null;
  // Button UI stays in ⏸ / .playing — do NOT toggle it
  timeline.holdTimeout = setTimeout(resumePlayback, camTween.duration);
}

// ─────────────────────────────────────────
// LEVEL CLICK POPUP
// ─────────────────────────────────────────
function getLevelAtRef(refX, refY) {
  // Check which level's global_rect contains this reference point
  for (const level of surfaceLevels) {
    const rr = level.global_rect;
    if (refX >= rr.x1 && refX <= rr.x2 && refY >= rr.y1 && refY <= rr.y2) {
      return level;
    }
  }
  return null;
}

function getLevelScreenRect(level) {
  // Converts a level's global_rect (reference space) to on-screen pixel coords,
  // accounting for the current pan/zoom and the canvas's position in the page.
  const canvasRect = canvas.getBoundingClientRect();
  const rr = level.global_rect;
  const topLeft  = referenceToCanvas(rr.x1, rr.y1);
  const botRight = referenceToCanvas(rr.x2, rr.y2);
  return {
    left:   canvasRect.left + topLeft.x  * zoom + panX,
    top:    canvasRect.top  + topLeft.y  * zoom + panY,
    right:  canvasRect.left + botRight.x * zoom + panX,
    bottom: canvasRect.top  + botRight.y * zoom + panY,
  };
}

function isLevelOnScreen(screenRect) {
  // True if the highlighted area still overlaps the visible map viewport.
  const canvasRect = canvas.getBoundingClientRect();
  return screenRect.right  > canvasRect.left &&
         screenRect.left   < canvasRect.right &&
         screenRect.bottom > canvasRect.top &&
         screenRect.top    < canvasRect.bottom;
}

// Updates only the numeric/extra stats inside the popup; respects timeline.cutoff when active.
function updateLevelPopupStats(level) {
  const levelId = level.id;
  const cutoff  = timeline.active ? timeline.cutoff : null;
  const kills   = state.kills    .filter(e => e.levelId === levelId && (!cutoff || e.timestamp <= cutoff));
  const deaths  = state.deaths   .filter(e => e.levelId === levelId && (!cutoff || e.timestamp <= cutoff));
  const arts    = state.artifacts.filter(e => e.levelId === levelId && (!cutoff || e.timestamp <= cutoff));

  // Most common enemy
  const enemyCounts = {};
  for (const k of kills) enemyCounts[k.enemy] = (enemyCounts[k.enemy] || 0) + 1;
  const topEnemy = Object.entries(enemyCounts).sort((a,b) => b[1]-a[1])[0];

  // Most used weapon
  const wpnCounts = {};
  for (const k of kills) wpnCounts[k.weapon] = (wpnCounts[k.weapon] || 0) + 1;
  const topWpn = Object.entries(wpnCounts).sort((a,b) => b[1]-a[1])[0];

  // Average accuracy
  let accSum = 0, accCount = 0;
  for (const k of kills) {
    const a = parseInt(k.acc);
    if (!isNaN(a)) { accSum += a; accCount++; }
  }
  const avgAcc = accCount ? Math.round(accSum / accCount) : null;

  document.getElementById('mv-lp-kills').textContent  = kills.length;
  document.getElementById('mv-lp-deaths').textContent = deaths.length;
  document.getElementById('mv-lp-arts').textContent   = arts.length;

  const extra = [];
  if (topEnemy)  extra.push(`<strong>Top enemy:</strong> ${topEnemy[0]} ×${topEnemy[1]}`);
  if (topWpn)    extra.push(`<strong>Weapon:</strong> ${topWpn[0]}`);
  if (avgAcc !== null) extra.push(`<strong>Avg accuracy:</strong> ${avgAcc}%`);
  if (arts.length) extra.push(`<strong>Artefacts:</strong> ${arts.map(a => a.name).join(', ')}`);
  document.getElementById('mv-lp-extra').innerHTML = extra.join('<br>');
}

function showLevelPopup(level) {
  document.getElementById('mv-lp-title').textContent = level.name;
  updateLevelPopupStats(level);
  const popup = document.getElementById('mv-level-popup');
  popup.style.display = 'block';
  positionLevelPopup(level);
}

function positionLevelPopup(level) {
  // Anchor to the highlighted area: right of it, bottoms aligned.
  // Called on every draw (see draw()) so it tracks the area as the map is panned/zoomed,
  // and hides itself when the area is panned out of view.
  const popup = document.getElementById('mv-level-popup');
  const screenRect = getLevelScreenRect(level);

  if (!isLevelOnScreen(screenRect)) {
    popup.style.display = 'none';
    return;
  }
  popup.style.display = 'block';

  const gap = 14;
  const pw = popup.offsetWidth;
  const ph = popup.offsetHeight;

  let left = screenRect.right + gap;
  if (left + pw > window.innerWidth - 12) {
    // Not enough room on the right (area near the screen edge) — flip to the left of it.
    left = screenRect.left - gap - pw;
  }
  left = Math.max(12, Math.min(left, window.innerWidth - pw - 12));

  let top = screenRect.bottom - ph;
  top = Math.max(12, Math.min(top, window.innerHeight - ph - 12));

  popup.style.left = left + 'px';
  popup.style.top  = top  + 'px';
}

document.getElementById('mv-lp-close').addEventListener('click', () => {
  document.getElementById('mv-level-popup').style.display = 'none';
  selectedLevelId = null;
  requestDraw();
});

// ─────────────────────────────────────────
// DRAW (updated)
// ─────────────────────────────────────────
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath(); // reset path — clearRect clears pixels but not path state

  // Dark background
  ctx.fillStyle = '#0b1219';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.setTransform(zoom, 0, 0, zoom, panX, panY);

  drawMapImage(ctx);
  drawSelectedLevelHighlight(ctx);
  if (layers.levelBoxes) drawLevelBoxes(ctx);

  // Heatmaps (drawn below dots)
  if (layers.heatmapKills)     drawHeatmap(ctx, getHeatKills());
  if (layers.heatmapDeaths)    drawHeatmap(ctx, getHeatDeaths());
  if (layers.heatmapArtifacts) drawHeatmap(ctx, getHeatArtifacts());

  drawMovementTrail(ctx);

  drawKillsClustered(ctx);
  drawDeathsFiltered(ctx);
  drawArtifactsFiltered(ctx);

  ctx.restore();

  // Keep the popup glued to its highlighted area as the map pans/zooms
  if (selectedLevelId) {
    const level = LEVELS_BY_ID[selectedLevelId];
    if (level) positionLevelPopup(level);
  }
}

// ─────────────────────────────────────────
// TIMELINE-AWARE DRAW FUNCTIONS
// ─────────────────────────────────────────
function drawDeathsFiltered(ctx) {
  if (!layers.deaths) return;
  const pts = (timeline.active
    ? state.deaths.filter(e => e.timestamp <= timeline.cutoff)
    : state.deaths).filter(e => e.refX !== null);
  if (!pts.length) return;

  if (zoom >= CLUSTER_ZOOM_THRESHOLD) {
    // Individual × crosses
    for (const e of pts) {
      const p = referenceToCanvas(e.refX, e.refY);
      const r = 5 / zoom;
      ctx.strokeStyle = 'rgba(192, 72, 74, 0.9)';
      ctx.lineWidth = 1.5 / zoom;
      ctx.beginPath();
      ctx.moveTo(p.x - r, p.y - r); ctx.lineTo(p.x + r, p.y + r);
      ctx.moveTo(p.x + r, p.y - r); ctx.lineTo(p.x - r, p.y + r);
      ctx.stroke();
    }
    return;
  }

  // Clustered — draw as filled circles in the death red, with count label
  const clusters = buildClusters(pts);
  for (const cl of clusters) {
    const p = referenceToCanvas(cl.refX, cl.refY);
    const baseR = 5 / zoom;
    const r = cl.count === 1 ? baseR : baseR * (1 + Math.log2(cl.count) * 0.4);

    if (cl.count === 1) {
      // Keep the × for lone events
      ctx.strokeStyle = 'rgba(192, 72, 74, 0.9)';
      ctx.lineWidth = 1.5 / zoom;
      ctx.beginPath();
      ctx.moveTo(p.x - r, p.y - r); ctx.lineTo(p.x + r, p.y + r);
      ctx.moveTo(p.x + r, p.y - r); ctx.lineTo(p.x - r, p.y + r);
      ctx.stroke();
    } else {
      // Cluster bubble: red base (#c0484a = rgb(192,72,74)), intensifies with count
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${Math.min(255, 192 + cl.count * 6)}, ${Math.max(20, 72 - cl.count * 6)}, ${Math.max(20, 74 - cl.count * 5)}, 0.9)`;
      ctx.fill();
      const fontSize = Math.max(6, Math.min(10, r * zoom * 0.9));
      ctx.font = `bold ${fontSize}px "IBM Plex Mono", monospace`;
      ctx.fillStyle = '#e6edf3';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(cl.count, p.x, p.y);
    }
  }
}

function drawArtifactsFiltered(ctx) {
  if (!layers.artifacts) return;
  const pts = (timeline.active
    ? state.artifacts.filter(e => e.timestamp <= timeline.cutoff)
    : state.artifacts).filter(e => e.refX !== null);
  if (!pts.length) return;

  if (zoom >= CLUSTER_ZOOM_THRESHOLD) {
    // Individual diamonds
    for (const e of pts) {
      const p = referenceToCanvas(e.refX, e.refY);
      const r = 5 / zoom;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y - r);
      ctx.lineTo(p.x + r * 0.7, p.y);
      ctx.lineTo(p.x, p.y + r);
      ctx.lineTo(p.x - r * 0.7, p.y);
      ctx.closePath();
      ctx.fillStyle = '#c9973a';
      ctx.fill();
    }
    return;
  }

  // Clustered — filled circles in artifact amber, with count label
  const clusters = buildClusters(pts);
  for (const cl of clusters) {
    const p = referenceToCanvas(cl.refX, cl.refY);
    const baseR = 5 / zoom;
    const r = cl.count === 1 ? baseR : baseR * (1 + Math.log2(cl.count) * 0.4);

    if (cl.count === 1) {
      // Keep the diamond for lone events
      ctx.beginPath();
      ctx.moveTo(p.x, p.y - r);
      ctx.lineTo(p.x + r * 0.7, p.y);
      ctx.lineTo(p.x, p.y + r);
      ctx.lineTo(p.x - r * 0.7, p.y);
      ctx.closePath();
      ctx.fillStyle = '#c9973a';
      ctx.fill();
    } else {
      // Cluster bubble: amber base (#c9973a = rgb(201,151,58)), intensifies with count
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${Math.min(255, 201 + cl.count * 5)}, ${Math.max(80, 151 - cl.count * 8)}, ${Math.max(10, 58 - cl.count * 5)}, 0.9)`;
      ctx.fill();
      const fontSize = Math.max(6, Math.min(10, r * zoom * 0.9));
      ctx.font = `bold ${fontSize}px "IBM Plex Mono", monospace`;
      ctx.fillStyle = '#e6edf3';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(cl.count, p.x, p.y);
    }
  }
}

// ─────────────────────────────────────────
// LOG PARSERS
// ─────────────────────────────────────────
function parseKillLog(text) {
  const kills = [], deaths = [], artifacts = [];
  let currentLevelId = null;

  // Event types that are never kill rows
  const SKIP_TYPES = new Set([
    'Game Loaded', 'Game Saved', 'Quick Load',
    'Campfire', 'Faction Change', 'First Find',
    'Emission', 'Psi Storm',
  ]);

  for (const line of text.split('\n')) {
    if (!line.trim()) continue;

    // Skip column header lines
    if (line.startsWith('[cn_') || line.startsWith('Timestamp')) continue;

    // Session separator
    if (line.startsWith('=== Session:')) {
      // New spec: === Session: TIMESTAMP | LEVEL_ID | Faction: ... ===
      // Old format: === Session: TIMESTAMP ===
      const inner = line.replace(/^=== Session: /, '').replace(/ ===$/, '');
      const sessionParts = inner.split(' | ');
      if (sessionParts.length >= 2) {
        currentLevelId = sessionParts[1].trim();
        if (!LEVELS_BY_ID[currentLevelId]) {
          console.warn('[MapViewer] Unknown level ID:', currentLevelId);
          currentLevelId = null;
        }
      } else {
        // Old log format: no level ID in session line — map placement unavailable
        currentLevelId = null;
      }
      continue;
    }

    const parts = line.split(' | ').map(s => s.trim());
    if (parts.length < 2) continue;

    const timestamp = parts[0];
    const type      = parts[1];

    if (SKIP_TYPES.has(type)) continue;

    // Resolve map position from last column if it's a coordinate triple
    const posStr   = parts[parts.length - 1];
    const posMatch = posStr.match(/^(-?[\d.]+),(-?[\d.]+),(-?[\d.]+)$/);
    let ref = null;
    if (posMatch && currentLevelId) {
      const x = parseFloat(posMatch[1]);
      const z = parseFloat(posMatch[3]);
      ref = worldToReference(x, z, currentLevelId) || null;
    }

    if (type === 'Death') {
      // New spec: Timestamp | Death | Attacker | Armor | x,y,z   (5 parts, pos at end)
      // Old log:  Timestamp | Death | Attacker | Armor            (4 parts, no pos)
      deaths.push({
        timestamp, levelId: currentLevelId,
        refX: ref?.x ?? null, refY: ref?.y ?? null,
        cause: parts[2] || '',
      });
      continue;
    }

    if (type === 'Artefact') {
      // Timestamp | Artefact | section | x,y,z
      artifacts.push({
        timestamp, levelId: currentLevelId,
        refX: ref?.x ?? null, refY: ref?.y ?? null,
        name: parts[2] || '',
      });
      continue;
    }

    // Kill rows — discriminate by column count (not just posMatch):
    if (posMatch && parts.length === 13) {
      // New spec (cn_v1.34): Timestamp | Enemy | Armor | WeaponID | Ammo | HTK | TTK | Headshots | Acc | Dist | Overkill | SB/NS | Position
      kills.push({
        timestamp, levelId: currentLevelId,
        refX: ref?.x ?? null, refY: ref?.y ?? null,
        enemy: parts[1], armor: parts[2], weapon: parts[3],
        acc: parts[8], dist: parts[9],
        isMutant: parts[2] === 'Mutant',
      });
    } else if (posMatch && parts.length >= 14) {
      // Old log (cn_v1.32): Timestamp | Type | Enemy | Armor | WeaponID | Weapon | Ammo | HTK | TTK | Headshots | Acc | Dist | Overkill | SB/NS | Position
      // parts[1] is always "Stalker"; actual enemy is parts[2], armor is parts[3]
      kills.push({
        timestamp, levelId: currentLevelId,
        refX: ref?.x ?? null, refY: ref?.y ?? null,
        enemy: parts[2], armor: parts[3], weapon: parts[4],
        acc: parts[10], dist: parts[11],
        isMutant: parts[3] === 'Mutant',
      });
    } else if (!posMatch && parts.length >= 14) {
      // Old log without position column
      kills.push({
        timestamp, levelId: currentLevelId,
        refX: null, refY: null,
        enemy: parts[2], armor: parts[3], weapon: parts[5],
        acc: parts[10], dist: parts[11],
        isMutant: parts[3] === 'Mutant',
      });
    }
  }

  return { kills, deaths, artifacts };
}

// ─────────────────────────────────────────
// TOOLTIP HIT TESTING
// ─────────────────────────────────────────
function findEventAtMouse(mx, my) {
  const ref = canvasToReference(mx, my);
  const hitRadius = 10 / zoom;

  const collections = [
    { events: state.artifacts,     type: 'artifact', layer: 'artifacts' },
    { events: state.deaths,        type: 'death',    layer: 'deaths' },
    { events: state.kills,         type: 'kill',     layer: 'kills' },
  ];

  for (const { events, type, layer } of collections) {
    if (!layers[layer]) continue;
    for (const e of events) {
      if (e.refX === null) continue;
      const dx = e.refX - ref.x;
      const dy = e.refY - ref.y;
      if (Math.hypot(dx, dy) < hitRadius) return { ...e, type };
    }
  }
  return null;
}

function buildTooltipHTML(ev) {
  const levelName = LEVELS_BY_ID[ev.levelId]?.name || ev.levelId;
  const ts = ev.timestamp ? ev.timestamp.split('.')[0] : '';
  switch (ev.type) {
    case 'kill':
      return `<b>☠ ${ev.enemy || 'Unknown'}</b><span class="tt-detail">${ev.weapon || ''}</span>${ev.dist ? `<span class="tt-detail">${ev.dist} · ${ev.acc}</span>` : ''}<small>${levelName} · ${ts}</small>`;
    case 'death':
      return `<b>💀 Death</b><span class="tt-detail">${ev.cause || 'Unknown cause'}</span><small>${levelName} · ${ts}</small>`;
    case 'artifact':
      return `<b>◈ Artefact</b><span class="tt-detail">${ev.name || ''}</span><small>${levelName} · ${ts}</small>`;
    default:
      return levelName;
  }
}

// ─────────────────────────────────────────
// STATS & UI UPDATES
// ─────────────────────────────────────────
function updateStats() {
  const cutoff = timeline.active ? timeline.cutoff : null;
  const visKills     = cutoff ? state.kills    .filter(k => k.timestamp <= cutoff) : state.kills;
  const visDeaths    = cutoff ? state.deaths   .filter(e => e.timestamp <= cutoff) : state.deaths;
  const visArtifacts = cutoff ? state.artifacts.filter(e => e.timestamp <= cutoff) : state.artifacts;

  const stalkerKills = visKills.filter(k => !k.isMutant);
  const mutantKills  = visKills.filter(k =>  k.isMutant);

  document.getElementById('mv-stat-stalker-kills').textContent = stalkerKills.length;
  document.getElementById('mv-stat-mutant-kills').textContent  = mutantKills.length;
  document.getElementById('mv-stat-deaths').textContent        = visDeaths.length;
  document.getElementById('mv-stat-artifacts').textContent     = visArtifacts.length;

  document.getElementById('mv-layer-count-stalker').textContent   = stalkerKills.length || '';
  document.getElementById('mv-layer-count-mutant').textContent    = mutantKills.length  || '';
  document.getElementById('mv-layer-count-deaths').textContent    = visDeaths.length    || '';
  document.getElementById('mv-layer-count-artifacts').textContent = visArtifacts.length || '';
}

function panToReference(refX, refY) {
  const cp = referenceToCanvas(refX, refY);
  panX = canvas.width  / 2 - cp.x * zoom;
  panY = canvas.height / 2 - cp.y * zoom;
  requestDraw();
}

// ─────────────────────────────────────────
// PUBLIC API — called by the host page (submit_stats.html).
// Replaces the old standalone file-upload handling: data now
// arrives as already-read log text instead of a File object.
// ─────────────────────────────────────────
function hideOverlays() {
  const empty = document.getElementById('mv-overlay-empty');
  const comingSoon = document.getElementById('mv-overlay-comingsoon');
  if (empty) empty.style.display = 'none';
  if (comingSoon) comingSoon.style.display = 'none';
}

// Parses raw log text and renders it. Call again (e.g. on character-switch
// or "All") to replace the currently displayed events.
function loadEvents(text) {
  const parsed = parseKillLog(text);
  state.kills     = parsed.kills;
  state.deaths    = parsed.deaths;
  state.artifacts = parsed.artifacts;
  invalidateHeatmaps();
  updateStats();
  initTimeline();
  hideOverlays();
  // #mv-map-area is inside #results, which is display:none at init() time,
  // so the canvas got sized 0x0 and zoom got fit to 0 back then. Re-size and
  // re-fit here, now that #results is visible, or nothing will ever draw.
  resizeCanvas();
  fitAll();
  requestDraw();
}

// "Upload a log to see your map" — shown until the first loadEvents() call.
function showEmpty() {
  const comingSoon = document.getElementById('mv-overlay-comingsoon');
  const empty = document.getElementById('mv-overlay-empty');
  if (comingSoon) comingSoon.style.display = 'none';
  if (empty) empty.style.display = 'flex';
}

// Community heatmap isn't built yet — shown while community preview is active.
function showComingSoon() {
  const empty = document.getElementById('mv-overlay-empty');
  const comingSoon = document.getElementById('mv-overlay-comingsoon');
  if (empty) empty.style.display = 'none';
  if (comingSoon) comingSoon.style.display = 'flex';
}

// One-time setup: size the canvas, fit the view, load the basemap image.
// Does not render any events — call loadEvents() separately once a log exists.
function init() {
  resizeCanvas();
  fitAll();
  mapImg.src = 'ui_global_map.avif';
}

window.MapViewer = { init, loadEvents, showEmpty, showComingSoon };

// ─────────────────────────────────────────
// SIDEBAR LAYER TOGGLES
// ─────────────────────────────────────────
document.querySelectorAll('.layer-toggle').forEach(el => {
  el.addEventListener('click', () => {
    const layer = el.dataset.layer;
    layers[layer] = !layers[layer];
    el.classList.toggle('active', layers[layer]);
    if (layer === 'soundEffects' && layers.soundEffects) unlockAudio();
    requestDraw();
  });
});

document.getElementById('mv-btn-fit').addEventListener('click', fitAll);
document.getElementById('mv-btn-static-view').addEventListener('click', () => { resetToStaticView(); fitAll(); });

window.addEventListener('resize', resizeCanvas);

})();
