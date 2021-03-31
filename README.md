# 3D Background Boxes

If deployed: https://thedanitor.github.io/3D_background_boxes/

This project is from the Day 40 code along video from Udemy's 50 projects in 50 days series focused on web development. I have added some comments to the CSS and JavaScript to make notes to myself why certain choices are being made and what particular lines of code do.

### Overall Impression

For this project we created some boxes that combined displayed an image (or gif) by giving each box the background image, but changing the background position. Each box was given a 3D effect using ::before, ::after and skweX or skewY transforms. There was also a button that caused the boxes to spin and separate while still displaying the image. The interesting part of this project was creating all of the boxes and assigning their background position in JavaScript using nested for loops. 

### Things Learned

* ```transform: skewX()``` and ```transform: skewY()``` can be used to skew element to create 3D effect.