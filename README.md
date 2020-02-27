# CSS to the rescue
> Using only CSS so users can create their own Mondriaan 'painting' and print it out.

![Image](assets/css-to-the-rescue.png)

## Installation
```bash
# Clone the repo
git clone https://github.com/kriskuiper/css-to-the-rescue-1920.git

# Install dependencies
yarn / npm install

# Run a local dev server on port 7071
yarn dev / npm run dev
```

## Features
Users can click blocks to change their aspect ratio and create their own Mondriaan that way. Clicking the print button or using `cmd / ctrl + p` will print only the users' creation.

## Contexts in mind while building this project
During building this project I've kept the following contexts in mind:
- Remove animations and transitions when user prefers reduced motion
- Make the art printable using a print stylesheet or a `@media print` media query.

## Contraints while building this project
During this project I tried to implement the following constraints:
- Make the website responsive without using media queries
- Try to make it *Mondriaan style* as much as possible, this means using only square shapes.

## My process and experiments
At first I started out with an e-commerce concept which is displayed below:

![Image]()

With this concept I found out that I was just focussing too much on the concept itself rather than experimenting with CSS as much as I would or could do in these three weeks.

However, things I've learned building this concept were:
- You can use `clip-path` to do awesome things with a hidden navigation. I used this in the earlier concept to create a cool menu opening / closing animation where a circle would grow untill it fills the screen;
- `attr(your-attribute)` is awesome for adding content to a `:before` and `:after` pseudo element. This way I was able to create a marquee text while for screenreaders it still would read like one word or sentence, also I'm still using this in the current project;
- You can use `transform-origin` to start the transform from any corner of an element, which leads to more awesome animations. Also, if you use keyframes you can transition the `transform-origin` while animating!
- Why use JS to animate navigation items after on another when you have a `transition-delay` in CSS? Code is still available in this project if you want to see how I did that.

## What I've learned during this course
Besides the aforementioned things I've also learned a lot about CSS grid and all kinds of CSS selectors which I've never used before.

Although I already knew how to build layouts using CSS, I never thought I'd learn this much during this course. I am now very confident about my CSS skills in general. 

Besides that I also will write fewer unecessary JavaScript (hence the aforementioned `transition-delay` thingies). Although I will never, ever, ever use a checkbox hack in production though 🤷‍♂.

### In short I've learned the following things:
- CSS grid is awesome (and very well supported too). You can practically make the browser fix the placement of items inside the grid using `grid-auto-flow: dense`;
- There's no such thing as `grid-gap-color` unfortunately 🥺;
- Killing your darlings really helps you to rethink your project and come up with something creative and awesome;
- Before I didn't know print stylesheets were a thing, although I've used the print media query and not a seperate print stylesheet;
- You can create pseudo-randomness in CSS using the `nth-of-type(1n + 1)... | nth-child(2n + 1)...` selector and the *cicada principle* which is explained in CSS comments in my code.

## Project wishlist
If I had more time I would like to experiment some more doing the following things:

- [ ] Make the layout fit on one page when printed;
- [ ] Use some kind of dark mode or look at the users' settings to make a 'dark moded Mondriaan' but print it as if it is light mode;
- [ ] Write more progressively enhanced CSS using `@supports` and make more use of a11y related media queries like `@prefers-reduced-motion: reduce`,