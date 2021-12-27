# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot/desktop.png)
![](./screenshot/movil.png)



### Links

- Solution URL: [Solution URL here](https://your-solution-url.com)
- Live Site URL: [Live site URL here](https://faq-accordion-santi1999.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
-JavaScript

### What I learned

In the current challenge , utilizate Css and JavaScript for the animation of the carousel. 

```js
<h1>Code of JavaScript</h1>
```
```js
document.querySelectorAll('.accordion__question').forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log('click!');
        var accCollapse = item.nextElementSibling;
        if (!item.classList.contains('open')) {
            console.log('toogle  accordion button')
            accCollapse.style.display = "block";
            let accHeight = accCollapse.clientHeight;
            console.log(accHeight);
            setTimeout(() => {
                //After x amount of time,Remove "collapsing" class and add "collapse open" class
                accCollapse.style.height = accHeight + "px";
                accCollapse.style.display = '';
            }, 1)
            accCollapse.classList = 'accordion__collapse  collapsing';
            setTimeout(() => {
                console.log('open accordion content')
                accCollapse.classList = 'accordion__collapse collapse  open'
            }, 300);
        }
        //Close accordion item
        else {
            accCollapse.classList = 'accordion__collapse collapsing';
            setTimeout(() => {
                accCollapse.style.height = '0px';
            }, 1)
            setTimeout(() => {
                console.log('close accordion content')
                accCollapse.classList = 'accordion__collapse collapse '
                accCollapse.style.height = '';
                accCollapse.style.border = 'none';
            }, 300)
        }
        item.classList.toggle('open');
    });
});
```


### Continued development

I would like to continue delving into the use of javascript to make sites more dynamic and professional.

### Useful resources

- [Resource 1](https://www.developer.mozilla.org) 
- [Resource 2](https://www.w3schools.com) 

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [YourSite](https://www.your-site.com)
- Frontend Mentor - [@santi19999](https://www.frontendmentor.io/profile/santi19999)
