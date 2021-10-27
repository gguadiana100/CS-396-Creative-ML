# A1: ML5 object classification

## Name

Gilberto Guadiana

## Link to your P5 submission

Code is on canvas.

## What are you detecting, and what model did you use?

I am detecting what is on my canvas: a combination of static and video feed. I used the MobileNet model.


## How are you displaying the detected objects on the screen?  How did you improve on the example code that just outputs the label?

I am displaying the label as part of a sentence that the classifier is supposed to be saying. Part of this sentence includes how the classifier is feeling based on its performance.


## How does the user interact with your system? Do they know what it will detect? Do they push a button, make a face, or stand there?

Users are allowed to choose whether the predictions of the model are correct or incorrect. Incorrect answers result in increased interference static being put on the canvas and an increase in sadness of the classifier. The users can see how the static affects the classifier.

## Shoutouts

The following code was helpful for getting started with ML5 and P5 on my local machine.
https://github.com/ml5js/ml5-library/blob/main/examples/p5js/ml5Boilerplate/ml5Boilerplate_Version/index.html
