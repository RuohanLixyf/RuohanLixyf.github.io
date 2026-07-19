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
    font-size: 1.02rem;
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
    height: 700px;
    border: none;
    background: transparent;
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
    position: relative;
    min-height: 108px;
    overflow: hidden;
  }

  .about-news-item {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    pointer-events: none;
    line-height: 1.7;
    color: rgba(10, 42, 102, 0.78);
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .about-news-item.is-active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
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
      padding: 0;
      transform: scale(0.92);
    }

    .home-framework-frame {
      height: 620px;
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

    .home-research-name {
      font-size: 1.02rem;
    }

    .home-research-grid {
      grid-template-columns: 1fr;
    }

    .home-research-item--horizontal {
      grid-template-columns: minmax(120px, 0.67fr) minmax(0, 0.33fr);
      min-height: 145px;
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

<div class="home-landing">
  <section class="home-hero">
    <div class="home-hero-copy">
      <div class="home-hero-intro">
        <h1 class="home-headline">Structural mobility modeling for <span class="accent">trajectory, network, and transportation systems</span>.</h1>
        <p class="home-bio">
          I study how large-scale mobility trajectories can be used to reveal the latent structure of human movement across spatial, network, and transportation systems. My research develops structural representations and computational frameworks that transform noisy trajectory observations into interpretable models for understanding mobility behavior and systems.
        </p>

        <div class="home-identity-card">
          <div class="home-profile">
            <img src="/images/Ruohan_GIT3.jpg" alt="Ruohan Li profile image">
            <div class="home-profile-meta">
              <div class="home-profile-name">Ruohan Li</div>
              <div class="home-profile-role">Ph.D. Candidate in Villanova University</div>
              <div class="home-profile-line"><span style="color:#0A2A66"><strong>Nova</strong></span><span style="color:#32B5FF"><strong>Mobility</strong></span> Lab</div>
              <div class="home-profile-line">Advised by <a href="https://cfxiong.github.io/">Dr. Chenfeng Xiong</a></div>
            </div>
          </div>

          <div class="home-links">
            <a href="mailto:ruohanli373@gmail.com" aria-label="Email"><i class="fa fa-envelope" aria-hidden="true"></i><span>Email</span></a>
            <a href="https://scholar.google.com/citations?hl=zh-CN&user=aORBRHkAAAAJ" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i><span>Google Scholar</span></a>
            <a href="https://github.com/RuohanLixyf" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span></a>
            <a href="https://www.linkedin.com/in/ruohan-li-28b878254" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a>
            <a href="https://orcid.org/my-orcid?orcid=0000-0001-8102-7376" target="_blank" rel="noopener noreferrer" aria-label="ORCID"><i class="ai ai-orcid" aria-hidden="true"></i><span>ORCID</span></a>
          </div>
        </div>

      <div class="home-actions">
          <a class="home-action home-action--primary home-action--compact" href="/NovaMobilityLab/"><i class="fa fa-file-alt" aria-hidden="true"></i><span>Presentation Materials</span></a>
          <a class="home-action home-action--accent home-action--compact" href="https://ruohanlixyf.github.io/Complete-Trip-Data-Explorer/explorer.html" target="_blank" rel="noopener noreferrer"><i class="fa fa-chart-line" aria-hidden="true"></i><span>Interactive Data Demo</span></a>
        </div>

        <section class="home-featured">
          <div class="home-novamatch-module">
            <div class="home-novamatch-copy">
              <div class="home-novamatch-copy-top">
                <div class="home-novamatch-logo-block">
                  <a class="home-novamatch-logo-link" href="/novamatch-layout-b/" aria-label="Open NovaMatch Framework page">
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

                    <a class="home-novamatch-cta" href="/novamatch-layout-b/">Explore NovaMatch Framework &rarr;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="home-framework-shell">
      <iframe
        class="home-framework-frame"
        src="/research-framework/"
        title="Research Framework"
        scrolling="no"
        frameborder="0">
      </iframe>
    </div>
  </section>

  <section class="home-research" aria-labelledby="selected-research-heading">
    <div class="home-news-card">
      <div class="home-news-heading">
        <h2 id="selected-research-heading">Selected Research</h2>
        <span class="home-news-badge">Featured work</span>
      </div>

      <div class="home-research-grid">
        <article class="home-research-item">
          <a class="home-research-image-link" href="https://ruohanlixyf.github.io/Complete-Trip-Data-Explorer/explorer.html" target="_blank" rel="noopener noreferrer" aria-label="Open Complete Trip demo">
            <img src="/images/CompleteTrip.png" alt="Complete Trip research preview">
          </a>
          <div class="home-research-content">
            <div>
              <div class="home-research-title-row">
                <h3 class="home-research-name">Complete Trip</h3>
                <span class="home-research-type home-research-type--dataset">Dataset</span>
                <span class="home-research-type home-research-type--paper">Research Paper</span>
              </div>
              <p class="home-research-paper-title">Complete Trip: A Linked Multimodal Human Mobility Dataset</p>
              <p class="home-research-venue">TRB2026 / AGU25 Presentation · Open Dataset · 2026</p>
              <p class="home-research-description">The first linked multimodal mobility dataset reconstructing complete journeys from passively collected LBS observations.</p>
            </div>
            <div class="home-research-links" aria-label="Complete Trip resources">
              <a class="home-research-link--paper" href="/publications/"><i class="fa fa-file-alt" aria-hidden="true"></i> arXiv</a>
              <a class="home-research-link--data" href="https://github.com/villanova-transportation/Complete-Trip-Data" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i> Data</a>
              <a class="home-research-link--demo" href="https://ruohanlixyf.github.io/Complete-Trip-Data-Explorer/explorer.html" target="_blank" rel="noopener noreferrer"><i class="fa fa-chart-line" aria-hidden="true"></i> Explorer</a>
            </div>
          </div>
        </article>

        <article class="home-research-item">
          <a class="home-research-image-link" href="/transitdesert/" aria-label="Open Transit Mirage project page">
            <img src="/images/TransitMirage.png" alt="Transit Mirage research preview">
          </a>
          <div class="home-research-content">
            <div>
              <div class="home-research-title-row">
                <h3 class="home-research-name">Transit Mirage</h3>
                <span class="home-research-type home-research-type--paper">Research Paper</span>
              </div>
              <p class="home-research-paper-title">Shifting Transit Deserts and Transit Mirages: Rethinking the Interpretation of Transit Demand-Supply Imbalance</p>
              <p class="home-research-venue">Transportation Research Part A · 2026 · Revision · AGU25 / TRB2026 Oral Presentation</p>
              <p class="home-research-description">High demand–supply imbalance does not necessarily indicate structural transit disadvantage.</p>
            </div>
            <div class="home-research-links" aria-label="Transit Mirage resources">
              <a class="home-research-link--paper" href="/publications/"><i class="fa fa-file-alt" aria-hidden="true"></i> Paper</a>
              <a class="home-research-link--project" href="/transitdesert/"><i class="fa fa-map" aria-hidden="true"></i> Project</a>
              <a class="home-research-link--scholar" href="https://scholar.google.com/citations?hl=zh-CN&amp;user=aORBRHkAAAAJ" target="_blank" rel="noopener noreferrer"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Scholar</a>
            </div>
          </div>
        </article>

        <article class="home-research-item home-research-item--horizontal">
          <a class="home-research-image-link" href="/publications/" aria-label="View PM-Tree publication">
            <img src="/images/pmtree/pmtree_build_animation.gif" alt="Animated visualization of the PM-Tree construction process">
          </a>
          <div class="home-research-content">
            <div>
              <div class="home-research-title-row">
                <h3 class="home-research-name">PM-Tree</h3>
                <span class="home-research-type home-research-type--algorithm">Algorithm</span>
                <span class="home-research-type home-research-type--paper">Research Paper</span>
              </div>
              <p class="home-research-paper-title">How Much of a Trajectory Is Needed? PM-Tree: Priority-Guided Hierarchical Trajectory Representation</p>
              <p class="home-research-venue">IEEE Transactions on Intelligent Transportation Systems · 2026 · Under Review</p>
              <p class="home-research-description">Only 3% of trajectory observations can preserve over 96% of structural information.</p>
            </div>
            <div class="home-research-links" aria-label="PM-Tree resources">
              <a class="home-research-link--paper" href="/publications/"><i class="fa fa-file-alt" aria-hidden="true"></i> Paper</a>
            </div>
          </div>
        </article>

        <article class="home-research-item home-research-item--horizontal">
          <a class="home-research-image-link" href="/publications/" aria-label="View Sup-HMM publication">
            <img src="/images/suphmm/framework.png" alt="Sup-HMM framework">
          </a>
          <div class="home-research-content">
            <div>
              <div class="home-research-title-row">
                <h3 class="home-research-name">Sup-HMM</h3>
                <span class="home-research-type home-research-type--algorithm">Algorithm</span>
                <span class="home-research-type home-research-type--paper">Research Paper</span>
              </div>
              <p class="home-research-paper-title">Taming Volatile Trajectories: Sup-HMM, a Bayesian-Optimized Hidden Markov Model for Map Matching of Location-Based Service Data</p>
              <p class="home-research-venue">IEEE Transactions on Intelligent Transportation Systems · 2025 · Revision</p>
              <p class="home-research-description">Bayesian optimization improves map matching under extremely sparse trajectories.</p>
            </div>
            <div class="home-research-links" aria-label="Sup-HMM resources">
              <a class="home-research-link--paper" href="/publications/"><i class="fa fa-file-alt" aria-hidden="true"></i> Paper</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="home-news">
      <div class="home-news-card">
        <div class="home-news-content">
          <div class="home-news-heading">
            <h2>News</h2>
            <span class="home-news-badge">Latest update &middot; 05/2026</span>
          </div>

          <div class="about-news-ticker" id="about-news-ticker">
            <div class="about-news-ticker-viewport">
              <div class="about-news-item is-active">
                <strong>05/2026:</strong> Launched a redesigned academic homepage and updated the research framework around structural mobility modeling, trajectory representation, and cross-network mobility systems.
              </div>
              <div class="about-news-item">
                <strong>10/2025:</strong> I will present my paper <em>Rethinking <strong>Transit Deserts</strong>: Identifying Pseudo and Real Gaps through Trip-Level Mobility Data</em> at the <strong>TRB 105th Annual Meeting</strong>, as the <strong>first presenter</strong> in <strong>Lectern Session 4018: Evaluation of Non-Conventional Transit Impacts</strong> <span style="color:#32B5FF">(Wednesday, Jan 14, 8:00-9:45 AM, Room 150B, Convention Center)</span>. Welcome to attend and join the discussion!
              </div>
            </div>
          </div>

          <details class="about-news-archive">
            <summary>Earlier News</summary>
            <ul>
              <li><strong>09/2025:</strong> My paper <em>Rethinking Transit Deserts: Identifying Pseudo and Real Gaps through Trip-Level Mobility Data</em> has been accepted by TRB. Another paper, <em>Complete Trip: An Open and Privacy-Safe Dataset of Multimodal Travel Sequences for Urban Transportation Systems Analysis</em>, has also been accepted.</li>
              <li><strong>08/2025:</strong> After the TRB deadline, I have been busy cleaning up my LBS map-matching code. Formatting code so that <em>other humans</em> can understand it feels like the hardest optimization problem ever.</li>
              <li><strong>09/2024:</strong> The Computer Software Copyright Registration in China: Vision-Based Lane Detection System With Self-supervised Pre-training Through Masked Sequential Auto-encoders (VLD_SP-MSAE), granted on Sep. 11, 2024, Patent number 2024R11L1180902. We also published the <a href="https://github.com/RuohanLixyf/Lane-Detection-Self-Supervised-MSAE">open-source lane detection code</a> on GitHub.</li>
              <li><strong>09/2024:</strong> I presented my recent work, <em>Sup-HMM Map-Matching of Location Data Trajectories: A Heterogeneous and Bayesian-Optimized Hidden Markov Approach</em>, at the TRC-30 conference in Crete.</li>
              <li><strong>07/2024:</strong> My paper have been submitted and is currently under review by <a href="https://trb-annual-meeting.nationalacademies.org/">The Transportation Research Board (TRB) 104nd Annual Meeting</a>: <em>Sup-HMM Map-Matching of Location Data Trajectories: A Heterogeneous and Bayesian-Optimized Hidden Markov Approach.</em> Working on the map-matching continues. This work is part of our team's Complete Trips Project.</li>
            </ul>

            <div align="center">
              Map-Matching Sample
              <iframe src="/files/Hof_13.html" width="700" height="400" frameborder="1" name="Map-Matching-Sample_DC_10" scrolling="auto" style="display: block; margin: 0 auto;"></iframe>
            </div>

            <ul>
              <li><strong>06/2024:</strong> My paper has been accepted by <a href="https://trc-30.epfl.ch/">Conference in Emerging Technologies in Transportation Systems (TRC-30)</a>: <em>Map Matching of Location Data Trajectories: A Heterogeneous and Bayesian-Optimized Hidden Markov Approach.</em> Very excited for the presentation in Crete, Greece, in September!</li>
              <li><strong>06/2024:</strong> The computer software has been submitted and is currently under review by Computer Software Copyright Registration in China: <em>Lane Line Detection Software Based on Image Sequence Mask Pre-Training.</em></li>
              <li><strong>04/2024:</strong> My paper has been submitted and is currently under review by <a href="https://trc-30.epfl.ch/">Conference in Emerging Technologies in Transportation Systems (TRC-30)</a>: <em>Map Matching of Location Data Trajectories: A Heterogeneous and Bayesian-Optimized Hidden Markov Approach.</em> I'm currently working on map matching for human mobility data.</li>
              <li><strong>10/2023:</strong> Two of my TRB papers were accepted:
                <ul>
                  <li><a href="http://dx.doi.org/10.13140/RG.2.2.24853.50405">A Novel Highway Traffic Capacity Analyzing Method under Road Region Atmospheric Environment Constraints Based on Computational Fluid Dynamics Model</a>. The Transportation Research Board (TRB) 103rd Annual Meeting. 2023. [Accepted] <strong>Rank 1st.</strong></li>
                  <li><a href="http://dx.doi.org/10.13140/RG.2.2.28243.35360">Intelligent Anomaly Detection for Lane Rendering Using Transformer with Self-Supervised Pre-Training and Customized Fine-Tuning</a>. The Transportation Research Board (TRB) 103rd Annual Meeting. 2023. [Accepted] Rank 3rd.</li>
                </ul>
              </li>
              <li><strong>09/2023:</strong> The article, "The Highway Region Boundary Based on Multi-Environmental Factors," can now be accessed. View the article <a href="https://doi.org/10.1061/9780784484869.014">here</a>.</li>
              <li><strong>09/2023:</strong> Starting my Ph.D. studies at Villanova University!</li>
              <li><strong>08/2023:</strong> The article, "Robust Lane Detection Through Self Pre-Training With Masked Sequential Autoencoders and Fine-Tuning With Customized PolyLoss," has been finalized and posted in the "Early Access" area on IEEE Xplore. View the article <a href="https://ieeexplore.ieee.org/document/10226453">here</a>.</li>
              <li><strong>07/2023:</strong> I received my Ph.D. offer from Villanova University! Looking forward to new research and life at Villanova!</li>
              <li><strong>07/2023:</strong> My paper <a href="https://arxiv.org/abs/2305.17271">Robust Lane Detection through Self Pre-training with Masked Sequential Autoencoders and Fine-tuning with Customized PolyLoss</a> is accepted by the journal of <em>IEEE Transactions on Intelligent Transportation Systems</em>.</li>
              <li><strong>06/2023:</strong> I received my M.Eng. degree in traffic and transportation from Lanzhou Jiaotong University!</li>
            </ul>
          </details>
        </div>


        <!-- Visitor map temporarily disabled.
        <div class="home-news-map-wrap">
          <div class="home-visitor-map">
            <a href='https://mapmyvisitors.com/web/1c6ne'  title='Visit tracker'><img src='https://mapmyvisitors.com/map.png?cl=0a2a66&w=a&t=tt&d=y0ANDnT92Jr7kSTOhpzObLiEJEHUAJs0Wv7TZPxy73g&co=ffffff&ct=32b5ff'/></a>
          </div>
        </div>
        -->

      </div>
  </section>
</div>

<script>
  (function () {
    const ticker = document.getElementById('about-news-ticker');

    if (!ticker) {
      return;
    }

    const items = Array.from(ticker.querySelectorAll('.about-news-item'));

    if (items.length <= 1) {
      return;
    }

    let activeIndex = 0;

    window.setInterval(() => {
      items[activeIndex].classList.remove('is-active');
      activeIndex = (activeIndex + 1) % items.length;
      items[activeIndex].classList.add('is-active');
    }, 10000);
  }());
</script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NM1JF81S4Y"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NM1JF81S4Y');
</script>
