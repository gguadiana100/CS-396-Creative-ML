# Assignment 0 - Classifier

## Name

Gilberto Guadiana


## What is your Github handle?

gguadiana100


## What three objects, sounds or movements are you classifying?

1. Handwritten class notes
2. Pen artwork
3. Product labels


## What makes those interesting to classify? How would you use this in life or in art?

I wanted to see if we can classify whether something is handwritten or is machine printed. I also want to see whether pen artwork will be reliable separated from handwritten text and the text from product labels. In real life, you could use a similar model to classify the types of texts and written documents.


## Describe your false positive.  What was incorrectly detected as one of your three classes?

The pattern on my composition notebook was classified as handwritten class notes. The squiggle pattern was misclassified as handwriting.


## Describe your false negative.  How did your classifier not recognize a class it should have known?

A section of my class notes that included diagrams were misclassified as pen artwork. The classifier was not trained with many diagrams, so the algorithm decided that diagrams are more like pen artwork than class notes even though the diagrams were annotated.


## How well did the AI do? What seemed to be hard for it? What patterns do you think it was detecting?

The AI did pretty well considering that I used less than 200 images to train the model. It struggled to differentiate diagrams and images on product labels from pen artwork. I believe that the model identified product labels through the symmetry and perfect aligning of the text on the labels. For the pen artwork, the model may be picking up on curves and accumulation of lines that is present in my art style. For the handwriting, the model may be looking for imperfect alignment or spacing as well as the slightly changing size of the characters. 

## Shoutouts

The Coding Train's "Teachable Machine 1: Image Classification" was helpful for its example of using teachable machine and also offering several possible extensions of the tutorial that I adapted for my class choices.
