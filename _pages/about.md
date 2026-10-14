---
permalink: /
title:
excerpt: "About me"
author_profile: false
header: false
page_class: page--full-width-home
redirect_from:
  - /about/
  - /about.html
---

<style>
  html,
  body {
    overflow-x: clip;
  }

  body:has(.page--full-width-home) {
    padding-bottom: 0;
  }

  .page--full-width-home,
  .page--full-width-home .page__content {
    width: 100%;
    max-width: none;
  }

  #main {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
  }

  #main > .sidebar {
    display: none;
  }

  #main > article.page.page--full-width-home,
  #main > article.page--full-width-home {
    float: none;
    width: 100%;
    max-width: none;
    margin: 0;
    padding-right: 0;
  }

  #main > article.page.page--full-width-home .page__inner-wrap,
  #main > article.page--full-width-home .page__inner-wrap {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
  }

  .home-landing {
    position: relative;
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0 clamp(0.9rem, 1.8vw, 1.6rem) 0 clamp(0.85rem, 1.4vw, 1.35rem);
    background: var(--site-bg);
    color: var(--site-text);
  }

  body:has(.page--full-width-home) .page__footer {
    position: static;
    clear: both;
    margin-top: 0;
  }

  body:has(.page--full-width-home) .page__footer footer {
    margin-top: 0;
    padding-top: 0.25rem;
    padding-bottom: 0.75rem;
  }

  .page--full-width-home + .page__footer,
  article.page--full-width-home + .page__footer {
    position: static;
    margin-top: 0;
    border-top-width: 1px;
  }

  .page--full-width-home + .page__footer footer,
  article.page--full-width-home + .page__footer footer {
    margin-top: 0;
    padding-top: 0.25rem;
    padding-bottom: 0.75rem;
  }

  .home-landing > * {
    position: relative;
    z-index: 1;
  }

  .home-hero {
    display: grid;
    grid-template-columns: minmax(320px, 0.8fr) minmax(580px, 1.2fr);
    gap: 2.8rem;
    align-items: start;
    padding-top: clamp(16px, 2.75vw, 44px);
    padding-bottom: clamp(10px, 1.75vw, 28px);
    padding-left: 0;
    padding-right: 0;
  }

  .home-hero-copy {
    max-width: 760px;
    position: relative;
    z-index: 3;
    margin-top: -0.15rem;
    align-self: start;
  }

  .home-hero-intro {
    margin-bottom: 0.75rem;
  }

  .home-kicker {
    margin-bottom: 0.8rem;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(10, 42, 102, 0.5);
  }

  .home-headline {
    margin: 0 0 0.82rem;
    font-size: clamp(24px, 2.5vw, 38px);
    line-height: 0.98;
    letter-spacing: -0.055em;
    font-weight: 800;
    color: var(--site-text-strong);
  }

  .home-headline .accent {
    color: #2d9fe5;
  }

  .page__content .home-bio {
    max-width: 620px;
    margin: 0 0 0.1rem;
    font-size: 0.9rem;
    line-height: 1.2;
    color: rgba(10, 42, 102, 0.72);
  }

  .home-actions {
    display: flex;
    gap: 0.9rem;
    flex-wrap: wrap;
    margin: 0.2rem 0 0;
  }

  .home-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.78rem 1.18rem;
    border-radius: 999px;
    border: 1px solid rgba(50, 181, 255, 0.14);
    background: var(--site-surface-strong);
    box-shadow: 0 10px 22px rgba(10, 42, 102, 0.05);
    color: var(--site-text);
    font-size: 0.95rem;
    font-weight: 700;
    text-decoration: none;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }

  .home-action:hover {
    transform: translateY(-1px);
    border-color: rgba(50, 181, 255, 0.28);
    box-shadow: 0 14px 28px rgba(10, 42, 102, 0.08);
    text-decoration: none;
  }

  .home-action i {
    font-size: 0.96em;
    font-weight: 900;
  }

  .home-action--compact {
    padding: 0.45rem 0.95rem;
    font-size: 0.82rem;
    font-weight: 700;
    gap: 0.4rem;
    line-height: 1.2;
  }

  .home-action--compact i {
    font-size: 0.88em;
    line-height: 1;
    font-weight: 900;
  }

  .home-action--primary {
    background: var(--site-surface-strong);
    color: var(--site-text);
    border-color: rgba(50, 181, 255, 0.14);
  }

  .home-action--accent {
    background: linear-gradient(135deg, rgba(26, 132, 228, 0.96), rgba(67, 188, 242, 0.92));
    color: #ffffff;
    border-color: transparent;
  }

  .page__content .home-identity-card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem 0.9rem;
    align-items: center;
    max-width: 560px;
    padding: 1rem 1.1rem;
    margin-top: 0;
    border-radius: 22px;
    background: var(--site-surface);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .home-profile {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 1.05rem;
    align-items: center;
    grid-column: 1 / -1;
  }

  .home-profile img {
    grid-row: span 2;
    width: 98px;
    height: 98px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 10px 22px rgba(10, 42, 102, 0.08);
  }

  .home-profile-meta {
    display: flex;
    flex-direction: column;
    gap: 0.18rem;
  }

  .home-profile-name {
    font-size: 0.92rem;
    font-weight: 800;
    line-height: 1.35;
    letter-spacing: 0.01em;
    color: var(--site-text);
  }

  .home-profile-role {
    font-size: 0.92rem;
    line-height: 1.5;
    color: rgba(10, 42, 102, 0.62);
  }

  .home-identity-meta {
    display: contents;
  }

  .home-profile-line {
    font-size: 0.92rem;
    line-height: 1.5;
    color: rgba(10, 42, 102, 0.68);
  }

  .home-identity-meta a {
    color: var(--site-text);
    font-weight: 600;
    text-decoration: none;
  }

  .home-identity-meta .home-lab-nova {
    color: #0A2A66;
    font-weight: 700;
  }

  .home-identity-meta .home-lab-mobility {
    color: #32B5FF;
    font-weight: 700;
  }

  .home-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.42rem;
    align-items: center;
    grid-column: 1 / -1;
    margin-top: 0.05rem;
  }

  .home-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.95rem;
    height: 1.95rem;
    border-radius: 999px;
    border: 1px solid rgba(10, 42, 102, 0.08);
    background: rgba(255, 255, 255, 0.58);
    color: rgba(10, 42, 102, 0.72);
    text-decoration: none;
    transition: color 0.18s ease, transform 0.18s ease, border-color 0.18s ease, background-color 0.18s ease;
  }

  .home-links i {
    font-size: 0.92rem;
    line-height: 1;
  }

  .home-links span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .home-links i.fa,
  .home-links i.fas {
    font-family: "Font Awesome 5 Free", sans-serif !important;
    font-weight: 900 !important;
  }

  .home-links i.fab {
    font-family: "Font Awesome 5 Brands", sans-serif !important;
    font-weight: 400 !important;
  }

  .home-links i.ai {
    font-family: "Academicons", sans-serif !important;
    font-weight: normal !important;
    font-style: normal !important;
  }

  .home-links a:hover {
    color: var(--site-text-strong);
    transform: translateY(-1px);
    border-color: rgba(50, 181, 255, 0.22);
    background: rgba(50, 181, 255, 0.08);
  }

  .home-framework-shell {
    position: relative;
    align-self: start;
    padding: 0;
    margin-left: -6rem;
    margin-top: -1.15rem;
    margin-bottom: -10.5rem;
    transform: scale(0.88);
    transform-origin: top center;
    z-index: 2;
  }

  .home-framework-shell::before {
    content: "";
    position: absolute;
    inset: 2% 4% 5%;
    background:
      radial-gradient(circle at 28% 26%, rgba(89, 198, 243, 0.16), transparent 34%),
      radial-gradient(circle at 74% 54%, rgba(50, 181, 255, 0.1), transparent 36%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.18));
    border-radius: 36px;
    filter: blur(18px);
    pointer-events: none;
  }

  .home-framework-frame {
    position: relative;
    width: 100%;
    height: 780px;
    border: none;
    background: transparent;
  }

  .home-landing .home-hero {
    row-gap: 0.6rem;
    padding-bottom: 0.2rem;
    grid-template-columns: minmax(300px, 0.62fr) minmax(0, 1.38fr);
    column-gap: 0;
    padding-left: clamp(0.5rem, 5vw, 6rem);
    padding-right: clamp(0.5rem, 5vw, 6rem);
  }

  .home-hero-visual {
    align-self: start;
    min-width: 0;
  }

  .page__content .home-bio.home-bio--tagline {
    max-width: 520px;
    margin-bottom: 0.55rem;
    font-family: "Source Serif 4", "Source Serif Pro", Georgia, "Times New Roman", serif;
    font-size: clamp(0.92rem, 1.15vw, 1.1rem);
    line-height: 1.3;
    color: rgba(10, 42, 102, 0.62);
  }

  .page__content .home-bio.home-bio--summary {
    max-width: 520px;
    margin-bottom: 0.9rem;
    font-size: 0.88rem;
    line-height: 1.45;
    color: rgba(10, 42, 102, 0.66);
  }

  /* Desktop: scale the left column with the viewport so it shrinks in step
     with the hero image and the avatar stays level with the image bottom. */
  @media (min-width: 901px) {
    /* Scale the whole homepage (all rem-based text) with the window width. */
    html:has(.page--full-width-home) {
      font-size: clamp(12px, 0.94vw, 17px);
    }

    .home-hero-copy {
      font-size: 0.9rem;
    }

    .page__content .home-hero-copy .home-bio.home-bio--tagline {
      max-width: none;
      margin-bottom: 0.6em;
      font-size: 1.32em;
    }

    .page__content .home-hero-copy .home-bio.home-bio--summary {
      max-width: none;
      margin-bottom: 1em;
      font-size: 1em;
    }

    .home-hero-copy .home-profile img {
      width: 7.4em;
      height: 7.4em;
      border-radius: 1.4em;
    }

    .home-hero-copy .home-profile-name {
      font-size: 1.1em;
    }

    .home-hero-copy .home-profile-role,
    .home-hero-copy .home-profile-line {
      font-size: 1.05em;
    }

    .page__content .home-hero .home-identity-card {
      gap: 0.6em 1em;
      padding-top: 0.4em;
      padding-bottom: 0.4em;
    }

    .home-hero-copy .home-links a {
      width: 2.3em;
      height: 2.3em;
      font-size: 1em;
    }
  }

  .home-headline.home-headline--serif {
    grid-column: 1 / -1;
    max-width: 1100px;
    margin: 0 0 0.6rem;
    font-family: "Source Serif 4", "Source Serif Pro", Georgia, "Times New Roman", serif;
    font-size: clamp(30px, 3.3vw, 52px);
    font-weight: 700;
    line-height: 1.06;
    letter-spacing: -0.02em;
    color: #0b1f44;
  }

  .page__content .home-hero .home-identity-card {
    padding-left: 0;
    background: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  .home-hero-visual {
    position: relative;
    z-index: 1;
  }

  .home-framework-shell.home-framework-shell--image {
    margin: -3.2rem 0 0 -8%;
    width: 112%;
    transform: none;
  }

  .hf-tag {
    position: absolute;
    z-index: 2;
    animation: hf-float 5s ease-in-out infinite;
  }

  .hf-tag.is-open {
    z-index: 5;
    animation-play-state: paused;
  }

  .hf-tag--observe { left: 13%; top: 33%; }
  .hf-tag--represent { left: 45%; top: 31%; animation-delay: -1.7s; }
  .hf-tag--understand { left: 70%; top: 33%; animation-delay: -3.4s; }

  @keyframes hf-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .hf-tag-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.42rem 0.8rem;
    border: 1px solid rgba(120, 160, 205, 0.32);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 6px 20px rgba(30, 70, 120, 0.1);
    color: #12305a;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    cursor: pointer;
    transition: box-shadow 0.18s ease, border-color 0.18s ease;
  }

  .hf-tag-btn:hover,
  .hf-tag-btn:focus-visible,
  .hf-tag.is-open .hf-tag-btn {
    border-color: rgba(50, 140, 230, 0.5);
    box-shadow: 0 8px 24px rgba(30, 70, 120, 0.16);
  }

  .hf-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
  }

  .hf-tag--observe .hf-dot { color: #1b6fe0; }
  .hf-tag--represent .hf-dot { color: #1d8a8f; }
  .hf-tag--understand .hf-dot { color: #e2661b; }

  .hf-card {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    width: 15.6rem;
    padding: 0.8rem 0.9rem;
    border: 1px solid rgba(120, 160, 205, 0.28);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 14px 34px rgba(30, 70, 120, 0.16);
    color: #12305a;
    font-size: 0.75rem;
    line-height: 1.45;
    text-align: left;
  }

  .hf-card::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -10px;
    height: 10px;
  }

  @media (hover: hover) {
    .hf-tag:hover {
      z-index: 5;
      animation-play-state: paused;
    }

    .hf-tag:hover .hf-card {
      display: block !important;
    }
  }

  .hf-tag--understand .hf-card {
    left: auto;
    right: 0;
  }

  .page__content .hf-card p.hf-card-q {
    margin: 0 0 0.45rem;
    font-family: "Source Serif 4", Georgia, serif;
    font-size: 0.84rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .page__content .hf-card ul {
    margin: 0 0 0.55rem;
    padding-left: 1rem;
  }

  .page__content .hf-card li {
    margin: 0;
    font-size: 0.75rem;
    color: rgba(18, 48, 90, 0.8);
  }

  .hf-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .page__content .hf-chips a {
    padding: 0.18rem 0.55rem;
    border-radius: 999px;
    background: rgba(50, 140, 230, 0.1);
    color: #1557b0;
    font-size: 0.69rem;
    font-weight: 600;
    text-decoration: none;
  }

  .page__content .hf-chips a:hover {
    background: rgba(50, 140, 230, 0.2);
  }

  @media (prefers-reduced-motion: reduce) {
    .hf-tag { animation: none; }
  }

  @media (max-width: 700px) {
    .hf-tag { display: none; }
  }

  .hs {
    padding: 1.1rem clamp(0.5rem, 5vw, 6rem) 0.6rem;
  }

  .hs--agenda {
    padding-top: 0.4rem;
  }

  .hs-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .page__content .hs-title {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Source Serif 4", "Source Serif Pro", Georgia, serif;
    font-size: clamp(1.3rem, 1.9vw, 1.7rem);
    font-weight: 700;
    letter-spacing: -0.01em;
    color: #0b1f44;
  }

  .page__content p.hs-sub {
    margin: 0.15rem 0 0;
    font-family: "Source Serif 4", "Source Serif Pro", Georgia, serif;
    font-size: 0.9rem;
    color: rgba(10, 42, 102, 0.64);
  }

  .page__content a.hs-more {
    flex-shrink: 0;
    padding: 0.38rem 0.9rem;
    border: 1px solid rgba(50, 140, 230, 0.32);
    border-radius: 999px;
    background: #ffffff;
    color: #1557b0;
    font-size: 0.8rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    transition: background-color 0.18s ease, box-shadow 0.18s ease;
  }

  .page__content a.hs-more:hover {
    background: rgba(50, 140, 230, 0.08);
    box-shadow: 0 4px 14px rgba(30, 70, 120, 0.1);
  }

  .ra-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
  }

  .ra-card,
  .rp-card,
  .sr-card {
    border: 1px solid rgba(10, 42, 102, 0.08);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0 6px 20px rgba(30, 70, 120, 0.05);
  }

  .ra-card {
    --ra: #1b6fe0;
    --ra-soft: rgba(27, 111, 224, 0.09);
    display: flex;
    flex-direction: column;
    padding: 0.9rem 1rem;
  }

  .ra-card--teal { --ra: #1d8a8f; --ra-soft: rgba(29, 138, 143, 0.1); }
  .ra-card--orange { --ra: #e2661b; --ra-soft: rgba(226, 102, 27, 0.1); }

  .ra-top {
    display: flex;
    gap: 0.8rem;
    align-items: flex-start;
  }

  .ra-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--ra-soft);
    color: var(--ra);
    font-size: 1.3rem;
  }

  .ra-num {
    font-size: 0.74rem;
    font-weight: 700;
    color: var(--ra);
    opacity: 0.75;
  }

  .page__content .ra-card h3,
  .page__content .rp-card h3 {
    margin: 0;
    font-family: "Source Serif 4", "Source Serif Pro", Georgia, serif;
    font-size: 1.02rem;
    font-weight: 700;
    color: #0b1f44;
  }

  .page__content .ra-card p.ra-lead,
  .page__content .rp-card p {
    margin: 0.15rem 0 0;
    font-size: 0.78rem;
    line-height: 1.35;
    color: rgba(10, 42, 102, 0.66);
  }

  .page__content ul.ra-list {
    margin: 0.65rem 0 0.7rem;
    padding-left: 1.1rem;
  }

  .page__content ul.ra-list li {
    margin: 0 0 0.12rem;
    font-size: 0.78rem;
    line-height: 1.35;
    color: rgba(10, 42, 102, 0.8);
  }

  .ra-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: auto;
  }

  .page__content .ra-chips a,
  .ra-chips span {
    padding: 0.18rem 0.55rem;
    border: 1px solid color-mix(in srgb, var(--ra, #1b6fe0) 25%, transparent);
    border-radius: 7px;
    background: var(--ra-soft, rgba(27, 111, 224, 0.08));
    color: var(--ra, #1557b0);
    font-size: 0.72rem;
    font-weight: 600;
    text-decoration: none;
  }

  .page__content .ra-chips a:hover {
    filter: brightness(0.95);
    text-decoration: underline;
  }

  .sr-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.8rem;
  }

  .sr-card {
    display: flex;
    flex-direction: column;
    padding: 0.8rem 0.85rem 0.9rem;
  }

  .sr-status {
    align-self: flex-start;
    padding: 0.12rem 0.5rem;
    border: 1px solid transparent;
    border-radius: 6px;
    font-size: 0.66rem;
    font-weight: 600;
  }

  .sr-status--published { border-color: rgba(27, 135, 84, 0.25); background: rgba(35, 164, 96, 0.1); color: #137044; }
  .sr-status--review { border-color: rgba(45, 126, 229, 0.25); background: rgba(50, 181, 255, 0.1); color: #145da0; }
  .sr-status--dataset { border-color: rgba(127, 86, 217, 0.25); background: rgba(127, 86, 217, 0.1); color: #6842b8; }
  .sr-status--revision { border-color: rgba(226, 102, 27, 0.28); background: rgba(226, 102, 27, 0.08); color: #b5520f; }

  .sr-img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;
    margin: 0.5rem 0 0.6rem;
    overflow: hidden;
    border-radius: 8px;
    background: #ffffff;
  }

  .sr-img img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.2s ease;
  }

  .sr-img:hover img {
    transform: scale(1.03);
  }

  .page__content .sr-card h3 {
    margin: 0 0 0.2rem;
    font-family: "Source Serif 4", "Source Serif Pro", Georgia, serif;
    font-size: 1.08rem;
    font-weight: 700;
    color: #0b1f44;
  }

  .page__content p.sr-desc {
    margin: 0 0 0.35rem;
    font-size: 0.78rem;
    line-height: 1.38;
    color: rgba(10, 42, 102, 0.72);
  }

  .page__content p.sr-venue {
    margin: 0 0 0.5rem;
    font-size: 0.74rem;
    line-height: 1.35;
    color: rgba(10, 42, 102, 0.55);
  }

  .sr-topics {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-bottom: 0.6rem;
  }

  .sr-topics span {
    padding: 0.12rem 0.5rem;
    border-radius: 6px;
    background: rgba(27, 111, 224, 0.08);
    color: #1557b0;
    font-size: 0.68rem;
  }

  .sr-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: auto;
  }

  .page__content .sr-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.3rem 0.65rem;
    border: 1px solid transparent;
    border-radius: 7px;
    font-size: 0.76rem;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    transition: transform 0.18s ease;
  }

  .page__content .sr-links a:hover { transform: translateY(-1px); }
  .page__content .sr-links .sr-link--paper { border-color: rgba(220, 53, 69, 0.25); background: rgba(220, 53, 69, 0.06); color: #a82332; }
  .page__content .sr-links .sr-link--data { border-color: rgba(27, 135, 84, 0.25); background: rgba(35, 164, 96, 0.08); color: #137044; }
  .page__content .sr-links .sr-link--scholar { border-color: rgba(45, 126, 229, 0.25); background: rgba(50, 181, 255, 0.08); color: #145da0; }

  @media (max-width: 1100px) {
    .sr-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    .sr-grid {
      grid-template-columns: 1fr;
    }
  }

  .rp-card {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.9rem 1rem;
  }

  .rp-top {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
  }

  .rp-icon {
    flex-shrink: 0;
    width: 2rem;
    margin-top: 0.15rem;
    color: #1b6fe0;
    font-size: 1.45rem;
    text-align: center;
  }

  .rp-agencies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    margin-top: auto;
    padding-left: 2.75rem;
  }

  .rp-agencies span {
    font-size: 1.05rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    color: #0a2a66;
  }

  .rp-chips {
    padding-left: 2.75rem;
  }

  @media (max-width: 1000px) {
    .ra-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .hs-head {
      flex-direction: column;
      align-items: flex-start;
    }

    .sr-card {
      grid-template-columns: 1fr;
    }
  }

  .hs--bottom {
    padding-top: 0.2rem;
    padding-bottom: 1.4rem;
  }

  .hb-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 0.8rem;
    align-items: start;
  }

  .hb-card {
    border: 1px solid rgba(10, 42, 102, 0.08);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0 6px 20px rgba(30, 70, 120, 0.05);
    padding: 1rem 1.1rem;
  }

  .hb-teach {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    align-self: stretch;
  }

  .hb-teach-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    border-radius: 12px;
    background: rgba(27, 111, 224, 0.09);
    color: #1b6fe0;
    font-size: 1.6rem;
  }

  .hb-teach-body {
    flex: 1;
    min-width: 0;
  }

  .page__content .hb-card h3 {
    margin: 0;
    font-family: "Source Serif 4", "Source Serif Pro", Georgia, serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #0b1f44;
  }

  .page__content .hb-teach-body > p {
    margin: 0.25rem 0 0.75rem;
    font-size: 0.8rem;
    line-height: 1.4;
    color: rgba(10, 42, 102, 0.66);
  }

  .hb-teach-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;
  }

  .hb-teach-row .ra-chips {
    margin-top: 0;
  }

  .page__content a.hb-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    border: 1px solid rgba(50, 140, 230, 0.3);
    border-radius: 50%;
    background: #ffffff;
    color: #1557b0;
    font-weight: 700;
    text-decoration: none;
  }

  .page__content a.hb-arrow:hover {
    background: rgba(50, 140, 230, 0.08);
  }

  .hb-updates-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .page__content .hb-updates-head h3 {
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }

  .hb-live {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #e03131;
    box-shadow: 0 0 0 4px rgba(224, 49, 49, 0.14);
  }

  .hb-viewall {
    padding: 0.22rem 0.65rem;
    border: 1px solid rgba(50, 140, 230, 0.28);
    border-radius: 999px;
    background: #ffffff;
    color: #1557b0;
    font-size: 0.76rem;
    font-weight: 700;
    cursor: pointer;
  }

  .hb-viewall:hover {
    background: rgba(50, 140, 230, 0.08);
  }

  .page__content ul.hb-timeline {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .page__content ul.hb-timeline li {
    position: relative;
    display: grid;
    grid-template-columns: 4.6rem minmax(0, 1fr);
    gap: 0.6rem;
    margin: 0;
    padding: 0.2rem 0 0.2rem 1.1rem;
    font-size: 0.78rem;
    line-height: 1.4;
    color: rgba(10, 42, 102, 0.75);
  }

  .page__content ul.hb-timeline li::before {
    content: "";
    position: absolute;
    left: 0.15rem;
    top: 0.62rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d9485f;
  }

  .page__content ul.hb-timeline li:last-child::before {
    background: #6b7f99;
  }

  .hb-date {
    font-weight: 600;
    color: #0b1f44;
  }

  .hb-archive {
    margin-top: 0.6rem;
    padding-top: 0.6rem;
    max-height: 340px;
    overflow-y: auto;
    border-top: 1px solid rgba(10, 42, 102, 0.1);
  }

  .page__content .hb-archive ul {
    margin: 0;
    padding-left: 1.1rem;
  }

  .page__content .hb-archive li {
    margin: 0 0 0.35rem;
    font-size: 0.76rem;
    line-height: 1.45;
    color: rgba(10, 42, 102, 0.75);
  }

  @media (max-width: 1000px) {
    .hb-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .hb-teach-row {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .hs--about {
    padding-top: 0.6rem;
  }

  .am-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 9rem;
    gap: 2.2rem;
    align-items: center;
  }

  .am-text {
    padding-left: 1.1rem;
    border-left: 3px solid rgba(50, 140, 230, 0.35);
  }

  .page__content .am-text .hs-title {
    margin-bottom: 0.5rem;
  }

  .page__content .am-text p {
    margin: 0 0 0.6rem;
    font-size: 0.9rem;
    line-height: 1.6;
    color: rgba(10, 42, 102, 0.78);
  }

  .page__content .am-text p:last-child {
    margin-bottom: 0;
  }

  .page__content .am-text strong {
    color: #0b1f44;
  }

  .page__content .am-text a {
    color: #1557b0;
    text-decoration: none;
  }

  .am-logo {
    display: block;
    justify-self: center;
  }

  .am-logo img {
    display: block;
    width: 120px;
    height: auto;
    border-radius: 14px;
    transition: transform 0.2s ease;
  }

  .am-logo:hover img {
    transform: scale(1.04);
  }

  .page__content ul.am-facts {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .page__content ul.am-facts li {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0.7rem 0.9rem;
    border: 1px solid rgba(10, 42, 102, 0.08);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0 6px 18px rgba(30, 70, 120, 0.05);
  }

  .am-fact-num {
    font-family: "Source Serif 4", "Source Serif Pro", Georgia, serif;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.1;
    color: #1b6fe0;
  }

  .am-fact-num--text {
    font-size: 1.2rem;
  }

  .am-fact-label {
    font-size: 0.76rem;
    color: rgba(10, 42, 102, 0.62);
  }

  @media (max-width: 900px) {
    .am-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .page__content ul.am-facts {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .page__content ul.am-facts li {
      flex: 1 1 10rem;
    }
  }
  .home-hero-divider {
    grid-column: 1 / -1;
    width: 100%;
    margin: -1.2rem 0 0;
    position: relative;
    z-index: 3;
    border: 0;
    border-top: 1px solid rgba(10, 42, 102, 0.14);
  }

  @media (max-width: 900px) {
    .home-landing .home-hero {
      grid-template-columns: 1fr;
    }

    .home-framework-shell.home-framework-shell--image {
      margin-top: 0;
      margin-left: 0;
      width: 100%;
    }
  }

  .home-framework-shell.home-framework-shell--image::before {
    display: none;
  }

  .home-framework-image {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    mix-blend-mode: multiply;
    -webkit-mask-image: radial-gradient(ellipse 72% 70% at 50% 50%, #000 62%, transparent 100%);
    mask-image: radial-gradient(ellipse 72% 70% at 50% 50%, #000 62%, transparent 100%);
  }

  .home-research {
    margin-top: 0;
    margin-bottom: 0.55rem;
  }

  .home-research > .home-news-card {
    padding: 0.8rem 0.9rem;
    border-radius: 18px;
  }

  .home-research .home-news-heading {
    margin-bottom: 0.45rem;
  }

  .home-research .home-news-heading h2 {
    font-size: 1.18rem;
  }

  .home-research .home-news-badge {
    padding: 0.22rem 0.55rem;
    font-size: 0.82rem;
  }

  .home-research-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.55rem;
    margin-top: 0;
  }

  .home-research-item {
    display: flex;
    flex-direction: column;
    gap: 0.42rem;
    min-width: 0;
    padding: 0.5rem;
    border: 1px solid var(--site-border);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.58);
  }

  .home-research-image-link {
    display: block;
    border: 1px solid var(--site-border);
    border-radius: 9px;
    overflow: hidden;
    background: rgba(242, 247, 255, 0.72);
    box-shadow: 0 4px 12px rgba(10, 42, 102, 0.04);
    text-decoration: none;
  }

  .home-research-image-link img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 4;
    height: auto;
    object-fit: contain;
    background: #ffffff;
    transition: transform 0.2s ease;
  }

  .home-research-image-link:hover img {
    transform: scale(1.03);
  }

  .home-research-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.03rem;
    min-width: 0;
  }

  .home-research-title {
    margin: 0;
    font-size: clamp(0.98rem, 1.3vw, 1.16rem);
    line-height: 1.35;
    font-weight: 750;
    letter-spacing: -0.015em;
    color: var(--site-text-strong);
  }

  .home-research-title-row {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    flex-wrap: wrap;
  }

  .home-research-name {
    margin: 0;
    color: var(--site-text-strong);
    font-size: 1.08rem;
    line-height: 1.25;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  .home-research-type {
    display: inline-flex;
    align-items: center;
    padding: 0.16rem 0.38rem;
    border: 1px solid transparent;
    border-radius: 999px;
    font-size: 0.64rem;
    line-height: 1;
    font-weight: 750;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .home-research-type--dataset {
    border-color: rgba(27, 135, 84, 0.2);
    background: rgba(35, 164, 96, 0.11);
    color: #137044;
  }

  .home-research-type--paper {
    border-color: rgba(45, 126, 229, 0.2);
    background: rgba(50, 181, 255, 0.12);
    color: #145da0;
  }

  .home-research-type--algorithm {
    border-color: rgba(220, 38, 60, 0.52);
    background: #fff0f2;
    color: #c1122f;
    box-shadow: 0 0 0 1px rgba(220, 38, 60, 0.05);
  }

  .page__content p.home-research-paper-title {
    margin: 0.1rem 0 0;
    color: var(--site-text);
    font-size: 0.76rem;
    line-height: 1.24;
    font-weight: 600;
  }

  .page__content p.home-research-venue {
    margin: 0.02rem 0 0;
    font-size: 0.69rem;
    line-height: 1.2;
    color: var(--site-text-muted);
  }

  .page__content p.home-research-description {
    margin: 0.12rem 0 0;
    padding: 0.28rem 0.42rem;
    border-left: 2px solid var(--site-accent);
    border-radius: 0 6px 6px 0;
    background: rgba(50, 181, 255, 0.07);
    font-size: 0.7rem;
    line-height: 1.3;
    font-weight: 500;
    color: var(--site-text);
  }

  .home-research-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  .home-research-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.24rem 0.48rem;
    border-radius: 6px;
    border: 1px solid rgba(50, 181, 255, 0.2);
    background: var(--site-accent-soft);
    color: var(--site-text);
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 700;
    text-decoration: none;
    transition: transform 0.18s ease, border-color 0.18s ease, color 0.18s ease;
  }

  .home-research-links a:hover {
    transform: translateY(-1px);
    border-color: rgba(50, 181, 255, 0.24);
    color: var(--site-text-strong);
    background: rgba(50, 181, 255, 0.18);
    text-decoration: none;
  }

  .home-research-links i {
    font-size: 0.88em;
  }

  .home-research-links .home-research-link--paper {
    border-color: rgba(220, 53, 69, 0.2);
    background: rgba(220, 53, 69, 0.09);
    color: #a82332;
  }

  .home-research-links .home-research-link--data {
    border-color: rgba(27, 135, 84, 0.2);
    background: rgba(35, 164, 96, 0.1);
    color: #137044;
  }

  .home-research-links .home-research-link--demo {
    border-color: rgba(205, 139, 20, 0.22);
    background: rgba(233, 169, 45, 0.12);
    color: #98620a;
  }

  .home-research-links .home-research-link--project {
    border-color: rgba(127, 86, 217, 0.2);
    background: rgba(127, 86, 217, 0.1);
    color: #6842b8;
  }

  .home-research-links .home-research-link--scholar {
    border-color: rgba(45, 126, 229, 0.2);
    background: rgba(50, 181, 255, 0.11);
    color: #145da0;
  }

  .home-research-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 16 / 4;
    overflow: hidden;
    border: 1px solid var(--site-border);
    border-radius: 9px;
    background: #ffffff;
    color: var(--site-text);
    text-decoration: none;
  }

  .home-research-visual::before,
  .home-research-visual::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    background: rgba(50, 181, 255, 0.1);
  }

  .home-research-visual::before {
    width: 42%;
    height: 5px;
    transform: rotate(-8deg);
  }

  .home-research-visual::after {
    width: 28%;
    height: 5px;
    transform: translate(32%, 9px) rotate(9deg);
  }

  .home-research-visual span {
    position: relative;
    z-index: 1;
    padding: 0.28rem 0.7rem;
    border-radius: 999px;
    background: #ffffff;
    box-shadow: 0 4px 14px rgba(10, 42, 102, 0.08);
    font-size: 0.72rem;
    font-weight: 800;
  }

  .home-research-item--horizontal {
    display: grid;
    grid-template-columns: minmax(130px, 0.67fr) minmax(0, 0.33fr);
    align-items: stretch;
    min-height: 150px;
  }

  .home-research-item--horizontal .home-research-image-link {
    height: 100%;
  }

  .home-research-item--horizontal .home-research-image-link img {
    width: 100%;
    height: 100%;
    aspect-ratio: auto;
    object-fit: contain;
  }

  .home-news {
    margin-top: 0;
    margin-bottom: 0;
  }

  .home-news-card {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1.6rem 1.75rem;
    border: 1px solid rgba(10, 42, 102, 0.08);
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.76);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 16px 36px rgba(10, 42, 102, 0.05);
    margin-bottom: 0;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .home-news-heading {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    margin-bottom: 0.85rem;
  }

  .home-news-heading h2,
  .home-section-heading {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.18rem;
    font-weight: 700;
    color: var(--site-text);
  }

  .home-news-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.48rem;
    padding: 0.34rem 0.74rem;
    border-radius: 999px;
    background: rgba(255, 241, 241, 0.95);
    color: #b42318;
    font-size: 0.82rem;
    font-weight: 700;
  }

  .home-news-badge::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e5484d;
    box-shadow: 0 0 0 4px rgba(229, 72, 77, 0.12);
  }

  .about-news-ticker {
    margin: 0 0 1rem;
    padding: 0.1rem 0;
    background: transparent;
  }

  .about-news-ticker-viewport {
    display: block;
  }

  .about-news-item {
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 0.8rem;
    line-height: 1.7;
    color: rgba(10, 42, 102, 0.78);
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .about-news-entry {
    padding: 0.75rem 0.9rem;
    border-left: 3px solid rgba(209, 153, 82, 0.42);
    border-radius: 0 12px 12px 0;
    background: rgba(250, 240, 224, 0.62);
    font-size: 0.88rem;
    line-height: 1.6;
  }

  .about-news-archive {
    margin-top: 0.35rem;
    border: 1px solid rgba(10, 42, 102, 0.08);
    border-radius: 18px;
    background: var(--site-surface);
    padding: 0.8rem 1rem;
    font-size: 15px;
    line-height: 1.65;
  }

  .about-news-archive summary {
    cursor: pointer;
    color: var(--site-text);
    font-weight: 700;
    margin: 0.1rem 0 0.3rem;
    font-size: 16px;
  }

  .about-news-archive ul {
    margin-top: 0.8rem;
  }

  .about-news-archive li {
    margin-bottom: 0.68rem;
    color: rgba(10, 42, 102, 0.76);
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .about-news-archive iframe {
    max-width: 100%;
    border-radius: 14px;
  }

  .home-featured {
    margin-top: 0.45rem;
    margin-bottom: 0;
    position: relative;
    z-index: 4;
  }

  .home-section-heading {
    margin-bottom: 0.95rem;
  }

  .home-novamatch-module {
    position: relative;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 14px 14px 14px 10px;
    border-radius: 16px;
    background: #ffffff;
    border: 0.5px solid rgba(218, 223, 232, 0.95);
    box-shadow: none;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    overflow: hidden;
  }

  .home-novamatch-module::before,
  .home-novamatch-module::after {
    display: none;
  }

  .home-novamatch-module::before {
    content: none;
  }

  .home-novamatch-module::after {
    content: none;
  }

  .home-novamatch-copy {
    position: relative;
    z-index: 1;
  }

  .home-novamatch-copy {
    max-width: 1180px;
  }

  .home-novamatch-copy-top {
    display: grid;
    grid-template-columns: 104px minmax(0, 1fr);
    gap: 0.45rem;
    align-items: start;
  }

  .home-novamatch-title-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: nowrap;
  }

  .home-novamatch-wordmark {
    margin: 0;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.5px;
    font-weight: 800;
    flex: 0 0 auto;
  }

  .home-novamatch-wordmark .nova {
    color: #0B1F4D;
  }

  .home-novamatch-wordmark .match {
    color: #0B1F4D;
  }

  .home-novamatch-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    min-height: 24px;
    padding: 0 9px;
    margin-top: 1px;
    border-radius: 999px;
    background: linear-gradient(135deg, #F2F8FF, #E6F2FF);
    border: 1px solid transparent;
    color: #4A8DFF;
    font-size: 10px;
    font-weight: 600;
  }

  .page__content p.home-novamatch-description {
    margin: 4px 0 0;
    max-width: 1000px;
    font-size: 14px;
    line-height: 1.45;
    font-weight: 400;
    color: #5E6B85;
  }

  .home-novamatch-logo-block {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .home-novamatch-logo-link {
    display: inline-flex;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .home-novamatch-logo-link:hover {
    transform: translateY(-2px);
    text-decoration: none;
  }

  .home-novamatch-logo-link:active {
    transform: translateY(0);
  }

  .home-novamatch-logo-link:hover .home-novamatch-logo-frame {
    box-shadow: 0 0 18px rgba(61, 165, 255, 0.14);
  }

  .home-novamatch-logo-frame {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 86px;
    height: 86px;
    border-radius: 20px;
    background: #ffffff;
    border: 0.5px solid rgba(218, 223, 232, 0.95);
    box-shadow: none;
  }

  .home-novamatch-logo-frame img {
    width: 76px;
    height: 76px;
    object-fit: contain;
  }

  .home-novamatch-copy-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .home-novamatch-description-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.18rem;
    width: 100%;
  }

  .home-novamatch-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    min-height: 30px;
    margin-top: 0.05rem;
    padding: 0 14px;
    border-radius: 12px;
    background: linear-gradient(135deg, #0F2D63, #2E7BFF);
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
    text-decoration: none;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .home-novamatch-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 22px rgba(61, 165, 255, 0.2);
    text-decoration: none;
  }

  .home-news-content {
    min-width: 0;
  }

  .home-news-content,
  .home-news-content p,
  .home-news-content li,
  .home-news-content a,
  .home-news-heading h2,
  .home-news-badge,
  .about-news-archive summary {
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .home-news-map-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .home-visitor-map {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 190px;
    min-height: 0;
    padding: 0;
    overflow: hidden;
    border-radius: 14px;
    border: 1px solid rgba(120, 160, 255, 0.12);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(245, 249, 255, 0.72));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  .home-visitor-map iframe,
  .home-visitor-map img,
  .home-visitor-map canvas {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  /* MapMyVisitors currently returns an empty vector-map path set. Its
     opaque canvas hides the PNG world-map fallback, so keep it transparent. */
  .home-visitor-map .jvectormap-container {
    background-color: transparent !important;
  }

  .home-visitor-map #mapmyvisitors-widget,
  .home-visitor-map .mapmyvisitors-map-container,
  .home-visitor-map .mapmyvisitors-map {
    width: 100% !important;
    height: 100% !important;
  }

  .home-visitor-map .mapmyvisitors-map-container {
    overflow: hidden;
  }

  .home-visitor-map .mapmyvisitors-map {
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  .home-visitor-map .mapmyvisitors-visitors {
    position: absolute !important;
    top: 12px;
    left: 0;
    width: 100%;
    z-index: 20;
  }

  @media (max-width: 1080px) {
    .home-hero {
      grid-template-columns: 1fr;
      gap: 2.3rem;
      padding-top: clamp(14px, 3vw, 36px);
      padding-bottom: clamp(10px, 2.5vw, 26px);
    }

    .home-framework-shell {
      margin-left: -2.5rem;
      margin-top: -0.55rem;
      margin-bottom: -6rem;
      padding: 0;
      transform: scale(0.92);
    }

    .home-framework-frame {
      height: 720px;
    }

    .home-news-card {
      grid-template-columns: 1fr;
      gap: 1.8rem;
    }

    .home-featured {
      margin-top: 8px;
    }

    .home-news-map-wrap {
      justify-content: center;
    }
  }

  @media (max-width: 720px) {
    .home-landing {
      padding: 0.65rem clamp(0.7rem, 3.5vw, 1rem) 0;
    }

    .home-framework-shell {
      display: none;
    }

    .home-hero {
      padding-top: clamp(10px, 3.5vw, 28px);
      padding-bottom: clamp(8px, 3vw, 20px);
    }

    .home-hero-copy {
      margin-top: 0;
    }

    .home-identity-card {
      grid-template-columns: 1fr;
      gap: 0.85rem;
    }

    .home-profile {
      grid-template-columns: auto 1fr;
      gap: 0 0.9rem;
      align-items: center;
    }

    .home-profile img {
      grid-row: auto;
      width: 88px;
      height: 88px;
    }

    .home-links {
      grid-column: auto;
    }

    .home-framework-frame {
      height: 520px;
    }

    .home-framework-shell {
      margin-left: 0;
      margin-top: -0.6rem;
      transform: none;
    }

    .home-news-heading {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.55rem;
    }

    .home-research-item {
      gap: 0.4rem;
      padding: 0.45rem;
    }

    .home-research-image-link {
      width: 100%;
    }

    .home-research-visual {
      width: 100%;
      aspect-ratio: 16 / 7;
    }

    .home-research-name {
      font-size: 0.92rem;
    }

    .home-research-grid {
      grid-template-columns: 1fr;
    }

    .home-research-item--horizontal {
      display: flex;
      flex-direction: column;
      min-height: 0;
    }

    .home-research-item--horizontal .home-research-image-link {
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 7;
    }

    .home-research-item--horizontal .home-research-image-link img {
      width: 100%;
      height: 100%;
      aspect-ratio: auto;
      object-fit: contain;
    }

    .home-novamatch-module {
      padding: 13px 12px 13px 9px;
    }

    .home-novamatch-copy-top {
      grid-template-columns: 92px minmax(0, 1fr);
      gap: 0.45rem;
    }

    .home-novamatch-wordmark {
      font-size: 19px;
    }

    .page__content p.home-novamatch-description {
      max-width: 100%;
      margin-top: 4px;
      font-size: 13px;
      line-height: 1.42;
    }

    .home-novamatch-cta {
      margin-top: 0.05rem;
    }

    .home-novamatch-description-row {
      align-items: flex-start;
      gap: 0.1rem;
    }

    .home-novamatch-logo-frame {
      width: 78px;
      height: 78px;
      border-radius: 18px;
    }

    .home-novamatch-logo-frame img {
      width: 69px;
      height: 69px;
    }

    .home-news-card {
      padding: 1.3rem 1.1rem;
    }

    .home-news-badge {
      max-width: 100%;
      white-space: normal;
    }

    .home-novamatch-copy-top {
      grid-template-columns: 1fr;
    }

    .home-novamatch-logo-block {
      justify-self: flex-start;
      align-items: flex-start;
    }

    .home-featured {
      margin-top: 6px;
    }

    .home-novamatch-title-row {
      flex-wrap: wrap;
    }
  }
</style>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap">
<div class="home-landing">
  <section class="home-hero">
    <h1 class="home-headline home-headline--serif">Reconstructing, Representing, and Understanding <span class="accent">Human Mobility</span>.</h1>
    <div class="home-hero-copy">
      <div class="home-hero-intro">
        <p class="home-bio home-bio--tagline">
          What can we recover, represent, and reliably infer from incomplete mobility data?
        </p>
        <p class="home-bio home-bio--summary">
          I develop computational methods that bridge noisy observations, interpretable mobility representations, and transportation planning, advancing our understanding of human movement and the limits of mobility data.
        </p>

        <div class="home-identity-card">
          <div class="home-profile">
            <img src="/images/Ruohan_GIT3.jpg" alt="Ruohan Li profile image">
            <div class="home-profile-meta">
              <div class="home-profile-name">Ruohan Li</div>
              <div class="home-profile-role">Ph.D. Candidate in Civil &amp; Environmental Engineering</div>
              <div class="home-profile-line">Villanova University · <a href="https://cfxiong.github.io/data-lab/" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none"><span style="color:#0A2A66"><strong>Nova</strong></span><span style="color:#32B5FF"><strong>Mobility</strong></span> Lab</a></div>
            </div>
          </div>

          <div class="home-links">
            <a href="mailto:ruohanli373@gmail.com" aria-label="Email"><i class="fa fa-envelope" aria-hidden="true"></i><span>Email</span></a>
            <a href="https://scholar.google.com/citations?hl=zh-CN&user=aORBRHkAAAAJ" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i><span>Google Scholar</span></a>
            <a href="https://github.com/RuohanLixyf" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span></a>
            <a href="https://www.linkedin.com/in/ruohan-li-28b878254" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a>
            <a href="https://orcid.org/my-orcid?orcid=0000-0001-8102-7376" target="_blank" rel="noopener noreferrer" aria-label="ORCID"><i class="ai ai-orcid" aria-hidden="true"></i><span>ORCID</span></a>
            <a href="https://www.researchgate.net/profile/Ruohan-Li-15?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" aria-label="ResearchGate"><i class="ai ai-researchgate" aria-hidden="true"></i><span>ResearchGate</span></a>
          </div>
        </div>

      <!-- Action buttons hidden for now:
      <div class="home-actions">
          <a class="home-action home-action--primary home-action--compact" href="/Researches/"><i class="fa fa-flask" aria-hidden="true"></i><span>Research</span></a>
          <a class="home-action home-action--accent home-action--compact" href="https://ruohanlixyf.github.io/Complete-Trip-Data-Explorer/explorer.html" target="_blank" rel="noopener noreferrer"><i class="fa fa-chart-line" aria-hidden="true"></i><span>Interactive Data Demo</span></a>
        </div>
      -->

        <!-- NovaMatch module hidden for now:
        <section class="home-featured">
          <div class="home-novamatch-module">
            <div class="home-novamatch-copy">
              <div class="home-novamatch-copy-top">
                <div class="home-novamatch-logo-block">
                  <a class="home-novamatch-logo-link" href="/novamatch/" aria-label="Open the NovaMatch page">
                    <div class="home-novamatch-logo-frame">
                      <img src="/images/NovaMatch log.png" alt="NovaMatch logo">
                    </div>
                  </a>
                </div>

                <div class="home-novamatch-copy-body">
                  <div class="home-novamatch-title-row">
                    <h2 class="home-novamatch-wordmark"><span class="nova">Nova</span><span class="match">Match</span></h2>
                    <span class="home-novamatch-badge">Research Ecosystem</span>
                  </div>

                  <div class="home-novamatch-description-row">
                    <p class="home-novamatch-description">
                      NovaMatch is a unified trajectory processing ecosystem that integrating map matching, cross-network translation, structural representation, and mobility analytics. It transforms raw mobility observations into knowledge that supports transportation systems research, planning, policy and other downstream task.
                    </p>

                    <a class="home-novamatch-cta" href="/novamatch/">Explore NovaMatch Framework &rarr;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        -->
      </div>
    </div>

    <div class="home-hero-visual">
    <div class="home-framework-shell home-framework-shell--image">
      <img class="home-framework-image" src="/images/framework.png" alt="Research Framework">
      <div class="hf-tag hf-tag--observe">
        <button type="button" class="hf-tag-btn" aria-expanded="false" aria-controls="hf-card-observe"><span class="hf-dot" aria-hidden="true"></span>Sparse Observations</button>
        <div class="hf-card" id="hf-card-observe" hidden>
          <p class="hf-card-q">How much can we trust what we observe?</p>
          <ul>
            <li>Sparse &amp; noisy GPS / LBS traces</li>
            <li>Sampling gaps across modes</li>
            <li>Measurement uncertainty</li>
          </ul>
          <div class="hf-chips"><a href="https://ruohanlixyf.github.io/Complete-Trip-Data-Explorer/explorer.html" target="_blank" rel="noopener noreferrer">Complete Trip</a></div>
        </div>
      </div>
      <div class="hf-tag hf-tag--represent">
        <button type="button" class="hf-tag-btn" aria-expanded="false" aria-controls="hf-card-represent"><span class="hf-dot" aria-hidden="true"></span>Reliable Representations</button>
        <div class="hf-card" id="hf-card-represent" hidden>
          <p class="hf-card-q">What structure can be recovered from incomplete trajectories?</p>
          <ul>
            <li>Trajectory reconstruction &amp; map matching</li>
            <li>Hierarchical structural representation</li>
            <li>Cross-network translation</li>
          </ul>
          <div class="hf-chips"><a href="https://doi.org/10.1109/TITS.2026.3740031" target="_blank" rel="noopener noreferrer">Sup-HMM</a><a href="/publications/">PM-Tree</a><a href="/publications/">HSMM-T</a></div>
        </div>
      </div>
      <div class="hf-tag hf-tag--understand">
        <button type="button" class="hf-tag-btn" aria-expanded="false" aria-controls="hf-card-understand"><span class="hf-dot" aria-hidden="true"></span>Mobility Insights</button>
        <div class="hf-card" id="hf-card-understand" hidden>
          <p class="hf-card-q">What can incomplete mobility observations reliably reveal about human movement?</p>
          <ul>
            <li><strong>Mobility recoverability</strong></li>
            <li>Trip &amp; activity inference</li>
            <li>Planning &amp; transit accessibility</li>
          </ul>
          <div class="hf-chips"><a href="/transitdesert/">Transit Mirage</a></div>
        </div>
      </div>
      <!-- Interactive framework visualization (kept for later use):
      <iframe
        class="home-framework-frame"
        src="/research-framework-v2/"
        title="Research Framework"
        scrolling="no"
        frameborder="0">
      </iframe>
      -->
    </div>
    </div>
    <hr class="home-hero-divider">
    <script>
      (function () {
        var tags = document.querySelectorAll('.hf-tag');
        function closeAll(except) {
          tags.forEach(function (t) {
            if (t === except) return;
            t.classList.remove('is-open');
            t.querySelector('.hf-tag-btn').setAttribute('aria-expanded', 'false');
            t.querySelector('.hf-card').hidden = true;
          });
        }
        tags.forEach(function (tag) {
          var btn = tag.querySelector('.hf-tag-btn');
          var card = tag.querySelector('.hf-card');
          btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = !tag.classList.contains('is-open');
            closeAll(tag);
            tag.classList.toggle('is-open', open);
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            card.hidden = !open;
          });
          card.addEventListener('click', function (e) { e.stopPropagation(); });
          tag.addEventListener('mouseenter', function () { closeAll(tag); });
          tag.addEventListener('mouseleave', function () { closeAll(null); });
        });
        document.addEventListener('click', function () { closeAll(null); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(null); });
      })();
    </script>
  </section>

  <section class="hs hs--about" aria-labelledby="about-me-heading">
    <div class="am-grid">
      <div class="am-text">
        <h2 class="hs-title" id="about-me-heading">About Me</h2>
        <p>Hi! I'm Ruohan! My research focuses on <strong>human mobility modeling, mobility data analytics, and computational methods</strong>. I enjoy developing algorithms such as <strong>Sup-HMM, PM-Tree, and HSMM-T</strong>, and building <a href="/novamatch/"><strong>NovaMatch</strong></a>, an integrated framework for large-scale mobility data processing, map matching, network representation, and analytics.</p>
        <p>I aim to bridge methodological research with real-world transportation challenges. Through projects supported by <strong>FHWA/USDOT, VDOT, DVRPC, and PennDOT</strong>, I have contributed to applied mobility research and transportation planning. My experience also includes real-world airport traffic simulation and analysis using <strong>VISSIM</strong>.</p>
        <p>My work includes <strong>two first-author publications in IEEE Transactions on Intelligent Transportation Systems</strong>, with <strong>five additional first-author manuscripts under review</strong>.  My doctoral research, <em>From Observations to Mobility Representations</em>, explores overlooked challenges and limitations in mobility data, with the goal of developing <span style="color: #2474C7; font-weight: normal;">robust, interpretable, and trustworthy methods</span> for transportation and urban analysis.</p>
      </div>
      <a class="am-logo" href="/novamatch/" aria-label="Open NovaMatch"><img src="/images/NovaMatch%20log.png" alt="NovaMatch logo"></a>
    </div>
  </section>

  <section class="hs hs--selected" aria-labelledby="selected-research-heading">
    <div class="hs-head">
      <div>
        <h2 class="hs-title" id="selected-research-heading">Selected Research</h2>
        <p class="hs-sub">Representative work on mobility reconstruction, representation, and real-world transportation applications.</p>
      </div>
      <a class="hs-more" href="/publications/">View All Publications <span aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="sr-grid">
      <article class="sr-card">
        <span class="sr-status sr-status--published">Published</span>
        <a class="sr-img" href="https://doi.org/10.1109/TITS.2026.3740031" target="_blank" rel="noopener noreferrer" aria-label="View Sup-HMM publication"><img src="/images/suphmm/framework.png" alt="Sup-HMM framework"></a>
        <h3>Sup-HMM</h3>
        <p class="sr-desc">Bayesian-optimized map matching for sparse and noisy LBS trajectories.</p>
        <p class="sr-venue">IEEE Transactions on Intelligent Transportation Systems · 2026</p>
        <div class="sr-topics"><span>Map Matching</span><span>Bayesian Optimization</span></div>
        <div class="sr-links">
          <a class="sr-link--paper" href="https://doi.org/10.1109/TITS.2026.3740031" target="_blank" rel="noopener noreferrer"><i class="fa fa-file-alt" aria-hidden="true"></i> Paper</a>
        </div>
      </article>
      <article class="sr-card">
        <span class="sr-status sr-status--review">Under Review</span>
        <a class="sr-img" href="/publications/" aria-label="View PM-Tree publication"><img src="/images/pmtree/pmtree_build_animation.gif" alt="Animated visualization of the PM-Tree construction process"></a>
        <h3>PM-Tree</h3>
        <p class="sr-desc">Priority-guided hierarchical representation of sparse trajectories.</p>
        <p class="sr-venue">IEEE T-ITS · Under Review</p>
        <div class="sr-topics"><span>Trajectory Representation</span><span>Mobility Modeling</span></div>
        <div class="sr-links">
          <a class="sr-link--paper" href="/publications/"><i class="fa fa-file-alt" aria-hidden="true"></i> Paper</a>
        </div>
      </article>
      <article class="sr-card">
        <span class="sr-status sr-status--dataset">Dataset</span>
        <a class="sr-img" href="https://ruohanlixyf.github.io/Complete-Trip-Data-Explorer/explorer.html" target="_blank" rel="noopener noreferrer" aria-label="Open Complete Trip explorer"><img src="/images/CompleteTrip.png" alt="Complete Trip research preview"></a>
        <h3>Complete Trip</h3>
        <p class="sr-desc">A linked multimodal human mobility dataset reconstructed from passive LBS observations.</p>
        <p class="sr-venue">TRB 2026 / AGU25 · 2026</p>
        <div class="sr-topics"><span>Mobility Dataset</span><span>Multimodal Data</span></div>
        <div class="sr-links">
          <a class="sr-link--paper" href="https://arxiv.org/abs/2607.15436" target="_blank" rel="noopener noreferrer"><i class="fa fa-file-alt" aria-hidden="true"></i> arXiv</a>
          <a class="sr-link--data" href="https://github.com/villanova-transportation/Complete-Trip-Data" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i> Data</a>
          <a class="sr-link--scholar" href="https://ruohanlixyf.github.io/Complete-Trip-Data-Explorer/explorer.html" target="_blank" rel="noopener noreferrer"><i class="fa fa-external-link-alt" aria-hidden="true"></i> Explorer</a>
        </div>
      </article>
      <article class="sr-card">
        <span class="sr-status sr-status--revision">Under Revision</span>
        <a class="sr-img" href="/transitdesert/" aria-label="Open Transit Mirage project page"><img src="/images/Transit_Desert/TD_Picture8.png" alt="Transit Mirage research preview"></a>
        <h3>Transit Mirage</h3>
        <p class="sr-desc">Rethinking the interpretation of transit demand-supply imbalance.</p>
        <p class="sr-venue">Transportation Research Part A · Under Revision</p>
        <div class="sr-topics"><span>Transit Analysis</span><span>Network Modeling</span></div>
        <div class="sr-links">
          <a class="sr-link--paper" href="/publications/"><i class="fa fa-file-alt" aria-hidden="true"></i> Paper</a>
          <a class="sr-link--scholar" href="/transitdesert/"><i class="fa fa-external-link-alt" aria-hidden="true"></i> Explore</a>
        </div>
      </article>
    </div>
  </section>

  <section class="hs hs--bottom" aria-label="Teaching and latest updates">
    <div class="hb-grid">
      <article class="hb-card hb-updates" id="latest-updates">
        <div class="hb-updates-head">
          <h3><span class="hb-live" aria-hidden="true"></span>Latest Updates</h3>
          <button type="button" class="hb-viewall" aria-expanded="false" aria-controls="hb-updates-archive">View All <span aria-hidden="true">&rarr;</span></button>
        </div>
        <ul class="hb-timeline">
          <li>
            <span class="hb-date">Oct 2026</span>
            <span>
              <a href="https://doi.org/10.1109/TITS.2026.3740031"
                target="_blank" rel="noopener noreferrer">
                Sup-HMM
              </a> published in IEEE T-ITS (Early Access)!
            </span>
          </li>
          <li><span class="hb-date">Sep 2026</span><span>Three papers accepted for presentation at TRB 2027 (106th Annual Meeting).</span></li>
          <li><span class="hb-date">Jul 2026</span><span>Complete Trip dataset released as a <a href="https://arxiv.org/abs/2607.15436" target="_blank" rel="noopener noreferrer">preprint</a>.</span></li>
          <li><span class="hb-date">Oct 2025</span><span>Presenting Transit Deserts work at TRB 2026, Lectern Session 4018.</span></li>
        </ul>
        <div class="hb-archive" id="hb-updates-archive" hidden>
          <ul>
            <li><strong>2026:</strong> 🎉 My first paper from my Ph.D. journey, <em>Taming Volatile Trajectories: Sup-HMM, a Bayesian-Optimized Hidden Markov Model for Map Matching of Location-Based Service Data</em>, has been accepted as a regular paper by <strong>IEEE Transactions on Intelligent Transportation Systems (IEEE T-ITS)</strong> on 27-Sep-2026!</li>
            <li><strong>2027:</strong> Three of my papers have been accepted for presentation at the <strong>TRB 106th Annual Meeting</strong>! 🎉</li>
            <li><strong>07/2026:</strong> Our lab's latest dataset paper, <strong>Complete Trip: A Linked Multimodal Human Mobility Dataset</strong>, is now publicly available on arXiv. <a href="https://arxiv.org/abs/2607.15436">arXiv</a>.</li>
            <li><strong>10/2025:</strong> I will present my paper <em>Rethinking <strong>Transit Deserts</strong>: Identifying Pseudo and Real Gaps through Trip-Level Mobility Data</em> at the <strong>TRB 105th Annual Meeting</strong>, as the <strong>first presenter</strong> in <strong>Lectern Session 4018: Evaluation of Non-Conventional Transit Impacts</strong> <span style="color:#32B5FF">(Wednesday, Jan 14, 8:00-9:45 AM, Room 150B, Convention Center)</span>. Welcome to attend and join the discussion!</li>
            <li><strong>09/2025:</strong> My paper <em>Rethinking Transit Deserts: Identifying Pseudo and Real Gaps through Trip-Level Mobility Data</em> has been accepted by TRB. Another paper, <em>Complete Trip: An Open and Privacy-Safe Dataset of Multimodal Travel Sequences for Urban Transportation Systems Analysis</em>, has also been accepted.</li>
            <li><strong>08/2025:</strong> After the TRB deadline, I have been busy cleaning up my LBS map-matching code. Formatting code so that <em>other humans</em> can understand it feels like the hardest optimization problem ever.</li>
            <li><strong>09/2024:</strong> The Computer Software Copyright Registration in China: Vision-Based Lane Detection System With Self-supervised Pre-training Through Masked Sequential Auto-encoders (VLD_SP-MSAE), granted on Sep. 11, 2024, Patent number 2024R11L1180902. We also published the <a href="https://github.com/RuohanLixyf/Lane-Detection-Self-Supervised-MSAE">open-source lane detection code</a> on GitHub.</li>
            <li><strong>09/2024:</strong> I presented my recent work, <em>Sup-HMM Map-Matching of Location Data Trajectories: A Heterogeneous and Bayesian-Optimized Hidden Markov Approach</em>, at the TRC-30 conference in Crete.</li>
            <li><strong>07/2024:</strong> My paper have been submitted and is currently under review by <a href="https://trb-annual-meeting.nationalacademies.org/">The Transportation Research Board (TRB) 104nd Annual Meeting</a>: <em>Sup-HMM Map-Matching of Location Data Trajectories: A Heterogeneous and Bayesian-Optimized Hidden Markov Approach.</em> Working on the map-matching continues. This work is part of our team's Complete Trips Project.</li>
            <li><strong>06/2024:</strong> My paper has been accepted by <a href="https://trc-30.epfl.ch/">Conference in Emerging Technologies in Transportation Systems (TRC-30)</a>: <em>Map Matching of Location Data Trajectories: A Heterogeneous and Bayesian-Optimized Hidden Markov Approach.</em> Very excited for the presentation in Crete, Greece, in September!</li>
            <li><strong>06/2024:</strong> The computer software has been submitted and is currently under review by Computer Software Copyright Registration in China: <em>Lane Line Detection Software Based on Image Sequence Mask Pre-Training.</em></li>
            <li><strong>04/2024:</strong> My paper has been submitted and is currently under review by <a href="https://trc-30.epfl.ch/">Conference in Emerging Technologies in Transportation Systems (TRC-30)</a>: <em>Map Matching of Location Data Trajectories: A Heterogeneous and Bayesian-Optimized Hidden Markov Approach.</em> I'm currently working on map matching for human mobility data.</li>
            <li><strong>10/2023:</strong> Two of my TRB papers were accepted: <a href="http://dx.doi.org/10.13140/RG.2.2.24853.50405">A Novel Highway Traffic Capacity Analyzing Method under Road Region Atmospheric Environment Constraints Based on Computational Fluid Dynamics Model</a> (<strong>Rank 1st</strong>) and <a href="http://dx.doi.org/10.13140/RG.2.2.28243.35360">Intelligent Anomaly Detection for Lane Rendering Using Transformer with Self-Supervised Pre-Training and Customized Fine-Tuning</a> (Rank 3rd), TRB 103rd Annual Meeting.</li>
            <li><strong>09/2023:</strong> The article, "The Highway Region Boundary Based on Multi-Environmental Factors," can now be accessed. View the article <a href="https://doi.org/10.1061/9780784484869.014">here</a>.</li>
            <li><strong>09/2023:</strong> Starting my Ph.D. studies at Villanova University!</li>
            <li><strong>08/2023:</strong> The article, "Robust Lane Detection Through Self Pre-Training With Masked Sequential Autoencoders and Fine-Tuning With Customized PolyLoss," has been finalized and posted in the "Early Access" area on IEEE Xplore. View the article <a href="https://ieeexplore.ieee.org/document/10226453">here</a>.</li>
            <li><strong>07/2023:</strong> I received my Ph.D. offer from Villanova University! Looking forward to new research and life at Villanova!</li>
            <li><strong>07/2023:</strong> My paper <a href="https://arxiv.org/abs/2305.17271">Robust Lane Detection through Self Pre-training with Masked Sequential Autoencoders and Fine-tuning with Customized PolyLoss</a> is accepted by the journal of <em>IEEE Transactions on Intelligent Transportation Systems</em>.</li>
            <li><strong>06/2023:</strong> I received my M.Eng. degree in traffic and transportation from Lanzhou Jiaotong University!</li>
          </ul>
        </div>
      </article>
    </div>
    <script>
      (function () {
        var btn = document.querySelector('.hb-viewall');
        var archive = document.getElementById('hb-updates-archive');
        if (!btn || !archive) return;
        btn.addEventListener('click', function () {
          var open = archive.hidden;
          archive.hidden = !open;
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
          btn.firstChild.nodeValue = open ? 'Show Less ' : 'View All ';
        });
      })();
    </script>
  </section>
</div>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NM1JF81S4Y"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NM1JF81S4Y');
</script>
