---
layout: post
title:  "Simple Alert Boxes With CSS3"
meta: Here I am making a simple alert box snippets that can be used in any projects which you may have seen in Frameworks like Bootstrap, Foundation etc.
date:  2014-06-07 7:22:00
categories:  
priority: 1.0
---

Here I am making a simple alert box snippets that can be used in any projects which you may have seen in
Frameworks like <a class="style1" href="http://getbootstrap.com">Bootstrap</a>, <a class="style1" href="http://foundation.zurb.com">Foundation</a> etc. 

Let's start with the markup

{% highlight html %}

<div class="alert alert-error">
	Some dummy text here...
</div>

{% endhighlight %}

Now the CSS part

{% highlight css %}

/* Base Alert Style */
.alert {
	position: relative;
    display: block;
    padding: 1em 1.8em;
    font-size: 0.9em;
    font-weight: 300;
    line-height: 1.2;
    text-align: left;
    margin-top: 0.4em;
    margin-bottom: 0.4em;
    background: transparent;
    color: white;
}

/* Error */
.alert-error {
    background: #e74c3c;
	border: 1px solid #c0392b;
}

{% endhighlight %}

Now our alert box is ready! but with only one color. To make alert box of any color we only need to
add classes like **.alert-success**, **alert-info** etc..

So here is the mark final up

{% highlight html %}

/* Red Color*/
<div class="alert alert-error">
	Some dummy text here...
</div>

/* Green Color*/
<div class="alert alert-success">
	Some dummy text here...
</div>

/* Blue Color*/
<div class="alert alert-info">
	Some dummy text here...
</div>

{% endhighlight %}

And the final css are as follows

{% highlight css %}

/* Base Alert Style */
.alert {
	position: relative;
    display: block;
    padding: 1em 1.8em;
    font-size: 0.9em;
    font-weight: 300;
    line-height: 1.2;
    text-align: left;
    margin-top: 0.4em;
    margin-bottom: 0.4em;
    background: transparent;
    color: white;
}

/* Error */
.alert-error {
    background: #e74c3c;
	border: 1px solid #c0392b;
}

/* Success */
.alert-success {
    background: #2ecc71;
	border: 1px solid #27ae60;
}

/* Info */
.alert-info {
    background: #3498db;
	border: 1px solid #2980b9;
}

{% endhighlight %}

Our alert-box is flexible right now, what if we need a **border-radius**! It's easy too just create
a global radius class in css and it's done...

Here is the alert box markup with **border-radius**

{% highlight html %}
<div class="alert alert-error radius">
	Some dummy text here...
</div>
{% endhighlight %}

{% highlight css %}
.radius {
	border-radius: 3px;
}
{% endhighlight %}

Here is the Codepen Demo

<p data-height="475" data-theme-id="0" data-slug-hash="mGdge" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/mithicher/pen/mGdge/'>mGdge</a> by Mithicher (<a href='http://codepen.io/mithicher'>@mithicher</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async="async" src="http://codepen.io/assets/embed/ei.js"></script>
