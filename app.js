(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];

  const data = window.DATA;
  if (!data) return console.error("Missing DATA. Did you load projects.js?");

  // Profile links
  $("#musicLink").href = data.profile.music;
  $("#emailLink").href = `mailto:${data.profile.email}`;
  $("#igLink").href = data.profile.instagram;
  $("#liLink").href = data.profile.linkedin;

  // Theme
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  $("#themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "light" ? "" : "light";
    if (next) document.documentElement.setAttribute("data-theme", next);
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", next || "");
  });

  // Hero quick actions
  $("#openFeatured").addEventListener("click", () => openDrawer(find("delhi-times") || data.items[0]));

  // Feature buttons
  $$(".feature").forEach(btn => {
    const openId = btn.getAttribute("data-open");
    const scrollTo = btn.getAttribute("data-scroll");
    if (openId) btn.addEventListener("click", () => openDrawer(find(openId)));
    if (scrollTo) btn.addEventListener("click", () => $(scrollTo)?.scrollIntoView({behavior:"smooth"}));
  });

  const state = { q:"", agency:null, industry:null, format:null, tag:null };

  function chipGroup(rootId, values, key){
    const root = $(rootId);
    root.innerHTML = "";
    values.forEach(v => {
      const b = document.createElement("button");
      b.className = "chip";
      b.type = "button";
      b.textContent = v;
      b.addEventListener("click", () => {
        state[key] = (state[key] === v) ? null : v;
        render();
      });
      root.appendChild(b);
    });
  }

  chipGroup("#agencyChips", data.tax.agency, "agency");
  chipGroup("#industryChips", data.tax.industry, "industry");
  chipGroup("#formatChips", data.tax.format, "format");
  chipGroup("#tagChips", data.tax.tag, "tag");

  $("#q").addEventListener("input", e => { state.q = e.target.value.trim().toLowerCase(); render(); });
  $("#clear").addEventListener("click", () => {
    state.q=""; state.agency=null; state.industry=null; state.format=null; state.tag=null;
    $("#q").value = "";
    render();
  });

  // Collections
  const colWrap = $("#collectionsGrid");
  colWrap.innerHTML = "";
  data.collections.forEach(c => {
    const d = document.createElement("div");
    d.className = "collection";
    d.innerHTML = `
      <div class="collection__title">${esc(c.title)}</div>
      <div class="collection__desc">${esc(c.desc)}</div>
      <div class="collection__cta">
        <button class="btn btn--sm" type="button">Open</button>
        <button class="btn btn--ghost btn--sm" type="button">Filter</button>
      </div>
    `;
    const [openBtn, filterBtn] = $$("button", d);
    openBtn.addEventListener("click", () => {
      applyFilters(c.filters);
      $("#work").scrollIntoView({behavior:"smooth"});
    });
    filterBtn.addEventListener("click", () => {
      applyFilters(c.filters);
      $("#work").scrollIntoView({behavior:"smooth"});
    });
    colWrap.appendChild(d);
  });

  function applyFilters(f){
    state.agency = f.agency || null;
    state.industry = f.industry || null;
    state.format = f.format || null;
    state.tag = f.tag || null;
    render();
  }

  // Drawer
  const drawer = $("#drawer");
  const closeEls = $$("[data-close]");
  closeEls.forEach(el => el.addEventListener("click", closeDrawer));
  document.addEventListener("keydown", (e)=> {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  });

  function openDrawer(item){
    if (!item) return;
    $("#dKicker").textContent = item.kicker || "Work";
    $("#dTitle").textContent = item.title || "";
    $("#dMeta").textContent = `${item.agency} • ${item.industry} • ${item.format} • ${item.brand}`;
    $("#dDesc").textContent = item.desc || "";

    const groups = $("#dGroups");
    groups.innerHTML = "";
    (item.groups || []).forEach(g => {
      const box = document.createElement("div");
      box.className = "group";
      box.innerHTML = `<div class="group__title">${esc(g.title)}</div><div class="links"></div>`;
      const linksWrap = $(".links", box);
      (g.links || []).forEach(l => {
        const a = document.createElement("a");
        a.className = "link";
        a.href = l.url;
        a.target = "_blank";
        a.rel = "noreferrer";
        a.innerHTML = `<span>${esc(l.label)}</span><span class="muted">Open ↗</span>`;
        linksWrap.appendChild(a);
      });
      groups.appendChild(box);
    });

    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer(){
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  }

  function find(id){ return data.items.find(x => x.id === id); }

  function matches(it){
    if (state.agency && it.agency !== state.agency) return false;
    if (state.industry && it.industry !== state.industry) return false;
    if (state.format && it.format !== state.format) return false;
    if (state.tag && !(it.tags||[]).includes(state.tag)) return false;
    if (state.q){
      const hay = [it.title,it.kicker,it.agency,it.industry,it.format,it.brand,it.desc,(it.tags||[]).join(" ")].join(" ").toLowerCase();
      if (!hay.includes(state.q)) return false;
    }
    return true;
  }

  function render(){
    // chip state
    [["#agencyChips","agency"],["#industryChips","industry"],["#formatChips","format"],["#tagChips","tag"]].forEach(([root,key])=>{
      $$(".chip", $(root)).forEach(ch => ch.classList.toggle("is-on", state[key] === ch.textContent));
    });

    const active = [];
    if (state.agency) active.push(`Agency: ${state.agency}`);
    if (state.industry) active.push(`Industry: ${state.industry}`);
    if (state.format) active.push(`Format: ${state.format}`);
    if (state.tag) active.push(`Tag: ${state.tag}`);
    if (state.q) active.push(`Search: “${state.q}”`);
    $("#active").textContent = active.length ? active.join(" • ") : "No filters applied.";

    const grid = $("#grid");
    grid.innerHTML = "";
    const items = data.items.filter(matches);

    if (!items.length){
      const empty = document.createElement("div");
      empty.className = "collection";
      empty.innerHTML = `<div class="collection__title">No matches</div><div class="collection__desc">Clear filters or try a different keyword.</div>`;
      grid.appendChild(empty);
      return;
    }

    items.forEach(it => {
      const c = document.createElement("article");
      c.className = "card";
      c.tabIndex = 0;
      const tags = (it.tags||[]).slice(0,3).map(t=>`<span class="badge">${esc(t)}</span>`).join("");
      c.innerHTML = `
        <div class="card__top">
          <span class="badge">${esc(it.kicker||"Work")}</span>
          <span class="badge">${countLinks(it)} links</span>
        </div>
        <div class="card__title">${esc(it.title)}</div>
        <p class="card__brand">${esc(it.brand)}</p>
        <div class="card__meta">
          <span class="badge">${esc(it.agency)}</span>
          <span class="badge">${esc(it.format)}</span>
          ${tags}
        </div>
      `;
      c.addEventListener("click", ()=> openDrawer(it));
      c.addEventListener("keydown", (e)=> {
        if (e.key === "Enter" || e.key === " ") openDrawer(it);
      });
      grid.appendChild(c);
    });
  }

  function countLinks(it){
    return (it.groups||[]).reduce((a,g)=>a + (g.links||[]).length, 0);
  }

  function esc(s){
    return String(s||"")
      .replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")
      .replaceAll('"',"&quot;").replaceAll("'","&#039;");
  }

  render();
})();
