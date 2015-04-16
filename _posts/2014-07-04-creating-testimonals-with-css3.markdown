---
layout: post
title:  "Creating Testimonals With CSS3"
meta: Here I am making a simple testimonals snippets using HTML5 & CSS3 that can be used in portfolio website projects.
date:  2014-07-04 1:00:00
categories:  
priority: 1.0
---

Here I am making a simple testimonals snippets using HTML5 & CSS3 that can be used in portfolio website projects.

View Demo <a class="btn-default-outline btn-medium" href="http://codepen.io/mithicher/full/pKaLI/">Demo</a>

Let's start with the markup

{% highlight html %}

<div class="testimonal-wrap">
    <img src="your-image-source" alt="">
    <div class="testimonal-content"></div>
    <p class="testimonal-author"></p>
</div>

{% endhighlight %}

Now the CSS part. We are starting with mobile-first approach.

{% highlight css %}
.testimonal-wrap {
    width: 100%;
    float: left;
    margin-bottom: 3.5em;
    text-align: center;
    position: relative;
    background: #ecf0f1;
    padding-top: 3em; 
    padding-left: 1.5em;
    padding-bottom: 2.5em;
    padding-right: 1.5em;
    box-shadow: 0 1px 0 #bdc3c7;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
{% endhighlight %}

Now styling the quotes

{% highlight html %}
.testimonal-wrap:before {
    content: "\201D";
    display: block;
    font-size: 5em;
    font-family: "Times New Roman", Times, Baskerville, Georgia, serif;
    line-height: 1em;
    color: #1abc9c;
}
{% endhighlight %}

Now the image part

{% highlight css %}

.testimonal-wrap img {
    position: absolute;
    top: -30px;
    left: 0;
    right: 0;
    width: 64px;
    height: 64px;
    margin: auto;
    border-radius: 50%;
    max-width: 100%;
    box-shadow: 0 0 0 4px #bdc3c7;
}
{% endhighlight %}

Now styling the content and the author

{% highlight html %}
.testimonal-content {
    font-size: 1.120em;
    line-height: 1.5;
    color: #34495e;
    margin-bottom: 1em;
}
.testimonal-author {
    font-size: 1em;
    font-weight: bolder;
    color: #1abc9c;
    text-transform: uppercase;
}
{% endhighlight %}

Here is the Codepen Demo

<p data-height="527" data-theme-id="0" data-slug-hash="pKaLI" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/mithicher/pen/pKaLI/'>Creating Testimonals With CSS3</a> by Mithicher (<a href='http://codepen.io/mithicher'>@mithicher</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async="async" src="http://codepen.io/assets/embed/ei.js"></script>