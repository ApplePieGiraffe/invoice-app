# Invoice App - Frontend Mentor

![Design preview for the Invoice app coding challenge](./public/preview.jpg)

## Intro

Hello, there! 👋

Thank you for checking out my solution to the [invoice app challenge](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl) from Frontend Mentor. 😀

Feel free to look around and explore! 😉

## Overview

For this challenge, I used...

- React and Next.js (to build out the site)
- styled-components (to style it) 
- Formik and Yup (to handle the forms in the site)
- Framer Motion (for the page transitions and animations)

...and one or two other libraries to simplify things like working with dates and local storage. 😁

It was my first time using all of these libraries/packages (besides React), and so I'm not sure if I did everything correctly. However, I did put a bunch of effort into completing this challenge and I learned a lot along the way, so... yay! 😅

## Quirks

- I created a custom dropdown menu for the filter in the home page and tried to make it accesible by creating it with labels and checkboxes but I might have made it worse! 😥
- I didn't style the datepicker and dropdown in the form in accordance with the design files (but the README said styling those were optional).
- If the theme choice saved in local storage is dark mode, there's a quick flash of light mode that appears before the page transitions to dark mode when the page first loads. I'm pretty sure this is because of the SSG (or SSR?) done by Next.js and I haven't managed to do something about it yet.

### Things I wish I would have done...

- Used CSS variables rather than styled-component's theme provider to implement the light/dark modes because looking back, I think it would have been nicer. Also, I think that would have given me a way to fix the light mode flash issue.