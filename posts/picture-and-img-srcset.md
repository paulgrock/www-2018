---
path: "/picture-and-img-srcset"
date: "2014-08-17T15:40"
title: "picture and img srcset"
author: "Paul Grock"
---

The `picture` element. A lot of talk, a ton work and even some [crowdfunding](https://www.indiegogo.com/projects/picture-element-implementation-in-blink/x/2620940) has gone into creating this new element. It is as far as I can tell the most complicated HTML element there is. It took me a lot of reading, watching and playing with code to get up to speed. For the full details on what I read check out Tim Wright's [article](http://www.smashingmagazine.com/2014/05/12/picturefill-2-0-responsive-images-and-the-perfect-polyfill/) on smashingmag two Eric Portis articles, one on [smashingmag](http://www.smashingmagazine.com/2014/05/14/responsive-images-done-right-guide-picture-srcset/) and the other on [ericportis.com](http://ericportis.com/posts/2014/srcset-sizes/), a [screencast](http://css-tricks.com/video-screencasts/133-figuring-responsive-images/) by Chris Coyier plus the documentation on the picture polyfill, [picturefill](http://scottjehl.github.io/picturefill/).

From what I can tell the picture element while very important won't be used as much as the `img` element's new attributes: `srcset` and `sizes`. Srcset has surprisingly good browser support in the latest browsers considering the spec for picture was just finished earlier this year. It is currently shipping in Chrome 35, Firefox 32 (behind a flag) and Safari 8 both on the the desktop and iOS.

<iframe src="http://caniuse.com/srcset/embed/eras=-2,2" width="100%" height="325px" class="caniuse-embed"></iframe>


## Width based image changing

With addition of `srcset` and `sizes` developers can give browsers the information they need to intelligently switch between an array of images. This is done using the `srcset` attribute which provides a list of images and specifies the width or resolution of the image. The other new addition to `img` is `sizes` which tells the browser the viewport relative or absolute size the image is to be rendered at. Below is an `img` with the new attributes.

```language-markup
<img src="400x300.gif"
     srcset="400x300.gif 400w,
             600x300.gif 600w,
             400x300.gif 800w"
    sizes="100vw"
    alt="Placeholder Image">
```

Lets see what each of these new attributes mean in more detail.

#### Srcset

The `srcset` attribute contains a comma separated list of `img src`s and their width, the number with the 'w' after it (400w in the case of the first one). Height can't be used at the moment though that might change in the future. This list tells the browser these are the sources that can be used in place of the traditional `img src` and the width each image is. This means the first `srcset` (400x300.gif 400w) will only be loaded up to it's width of 400w. When the browser viewport hits 401 on a non retina display the browser will switch over to the 600w image.

#### Sizes

The reason the image changes based on the full viewport width is because of the sizes attribute. Since it is set to 100vw we are telling the browser that the image is going to be rendered at the same width as the viewport. If we changed the sizes attribute to `50vw` as shown below then the source images would change just above 800, 1200 and 1600, respectively.

```language-markup
<img src="400x300.gif"
     srcset="400x300.gif 400w,
             600x300.gif 600w,
             400x300.gif 800w"
    sizes="50vw"
    alt="Placeholder Image">
```

In addition to taking just a relative width or fixed width you can use a media query before each sizes attribute. One thing to remember about sizes is the browser chooses which ever evaluates to true first. Mobile first sites should place the largest media query first while desktop first should use the largest last. The default size should always be last. The media query syntax is shown below. That `sizes` attribute tells the browser that above 30em the image is going to be displayed at half the view port width, any other time the image will be 100% of the view port.


```language-markup
<img src="400x300.gif"
     srcset="400x300.gif 400w,
             600x300.gif 600w,
             400x300.gif 800w"
    sizes="(min-width: 60em) 25vw, (min-width: 30em) 50vw, 100vw"
    alt="Placeholder Image">
```
<small>Mobile first</small>

```language-markup
<img src="400x300.gif"
     srcset="400x300.gif 400w,
             600x300.gif 600w,
             400x300.gif 800w"
    sizes="(max-width: 30em) 100vw, (max-width: 60em) 50vw, 25vw"
    alt="Placeholder Image">
```
<small>Desktop first</small>

## High dpi

There is a slightly simpler use for `srcset` if you're solely interested in switching images based on display resolution.

```language-markup
<img src="300x300.gif"
     srcset="300x300.gif 1x,
             600x600.gif 2x"
     alt="More placeholder">
```

The width attribute in each `srcset` has been replaced with an 'x' to denote the device-pixel-ratio of the screen. When used in this fashion the two images are swapped out based on the resolution of the device the browser is running on and there is no need for `sizes` attribute. Specifically the 600x600 image is rendered on any device with higher than a 2x dpi.

## Demo

This is all well and good but using srcset on the web is usually going to be a lot messier than just specifying half or full view port width and switching based on that. [This pen](//codepen.io/paulgrock/pen/nACgh/) shows a basic layout that goes from being one column on mobile then switching to two column at 40em, usually at 640px. The width of the two column layout maxes out at 60em typically at 960px. The sidebar for the article is 300px wide solely based on the typical sidebar ad size. The most relevant part of this code is the `img` element and it's attributes. It uses the same `srcset` images as before but swaps them at different sizes using the media query syntax. Up until the browser width is above 40em the image is 100% of the view port, between that and 60em the image is 100vw minus the sidebar width plus padding of 325 and above 60 it is 60em - 325px. This could be calculated manually but wouldn't work as well as the em units change pixel size.

<p data-height="444" data-theme-id="0" data-slug-hash="nACgh" data-default-tab="result" data-user="paulgrock" class='codepen'>See the Pen <a href='http://codepen.io/paulgrock/pen/nACgh/'>nACgh</a> by Paul Grock (<a href='http://codepen.io/paulgrock'>@paulgrock</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Thanks for checking out my first blog post if you have questions, comments or concerns let me know on [twitter](//twitter.com/paulgrock).
