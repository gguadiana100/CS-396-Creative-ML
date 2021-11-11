# A5: Scicomm: an image goes into an algorithm...

## Name

Gilberto Guadiana

## Which paper did you read?

I read "RarePlanes: Synthetic Data Takes Flight" by Shermeyer et al.

## What year was this paper written? (search in Google scholar)

This paper was written in 2021.

## Who are the authors of this paper?

Jacob Shermeyer, Thomas Hossler, Adam Van Etten, Daniel Hogan, Ryan Lewis, and Daeil Kim.

## What problem are they trying to solve?

The authors are trying to evaluate the value of using auto generated synthetic data to train models for the task of identifying aircraft from overhead perspective satellite imagery.

## What domain is this system modeling? What kinds of stuff is it trying to make?

The system is creating synthetic data of satellite images that include aircraft and their features that represent a variety of real-world conditions.

## What kinds of image are in their corpus? Where did they get those images?

The corpus is made up of a synthetic portion and a real portion. 14,700 hand-annotated aircraft made up the real data from 253 Maxar WorldView-3 satellite scenes. A professional labeling service was used with a procedural hand-annotation scheme. ~630,000 automated annotated aircraft made up the synthetic data from 50,000 AI.Reverie satellite images.

## As best you can, describe the process that is happening in this approach. What is the computer doing? Are there humans involved?

To make the synthetic data, the simulator software takes in geospatial vector data from OpenStreetMap to generate building and airport terminal models. The software then uses its integration with Houdini to generate airport ground and runways with planar shape and texture projections. Each simulated location is then imported into unreal engine 4. Settings are configured to spawn aircraft and simulate environmental factors and biomes. The images are split between all biomes, weather conditions, and other parameters, like sunlight intensity or time of day. This creates a synthetic dataset of satellite images that simulate a broad range of real-world conditions.

For the real data, a professional labeling service was used to annotate by hand 14,700 aircraft from Maxar WorldView-4 satellite scenes. Each aircraft was labeled in a diamond style with the nose, left-wing, tail, and right-wing being labeled in successive order.

Once the datasets were obtained, the synthetic and real data were used to train object detection machine learning models. The authors trained both a Faster R-CNN and Mask R-CNN model that were both pre-trained using ImageNet weights. For the real data, scenes were split into 512x512 tiles that included at least one aircraft. For the synthetic data, random cropping of 512x512 tiles were used for training.

## How good were their results? What metric are they using to decide if their results are good? What metric would you use?
The authors found that a model trained on 90% synthetic data and 10% real data had nearly identical results for aircraft identification from overhead images as compared to the model trained with 100% real data. The experiments were done by using the Detectron2 framework with mean average precision (mPA), mPA50, and average recall. From what I can find, these metrics are standard for evaluating object detection algorithms. One thing I might change is testing the models that are trained with only 20%, 5%, and 1% real data.

## What terms did you come across that were unfamiliar?
Several terms are unfamiliar including Resnet-50, Feature Pyramid Network, Faster R-CNN, Mask R-CNN, Stochastic Gradient Descent, COCO average precision metric, and average recall.

## Shoutouts

-- list any videos (even assigned ones), websites, PMs or classmates that were helpful in doing this assignment --
