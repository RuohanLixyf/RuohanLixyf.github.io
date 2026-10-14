---
layout: single
title: null
show_title: false
permalink: /Researches/
author_profile: false
header: false
page_class: page--full-research
---

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap">
<style>
  #main { width: 100%; max-width: none; margin: 0; padding: 0; }
  #main > .sidebar { display: none; }
  #main > article.page--full-research { float: none; width: 100%; max-width: none; margin: 0; padding-right: 0; }
  #main > article.page--full-research .page__inner-wrap { width: 100%; max-width: none; margin: 0; padding: 0; }

  .rp {
    --ink: #0b1f44;
    --muted: rgba(10, 42, 102, 0.66);
    --line: rgba(10, 42, 102, 0.09);
    --blue: #1557b0;
    padding: 1.2rem clamp(1rem, 5vw, 6rem) 2.5rem;
    color: var(--ink);
  }

  .rp-serif { font-family: "Source Serif 4", "Source Serif Pro", Georgia, serif; }

  .rp-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
    gap: 2rem;
    align-items: end;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid var(--line);
  }

  .page__content .rp-hero h1 {
    margin: 0;
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-weight: 700;
    line-height: 1.05;
    color: var(--ink);
  }

  .page__content .rp-hero p { margin: 0.3rem 0 0; font-size: 1.05rem; color: var(--muted); }
  .page__content .rp-hero p.rp-intro { font-family: inherit; font-size: 0.86rem; line-height: 1.5; }

  .rp-section { margin-top: 1.8rem; }

  .rp-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.9rem;
  }

  .rp-head-left { display: flex; gap: 0.9rem; align-items: center; }

  .rp-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    background: rgba(27, 111, 224, 0.1);
    color: var(--blue);
    font-weight: 700;
  }

  .page__content .rp-head h2 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: clamp(1.35rem, 2vw, 1.75rem);
    font-weight: 700;
    color: var(--ink);
  }

  .page__content .rp-head p { margin: 0.1rem 0 0; font-size: 0.9rem; color: var(--muted); }

  .page__content a.rp-more {
    flex-shrink: 0;
    padding: 0.38rem 0.9rem;
    border: 1px solid rgba(50, 140, 230, 0.32);
    border-radius: 999px;
    background: #fff;
    color: var(--blue);
    font-size: 0.8rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }

  .rp-card {
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: 0.9rem 1rem 1rem;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 6px 20px rgba(30, 70, 120, 0.05);
  }

  .rp-img--map { position: relative; height: 240px; padding: 0; }
  .rp-img--map iframe { width: 100%; height: 100%; border: 0; }
  .rp-img-overlay { position: absolute; inset: 0; }
  .rp-studies { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.8rem; }

  .rp-img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    margin-bottom: 0.8rem;
    overflow: hidden;
    border-radius: 8px;
    background: #fff;
  }

  .rp-img img { max-width: 100%; max-height: 100%; object-fit: contain; }

  .rp-img--icon {
    background: linear-gradient(135deg, rgba(27, 111, 224, 0.08), rgba(29, 138, 143, 0.12));
    color: #1d8a8f;
    font-size: 2.6rem;
  }

  .rp-title-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; }

  .page__content .rp-card h3 { margin: 0; font-size: 1.15rem; font-weight: 700; color: var(--ink); }

  .rp-badge {
    padding: 0.1rem 0.45rem;
    border-radius: 6px;
    background: rgba(27, 111, 224, 0.08);
    color: var(--blue);
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .rp-badge--green { background: rgba(35, 164, 96, 0.1); color: #137044; }
  .rp-badge--orange { background: rgba(226, 102, 27, 0.1); color: #b5520f; }

  .page__content .rp-card p.rp-lead { margin: 0.3rem 0 0.5rem; font-size: 0.86rem; line-height: 1.35; color: var(--muted); }
  .page__content .rp-card p { margin: 0 0 0.5rem; font-size: 0.8rem; line-height: 1.45; color: var(--muted); }

  .page__content .rp-card ul { margin: 0 0 0.7rem; padding-left: 1.05rem; }
  .page__content .rp-card li { margin: 0 0 0.15rem; font-size: 0.78rem; line-height: 1.4; color: rgba(10, 42, 102, 0.78); }

  .rp-foot { margin-top: auto; }
  .rp-venue { display: block; margin-bottom: 0.35rem; font-size: 0.8rem; color: var(--ink); }

  .rp-links { display: flex; flex-wrap: wrap; gap: 0.25rem 0.9rem; }
  .page__content .rp-links a { font-size: 0.8rem; font-weight: 600; color: var(--blue); text-decoration: none; }
  .page__content .rp-links a:hover { text-decoration: underline; }

  .rp-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.8rem; }
  .rp-tags span {
    padding: 0.15rem 0.55rem;
    border-radius: 7px;
    background: rgba(27, 111, 224, 0.08);
    color: var(--blue);
    font-size: 0.72rem;
  }

  .rp-btns { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: auto; }
  .page__content .rp-btns a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.4rem 0.9rem;
    border: 1px solid rgba(50, 140, 230, 0.32);
    border-radius: 8px;
    background: #fff;
    color: var(--blue);
    font-size: 0.8rem;
    font-weight: 700;
    text-decoration: none;
  }
  .page__content .rp-btns a:hover { background: rgba(50, 140, 230, 0.07); }
  .page__content .rp-btns a.rp-btn--dark { border-color: rgba(10, 42, 102, 0.2); color: var(--ink); }
  .page__content .rp-btns a.rp-btn--red { border-color: rgba(220, 53, 69, 0.3); color: #a82332; }

  .rp-software { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 0.8rem; }

  .rp-dataset { display: grid; grid-template-columns: minmax(0, 1fr) 11rem; gap: 1rem; }
  .rp-dataset .rp-img { height: 190px; }

  .rp-stats { display: flex; flex-direction: column; gap: 0.75rem; margin: 0; padding: 0; list-style: none; }
  .page__content .rp-stats li { display: flex; gap: 0.6rem; margin: 0; }
  .rp-stats i { width: 1.4rem; margin-top: 0.15rem; color: var(--blue); font-size: 1.05rem; text-align: center; }
  .rp-stats strong { display: block; font-size: 0.9rem; line-height: 1.2; color: var(--ink); }
  .rp-stats small { font-size: 0.7rem; color: var(--muted); }

  .rp-projects { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.8rem; }

  .rp-proj-top { display: flex; align-items: center; justify-content: space-between; gap: 0.6rem; margin-bottom: 0.45rem; }
  .rp-logo { display: block; height: 34px; width: auto; max-width: 70%; object-fit: contain; }
  .rp-logo--square { height: 52px; }
  .rp-proj-img { display: block; width: 100%; height: 110px; margin: 0 0 0.6rem; border-radius: 8px; object-fit: cover; }
  .rp-agency { font-size: 1.15rem; font-weight: 800; letter-spacing: 0.01em; color: #0a2a66; }
  .rp-agency i { margin-right: 0.3rem; color: #1b6fe0; }
  .rp-period {
    padding: 0.12rem 0.55rem;
    border-radius: 999px;
    background: rgba(10, 42, 102, 0.05);
    color: var(--muted);
    font-size: 0.72rem;
    white-space: nowrap;
  }
  .page__content .rp-card h3.rp-proj-title { margin-bottom: 0.45rem; font-size: 1rem; line-height: 1.3; }
  .page__content .rp-card p.rp-partner { margin: 0; font-size: 0.72rem; }

  @media (max-width: 1200px) {
    .rp-studies { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 900px) {
    .rp-hero, .rp-software { grid-template-columns: 1fr; }
    .rp-studies, .rp-projects { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 600px) {
    .rp-head { flex-direction: column; align-items: flex-start; }
    .rp-studies, .rp-projects, .rp-dataset { grid-template-columns: 1fr; }
  }
</style>

<div class="rp">
  <header class="rp-hero">
    <div>
      <h1 class="rp-serif">Research</h1>
      <p class="rp-serif">From methods and data to real-world transportation applications.</p>
    </div>
    <p class="rp-intro">I develop computational methods, data resources, and applied analytics to recover, represent, and understand human mobility from incomplete observations. This page presents my research studies, software and datasets, and industry/agency projects.</p>
  </header>

  <section class="rp-section" aria-labelledby="rp-studies-heading">
    <div class="rp-head">
      <div class="rp-head-left">
        <span class="rp-num">01</span>
        <div>
          <h2 class="rp-serif" id="rp-studies-heading">Research Studies</h2>
          <p class="rp-serif">Methodological and empirical research on mobility reconstruction, representation, and applications.</p>
        </div>
      </div>
      <a class="rp-more" href="/publications/">View All Publications &rarr;</a>
    </div>
    <div class="rp-studies">
      <article class="rp-card">
        <a class="rp-img" href="https://doi.org/10.1109/TITS.2026.3740031" target="_blank" rel="noopener noreferrer"><img src="/images/suphmm/framework.png" alt="Sup-HMM framework"></a>
        <div class="rp-title-row"><h3 class="rp-serif">Sup-HMM</h3><span class="rp-badge rp-badge--green">Journal Paper</span></div>
        <p class="rp-lead rp-serif">Bayesian-optimized map matching for sparse and noisy trajectories.</p>
        <ul>
          <li>Reliable trajectory reconstruction from incomplete observations</li>
          <li>Bayesian optimization and supplementary transition mechanism</li>
          <li>Robust to data sparsity and noise</li>
        </ul>
        <div class="rp-foot">
          <span class="rp-venue">IEEE T-ITS (2026)</span>
          <div class="rp-links"><a href="https://doi.org/10.1109/TITS.2026.3740031" target="_blank" rel="noopener noreferrer">Paper / DOI &#8599;</a></div>
        </div>
      </article>
      <article class="rp-card">
        <a class="rp-img" href="/publications/"><img src="/images/pmtree/pmtree_build_animation.gif" alt="Animated PM-Tree construction"></a>
        <div class="rp-title-row"><h3 class="rp-serif">PM-Tree</h3><span class="rp-badge">Under Review</span></div>
        <p class="rp-lead rp-serif">Priority-guided hierarchical trajectory representation.</p>
        <ul>
          <li>Hierarchical and adaptive representation of trajectories</li>
          <li>Preserving structural mobility information with few observations</li>
          <li>Only ~3% of points recover over 96% of structure</li>
        </ul>
        <div class="rp-foot">
          <span class="rp-venue">IEEE T-ITS (Under Review)</span>
          <div class="rp-links"><a href="/publications/">Paper</a></div>
        </div>
      </article>
      <article class="rp-card">
        <a class="rp-img" href="/images/HSMM-T.png" target="_blank" rel="noopener noreferrer"><img src="/images/HSMM-T.png" alt="HSMM-T cross-network mobility translation"></a>
        <div class="rp-title-row"><h3 class="rp-serif">HSMM-T</h3><span class="rp-badge">Under Review</span></div>
        <p class="rp-lead rp-serif">Cross-network mobility translation for planning applications.</p>
        <ul>
          <li>Translating observed trajectories to planning networks</li>
          <li>Preserving movement patterns across network systems</li>
          <li>Supporting network-based analysis</li>
        </ul>
        <div class="rp-foot">
          <span class="rp-venue">Transportation (Under Review)</span>
          <div class="rp-links"><a href="/publications/">Paper</a></div>
        </div>
      </article>
      <article class="rp-card">
        <a class="rp-img" href="/transitdesert/"><img src="/images/Transit_Desert/TD_Picture8.png" alt="Transit Mirage preview"></a>
        <div class="rp-title-row"><h3 class="rp-serif">Transit Mirage</h3><span class="rp-badge rp-badge--orange">Under Revision</span></div>
        <p class="rp-lead rp-serif">Rethinking transit demand-supply imbalance using observed mobility.</p>
        <ul>
          <li>Empirical analysis of transit accessibility</li>
          <li>Identifying apparent vs. real transit deserts</li>
          <li>Implications for equity and planning</li>
        </ul>
        <div class="rp-foot">
          <span class="rp-venue">TR Part A (Under Revision)</span>
          <div class="rp-links"><a href="/publications/">Paper</a><a href="/transitdesert/">Project &#8599;</a></div>
        </div>
      </article>
    </div>
  </section>

  <section class="rp-section" aria-labelledby="rp-software-heading">
    <div class="rp-head">
      <div class="rp-head-left">
        <span class="rp-num">02</span>
        <div>
          <h2 class="rp-serif" id="rp-software-heading">Research Software &amp; Data</h2>
          <p class="rp-serif">Computational tools and datasets for mobility analysis.</p>
        </div>
      </div>
    </div>
    <div class="rp-software">
      <article class="rp-card rp-dataset">
        <div style="display:flex;flex-direction:column;min-width:0;">
          <div class="rp-img rp-img--map"><iframe src="/files/novamatch-hero.html" title="NovaMatch animated map-matching example" loading="lazy" scrolling="no"></iframe><a class="rp-img-overlay" href="/novamatch/" aria-label="Open NovaMatch"></a></div>
          <div class="rp-title-row"><h3 class="rp-serif">NovaMatch</h3><span class="rp-badge">Research Software</span></div>
          <p class="rp-lead rp-serif">Trajectory intelligence ecosystem.</p>
          <p>A unified framework for trajectory processing, map matching, cross-network translation, trajectory representation, and mobility analytics.</p>
          <div class="rp-btns">
            <a href="/novamatch/">Explore NovaMatch &rarr;</a>
            <a class="rp-btn--dark" href="/novamatch/#demo"><i class="fa fa-map" aria-hidden="true"></i> Map Matching Demo</a>
          </div>
        </div>
        <ul class="rp-stats">
          <li><i class="fa fa-satellite-dish" aria-hidden="true"></i><div><strong>Observe</strong><small>Sparse, noisy GPS trajectories</small></div></li>
          <li><i class="fa fa-route" aria-hidden="true"></i><div><strong>Recover</strong><small>Network-constrained paths on OSM or custom networks</small></div></li>
          <li><i class="fa fa-exchange-alt" aria-hidden="true"></i><div><strong>Translate</strong><small>Road trajectories to planning networks</small></div></li>
          <li><i class="fa fa-server" aria-hidden="true"></i><div><strong>Scalable</strong><small>Built for large mobility datasets</small></div></li>
        </ul>
      </article>
      <article class="rp-card rp-dataset">
        <div style="display:flex;flex-direction:column;min-width:0;">
          <a class="rp-img" href="https://ruohanlixyf.github.io/Complete-Trip-Data-Explorer/index.html" target="_blank" rel="noopener noreferrer"><img src="/images/CompleteTrip.png" alt="Complete Trip dataset preview"></a>
          <div class="rp-title-row"><h3 class="rp-serif">Complete Trip</h3><span class="rp-badge rp-badge--green">Dataset</span><span class="rp-badge">Preprint</span></div>
          <p class="rp-lead rp-serif">A linked multimodal human mobility dataset.</p>
          <p>Reconstructing complete journeys from passively collected LBS observations across the Salt Lake City region. Supports mobility research, activity analysis, and transportation planning.</p>
          <div class="rp-btns">
            <a href="https://ruohanlixyf.github.io/Complete-Trip-Data-Explorer/index.html" target="_blank" rel="noopener noreferrer">Explore Dataset &rarr;</a>
            <a class="rp-btn--red" href="https://arxiv.org/abs/2607.15436" target="_blank" rel="noopener noreferrer"><i class="fa fa-file-alt" aria-hidden="true"></i> arXiv</a>
            <a class="rp-btn--dark" href="https://github.com/villanova-transportation/Complete-Trip-Data" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i> Data</a>
          </div>
        </div>
        <ul class="rp-stats">
          <li><i class="fa fa-route" aria-hidden="true"></i><div><strong>28.7M+</strong><small>Complete trips</small></div></li>
          <li><i class="fa fa-mobile-alt" aria-hidden="true"></i><div><strong>282K+</strong><small>Unique devices</small></div></li>
          <li><i class="fa fa-map-marked-alt" aria-hidden="true"></i><div><strong>6 Utah Counties</strong><small>Salt Lake City region</small></div></li>
          <li><i class="fa fa-bus" aria-hidden="true"></i><div><strong>4 Travel Modes</strong><small>Car · Walk/Bike · Bus · Rail</small></div></li>
          <li><i class="fa fa-calendar-alt" aria-hidden="true"></i><div><strong>Full Year 2020</strong><small>Controlled access via DUA</small></div></li>
        </ul>
      </article>
    </div>
  </section>

  <section class="rp-section" aria-labelledby="rp-projects-heading">
    <div class="rp-head">
      <div class="rp-head-left">
        <span class="rp-num">03</span>
        <div>
          <h2 class="rp-serif" id="rp-projects-heading">Sponsored &amp; Collaborative Projects</h2>
          <p class="rp-serif">Contributions to transportation research projects supported by federal, state, and regional agencies, and industry partners.</p>
        </div>
      </div>
    </div>
    <div class="rp-projects">
      <article class="rp-card">
        <div class="rp-proj-top"><img class="rp-logo" src="/images/logos/dvrpc.png" alt="DVRPC (Delaware Valley Regional Planning Commission)"><span class="rp-period">2026 – Present</span></div>
        <h3 class="rp-serif rp-proj-title">Regional Land Use Modeling and Future-Year Scenario Development</h3>
        <ul>
          <li>Model development and project coordination</li>
          <li>Model adaptation, calibration, and validation</li>
          <li>Future-year scenario development</li>
          <li>Technical deliverables and model transfer</li>
        </ul>
        <p class="rp-partner rp-foot">Collaborating Organizations: DVRPC &amp; Univ. of Memphis</p>
      </article>
      <article class="rp-card">
        <div class="rp-proj-top"><span class="rp-agency"><i class="fa fa-walking" aria-hidden="true"></i>Pedestrian Infrastructure</span><span class="rp-period">2026 – Present</span></div>
        <h3 class="rp-serif rp-proj-title">From Data to Design: Enhancing Pedestrian Infrastructure for Well-Being</h3>
        <ul>
          <li>GPS trajectory processing and spatial analysis</li>
          <li>Integrating mobility, built environment, and experience data</li>
          <li>Studying the relationship between pedestrian infrastructure and well-being</li>
        </ul>
        <p class="rp-partner rp-foot">Collaborator: Human Centered Cities Lab (PI: Arash Tavakoli)</p>
      </article>
      <article class="rp-card">
        <div class="rp-proj-top"><img class="rp-logo" src="/images/logos/penndot.png" alt="PennDOT (Pennsylvania Department of Transportation)"><span class="rp-period">2026 – Present</span></div>
        <h3 class="rp-serif rp-proj-title">Enhanced Vehicle Inspection Station Research</h3>
        <ul>
          <li>Statewide spatial and data-driven analysis</li>
          <li>Service demand, geographic coverage, and oversight</li>
          <li>Service-saturation and audit-priority metrics</li>
          <li>Decision support for PennDOT</li>
        </ul>
        <p class="rp-partner rp-foot">Agency: PennDOT</p>
      </article>
      <article class="rp-card">
        <div class="rp-proj-top"><img class="rp-logo" src="/images/logos/vdot.png" alt="VDOT (Virginia Department of Transportation)"><span class="rp-period">2025 – 2026</span></div>
        <h3 class="rp-serif rp-proj-title">Utilizing Big Data to Verify and Enhance Route Choice Models in Travel Demand Modeling</h3>
        <ul>
          <li>Methodological development and large-scale analysis</li>
          <li>Cross-network translation of connected-vehicle data</li>
          <li>Empirical evaluation of route-choice and network representation</li>
        </ul>
        <p class="rp-partner rp-foot">Outputs: <a href="/publications/">HSMM-T</a> (Under Review) · <a href="https://doi.org/10.2139/ssrn.7541649" target="_blank" rel="noopener noreferrer">Zone Connectors</a> (TR Part A, Under Review)</p>
      </article>
      <article class="rp-card">
        <div class="rp-proj-top"><img class="rp-logo rp-logo--square" src="/images/logos/fhwa.png" alt="U.S. DOT Federal Highway Administration"><span class="rp-period">2023 – 2025</span></div>
        <h3 class="rp-serif rp-proj-title">Complete Trip Data Analysis, Acquisition and Multimodal Measure Testing</h3>
        <ul>
          <li>Trajectory reconstruction and network representation</li>
          <li>Large-scale multimodal data processing and validation</li>
          <li>Map-matching and complete trip inference</li>
        </ul>
        <p class="rp-partner rp-foot">Output: <a href="https://arxiv.org/abs/2607.15436" target="_blank" rel="noopener noreferrer">Complete Trip</a> (Preprint)</p>
      </article>
      <article class="rp-card">
        <div class="rp-proj-top"><span class="rp-agency"><i class="fa fa-plane" aria-hidden="true"></i>Hobby Airport</span><span class="rp-period">2024 – 2025</span></div>
        <h3 class="rp-serif rp-proj-title">William P. Hobby Airport Landside Traffic Analysis</h3><img class="rp-proj-img" src="/images/William%20P.%20Hobby%20Airport.png" alt="William P. Hobby Airport landside traffic simulation">
        <ul>
          <li>VISSIM microsimulation modeling and calibration</li>
          <li>Network coding, demand and routing development</li>
          <li>Operational analysis of access, circulation, and curbside facilities</li>
          <li>Congestion, queueing, travel time, and scenario evaluation</li>
        </ul>
      </article>
    </div>
  </section>
  <section class="rp-section" aria-labelledby="rp-other-heading">
    <div class="rp-head">
      <div class="rp-head-left">
        <span class="rp-num">04</span>
        <div>
          <h2 class="rp-serif" id="rp-other-heading">Other Research</h2>
          <p class="rp-serif">Earlier work in computer vision and transportation engineering.</p>
        </div>
      </div>
    </div>
    <div class="rp-studies rp-studies--other">
      <article class="rp-card">
        <a class="rp-img" href="https://ieeexplore.ieee.org/document/10226453" target="_blank" rel="noopener noreferrer"><img src="/images/Lane%20Detection.gif" alt="Animated lane detection results on driving video"></a>
        <div class="rp-title-row"><h3 class="rp-serif">Lane Detection</h3><span class="rp-badge rp-badge--green">Journal Paper</span></div>
        <p class="rp-lead rp-serif">Self pre-training with masked sequential autoencoders and customized PolyLoss.</p>
        <ul>
          <li>Robust lane detection in challenging driving scenes</li>
          <li>Masked sequential self pre-training on continuous frames</li>
          <li>Software copyright VLD_SP-MSAE (2024)</li>
        </ul>
        <div class="rp-foot">
          <span class="rp-venue">IEEE T-ITS (2023)</span>
          <div class="rp-links"><a href="https://ieeexplore.ieee.org/document/10226453" target="_blank" rel="noopener noreferrer">Paper &#8599;</a><a href="https://arxiv.org/abs/2305.17271" target="_blank" rel="noopener noreferrer">arXiv &#8599;</a><a href="https://github.com/RuohanLixyf/Lane-Detection-Self-Supervised-MSAE" target="_blank" rel="noopener noreferrer">Code &#8599;</a></div>
        </div>
      </article>
    </div>
  </section>
</div>
<!--   
Intelligent quality detection of lane rendering data,Aug.2022- Sept.2022 
======
* Objective: To efficiently detect whether there are defects in the rendered generated map data for navigation
* Implemented pre-training with Masked Image Modeling using three hybrid CNN-LSTM neural network models
* Build the pre-training pipeline for the image recovery task and carried out the pre-training
* Tested different numbers of continuous sequence image inputs with different pre-training models
* Adjusted the pre-trained models for fine-tuning the image classification task
* Developed the pipeline for abnormal image detection to identify defected lane rendering image
* Delivery: An implementation report and participated in the HUAWEI 2022 Global AI Challenge
    
<div align=center>
<br/><img src='/images/mask.jpg'>
Figure.1 
   
<br/><img src='/images/normal_result1.jpg'>
Figure.2 
   
<br/><img src='/images/challenge_result1.jpg'>
Figure.3 
</div>


Research on the Traffic Capacity of Highway Region Ecological Environment—— A Case of G30 Zhangye,Sept.2021- Jun.2023 
======
* Objective: To study the impact of highway traffic on the surrounding environment, calculate the carrying capacity of traffic
* Delivery: A postgraduate thesis, and a paper titled The Maximum Traffic Capacity of Highway Region: Under Road Region Environment Constrains
  
<div align=center>
<br/><img src='/images/picture_1.png'>    
   
Figure.1 

<br/><img src='/images/picture_2.png'>
Figure.2 
</div>
    
Research on ecological risk assessment and traffic carrying capacity of road areas in ecological function zones,Sep.2021 - Sep.2022
======
Lanzhou Jiaotong University | Research Assistant

* Objective: To study the impact of highway traffic on the surrounding environment, calculate the carrying capacity of traffic 
* Wrote the research proposal.
* Arranged the required instruments and equipment for the research (portable weather stations, noise detectors, etc.), tested and debug the equipment
* Led the research team for a 5-day field data collection. Collected data includes regular air pollution data, meteorological data, traffic data, soil heavy metal data, noise data, etc.
* Established a road traffic and ecological risk evaluation index system for ecological function areas
* Determined the scope of the environmental impact of the highway is 600 meters using remote sensing datas
* Delivery: Completed a research report, and prepared a project proposal for the National Natural Science Foundation of China

<div align=center>
<br/><img src='/images/1.jpg'>
Figure.1 Time series data (NDVI) using Landsat8 remote sensing images.
<br/><img src='/images/4.png'>
Figure.2 Correlation analysis between NDVI value and meteorology indexes.
</div>
-->
