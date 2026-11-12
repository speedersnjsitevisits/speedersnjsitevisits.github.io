/* Site Visit Hub — shared settings and the two standard checklists.
   Used by the hub, the questionnaires and the checklist builder. */

/* ===== SETTINGS ===== */
// The Google script Web App link.
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzjEfNXr04v9rmbOPvOAzOe7y3PebjVyI4A7dMulP5N5zjqGK55MJZKMj1uGeBII_Q/exec";
/* ==================== */

const P = true; // shorthand: item gets a camera when flagged

const TUNNEL = {
  title: "Tunnel Walk", kicker: "Wash shut down", levels: 3,
  blocks: [
    { kind:"items", id:"tunnel", title:"Tunnel Walk", note:"Walk the tunnel with the wash off. Use a flashlight.", items:[
      ["y","Y section","No sharp points or broken brackets"],
      ["trapIn","Entrance trap door","Tight and quiet"],
      ["roller","Roller-up","Forks and bearings secure, auto roller working"],
      ["wobble","Equipment wobble or clanking","No equipment wobbling or clanking"],
      ["nozzles","Nozzles and foamers","All 100% working"],
      ["retracts","Retracts","Wraps, tire brushes and tire shiners all retract properly"],
      ["grates","Floor grates","Solid, none missing"],
      ["trapOut","Exit trap door and guide rails","Tight, yellow guide rails in place through the tunnel"],
      ["sprayers","Front and rear sprayers","Pumping, no leaks"],
      ["mitters","Mitters","Bushings OK, cloth in good condition, no oil leaks"],
      ["tirebrush","Tire brushes (poodle brushes)","Bearings, motors and hoses OK, no leaks, bumpers tight, spring tension good, no air leaking from the cylinder, cylinder shaft not coming loose, no wobble when spinning"],
      ["wraps","Wraps","Bumpers in position, shocks not leaking, no air leak from the cylinder when energized, pillow block bearings tight with no hanging grease, locking collars in place, four-bolt bearings tight, hub shaft welds secure, hydraulic lines proper, no hydraulic leaks, no lower cloth missing (check while spinning)"],
      ["rockers","Rockers","Bumpers OK, bearings tight with no slop, no wobble when spinning, no missing cloth, no hydraulic leaks underneath, hoses and clamps tight"],
      ["vanhighs","Van Highs","Bumpers in position, shocks not leaking, pillow block bearings tight with no hanging grease, motor mount tight to the long arm, four-bolt bearings tight, hub shaft welds secure, hydraulic lines proper, no hydraulic leaks, no lower cloth missing (check while spinning)"],
      ["shiners","Tire shiners","Bearings, motors and hoses OK, no leaks, bumpers tight, no air leaking from the cylinder, cylinder shaft not coming loose, spins slow with no wobble, test that chemical hits both brushes"],
      ["blowers","Blowers","All bolts secure, no heavy vibration, no groaning when slowing down, nozzle screens clean on the intake side and inside the nozzle"],
      ["clean","Tunnel cleanliness","Walls, floors and dryer stands clean"],
      ["lights","Lights","All arch, stick, puck and lollipop lights working"],
      ["compressors","Air compressors","No odd noises, belts good, no air leaks, auto drains working"]
    ].map(([id,t,d])=>({id,t,d,photo:P}))},
    { kind:"text", id:"overall", title:"Overall notes", placeholder:"Anything else from the walk" },
    { kind:"yesno", id:"final", title:"Before you leave", qs:[
      { id:"tickets", q:"Maintenance tickets submitted?" }
    ]}
  ]
};

const OPS = {
  title: "Operations Visit", kicker: "Wash running", levels: 2,
  blocks: [
    { kind:"photo", id:"arrival", title:"Arrival", note:"Snap the site as you pull in." },
    { kind:"items", id:"arrivalItems", title:"Arrival", hideTitle:true, items:[
      { id:"curb", t:"Curb appeal", d:"Landscaping, bushes and trees, flowerbeds litter-free, curbs not chipped, nothing blocking signs", photo:P },
      { id:"signage", t:"Signage", d:"Street sign, banners, station and machine decals, POS and member lanes, menus. Tight, not faded, lit at night", photo:P }
    ]},
    { kind:"items", id:"wash", title:"Wash Quality", items:[
      { id:"exit", t:"Exit check", d:"Cars coming out dry and clean, including your own test wash", photo:P },
      { id:"drive", t:"Drive-through experience", d:"Foam coverage, scent shot, cloth moving smoothly, all arch, stick, puck and lollipop lights working", photo:P },
      { id:"rinse", t:"Rinse and drying agent break", photo:P },
      { id:"tunnelLook", t:"Tunnel appearance", d:"Entrance clutter-free, white walls clean, dryers clean", photo:P },
      { id:"tunnelEquip", t:"In-tunnel equipment", d:"Rear applicators cover SUV windows, front bumper spray covers grills, no wobble or clanking, nozzles and foamers working", photo:P }
    ]},
    { kind:"items", id:"lot", title:"Safety and Lot", items:[
      { id:"hazards", t:"Slip, trip and fall hazards", d:"Concrete and asphalt, sharp objects", photo:P },
      { id:"lights", t:"Lot light timers set correctly" }
    ]},
    { kind:"items", id:"people", title:"Our People", note:"Everyone on site.", items:[
      { id:"uniform", t:"Uniform", d:"Branded and clean, company-logo coats and hats only, no cargo pants", photo:P },
      { id:"safety", t:"Safety", d:"Safe visible positions, head on a swivel, no phones, earbuds or headphones, high-vis in the lot, PPE where needed", photo:P },
      { id:"energy", t:"Energy", d:"Smiles, engaged, no zombies", photo:P }
    ]},
    { kind:"items", id:"culture", title:"Culture", items:[
      { id:"vibe", t:"Team vibe", d:"Start with the GM and leaders. They set the tone", photo:P },
      { id:"coach", t:"Coach GM and leaders first", private:true },
      { id:"chats", t:"Teammate chats", d:"Recognise them. Ask what they'd change, if they feel valued, if they'd recommend working here, how to improve the experience", private:true }
    ]},
    { kind:"items", id:"csa", title:"CSA", items:[
      { id:"csaPos", t:"In position and greeting cars and members", photo:P },
      { id:"firstFeel", t:"First Feel scores and RPM reviewed daily" },
      { id:"sales", t:"Sales coaching", d:"Listen, encourage, celebrate wins" },
      { id:"flyers", t:"Flyers and handouts used correctly", photo:P },
      { id:"stations", t:"Stations and equipment working and organised", photo:P },
      { id:"ineff", t:"Inefficiencies to raise with the GM" }
    ]},
    { kind:"items", id:"ero", title:"ERO", items:[
      { id:"guest", t:"Guest interaction", d:"Micro performances on every car, PA and mic, RXS standards", photo:P },
      { id:"loading", t:"Loading", d:"Clear hand signals, auto roller, smooth entry, no bumped rims", photo:P },
      { id:"eroArea", t:"Position and area", d:"Outside the conveyor railing, area clean, no food or drink", photo:P }
    ]},
    { kind:"items", id:"lc", title:"Lot Concierge", items:[
      { id:"helping", t:"Helping guests", d:"Showing machines, drying cars, tire shine", photo:P },
      { id:"lcArea", t:"Area clean", photo:P },
      { id:"reviews", t:"Asking happy guests for Google reviews" }
    ]},
    { kind:"toggle", id:"fs", title:"Full Service", q:"Is this a full service site?" },
    { kind:"items", id:"fsItems", title:"Full Service", fsOnly:true, items:[
      { id:"verified", t:"Every car verified", d:"Members and barcodes scanned, single washes get the Full Service windshield flyer", photo:P },
      { id:"interior", t:"Interior quality", d:"Carpets, windows, dash and cupholders", photo:P },
      { id:"handoff", t:"Final inspection and handoff", d:"Floor mats back in before handoff", photo:P },
      { id:"wait", t:"Wait times" },
      { id:"upsell", t:"Upselling", d:"Interior packages and add-ons" },
      { id:"fsSupplies", t:"Supplies and stations", d:"Towels, chemicals, vacuums stocked and organised", photo:P }
    ]},
    { kind:"items", id:"gm", title:"GM and Site Leaders", private:true, items:[
      { id:"positive", t:"Positive leadership", d:"Visibly being positive influencers" },
      { id:"fifty", t:"50-yard line", d:"Positioned to see the whole operation, not stuck in the office" },
      { id:"balance", t:"Work-life balance" },
      { id:"cc", t:"Using Culture Code" },
      { id:"struggles", t:"Hidden struggles", d:"Offer guidance or direction" },
      { id:"concerns", t:"GM concerns", d:"Issues they want to raise with you" }
    ]},
    { kind:"items", id:"vac", title:"Vacuum Area", items:[
      { id:"vacuums", t:"Vacuums", d:"Working, no leaks or loss of suction, bowls and socks emptied, canisters wiped", photo:P },
      { id:"air", t:"Air", d:"Blowguns and tire inflators working", photo:P },
      { id:"amen", t:"Amenities", d:"Labelled, towels stocked, detail cart organised", photo:P },
      { id:"bins", t:"Bins", d:"Under three-quarters full, no litter", photo:P },
      { id:"music", t:"Music", d:"Fun and loud, commercials playing" }
    ]},
    { kind:"items", id:"guestExp", title:"Guest Experience", items:[
      { id:"salad", t:"Salad bar stocked and clean", photo:P },
      { id:"saladUse", t:"Salad bar use", d:"Members taking one or two per item, CSAs correcting politely" },
      { id:"rooms", t:"Mat rooms and restrooms clean", photo:P },
      { id:"waiting", t:"Waiting area", photo:P, fs:true },
      { id:"vending", t:"Vending machines clean and working", photo:P, fs:true },
      { id:"popcorn", t:"Popcorn machine clean and stocked", photo:P, fs:true },
      { id:"coffee", t:"Coffee and water stocked", photo:P, fs:true }
    ]},
    { kind:"items", id:"chem", title:"Chemical Room", items:[
      { id:"gear", t:"Safety gear", d:"Splash goggles, gloves, SDS binder up to date, eyewash and shower working", photo:P },
      { id:"equip", t:"Equipment", d:"Hydraulic packs, compressors, air leaks. No odd sounds, vibration or leaks", photo:P },
      { id:"chems", t:"Chemicals", d:"Pumps drawing properly, no Pulsatron air lock, no fluid on top of barrels", photo:P },
      { id:"room", t:"Room condition", d:"Clear path to MCC, breakers and disconnects, benches organised, bottle fill area dry", photo:P }
    ]},
    { kind:"items", id:"biz", title:"Business Review", items:[
      { id:"results", t:"Results", d:"UL penetration and checklists. Praise the wins, ask about the misses" },
      { id:"opps", t:"Opportunities" },
      { id:"damages", t:"Customer damages", d:"Review claims and look for trends" },
      { id:"training", t:"Training and staffing", d:"Training up to date, recruiting needs" },
      { id:"writeups", t:"Recent write-ups", private:true }
    ]},
    { kind:"text", id:"deadlines", title:"Agreed fixes and deadlines", placeholder:"What the GM agreed to fix, and by when" },
    { kind:"items", id:"sys", title:"Systems and Compliance", items:[
      { id:"injury", t:"Injury poster, field guide and OSHA 300 forms", photo:P },
      { id:"qr", t:"SF QR codes and UL offer working", photo:P },
      { id:"pos", t:"POS and tablets working, no delays", photo:P }
    ]},
    { kind:"text", id:"wins", title:"Wins", placeholder:"What the team is doing well. This goes to the GM" },
    { kind:"text", id:"reflection", title:"Reflection", private:true, placeholder:"What went well, where you can improve, the best part of your day" },
    { kind:"yesno", id:"final", title:"Before you leave", qs:[
      { id:"tickets", q:"Maintenance tickets submitted?" },
      { id:"board", q:"Monday.com store employee board up to date?" },
      { id:"tracker", q:"Monday.com store project tracker in use and up to date?" },
      { id:"staffed", q:"All positions filled?", noteOn:"no", notePh:"Which roles need recruiting?" }
    ]}
  ]
};


const STANDARD = { tunnel: TUNNEL, ops: OPS };

/* Talk to the Google script. Returns the parsed JSON reply. */
async function callScript(body){
  const r = await fetch(SCRIPT_URL, { method:"POST", headers:{"Content-Type":"text/plain;charset=utf-8"}, body: JSON.stringify(body) });
  const j = await r.json();
  if (!j.ok) throw new Error(j.error || "The script didn't accept that.");
  return j;
}

/* Small shared helpers */
const PROFILE_KEY = "svh-profile", CUSTOM_CACHE_KEY = "svh-custom-cache";
function lsGet(k){ try { return JSON.parse(localStorage.getItem(k)); } catch(e){ return null; } }
function lsSet(k,v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
function lsDel(k){ try { localStorage.removeItem(k); } catch(e){} }
function uid(){ return Math.random().toString(36).slice(2,9); }

/* Turn a saved custom checklist into the form the questionnaire uses. */
function customToCfg(def){
  return {
    title: def.title || "Custom checklist",
    kicker: def.subtitle || "Custom checklist",
    levels: def.levels === 3 ? 3 : 2,
    emailMe: def.emailMe !== false,
    blocks: (def.sections || []).map(sec => {
      if (sec.kind === "text") return { kind:"text", id:sec.id, title:sec.title, private:!!sec.private, placeholder:sec.placeholder || "" };
      if (sec.kind === "yesno") return { kind:"yesno", id:sec.id, title:sec.title, qs:(sec.qs||[]).map(q=>({ id:q.id, q:q.q })) };
      if (sec.kind === "photo") return { kind:"photo", id:sec.id, title:sec.title, note:sec.note || "" };
      return { kind:"items", id:sec.id, title:sec.title, private:!!sec.private, note:sec.note || "",
        items:(sec.items||[]).map(it=>({ id:it.id, t:it.t, d:it.d || "", photo:!!it.photo, private:!!it.private })) };
    })
  };
}

/* Turn a standard checklist into an editable custom one (for Copy and edit). */
function standardToCustom(key){
  const cfg = STANDARD[key];
  const sections = [];
  cfg.blocks.forEach(b=>{
    if (b.kind === "toggle") return; // full service switch isn't carried over; keep or delete those items yourself
    if (b.kind === "items") sections.push({ kind:"items", id:uid(), title:b.title, private:!!b.private, note:b.note || "",
      items:b.items.map(it=>({ id:uid(), t:it.t, d:it.d || "", photo:!!it.photo, private:!!it.private })) });
    else if (b.kind === "text") sections.push({ kind:"text", id:uid(), title:b.title, private:!!b.private, placeholder:b.placeholder || "" });
    else if (b.kind === "yesno") sections.push({ kind:"yesno", id:uid(), title:b.title, qs:b.qs.map(q=>({ id:uid(), q:q.q })) });
    else if (b.kind === "photo") sections.push({ kind:"photo", id:uid(), title:b.title, note:b.note || "" });
  });
  return { title: cfg.title + " (my copy)", subtitle: cfg.kicker, levels: cfg.levels, shared:false, emailMe:true, sections };
}
