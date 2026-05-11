---
layout: single
title: "NovaMatch Layout B"
permalink: /novamatch-layout-b/
author_profile: false
toc: false
page_class: page--novamatch-layout-b
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  :root {
    --primary: #6366F1;
    --blue: #3B82F6;
    --green: #10B981;
    --purple: #8B5CF6;
    --dark: #1A1F3C;
    --gray: #6B7280;
    --light-gray: #F5F6FA;
    --white: #FFFFFF;
    --border: #E5E7EB;
    --navy: #1E3A5F;
    --light-blue: #93C5FD;
    --slate: #64748B;
  }

  #main {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .page--novamatch-layout-b,
  .page--novamatch-layout-b .page__content {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  #main > .sidebar {
    display: none !important;
  }

  #main > article.page.page--novamatch-layout-b,
  #main > article.page--novamatch-layout-b {
    float: none !important;
    clear: both !important;
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  #main > article.page.page--novamatch-layout-b .page__inner-wrap,
  #main > article.page--novamatch-layout-b .page__inner-wrap,
  #main > article.page.page--novamatch-layout-b .page__content,
  #main > article.page--novamatch-layout-b .page__content {
    float: none !important;
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .page--novamatch-layout-b .page__inner-wrap > header,
  .page--novamatch-layout-b .page__meta,
  .page--novamatch-layout-b .page__share,
  .page--novamatch-layout-b .pagination {
    display: none;
  }

  .page--novamatch-layout-b .page__content {
    margin-top: 0;
    font-family: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .nmb-page,
  .nmb-page *,
  .nmb-page *::before,
  .nmb-page *::after {
    font-family: "Inter", "Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .nmb-page {
    background: var(--white);
    color: var(--dark);
    padding: 32px 12px 48px;
  }

  .nmb-shell {
    width: 100%;
    max-width: none;
    margin: 0;
  }

  .nmb-header {
    min-height: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    padding: 0 12px 10px;
  }

  .nmb-header-copy {
    max-width: 620px;
  }

  .nmb-header-brand {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .nmb-title {
    margin: 0;
    font-size: 36px;
    font-weight: 800;
    line-height: 1.08;
  }

  .nmb-title-nova {
    color: #0A2A66;
    font-weight: 800;
  }

  .nmb-title-match {
    color: #32B5FF;
    font-weight: 800;
  }

  .nmb-desc {
    margin: 12px 0 0;
    max-width: 470px;
    font-size: 13px;
    line-height: 1.7;
    color: var(--gray);
  }

  .nmb-feature-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  .nmb-header-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 0 0 auto;
  }

  .nmb-logo-card {
    width: 74px;
    padding: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }

  .nmb-logo-card img {
    display: block;
    width: 100%;
    height: auto;
  }

  .nmb-feature-grid {
    display: grid;
    grid-template-columns: repeat(4, 150px);
    gap: 24px;
    justify-content: start;
  }

  .nmb-feature-card,
  .nmb-input-card,
  .nmb-core-card,
  .nmb-branch-card,
  .nmb-analysis-panel,
  .nmb-output-panel {
    background: var(--white);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  .nmb-feature-card {
    width: 150px;
    border-radius: 12px;
    padding: 16px 20px;
  }

  .nmb-feature-head {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .nmb-icon {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
    flex: 0 0 auto;
  }

  .nmb-icon-fill {
    fill: currentColor;
    stroke: none;
  }

  .nmb-feature-title {
    margin: 0;
    font-size: 13px;
    font-weight: 700;
    color: var(--dark);
    line-height: 1.35;
  }

  .nmb-feature-copy {
    margin: 0;
    font-size: 11px;
    color: var(--gray);
    line-height: 1.55;
  }

  .nmb-flow {
    position: relative;
    display: grid;
    grid-template-columns: 220px 570px 330px 280px 230px;
    column-gap: 16px;
    row-gap: 22px;
    min-height: 640px;
    padding: 0 12px;
    align-items: start;
    margin-top: -8px;
  }

  .nmb-col {
    position: relative;
    min-width: 0;
    z-index: 2;
  }

  .nmb-flow-overlay {
    position: absolute;
    left: 12px;
    right: 12px;
    top: 44px;
    height: 592px;
    pointer-events: none;
    z-index: 3;
    overflow: visible;
  }

  .nmb-flow-overlay svg {
    width: 100%;
    height: 100%;
    display: block;
    overflow: visible;
  }

  .nmb-flow-overlay svg > path {
    fill: none;
  }

  .nmb-flow-line {
    fill: none;
    stroke: rgba(46, 123, 255, 0.78);
    stroke-width: 2.2;
    stroke-linecap: round;
    stroke-linejoin: round;
    filter: drop-shadow(0 0 8px rgba(46, 123, 255, 0.10));
  }

  .nmb-flow-line--soft {
    fill: none;
    stroke: rgba(46, 123, 255, 0.34);
    stroke-width: 1.3;
    stroke-dasharray: 2 9;
    filter: none;
  }

  .nmb-col-label {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    padding-top: 2px;
    font-size: 12px;
    color: var(--slate);
    line-height: 1.4;
  }

  .nmb-col-label::after {
    content: attr(data-step);
    width: 20px;
    height: 20px;
    border-radius: 999px;
    background: #DBEAFE;
    color: #0A2A66;
    box-shadow: 0 0 0 3px rgba(147, 197, 253, 0.18);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
    flex: 0 0 20px;
    order: -1;
    margin-top: 0;
  }

  .nmb-col-label--primary {
    font-size: 14px;
    font-weight: 700;
    color: var(--dark);
  }

  .nmb-col-label-text {
    white-space: nowrap;
  }

  .nmb-col-label-arrow {
    position: relative;
    flex: 1 1 auto;
    min-width: 18px;
    height: 0;
    border-top: 2px dashed #CBD5E1;
    transform: translateY(1px);
  }

  .nmb-col-label-arrow::after {
    content: "";
    position: absolute;
    right: -3px;
    top: -5px;
    border-left: 7px solid #94A3B8;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }

  .nmb-input-card {
    height: 480px;
    border-radius: 16px;
    padding: 24px;
  }

  .nmb-card-center-title {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: var(--dark);
    text-align: center;
    line-height: 1.35;
  }

  .nmb-card-center-subtitle {
    margin: 6px 0 0;
    font-size: 12px;
    color: var(--gray);
    text-align: center;
    line-height: 1.5;
  }

  .nmb-input-graphic {
    width: 160px;
    margin: 26px auto 22px;
  }

  .nmb-input-graphic svg {
    width: 160px;
    height: 160px;
    display: block;
  }

  .nmb-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nmb-list li {
    display: grid;
    grid-template-columns: 18px 1fr;
    gap: 10px;
    align-items: start;
    font-size: 12px;
    color: #374151;
    line-height: 2;
  }

  .nmb-list-mark {
    color: var(--primary);
    font-size: 14px;
    line-height: 1.6;
  }

  .nmb-core-card {
    position: relative;
    min-height: 600px;
    padding: 0;
    background: transparent;
    box-shadow: none;
    overflow: hidden;
  }

  .nmb-core-orbital {
    position: relative;
    width: 100%;
    height: 620px;
    transform: scale(0.92);
    transform-origin: 50% 40%;
    overflow: hidden;
    isolation: isolate;
  }

  .nmb-core-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .nmb-core-glow-ring {
    animation: nmbCorePulse 6.8s ease-in-out infinite;
    transform-origin: 284px 180px;
  }

  .nmb-core-glow-ring--slow {
    animation-duration: 8.6s;
    animation-delay: -1.6s;
  }

  .nmb-core-center {
    position: absolute;
    left: 50%;
    top: 39%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 3;
    width: 220px;
  }

  .nmb-core-title {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    color: #0B2A5B;
    letter-spacing: -0.02em;
    line-height: 1.15;
  }

  .nmb-core-copy {
    margin: 8px 0 0;
    font-size: 11px;
    color: var(--gray);
    line-height: 1.5;
  }

  .nmb-core-module {
    position: absolute;
    z-index: 4;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    max-width: 138px;
  }

  .nmb-core-module--1 {
    left: 56px;
    top: 100px;
  }

  .nmb-core-module--2 {
    right: 58px;
    top: 104px;
  }

  .nmb-core-module--3 {
    left: 50%;
    top: 34px;
    transform: translateX(-50%);
    max-width: 150px;
  }

  .nmb-core-module--4 {
    left: 74px;
    bottom: 92px;
  }

  .nmb-core-module--5 {
    right: 44px;
    bottom: 88px;
    max-width: 154px;
  }

  .nmb-core-module-icon {
    width: 30px;
    height: 30px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.58);
    box-shadow:
      0 0 0 1px rgba(220, 238, 255, 0.68),
      0 0 16px rgba(95, 168, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 30px;
    backdrop-filter: blur(3px);
  }

  .nmb-core-module-icon .nmb-icon {
    width: 16px;
    height: 16px;
    color: #5FA8FF;
    stroke-width: 1.7;
  }

  .nmb-core-module-title {
    margin: 0;
    font-size: 11px;
    font-weight: 600;
    color: #0B2A5B;
    line-height: 1.35;
  }

  .nmb-core-module-copy {
    margin: 2px 0 0;
    font-size: 10px;
    color: #6B7280;
    line-height: 1.4;
  }

  @keyframes nmbCorePulse {
    0%,
    100% {
      opacity: 0.42;
      transform: scale(0.985);
    }

    50% {
      opacity: 0.92;
      transform: scale(1.018);
    }
  }

  .nmb-branch-stack {
    display: grid;
    gap: 20px;
  }

  .nmb-branch-card {
    position: relative;
    width: 330px;
    height: 144px;
    border-radius: 22px;
    padding: 28px;
    background: linear-gradient(145deg, rgba(255,255,255,0.92), rgba(245,248,255,0.72));
    border: 1px solid rgba(90,140,220,0.12);
    box-shadow: 0 10px 28px rgba(40,80,150,0.05);
    overflow: hidden;
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  }

  .nmb-branch-card:hover {
    transform: translateY(-3px);
    border-color: rgba(90,140,220,0.2);
    box-shadow:
      0 12px 34px rgba(40,80,150,0.07),
      0 0 18px rgba(46,123,255,0.08);
  }

  .nmb-branch-card::before {
    content: "";
    position: absolute;
    inset: 14px;
    border-radius: 18px;
    background:
      radial-gradient(circle at 18% 32%, rgba(255,255,255,0.72), transparent 45%),
      linear-gradient(140deg, rgba(255,255,255,0.1), transparent 60%);
    pointer-events: none;
  }

  .nmb-branch-card::after {
    content: "";
    position: absolute;
    right: 18px;
    top: 18px;
    width: 120px;
    height: 78px;
    background:
      radial-gradient(circle at 22% 28%, rgba(46,123,255,0.08) 0 2px, transparent 2px 100%),
      radial-gradient(circle at 68% 56%, rgba(46,123,255,0.06) 0 2px, transparent 2px 100%);
    opacity: 0.8;
    pointer-events: none;
  }

  .nmb-branch-body {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 92px 1fr;
    gap: 18px;
    align-items: center;
    height: 100%;
  }

  .nmb-branch-title {
    margin: 0;
    font-size: 24px;
    font-weight: 800;
    color: #16386F;
    line-height: 1.15;
    letter-spacing: -0.4px;
  }

  .nmb-branch-graphic {
    width: 92px;
    height: 92px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.54);
    box-shadow: inset 0 0 0 1px rgba(128, 170, 230, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nmb-branch-graphic svg {
    width: 72px;
    height: 72px;
    display: block;
    overflow: visible;
  }

  .nmb-branch-list {
    margin: 12px 0 0;
    padding: 0;
    list-style: none;
    color: #55627A;
    font-size: 15px;
    line-height: 1.8;
  }

  .nmb-branch-list li::before {
    content: "• ";
    color: var(--accent);
  }

  .nmb-branch-arrow {
    display: none;
  }

  .nmb-analysis-panel {
    position: relative;
    width: 280px;
    height: 520px;
    margin-top: 20px;
    border-radius: 26px;
    background: rgba(255,255,255,0.55);
    border: 1px solid rgba(100,150,230,0.10);
    backdrop-filter: blur(10px);
    overflow: hidden;
  }

  .nmb-analysis-panel::before {
    content: "";
    position: absolute;
    inset: 18px 18px auto auto;
    width: 164px;
    height: 134px;
    background:
      radial-gradient(circle at 18% 30%, rgba(46,123,255,0.08) 0 1.6px, transparent 2px 100%),
      radial-gradient(circle at 74% 54%, rgba(46,123,255,0.06) 0 1.4px, transparent 2px 100%);
  }

  .nmb-analysis-panel::after {
    content: "";
    position: absolute;
    left: 30px;
    right: 30px;
    top: 42px;
    bottom: 42px;
    border-radius: 180px;
    border: 1px dashed rgba(46,123,255,0.08);
    transform: rotate(-8deg);
    pointer-events: none;
  }

  .nmb-analysis-list {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 0;
    padding: 30px 24px;
  }

  .nmb-analysis-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 0;
  }

  .nmb-analysis-item + .nmb-analysis-item {
    border-top: 1px solid rgba(24, 50, 94, 0.07);
  }

  .nmb-analysis-icon {
    width: 52px;
    height: 52px;
    border-radius: 999px;
    background: linear-gradient(145deg, rgba(255,255,255,0.88), rgba(228,239,255,0.68));
    box-shadow:
      inset 0 0 0 1px rgba(100,150,230,0.08),
      0 0 20px rgba(46,123,255,0.07);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2F80ED;
    flex: 0 0 52px;
  }

  .nmb-analysis-icon .nmb-icon {
    width: 22px;
    height: 22px;
    stroke-width: 1.8;
  }

  .nmb-analysis-name {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #18325E;
    line-height: 1.32;
  }

  .nmb-analysis-copy {
    margin: 6px 0 0;
    font-size: 14px;
    color: #6C7B94;
    line-height: 1.6;
  }

  .nmb-output-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 520px;
  }

  .nmb-output-panel {
    width: 230px;
    height: 400px;
    border-radius: 24px;
    background: linear-gradient(145deg, rgba(255,255,255,0.92), rgba(245,248,255,0.76));
    border: 1px solid rgba(100,150,230,0.12);
    box-shadow: 0 10px 30px rgba(40,80,150,0.05);
    padding: 24px 18px;
    display: grid;
    align-content: space-between;
    position: relative;
    overflow: hidden;
  }

  .nmb-output-panel::before {
    content: "";
    position: absolute;
    inset: 18px;
    border-radius: 20px;
    border: 1px dashed rgba(46,123,255,0.08);
    pointer-events: none;
  }

  .nmb-output-item {
    position: relative;
    z-index: 1;
    display: grid;
    justify-items: center;
    gap: 10px;
    text-align: center;
  }

  .nmb-output-icon {
    width: 44px;
    height: 44px;
    border-radius: 999px;
    background: rgba(47,128,237,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2F80ED;
    box-shadow: 0 0 16px rgba(46,123,255,0.08);
  }

  .nmb-output-icon .nmb-icon {
    width: 22px;
    height: 22px;
    stroke-width: 1.8;
  }

  .nmb-output-name {
    margin: 0;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
    color: #20406E;
    white-space: pre-line;
  }

  .nmb-capabilities {
    margin: 32px 12px 0;
    padding: 30px 42px 34px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(80, 140, 220, 0.14);
    box-shadow: 0 14px 42px rgba(20, 70, 140, 0.06);
    backdrop-filter: blur(10px);
  }

  .nmb-capabilities-title {
    margin: 0 0 28px;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    color: #06439B;
    line-height: 1.2;
  }

  .nmb-capabilities-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 34px;
  }

  .nmb-capability-item {
    position: relative;
    display: grid;
    grid-template-columns: 42px 1fr;
    gap: 14px;
    align-items: center;
    min-width: 0;
  }

  .nmb-capability-item:not(:first-child)::before {
    content: "";
    position: absolute;
    left: -17px;
    top: 4px;
    bottom: 4px;
    border-left: 1px dashed rgba(80, 140, 220, 0.22);
  }

  .nmb-capability-icon {
    width: 42px;
    height: 42px;
    border-radius: 999px;
    background: rgba(47, 128, 237, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2F80ED;
    flex: 0 0 42px;
  }

  .nmb-capability-icon .nmb-icon {
    width: 22px;
    height: 22px;
    stroke-width: 1.8;
  }

  .nmb-capability-name {
    margin: 0;
    font-size: 15px;
    font-weight: 700;
    color: #0B2F6B;
    line-height: 1.35;
    white-space: pre-line;
  }

  .nmb-capability-copy {
    margin: 6px 0 0;
    font-size: 13px;
    font-weight: 400;
    color: #51627F;
    line-height: 1.55;
    white-space: pre-line;
  }

  @media (max-width: 1500px) {
    .nmb-flow {
      grid-template-columns: 220px 570px 330px 280px 230px;
      overflow-x: auto;
      padding-bottom: 8px;
    }

    .nmb-capabilities-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 1180px) {
    .nmb-header {
      align-items: flex-start;
    }

    .nmb-flow-overlay {
      display: none;
    }

    .nmb-feature-row {
      align-items: flex-start;
    }

    .nmb-feature-grid {
      grid-template-columns: repeat(2, 150px);
    }

    .nmb-flow {
      grid-template-columns: repeat(2, minmax(280px, 1fr));
    }

    .nmb-branch-card,
    .nmb-analysis-panel,
    .nmb-output-panel {
      width: 100%;
      max-width: none;
    }

    .nmb-output-wrap {
      min-height: auto;
    }

    .nmb-capabilities {
      padding: 28px 24px 30px;
    }

    .nmb-capabilities-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    .nmb-page {
      padding: 20px 10px 32px;
    }

    .nmb-header,
    .nmb-flow {
      padding-left: 16px;
      padding-right: 16px;
    }

    .nmb-header-brand {
      align-items: flex-start;
      gap: 12px;
    }

    .nmb-logo-card {
      width: 62px;
    }

    .nmb-title {
      font-size: 30px;
    }

    .nmb-flow {
      grid-template-columns: 1fr;
    }

    .nmb-branch-body {
      grid-template-columns: 72px 1fr;
      gap: 14px;
    }

    .nmb-branch-graphic {
      width: 72px;
      height: 72px;
    }

    .nmb-branch-graphic svg {
      width: 58px;
      height: 58px;
    }

    .nmb-branch-title {
      font-size: 20px;
    }

    .nmb-analysis-panel {
      height: auto;
    }

    .nmb-feature-grid {
      grid-template-columns: 1fr;
    }

    .nmb-capabilities {
      margin-left: 16px;
      margin-right: 16px;
      padding: 24px 18px 24px;
    }

    .nmb-capabilities-grid {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .nmb-capability-item {
      padding: 18px 0;
    }

    .nmb-capability-item:not(:first-child)::before {
      display: none;
    }

    .nmb-capability-item:not(:last-child) {
      border-bottom: 1px dashed rgba(80, 140, 220, 0.18);
    }
  }
</style>

<div class="nmb-page">
  <div class="nmb-shell">
    <svg width="0" height="0" aria-hidden="true" focusable="false" style="position:absolute">
      <defs>
        <symbol id="nmb-db" viewBox="0 0 24 24">
          <ellipse cx="12" cy="6" rx="7" ry="3"></ellipse>
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"></path>
          <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"></path>
        </symbol>
        <symbol id="nmb-share" viewBox="0 0 24 24">
          <circle cx="6" cy="12" r="2"></circle>
          <circle cx="18" cy="6" r="2"></circle>
          <circle cx="18" cy="18" r="2"></circle>
          <path d="M8 11l8-4M8 13l8 4"></path>
        </symbol>
        <symbol id="nmb-line" viewBox="0 0 24 24">
          <path d="M4 18h16"></path>
          <path d="M6 15l4-5 4 2 4-6"></path>
          <circle cx="6" cy="15" r="1.2" class="nmb-icon-fill"></circle>
          <circle cx="10" cy="10" r="1.2" class="nmb-icon-fill"></circle>
          <circle cx="14" cy="12" r="1.2" class="nmb-icon-fill"></circle>
          <circle cx="18" cy="6" r="1.2" class="nmb-icon-fill"></circle>
        </symbol>
        <symbol id="nmb-doc" viewBox="0 0 24 24">
          <path d="M7 3h7l4 4v14H7z"></path>
          <path d="M14 3v4h4"></path>
          <path d="M10 12h6M10 16h6M10 8h2"></path>
        </symbol>
        <symbol id="nmb-filter" viewBox="0 0 24 24">
          <path d="M4 5h16l-6 7v6l-4 1v-7z"></path>
        </symbol>
        <symbol id="nmb-tree" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="2"></circle>
          <circle cx="6" cy="12" r="2"></circle>
          <circle cx="18" cy="12" r="2"></circle>
          <circle cx="4" cy="19" r="2"></circle>
          <circle cx="10" cy="19" r="2"></circle>
          <circle cx="14" cy="19" r="2"></circle>
          <circle cx="20" cy="19" r="2"></circle>
          <path d="M12 7v3M10.5 6.5 7.5 10.5M13.5 6.5l3 4M6 14v3M8 13.5l2 3M18 14v3M16 13.5l-2 3"></path>
        </symbol>
        <symbol id="nmb-arrows" viewBox="0 0 24 24">
          <path d="M7 7h10"></path>
          <path d="m14 4 3 3-3 3"></path>
          <path d="M17 17H7"></path>
          <path d="m10 14-3 3 3 3"></path>
        </symbol>
        <symbol id="nmb-bars" viewBox="0 0 24 24">
          <path d="M4 19h16"></path>
          <path d="M7 16v-4M12 16V7M17 16v-7"></path>
        </symbol>
        <symbol id="nmb-tool" viewBox="0 0 24 24">
          <path d="M14.5 6.5a4 4 0 0 0-5.4 5.4L4 17l3 3 5.1-5.1a4 4 0 0 0 5.4-5.4l-2.2 2.2-2.6-.5-.5-2.6z"></path>
        </symbol>
        <symbol id="nmb-loop" viewBox="0 0 24 24">
          <path d="M7 7h8a4 4 0 1 1 0 8H9"></path>
          <path d="m7 4-3 3 3 3"></path>
          <path d="M17 17H9a4 4 0 0 1 0-8h6"></path>
          <path d="m17 20 3-3-3-3"></path>
        </symbol>
        <symbol id="nmb-wave" viewBox="0 0 24 24">
          <path d="M3 14c2.5-4 5-4 7.5 0s5 4 7.5 0 5-4 7.5 0"></path>
        </symbol>
        <symbol id="nmb-pin" viewBox="0 0 24 24">
          <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"></path>
          <circle cx="12" cy="10" r="2"></circle>
          <path d="M14 16h5"></path>
        </symbol>
        <symbol id="nmb-people" viewBox="0 0 24 24">
          <circle cx="8" cy="9" r="2"></circle>
          <circle cx="15.5" cy="8" r="2"></circle>
          <path d="M4.5 17a3.5 3.5 0 0 1 7 0"></path>
          <path d="M12.5 16a3 3 0 0 1 6 0"></path>
          <path d="M18 13v5M21 15.5h-6"></path>
        </symbol>
        <symbol id="nmb-shield-check" viewBox="0 0 24 24">
          <path d="M12 3l7 3v5c0 4.3-2.6 8.1-7 10-4.4-1.9-7-5.7-7-10V6l7-3z"></path>
          <path d="M8.5 12.5l2.2 2.2L15.8 9.6"></path>
        </symbol>
        <symbol id="nmb-rocket" viewBox="0 0 24 24">
          <path d="M14 4c2.9.4 5.2 2.7 5.6 5.6L13 16l-5-5 6-7z"></path>
          <path d="M8 11l-3 1 2 2-1 3 4-2"></path>
          <path d="M13 7l4 4"></path>
        </symbol>
        <symbol id="nmb-monitor-chart" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="12" rx="2"></rect>
          <path d="M8 20h8M12 16v4"></path>
          <path d="M7 12l3-3 2 2 4-4"></path>
        </symbol>
        <symbol id="nmb-refresh" viewBox="0 0 24 24">
          <path d="M20 7v5h-5"></path>
          <path d="M4 17v-5h5"></path>
          <path d="M6.5 9A7 7 0 0 1 18 7"></path>
          <path d="M17.5 15A7 7 0 0 1 6 17"></path>
        </symbol>
      </defs>
    </svg>

    <section class="nmb-header">
      <div class="nmb-header-copy">
        <div class="nmb-header-brand">
          <div class="nmb-header-logo">
            <div class="nmb-logo-card">
              <img src="../images/NovaMatch%20log.png" alt="NovaMatch logo">
            </div>
          </div>
          <h1 class="nmb-title"><span class="nmb-title-nova">NOVA</span><span class="nmb-title-match">MATCH</span></h1>
        </div>
        <p class="nmb-desc">
          A unified trajectory processing pipeline that integrates map matching, cross-network translation, and mobility analysis.
        </p>
      </div>
    </section>

    <section class="nmb-flow">
      <div class="nmb-flow-overlay" aria-hidden="true">
        <svg viewBox="0 0 1694 592" preserveAspectRatio="none">
          <defs>
            <marker id="nmb-flow-arrow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0 0 L8 4 L0 8 Z" fill="rgba(46, 123, 255, 0.78)"></path>
            </marker>
          </defs>

          <path class="nmb-flow-line" d="M202 206 L286 206" marker-end="url(#nmb-flow-arrow)"></path>
          <path class="nmb-flow-line--soft" d="M724 128 C798 100, 866 92, 928 102"></path>
          <path class="nmb-flow-line--soft" d="M724 474 C810 500, 900 486, 986 446"></path>
          <path class="nmb-flow-line--soft" d="M1176 92 C1222 116, 1254 152, 1272 196"></path>
          <path class="nmb-flow-line--soft" d="M1462 176 C1490 182, 1516 194, 1540 212"></path>

          <path class="nmb-flow-line" d="M712 170 C766 124, 836 108, 920 116" marker-end="url(#nmb-flow-arrow)"></path>
          <path class="nmb-flow-line" d="M714 238 C778 220, 844 218, 920 232" marker-end="url(#nmb-flow-arrow)"></path>
          <path class="nmb-flow-line" d="M716 306 C782 316, 850 340, 920 346" marker-end="url(#nmb-flow-arrow)"></path>

          <path class="nmb-flow-line" d="M1150 116 C1198 132, 1236 166, 1252 214" marker-end="url(#nmb-flow-arrow)"></path>
          <path class="nmb-flow-line" d="M1150 232 C1206 238, 1240 252, 1254 282" marker-end="url(#nmb-flow-arrow)"></path>
          <path class="nmb-flow-line" d="M1150 348 C1202 336, 1240 356, 1258 392" marker-end="url(#nmb-flow-arrow)"></path>

          <path class="nmb-flow-line" d="M1432 300 C1476 294, 1512 282, 1548 250" marker-end="url(#nmb-flow-arrow)"></path>
        </svg>
      </div>

      <div class="nmb-col">
        <div class="nmb-col-label nmb-col-label--primary" data-step="1"><span class="nmb-col-label-text">Raw Trajectories</span><span class="nmb-col-label-arrow" aria-hidden="true"></span></div>
        <article class="nmb-input-card">
          <h2 class="nmb-card-center-title">Raw Mobility Observations</h2>
          <p class="nmb-card-center-subtitle">LBS / GPS Trajectories</p>

          <div class="nmb-input-graphic" aria-hidden="true">
            <svg viewBox="0 0 160 160">
              <defs>
                <linearGradient id="nmb-raw-main" x1="18" y1="112" x2="142" y2="78" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#3B82F6" stop-opacity="0.48"></stop>
                  <stop offset="0.55" stop-color="#2563EB" stop-opacity="0.9"></stop>
                  <stop offset="1" stop-color="#7DD3FC" stop-opacity="0.6"></stop>
                </linearGradient>
                <linearGradient id="nmb-raw-secondary" x1="24" y1="36" x2="142" y2="134" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#C4B5FD" stop-opacity="0.28"></stop>
                  <stop offset="0.5" stop-color="#93C5FD" stop-opacity="0.72"></stop>
                  <stop offset="1" stop-color="#60A5FA" stop-opacity="0.42"></stop>
                </linearGradient>
                <linearGradient id="nmb-raw-vertical" x1="66" y1="20" x2="76" y2="138" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#60A5FA" stop-opacity="0.34"></stop>
                  <stop offset="0.55" stop-color="#FFFFFF" stop-opacity="0.88"></stop>
                  <stop offset="1" stop-color="#3B82F6" stop-opacity="0.5"></stop>
                </linearGradient>
              </defs>

              <path d="M18 112 C38 88, 54 44, 88 52 S126 116, 142 78" fill="none" stroke="url(#nmb-raw-main)" stroke-width="3" stroke-linecap="round"></path>
              <path d="M24 36 C50 48, 74 88, 104 108 S126 122, 142 134" fill="none" stroke="url(#nmb-raw-secondary)" stroke-width="2.5" stroke-linecap="round"></path>
              <path d="M66 20 C76 44, 80 76, 76 138" fill="none" stroke="url(#nmb-raw-vertical)" stroke-width="2.2" stroke-linecap="round"></path>

              <path d="M10 124 L18 112 L36 92 L52 66 L58 42 L66 20 L88 52 L96 72 L118 58 L142 78" fill="none" stroke="rgba(37,99,235,0.26)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M14 24 L24 36 L52 66 L68 94 L76 138 L90 124 L104 108 L128 108 L142 134 L150 146" fill="none" stroke="rgba(96,165,250,0.24)" stroke-width="1.16" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M52 66 L66 20 M52 66 L104 108 M88 52 L104 108 M88 52 L142 134 M66 20 L120 96 M76 138 L104 108 M24 36 L88 52 M36 92 L68 94 M68 94 L96 72 M96 72 L118 58 M118 58 L142 78 M90 124 L128 108 M128 108 L150 146 M10 124 L36 92 M14 24 L58 42" fill="none" stroke="rgba(59,130,246,0.22)" stroke-width="1.1" stroke-linecap="round"></path>
              <path d="M18 112 L52 66 L76 138 M66 20 L88 52 L142 78 M24 36 L104 108 L142 134 M14 24 L58 42 L96 72 M10 124 L68 94 L128 108" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="0.95" stroke-linecap="round" stroke-dasharray="1.2 5.4"></path>
              <path d="M18 112 C42 102, 68 98, 104 108 S132 124, 142 134" fill="none" stroke="rgba(125,211,252,0.22)" stroke-width="1.05" stroke-linecap="round" stroke-dasharray="3 6"></path>
              <path d="M24 36 C46 28, 60 26, 66 20 S84 26, 88 52" fill="none" stroke="rgba(255,255,255,0.42)" stroke-width="0.9" stroke-linecap="round" stroke-dasharray="2 4"></path>
              <path d="M10 124 C18 100, 28 82, 52 66 S88 56, 118 58 S140 64, 150 52" fill="none" stroke="rgba(147,197,253,0.24)" stroke-width="0.96" stroke-linecap="round" stroke-dasharray="4 5"></path>
              <path d="M14 24 C34 18, 54 20, 88 52 S126 100, 150 146" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="0.9" stroke-linecap="round" stroke-dasharray="2.4 4.8"></path>
              <path d="M22 148 C42 132, 64 124, 90 124 S126 130, 150 146" fill="none" stroke="rgba(125,211,252,0.18)" stroke-width="0.92" stroke-linecap="round" stroke-dasharray="3.2 6.2"></path>

              <circle cx="10" cy="124" r="2.9" fill="#60A5FA" fill-opacity="0.54"></circle>
              <circle cx="14" cy="24" r="2.6" fill="#BFDBFE" fill-opacity="0.46"></circle>
              <circle cx="18" cy="112" r="4" fill="#3B82F6" fill-opacity="0.86"></circle>
              <circle cx="22" cy="148" r="2.7" fill="#93C5FD" fill-opacity="0.4"></circle>
              <circle cx="52" cy="66" r="4" fill="#3B82F6" fill-opacity="0.78"></circle>
              <circle cx="88" cy="52" r="5" fill="#2563EB">
                <animate attributeName="r" values="4.8;5.6;4.8" dur="2.8s" repeatCount="indefinite"></animate>
                <animate attributeName="fill-opacity" values="0.82;1;0.82" dur="2.8s" repeatCount="indefinite"></animate>
              </circle>
              <circle cx="150" cy="52" r="2.8" fill="#DBEAFE" fill-opacity="0.34"></circle>
              <circle cx="120" cy="96" r="4" fill="#60A5FA" fill-opacity="0.66"></circle>
              <circle cx="142" cy="78" r="4" fill="#3B82F6" fill-opacity="0.88"></circle>
              <circle cx="24" cy="36" r="3.5" fill="#60A5FA" fill-opacity="0.72"></circle>
              <circle cx="104" cy="108" r="4.2" fill="#3B82F6">
                <animate attributeName="r" values="3.8;4.8;3.8" dur="3.6s" begin="-1.1s" repeatCount="indefinite"></animate>
                <animate attributeName="fill-opacity" values="0.72;0.98;0.72" dur="3.6s" begin="-1.1s" repeatCount="indefinite"></animate>
              </circle>
              <circle cx="142" cy="134" r="4" fill="#93C5FD" fill-opacity="0.58"></circle>
              <circle cx="150" cy="146" r="3" fill="#E0F2FE" fill-opacity="0.42"></circle>
              <circle cx="66" cy="20" r="3.5" fill="#60A5FA" fill-opacity="0.78"></circle>
              <circle cx="76" cy="138" r="4" fill="#3B82F6" fill-opacity="0.84"></circle>

              <circle cx="36" cy="92" r="2.2" fill="#BFDBFE" fill-opacity="0.4"></circle>
              <circle cx="28" cy="76" r="1.9" fill="#FFFFFF" fill-opacity="0.28"></circle>
              <circle cx="42" cy="52" r="2.1" fill="#DBEAFE" fill-opacity="0.36"></circle>
              <circle cx="68" cy="94" r="2" fill="#93C5FD" fill-opacity="0.34"></circle>
              <circle cx="74" cy="54" r="1.9" fill="#E0F2FE" fill-opacity="0.44"></circle>
              <circle cx="96" cy="72" r="2.2" fill="#FFFFFF" fill-opacity="0.72"></circle>
              <circle cx="110" cy="42" r="2" fill="#DBEAFE" fill-opacity="0.38"></circle>
              <circle cx="128" cy="108" r="2.1" fill="#7DD3FC" fill-opacity="0.46"></circle>
              <circle cx="134" cy="92" r="1.9" fill="#FFFFFF" fill-opacity="0.34"></circle>
              <circle cx="58" cy="42" r="2" fill="#FFFFFF" fill-opacity="0.52"></circle>
              <circle cx="90" cy="124" r="2.4" fill="#DBEAFE" fill-opacity="0.42"></circle>
              <circle cx="114" cy="134" r="2.2" fill="#BFDBFE" fill-opacity="0.3"></circle>
              <circle cx="60" cy="146" r="2" fill="#E0F2FE" fill-opacity="0.24"></circle>
              <circle cx="118" cy="58" r="2.3" fill="#E0F2FE" fill-opacity="0.36">
                <animate attributeName="fill-opacity" values="0.2;0.7;0.2" dur="4.2s" begin="-0.8s" repeatCount="indefinite"></animate>
              </circle>
              <circle cx="138" cy="24" r="2" fill="#BFDBFE" fill-opacity="0.24"></circle>
              <circle cx="34" cy="18" r="1.8" fill="#FFFFFF" fill-opacity="0.22"></circle>
            </svg>
          </div>

          <ul class="nmb-list">
            <li><span class="nmb-list-mark">&#9673;</span><span>Wejo / VDOT trajectories</span></li>
            <li><span class="nmb-list-mark">&#9673;</span><span>Daily trips &amp; OD pairs</span></li>
            <li><span class="nmb-list-mark">&#9673;</span><span>Planning networks &amp; TAZ</span></li>
            <li><span class="nmb-list-mark">&#9673;</span><span>Reference tables &amp; paths</span></li>
          </ul>
        </article>
      </div>

      <div class="nmb-col">
        <div class="nmb-col-label nmb-col-label--primary" data-step="2"><span class="nmb-col-label-text">NovaMatch Core</span><span class="nmb-col-label-arrow" aria-hidden="true"></span></div>
        <article class="nmb-core-card">
          <div class="nmb-core-orbital">
            <svg class="nmb-core-svg" viewBox="0 0 570 450" aria-hidden="true">
              <defs>
                <filter id="nmb-core-blur-lg" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="20"></feGaussianBlur>
                </filter>
                <filter id="nmb-core-blur-md" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                </filter>
                <filter id="nmb-core-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur"></feGaussianBlur>
                  <feMerge>
                    <feMergeNode in="blur"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>

              <ellipse cx="284" cy="180" rx="174" ry="214" fill="rgba(220,238,255,0.18)" transform="rotate(-9 284 180)"></ellipse>
              <ellipse cx="286" cy="180" rx="166" ry="204" fill="rgba(220,238,255,0.22)" transform="rotate(11 286 180)"></ellipse>
              <ellipse cx="284" cy="180" rx="154" ry="188" fill="rgba(233,244,255,0.36)" transform="rotate(-8 284 180)"></ellipse>
              <ellipse cx="288" cy="176" rx="142" ry="172" fill="rgba(240,248,255,0.42)" transform="rotate(7 288 176)"></ellipse>
              <ellipse cx="282" cy="180" rx="132" ry="158" fill="rgba(255,255,255,0.92)" transform="rotate(-4 282 180)"></ellipse>
              <ellipse cx="286" cy="180" rx="120" ry="144" fill="rgba(255,255,255,0.96)" transform="rotate(10 286 180)"></ellipse>
              <ellipse cx="282" cy="180" rx="108" ry="130" fill="rgba(255,255,255,0.98)" transform="rotate(-12 282 180)"></ellipse>
              <ellipse cx="286" cy="180" rx="94" ry="116" fill="rgba(255,255,255,1)" transform="rotate(4 286 180)"></ellipse>
              <ellipse class="nmb-core-glow-ring nmb-core-glow-ring--slow" cx="284" cy="180" rx="184" ry="224" fill="none" stroke="rgba(95,168,255,0.08)" stroke-width="6"></ellipse>
              <ellipse class="nmb-core-glow-ring" cx="284" cy="180" rx="172" ry="210" fill="none" stroke="rgba(95,168,255,0.12)" stroke-width="3"></ellipse>
              <ellipse cx="284" cy="180" rx="160" ry="194" fill="none" stroke="rgba(95,168,255,0.12)" stroke-width="1.6"></ellipse>

              <path d="M204 26 C256 2, 332 4, 386 42 C424 68, 444 106, 448 146" fill="none" stroke="rgba(47,128,237,0.24)" stroke-width="1.6" stroke-dasharray="5 8"></path>
              <path d="M154 270 C160 354, 198 442, 266 492 C326 536, 392 526, 438 470" fill="none" stroke="rgba(47,128,237,0.26)" stroke-width="1.5" stroke-dasharray="3 7"></path>
              <path d="M168 92 C190 48, 228 16, 280 6" fill="none" stroke="rgba(47,128,237,0.3)" stroke-width="1.4" stroke-dasharray="4 6"></path>
              <path d="M398 104 C432 148, 448 214, 438 292 C430 366, 404 428, 366 472" fill="none" stroke="rgba(47,128,237,0.22)" stroke-width="1.4" stroke-dasharray="2 7"></path>
              <path d="M204 470 C254 514, 332 522, 394 492" fill="none" stroke="rgba(47,128,237,0.22)" stroke-width="1.2" stroke-dasharray="6 9"></path>
              <path d="M138 180 C138 110, 164 42, 214 -6 C250 -40, 300 -52, 352 -44" fill="none" stroke="rgba(47,128,237,0.2)" stroke-width="1.3" stroke-dasharray="4 9"></path>
              <path d="M412 8 C458 56, 478 128, 478 206 C476 278, 456 350, 418 414" fill="none" stroke="rgba(47,128,237,0.2)" stroke-width="1.3" stroke-dasharray="5 10"></path>
              <path d="M154 430 C188 482, 246 522, 320 534 C372 540, 420 528, 458 500" fill="none" stroke="rgba(47,128,237,0.18)" stroke-width="1.2" stroke-dasharray="3 8"></path>
              <path d="M190 26 C228 -8, 290 -22, 350 -10 C392 -2, 424 14, 450 38" fill="none" stroke="rgba(47,128,237,0.18)" stroke-width="1.1" stroke-dasharray="2 7"></path>

              <circle cx="214" cy="40" r="3" fill="rgba(124,203,255,0.82)"></circle>
              <circle cx="270" cy="10" r="2.6" fill="rgba(255,255,255,0.95)"></circle>
              <circle cx="360" cy="30" r="2.2" fill="rgba(124,203,255,0.7)"></circle>
              <circle cx="436" cy="118" r="2.8" fill="rgba(124,203,255,0.8)"></circle>
              <circle cx="442" cy="286" r="2.4" fill="rgba(255,255,255,0.92)"></circle>
              <circle cx="396" cy="454" r="2.4" fill="rgba(124,203,255,0.72)"></circle>
              <circle cx="320" cy="520" r="2.8" fill="rgba(255,255,255,0.9)"></circle>
              <circle cx="238" cy="502" r="2.3" fill="rgba(124,203,255,0.74)"></circle>
              <circle cx="176" cy="364" r="2.6" fill="rgba(124,203,255,0.82)"></circle>
              <circle cx="178" cy="108" r="2.1" fill="rgba(255,255,255,0.9)"></circle>
              <circle cx="154" cy="64" r="2.2" fill="rgba(124,203,255,0.74)"></circle>
              <circle cx="198" cy="-4" r="2.7" fill="rgba(255,255,255,0.86)"></circle>
              <circle cx="452" cy="62" r="2.4" fill="rgba(124,203,255,0.76)"></circle>
              <circle cx="470" cy="210" r="2.1" fill="rgba(255,255,255,0.88)"></circle>
              <circle cx="442" cy="438" r="2.5" fill="rgba(124,203,255,0.72)"></circle>
              <circle cx="286" cy="540" r="2.3" fill="rgba(255,255,255,0.9)"></circle>
            </svg>

            <div class="nmb-core-center">
              <h2 class="nmb-core-title">NovaMatch</h2>
              <p class="nmb-core-copy">Trajectory Processing Ecosystem</p>
            </div>

            <div class="nmb-core-module nmb-core-module--1">
              <div class="nmb-core-module-icon"><svg class="nmb-icon"><use href="#nmb-filter"></use></svg></div>
              <div>
                <p class="nmb-core-module-title">Sup-HMM</p>
                <p class="nmb-core-module-copy">Map Matching</p>
              </div>
            </div>

            <div class="nmb-core-module nmb-core-module--2">
              <div class="nmb-core-module-icon"><svg class="nmb-icon"><use href="#nmb-tree"></use></svg></div>
              <div>
                <p class="nmb-core-module-title">PM-Tree</p>
                <p class="nmb-core-module-copy">Structural Representation</p>
              </div>
            </div>

            <div class="nmb-core-module nmb-core-module--3">
              <div class="nmb-core-module-icon"><svg class="nmb-icon"><use href="#nmb-arrows"></use></svg></div>
              <div>
                <p class="nmb-core-module-title">Translation Engine</p>
                <p class="nmb-core-module-copy">Cross-network semantics</p>
              </div>
            </div>

            <div class="nmb-core-module nmb-core-module--4">
              <div class="nmb-core-module-icon"><svg class="nmb-icon"><use href="#nmb-share"></use></svg></div>
              <div>
                <p class="nmb-core-module-title">Hierarchy &amp; Index</p>
                <p class="nmb-core-module-copy">Topology, connectors, path references</p>
              </div>
            </div>

            <div class="nmb-core-module nmb-core-module--5">
              <div class="nmb-core-module-icon"><svg class="nmb-icon"><use href="#nmb-tool"></use></svg></div>
              <div>
                <p class="nmb-core-module-title">Data Management</p>
                <p class="nmb-core-module-copy">&amp; Utilities</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="nmb-col">
        <div class="nmb-col-label nmb-col-label--primary" data-step="3"><span class="nmb-col-label-text">Representation Branching</span><span class="nmb-col-label-arrow" aria-hidden="true"></span></div>
        <div class="nmb-branch-stack">
          <article class="nmb-branch-card" style="--accent:#2E7BFF">
            <div class="nmb-branch-body">
              <div class="nmb-branch-graphic" aria-hidden="true">
                <svg viewBox="0 0 72 72">
                  <path d="M8 48 C18 28, 32 22, 44 30 S58 48, 64 18" fill="none" stroke="rgba(46,123,255,0.18)" stroke-width="1.4"></path>
                  <path d="M10 18 C22 20, 28 32, 38 52" fill="none" stroke="rgba(46,123,255,0.16)" stroke-width="1.2"></path>
                  <path d="M10 48 C20 30, 32 22, 44 30 S58 46, 64 18" fill="none" stroke="#2E7BFF" stroke-width="2.2" stroke-linecap="round"></path>
                  <path d="M12 18 C24 22, 30 34, 40 54" fill="none" stroke="#8CB9FF" stroke-width="1.8" stroke-linecap="round"></path>
                  <circle cx="10" cy="48" r="2.4" fill="#2E7BFF"></circle>
                  <circle cx="24" cy="30" r="2.1" fill="#6CA8FF"></circle>
                  <circle cx="44" cy="30" r="2.4" fill="#2E7BFF"></circle>
                  <circle cx="64" cy="18" r="2.4" fill="#2E7BFF"></circle>
                </svg>
              </div>
              <div>
                <h2 class="nmb-branch-title">Road-Network
Representation</h2>
                <ul class="nmb-branch-list">
                  <li>Sup-HMM map matching</li>
                  <li>Route inference</li>
                  <li>Path recovery</li>
                </ul>
              </div>
            </div>
          </article>

          <article class="nmb-branch-card" style="--accent:#31B38A">
            <div class="nmb-branch-body">
              <div class="nmb-branch-graphic" aria-hidden="true">
                <svg viewBox="0 0 72 72">
                  <path d="M36 10v14M36 24 20 36M36 24l16 12M20 36l-8 14M20 36l10 14M52 36l-10 14M52 36l8 14" fill="none" stroke="rgba(49,179,138,0.16)" stroke-width="1.3" stroke-linecap="round"></path>
                  <path d="M36 10v14M36 24 20 36M36 24l16 12M20 36l-8 14M20 36l10 14M52 36l-10 14M52 36l8 14" fill="none" stroke="#31B38A" stroke-width="2.1" stroke-linecap="round"></path>
                  <circle cx="36" cy="10" r="2.4" fill="#31B38A"></circle>
                  <circle cx="36" cy="24" r="2.4" fill="#31B38A"></circle>
                  <circle cx="20" cy="36" r="2.1" fill="#69D0AF"></circle>
                  <circle cx="52" cy="36" r="2.1" fill="#69D0AF"></circle>
                </svg>
              </div>
              <div>
                <h2 class="nmb-branch-title">Structural
Representation</h2>
                <ul class="nmb-branch-list">
                  <li>PM-Tree</li>
                  <li>Hierarchical structure</li>
                  <li>Recoverability</li>
                </ul>
              </div>
            </div>
          </article>

          <article class="nmb-branch-card" style="--accent:#8A63FF">
            <div class="nmb-branch-body">
              <div class="nmb-branch-graphic" aria-hidden="true">
                <svg viewBox="0 0 72 72">
                  <polygon points="12,24 20,19 28,24 28,33 20,38 12,33" fill="none" stroke="#8A63FF" stroke-width="1.8"></polygon>
                  <polygon points="28,24 36,19 44,24 44,33 36,38 28,33" fill="none" stroke="#B39BFF" stroke-width="1.8"></polygon>
                  <polygon points="20,38 28,33 36,38 36,47 28,52 20,47" fill="none" stroke="#8A63FF" stroke-width="1.8"></polygon>
                  <polygon points="36,38 44,33 52,38 52,47 44,52 36,47" fill="none" stroke="#B39BFF" stroke-width="1.8"></polygon>
                  <path d="M8 56 C20 48, 34 48, 52 56" fill="none" stroke="rgba(138,99,255,0.18)" stroke-width="1.4"></path>
                </svg>
              </div>
              <div>
                <h2 class="nmb-branch-title">Planning-Network
Representation</h2>
                <ul class="nmb-branch-list">
                  <li>Trajectory translation</li>
                  <li>Connector analysis</li>
                  <li>OD structure</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="nmb-col">
        <div class="nmb-col-label nmb-col-label--primary" data-step="4"><span class="nmb-col-label-text">Downstream Analysis</span><span class="nmb-col-label-arrow" aria-hidden="true"></span></div>
        <article class="nmb-analysis-panel">
          <div class="nmb-analysis-list">
            <div class="nmb-analysis-item">
              <div class="nmb-analysis-icon"><svg class="nmb-icon"><use href="#nmb-loop"></use></svg></div>
              <div>
                <p class="nmb-analysis-name">OD Structure
&amp; Flow Patterns</p>
                <p class="nmb-analysis-copy">Aggregate travel interactions and multi-scale movement structure.</p>
              </div>
            </div>

            <div class="nmb-analysis-item">
              <div class="nmb-analysis-icon"><svg class="nmb-icon"><use href="#nmb-wave"></use></svg></div>
              <div>
                <p class="nmb-analysis-name">Path Similarity
&amp; Route Choice</p>
                <p class="nmb-analysis-copy">Compare recovered paths and infer representation-dependent behavior.</p>
              </div>
            </div>

            <div class="nmb-analysis-item">
              <div class="nmb-analysis-icon"><svg class="nmb-icon"><use href="#nmb-pin"></use></svg></div>
              <div>
                <p class="nmb-analysis-name">Access / Egress
Connector Usage</p>
                <p class="nmb-analysis-copy">Trace observed connector patterns against planning-network semantics.</p>
              </div>
            </div>

            <div class="nmb-analysis-item">
              <div class="nmb-analysis-icon"><svg class="nmb-icon"><use href="#nmb-people"></use></svg></div>
              <div>
                <p class="nmb-analysis-name">Accessibility
&amp; Equity Insight</p>
                <p class="nmb-analysis-copy">Study access gradients, spatial fairness, and systemic service reach.</p>
              </div>
            </div>

            <div class="nmb-analysis-item">
              <div class="nmb-analysis-icon"><svg class="nmb-icon"><use href="#nmb-bars"></use></svg></div>
              <div>
                <p class="nmb-analysis-name">Planning Model
Bias &amp; Evaluation</p>
                <p class="nmb-analysis-copy">Evaluate structural mismatch, indicator bias, and representational tradeoffs.</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="nmb-col">
        <div class="nmb-col-label nmb-col-label--primary" data-step="5"><span class="nmb-col-label-text">Research Outputs</span></div>
        <div class="nmb-output-wrap">
          <article class="nmb-output-panel">
            <div class="nmb-output-item">
              <div class="nmb-output-icon"><svg class="nmb-icon"><use href="#nmb-doc"></use></svg></div>
              <p class="nmb-output-name">Papers &amp;
Publications</p>
            </div>
            <div class="nmb-output-item">
              <div class="nmb-output-icon"><svg class="nmb-icon"><use href="#nmb-line"></use></svg></div>
              <p class="nmb-output-name">Figures &amp;
Visualizations</p>
            </div>
            <div class="nmb-output-item">
              <div class="nmb-output-icon"><svg class="nmb-icon"><use href="#nmb-db"></use></svg></div>
              <p class="nmb-output-name">Datasets &amp;
Indicators</p>
            </div>
            <div class="nmb-output-item">
              <div class="nmb-output-icon"><svg class="nmb-icon"><use href="#nmb-monitor-chart"></use></svg></div>
              <p class="nmb-output-name">Interactive
Systems</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="nmb-capabilities">
      <h2 class="nmb-capabilities-title">End-to-End Capabilities</h2>
      <div class="nmb-capabilities-grid">
        <article class="nmb-capability-item">
          <div class="nmb-capability-icon"><svg class="nmb-icon"><use href="#nmb-db"></use></svg></div>
          <div>
            <p class="nmb-capability-name">Large-scale Data
Processing</p>
            <p class="nmb-capability-copy">Daily / multi-source
trajectory systems</p>
          </div>
        </article>
        <article class="nmb-capability-item">
          <div class="nmb-capability-icon"><svg class="nmb-icon"><use href="#nmb-shield-check"></use></svg></div>
          <div>
            <p class="nmb-capability-name">Configurable &amp;
Reproducible</p>
            <p class="nmb-capability-copy">Regional profiles
&amp; parameter sets</p>
          </div>
        </article>
        <article class="nmb-capability-item">
          <div class="nmb-capability-icon"><svg class="nmb-icon"><use href="#nmb-rocket"></use></svg></div>
          <div>
            <p class="nmb-capability-name">Batch Experiments
at Scale</p>
            <p class="nmb-capability-copy">Different trip sets
&amp; scenarios</p>
          </div>
        </article>
        <article class="nmb-capability-item">
          <div class="nmb-capability-icon"><svg class="nmb-icon"><use href="#nmb-monitor-chart"></use></svg></div>
          <div>
            <p class="nmb-capability-name">Standardized Outputs
&amp; Results Management</p>
            <p class="nmb-capability-copy">Stage-based results
and visual summaries</p>
          </div>
        </article>
        <article class="nmb-capability-item">
          <div class="nmb-capability-icon"><svg class="nmb-icon"><use href="#nmb-refresh"></use></svg></div>
          <div>
            <p class="nmb-capability-name">Research-driven
&amp; Extensible</p>
            <p class="nmb-capability-copy">Built for mobility
science research</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</div>
