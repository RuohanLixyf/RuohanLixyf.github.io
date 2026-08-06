---
layout: archive
title: "Silent Scribbles"
permalink: /Silent Scribbles/
author_profile: true
avatar: "/images/WeChate519fabc347513c0a8a3c15c45ba0466.jpg"
---

<style>
  .archive > .page__title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.85rem;
    width: min(100%, 34rem);
    margin: 0.45rem auto 1.15rem;
    padding: 0;
    border: 0;
    color: #304766;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.45rem, 3.2vw, 2rem);
    font-weight: 500;
    letter-spacing: 0.075em;
    line-height: 1.2;
    text-align: center;
    text-shadow: 0 3px 14px rgba(48, 71, 102, 0.1);
    white-space: nowrap;
  }

  .archive > .page__title::before,
  .archive > .page__title::after {
    width: clamp(2rem, 8vw, 4.5rem);
    height: 1px;
    flex: 0 1 4.5rem;
    content: "";
  }

  .archive > .page__title::before {
    background: linear-gradient(90deg, transparent, #7fa1c7 70%, #c98268);
  }

  .archive > .page__title::after {
    background: linear-gradient(90deg, #c98268, #7fa1c7 30%, transparent);
  }

  .scribbles-page {
    --scribbles-ink: #23324a;
    --scribbles-muted: #718096;
    --scribbles-line: rgba(61, 84, 119, 0.14);
    --scribbles-blue: #4c78a8;
    --scribbles-warm: #c98268;
    width: 100%;
    max-width: none;
    margin: 0 auto;
    padding: 0.15rem 0 1.5rem;
    color: var(--scribbles-ink);
  }

  .scribbles-feed {
    display: grid;
    gap: 0.72rem;
  }

  .scribble-card {
    position: relative;
    padding: clamp(0.8rem, 2vw, 1.1rem);
    overflow: hidden;
    border: 1px solid var(--scribbles-line);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 12px 34px rgba(35, 50, 74, 0.06);
    transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
  }

  .scribble-card::before {
    position: absolute;
    inset: 0 auto 0 0;
    width: 4px;
    background: linear-gradient(180deg, var(--scribbles-blue), rgba(76, 120, 168, 0.16));
    content: "";
  }

  .scribble-card:nth-child(even)::before {
    background: linear-gradient(180deg, var(--scribbles-warm), rgba(201, 130, 104, 0.16));
  }

  .scribble-card:hover {
    border-color: rgba(76, 120, 168, 0.3);
    box-shadow: 0 18px 42px rgba(35, 50, 74, 0.1);
    transform: translateY(-2px);
  }

  .scribble-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.7rem;
    margin-bottom: 0.55rem;
    padding-bottom: 0.45rem;
    border-bottom: 1px dashed rgba(61, 84, 119, 0.18);
  }

  .scribble-card time {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    margin: 0;
    color: var(--scribbles-blue);
    font-size: 0.84rem;
    font-weight: 700;
    letter-spacing: 0.06em;
  }

  .scribble-card time::before {
    width: 0.55rem;
    height: 0.55rem;
    border: 2px solid rgba(76, 120, 168, 0.35);
    border-radius: 50%;
    background: #fff;
    content: "";
  }

  .scribble-card__status {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    flex: 0 0 auto;
    padding: 0.3rem 0.65rem;
    border-radius: 999px;
    background: rgba(201, 130, 104, 0.12);
    color: #a45f50;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  .scribble-card__status::before {
    width: 0.42rem;
    height: 0.42rem;
    border-radius: 50%;
    background: #cf705b;
    box-shadow: 0 0 0 4px rgba(207, 112, 91, 0.1);
    content: "";
  }

  .scribble-card__number {
    color: rgba(35, 50, 74, 0.25);
    font-family: Georgia, serif;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
  }

  .scribble-card__body {
    font-family: "KaiTi", "STKaiti", "Noto Serif SC", serif;
    font-size: 1.02rem;
    line-height: 1.58;
  }

  .scribble-card__body p {
    margin: 0;
  }

  .scribble-card__body p + p {
    margin-top: 0.55rem;
  }

  .scribble-card--quote .scribble-card__body {
    padding: 0.08rem 0.25rem;
    color: #394c69;
    font-size: clamp(1.08rem, 3vw, 1.25rem);
    text-align: center;
  }

  .scribble-card--quote .scribble-card__body p::before,
  .scribble-card--quote .scribble-card__body p::after {
    color: rgba(201, 130, 104, 0.45);
    font-family: Georgia, serif;
    font-size: 1.75em;
    line-height: 0;
    vertical-align: -0.2em;
  }

  .scribble-card--quote .scribble-card__body p::before { content: "“"; }
  .scribble-card--quote .scribble-card__body p::after { content: "”"; }

  html[data-theme="dark"] .scribbles-page {
    --scribbles-ink: #e6eefb;
    --scribbles-muted: #a8b7cc;
    --scribbles-line: rgba(168, 183, 204, 0.18);
    --scribbles-blue: #87bfff;
    --scribbles-warm: #efa98e;
  }

  html[data-theme="dark"] .archive > .page__title {
    color: #e8f0fb;
    text-shadow: 0 3px 16px rgba(0, 0, 0, 0.28);
  }

  html[data-theme="dark"] .scribble-card--quote .scribble-card__body {
    color: #f1f5fb;
  }

  html[data-theme="dark"] .scribble-card {
    background: rgba(14, 38, 76, 0.9);
    box-shadow: 0 12px 34px rgba(0, 0, 0, 0.16);
  }

  html[data-theme="dark"] .scribble-card time::before {
    background: #102b54;
  }

  @media (max-width: 600px) {
    .archive > .page__title {
      gap: 0.55rem;
      margin-bottom: 0.8rem;
      font-size: 1.2rem;
    }

    .scribbles-page { padding-top: 0; }
    .scribble-card { border-radius: 16px; }
    .scribble-card__header { align-items: flex-start; }
    .scribble-card time { line-height: 1.5; }
  }

  @media (prefers-reduced-motion: reduce) {
    .scribble-card { transition: none; }
    .scribble-card:hover { transform: none; }
  }
</style>

<div class="scribbles-page">
  <main class="scribbles-feed" aria-label="随笔列表">
    <article class="scribble-card">
      <header class="scribble-card__header">
        <time datetime="2026-06-26">2026 年 6 月 26 日</time>
        <span class="scribble-card__status">最近更新</span>
      </header>
      <div class="scribble-card__body">
        <p>最近在讨论每个人的主体性。当有人使用“普通人”来作为一种手段防御的时候，那这个“普通人”还有主体性吗？因为这里或许包含了普通是没有主体性的，要么就是这里的主体性只是一个伪主体性，是社会主流价值的一种体现。为什么“普通人”会用这样的回应来防御呢，是因为他们能够始终站在道德的制高点上吗？这样一句“我只是普通人”可以抵挡一切，那普通人就是没有主体性的吗，或者说这个主体性是被压制的？并且也否定了自己的个人特质和品德。或许，也可以说，“普通人”的对立面就是非普通人，也就是非常规道路，非普世价值的，非大众的，那是不是也是非道德的？</p>
        <p>人生是连续的，如果一个人没有好的德行（virtue）和个人能力，之后发展也不一定好。持续的努力，持续的践行自己的德行，持续思考，才是之后一直保持和进步的方法。一个人能够保持和认识主体性才是最关键的。德行不会直接给你奖励，但是它会影响：你如何面对失败；如何对待别人；是否愿意长期坚持；是否能够建立稳定的关系。这些东西又会反过来影响人生。</p>
      </div>
    </article>

    <article class="scribble-card">
      <header class="scribble-card__header">
        <time datetime="2025-08-25">2025 年 8 月 25 日</time>
        <span class="scribble-card__number">NO. 05</span>
      </header>
      <div class="scribble-card__body">
        <p>时间是不停止的，所以人活着也是不会停止的，不断的发生事情，不断的遗忘事情，不断的开始新的生活，被推着走，停不下来。好似也没有什么过不去的事情。无法理解的，后来也都慢慢理解了，看不开的后来也都慢慢看开了。每个阶段有每个阶段的思考和顾虑。偶尔的瞬间，流逝的时间像一张张照片，也是风衣的拼凑。</p>
      </div>
    </article>

    <article class="scribble-card">
      <header class="scribble-card__header">
        <time datetime="2025-02-26">2025 年 2 月 26 日 · 其二</time>
        <span class="scribble-card__number">NO. 04</span>
      </header>
      <div class="scribble-card__body">
        <p>昨天，我对一个现象有了新的理解。大多数女性在婚后（甚至婚前）逐渐疏远朋友，很大程度上源于系统性的社会结构。家庭观念深深植根于女性的意识与思想中。长期的社会驯化与规训让大多数女性将家人（包括父母、亲兄妹，结婚后还包括丈夫）视为最重要的人。她们倾向于把所有事情都倾诉给家人，并牢固地维护家庭关系，而不是朋友关系。例如，她们可能不会认为向家人透露朋友的秘密是一种背叛，因为她们认为家人是“自己的一部分”。这与女性在亲密关系中的归属感和边界感有关。许多女性在长期的社会化过程中形成了一种“共享式亲密关系”，即她们倾向于通过共享信息、情感依赖来维系关系。</p>
        <p>同时，在许多社会文化中，女性被期待承担主要的家庭责任，甚至在婚前就被灌输“家庭至上”的价值观。这种观念不仅来自家庭教育，也受到影视作品、文学作品以及社会规范的强化。相比之下，男性被赋予更大的社交自由度，鼓励他们发展事业、建立“兄弟情谊”，他们更倾向于在男性群体内部分享和处理事务，而不会轻易将这些内容带入家庭。男性更倾向于“并列式友谊”，即通过共同活动（如运动、游戏、合作）来维持关系，而不一定通过深度倾诉。这里仅记录一些初步的想法，留待进一步探讨。</p>
      </div>
    </article>

    <article class="scribble-card">
      <header class="scribble-card__header">
        <time datetime="2025-02-26">2025 年 2 月 26 日 · 其一</time>
        <span class="scribble-card__number">NO. 03</span>
      </header>
      <div class="scribble-card__body">
        <p>突然车里响起了孙燕姿的《银泰》，听着前奏，突然感觉像是在品尝一杯红酒，仿佛在享受它的香甜、苦涩与浸润。在匆忙的时间里，你无法感受这样的歌曲，因为它是缓慢的，是复杂的，是需要沉淀的，只能在特定的意境下和闲暇下你才能体会到它的美。</p>
        <p>恍恍惚惚，看到路边庭院挂的美国的旗帜，一下子击中我的内心，我在想，小时候的我对未来的设想是什么样的？至少不是现在这样的，而且也不是由这旗帜构成的。《银泰》再次把我拉回现实，我想再沉浸在歌里，于是我回播了一遍。但是不能再听第三遍了，因为气味已经逐渐消散了，大脑已经习惯了这样的沉浸，便不会再有强烈的刺激了。我继续开着车，也不知道开往何处。</p>
      </div>
    </article>

    <article class="scribble-card scribble-card--quote">
      <header class="scribble-card__header">
        <time datetime="2025-02-01">2025 年 2 月 1 日</time>
        <span class="scribble-card__number">NO. 02</span>
      </header>
      <div class="scribble-card__body">
        <p>大人们都没有了鲜明的情感，他们就像是机器人一样。他们口口声声说的“道德”，似乎也在他们身上看不见了</p>
      </div>
    </article>

    <article class="scribble-card">
      <header class="scribble-card__header">
        <time datetime="2025-01-29">2025 年 1 月 29 日</time>
        <span class="scribble-card__number">NO. 01</span>
      </header>
      <div class="scribble-card__body">
        <p>“年龄越大，经验越丰富。”我们可以举出局部最优的例子来推翻这样的话语，还有就是 ReLU function 中，负数为 0 也可以来推翻这样的话，用梯度消失来反驳。没想到哲学真的能够囊括一切，有趣。（注：这里的哲学指的是普世哲理。）</p>
      </div>
    </article>
  </main>
</div>
