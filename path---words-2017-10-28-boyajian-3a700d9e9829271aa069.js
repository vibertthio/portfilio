webpackJsonp([42335677339005],{529:function(A,a){A.exports={data:{markdownRemark:{html:'<p>A 3D system for performances.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 34.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAABkUlEQVQY0xXNy27TQBhAYb8CKqKU0hIS3+afi29JHWfGnsnYjuw2IaSBFLVCDSqQQgURDaIFVWxYIdggIRY8AkuekLI5u0/HaGxCqxFZzR2rFSOcYzcFb4BdeRapkmaXspi/+pCtvvx6enz54h2PasKfYNyH7hS82rCtxDET1+4hV4DNCc0BScC5h3hv8vxc9VeA36vR32fzP+cXv0NPkNSXBy7WTMwM7ArkiOsh+d8sYhpjrZPdw+FY8frzp6u9yeTHYvn96OTn1bezxetH+azIRiQcZmJsgN1FDgcnpUhgJD2QVVZ+PB5+Xc1bQca76vTNskJhxwqncnqxODk9nMm4z1gRR6WB7PjagCs8mmNQPtGUFj6RflCtbeH81poZpZu93dBiQo2CboVYUaoh7YyTTmHc2yZms41sDkhhRyCrB2ZCkG7jHIFaZ+LG3ss7+fJ29XYjnbb9EWEDaD8AUpKgNtZv3r2/TZtb1GxEjGqCFMUSoK9JIfzSYWXA853koOXXItBl/DBR+9gbxOoxeNU/szxkg/q7oGEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="demo"\n        title=""\n        src="/portfolio/static/banner-b10d3eaf792af8da07f9e499c427aedd-49017.png"\n        srcset="/portfolio/static/banner-b10d3eaf792af8da07f9e499c427aedd-26e3d.png 148w,\n/portfolio/static/banner-b10d3eaf792af8da07f9e499c427aedd-289fa.png 295w,\n/portfolio/static/banner-b10d3eaf792af8da07f9e499c427aedd-49017.png 590w,\n/portfolio/static/banner-b10d3eaf792af8da07f9e499c427aedd-c6fa4.png 885w,\n/portfolio/static/banner-b10d3eaf792af8da07f9e499c427aedd-95586.png 1180w,\n/portfolio/static/banner-b10d3eaf792af8da07f9e499c427aedd-f6d7f.png 1200w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  </p>\n<!-- ![demo](https://drive.google.com/file/d/1znKw4nCc7PDoVHq2E3-GLr4Qu7BerGCv/view?usp=sharing) -->\n<p>It’s prototyped in Processing.</p>\n<h2 id="1-download"><a href="#1-download" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Download</h2>\n<p>First, clone the project. Or you can just download as .zip.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git clone https://github.com/vibertthio/boyajian.git boyajian</code></pre>\n      </div>\n<h2 id="2-dependencies"><a href="#2-dependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Dependencies</h2>\n<p>You need to download all the dependencies in Processing IDE.\nIf you have on idea how to download Processing libraries, you can follow the <a href="https://github.com/processing/processing/wiki/How-to-Install-a-Contributed-Library">instruction</a> in Processing’s wiki page.</p>\n<ul>\n<li><a href="https://github.com/sojamo/controlp5">controlP5</a></li>\n<li><a href="http://www.sojamo.de/libraries/oscP5/">oscP5</a></li>\n<li><a href="https://github.com/jdf/peasycam">PeasyCam</a></li>\n<li><a href="http://www.ricardmarxer.com/geomerative/">Geomerative</a></li>\n</ul>\n<h2 id="3-run"><a href="#3-run" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. Run</h2>\n<p>Second, open the file ./Boyajian/Boyajian.pde with your processing IDE.</p>\n<br>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 41.56709558823529%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABjxEYgV//xAAXEAEBAQEAAAAAAAAAAAAAAAABAgMA/9oACAEBAAEFApM2dWA7/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Bh//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/Aaf/xAAZEAABBQAAAAAAAAAAAAAAAAARAAIQQoH/2gAIAQEABj8Cqg0ZH//EABcQAQEBAQAAAAAAAAAAAAAAABEAAVH/2gAIAQEAAT8hbDzuxQfY3//aAAwDAQACAAMAAAAQ+A//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxAj/8QAFhEAAwAAAAAAAAAAAAAAAAAAARBh/9oACAECAQE/EDK//8QAGBABAQEBAQAAAAAAAAAAAAAAAREAMZH/2gAIAQEAAT8QGxdID44m8eoNzTd//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="demo"\n        title=""\n        src="/portfolio/static/img-01-f7925df3712ab94521d8519ab7235c1a-f688c.jpg"\n        srcset="/portfolio/static/img-01-f7925df3712ab94521d8519ab7235c1a-08150.jpg 148w,\n/portfolio/static/img-01-f7925df3712ab94521d8519ab7235c1a-bdd1b.jpg 295w,\n/portfolio/static/img-01-f7925df3712ab94521d8519ab7235c1a-f688c.jpg 590w,\n/portfolio/static/img-01-f7925df3712ab94521d8519ab7235c1a-7989c.jpg 885w,\n/portfolio/static/img-01-f7925df3712ab94521d8519ab7235c1a-52e85.jpg 1180w,\n/portfolio/static/img-01-f7925df3712ab94521d8519ab7235c1a-35085.jpg 1770w,\n/portfolio/static/img-01-f7925df3712ab94521d8519ab7235c1a-7ed6f.jpg 4352w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  </p>',frontmatter:{title:"Boyajian"}}},pathContext:{slug:"/words/2017-10-28---boyajian/"}}}});
//# sourceMappingURL=path---words-2017-10-28-boyajian-3a700d9e9829271aa069.js.map