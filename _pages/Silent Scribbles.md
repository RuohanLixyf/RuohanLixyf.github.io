---
layout: archive
title: "Silent Scribbles"
permalink: /Silent Scribbles/
author_profile: true
avatar: "/images/WeChate519fabc347513c0a8a3c15c45ba0466.jpg"
---

Something will happen here...

[Read Story](./_posts/Story.md)
        
<html>
  <head>
    <style>
      #chinese-content {
        display: block;  /* Show Chinese content by default */
      }
      #english-content {
        display: none;  /* Hide English content initially */
      }
    </style>
  </head>
  <body>
    <button id="toggle-button" onclick="toggleContent()">Translate to English</button>
    
    <div id="chinese-content">
      <p><span style="font-family: 'KaiTi';">
        我将会在这个页面放一些个人浅显和没有经过缜密思考的想法、见解，亦或是一些有趣的事情，也可能是论文被拒的消息...之后也许会想开启一部小说？我不确定，因为我觉得自己看书太少了，文字干涉无聊，也许会作为消遣？因为最近感受到了一股’使命‘？其实也不是。不由得想到了以前初中和高中的小说主题，我居然会立足在战争和杀戮上，现在想到也是及其荒谬的。似乎也能明白一点为什么以前大人总是说‘小孩子，还年轻，比较幼稚，什么都不懂’。28岁的我和13岁的我，对整个世界架构的理解和规则的理解是完全不同的。13岁的我就像是刚注册了游戏账号的我，还在新手引导阶段，虽然有一定程度的自由探索，但是仅限在新手村。而现在的我再回看以前，虽然我不会嗤笑自己的幼稚，但是也是像看孩子的眼光看着当年的自己。总之，如果要开始写小说的话，我会在下面单独开一个页面，其余的想法也都是比较凌乱的速记。当作一种代码之余的消遣吧～<span style="color: red;">（请忽略一些可能的错别字或者是不缜密或可能错误的地方...）</span>
        
        <br><br>
        - 贰零贰伍年二月一日：“大人们都没有了鲜明的情感，他们就像是机器人一样。他们口口声声说的“道德”，似乎也在他们身上看不见了”
        <br><br>
        - 贰零贰伍年一月二十九日: “年龄越大，经验越丰富。” 我们可以举出局部最优的例子来推翻这样的话语，还有就是RELU function中，负数为0也可以来推翻这样话，用梯度消失来反驳。没想到哲学真的能够囊括一切，有趣。（注：这里的哲学指的是普世哲理）。 
    </span></p> 
      
    </div>
    
    <div id="english-content">
      <p>I will put some of my personal, simple, and unthought-out ideas or insights on this page, maybe some interesting things, or even news of paper rejections… Maybe I’ll start a novel later? I’m not sure, because I feel like I haven’t read enough books, and writing feels like a distraction. Maybe it’ll be a pastime? Recently, I’ve felt a sense of ‘mission’? But actually, not really. I can’t help but think of the themes of the novels I used to write in middle and high school. I actually focused on war and killing, which now seems utterly absurd. I can sort of understand why adults used to say, ‘Kids are still young, immature, they don’t understand anything.’ At 28, my understanding of the world and its rules is completely different from when I was 13. The 13-year-old me was like someone who just registered a game account, still in the tutorial phase. While there was some freedom to explore, it was limited to the beginner’s village. Now, looking back, even though I wouldn’t mock my own immaturity, I do look at my younger self as though I were watching a child. In any case, if I were to start writing a novel, I would open a separate page for it, and the rest of the ideas will just be hasty notes. It’ll be a form of distraction from coding～ (Please ignore any possible typos, careless mistakes, or errors…)
      
      <br><br>
      - Feb. 1, 2025: “The adults no longer have vivid emotions; they are like robots. The ‘morality’ they keep talking about seems to be nowhere to be found in them.”
      <br><br>
      - Jan. 29, 2025: ‘The older you get, the more experience you gain.’ We can provide examples of local optima to counter this statement, and also, in the RELU function, where negative numbers are set to 0, we can use gradient vanishing to refute it. I didn’t expect philosophy to truly encompass everything—interesting. (Note: The philosophy here refers to universal truths.)</p>
    </div>

    <script>
      function toggleContent() {
        var chineseContent = document.getElementById('chinese-content');
        var englishContent = document.getElementById('english-content');
        var button = document.getElementById('toggle-button');

        if (chineseContent.style.display === 'none') {
          chineseContent.style.display = 'block';
          englishContent.style.display = 'none';
          button.innerHTML = 'Translate to English';
        } else {
          chineseContent.style.display = 'none';
          englishContent.style.display = 'block';
          button.innerHTML = 'Back to Chinese';
        }
      }
    </script>
  </body>
</html>

<section id="comments">
  <script src="https://utteranc.es/client.js"
          repo="RuohanLixyf/RuohanLixyf.github.io"
          issue-term="pathname"
          theme="github-light"
          crossorigin="anonymous"
          async>
  </script>
</section>
