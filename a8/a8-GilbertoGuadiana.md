# A8: A Bigger, Better Assignment

## Name

Gilberto Guadiana

## What assignment are you working on?

I chose to extend A7: A Magical GAN Journey. In this assignment, I had generated images based on text prompts that were inspired by the short story "The Egg" by Andy Weir.

## What aspects of your original submission did you change?

I added generated image captions to each scene. Originally, the scene pictures were generated using Max Woolf's "Create Realistic AI-Generated Images With VQGAN + CLIP" colab that I found at https://colab.research.google.com/drive/1wkF67ThUz37T2_oPIuSwuO4e_-0vjaLs?usp=sharing#scrollTo=clJsMT0Eqizk. To extend this assignment, I used Masatoshi Hidaka’s Chainer Image Caption demo to generate captions from the generated images using a machine learning model trained on the MSCOCO dataset. 

## What paper did you reference during this assignment?

To get more familiar with the ML task of image captioning, I referenced the literature review "A Systematic Literature Review on Story-Telling
for Kids using Image Captioning - Deep Learning". Referencing this article was useful in getting an idea of the different approaches used in image captioning. I then used this understanding to find an appropriate model I could work with and found the Tensor Flow tutorial mentioned above.

## Did any output surprise you?

I was pleasantly surprised at the captions of the first scene where a wrecked car was mistaken for elephants and horses. Although the captions generated were largely inaccurate, they were interesting to read and this addition may help viewers appreciate the abstractness of the images that were generated.

## Shoutouts

Shout out to Nouman and his article "Using Machine Learning to Generate Image Captions" that proved to be a good reference for understanding more concretely how an ML image caption generator operates and can be built.

I attempted to use Tensor Flow's tutorial "Image captioning with visual attention" that was trained on the MS-COCO dataset that contains over 82,000 images with at least 5 different caption annotations. I then used the scene images with this caption generator model and added it to the GAN journey PDF although I was unsuccessful and ran into errors while attempting to use the model.

I also appreciated https://imgbb.com/ for free image hosting that I used to host my scene images while experimenting with the Tensor Flow image caption generator.
