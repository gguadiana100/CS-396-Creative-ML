# A7: A Magical GAN Journey
In this assignment, you will use a Colab notebook to generate images using a text-guided Generative Adversarial network.  You will create an illustrated journey that combines text and images, like Tour of the Sacred Library.

* Read [Tour of the Sacred Library](https://moultano.wordpress.com/2021/07/20/tour-of-the-sacred-library/) and watch [Sinuous Rills](https://www.youtube.com/watch?v=Jbn1aJuarIU).
* Try out a few of the notebooks from [Isaac Karth's document](https://docs.google.com/document/d/1uoLXXOr8iS1f6qoqGjn8AHTM4Aru6LQo9RoBb_-3TrU/edit). Not every notebook will work, they do break frequently.
* If you can't get any interesting ones (like the pixel art) to work, Katherine Crowson's [VQGAN and CLIP](https://colab.research.google.com/drive/1L8oL-vLJXVcRzCFbPwOoMkPKJ8-aYdPN#scrollTo=CppIQlPhhwhs) is very reliable
	* If nothing will run, you can use ArtBreeder, but it doesn't allow text prompts 	
* Create an illustrated journey that combines text and images.  I would recommend using Google docs or making an HTML page, but anything works as long as you can turn it in as a link or a PDF.
* Include your name, a descriptive title, and a link to the colab you used in your document.
* Create at least 7 "scenes". Each scene should have:
	* A generated image
	* A caption of the generated image listing the prompt and the seed
	* The text describing this scene in the journey. This may not be the same as the prompt.
	* You can often get better results by adding "seasonings": [short words or phrases](https://twitter.com/98_0634741763/status/1414442147877695488) that trigger particular statistical behaviors in the GAN, like "dark and forbidding castle Artstation concept art"		
	* Submit this .md and either a link to a page or a PDF to canvas

You can use any text that you want as your prompt or your description. You can retell existing stories, use classical poetry like Sinuous Rills, use [GPT2](https://transformer.huggingface.co/doc/distil-gpt2) or Tracery to generate new ideas, or write your own.

**Example:** How to use Katherine Crowson's [VQGAN and CLIP](https://colab.research.google.com/drive/1L8oL-vLJXVcRzCFbPwOoMkPKJ8-aYdPN#scrollTo=CppIQlPhhwhs) notebook:

 * Run all to start loading the library and test whether it is generating images at the bottom
 * Search for the text "the first day of the waters"
 * This is the prompt it will use to do the generation, and your primary form of control
 * Note that it also has "seed". This number controls the random noise that it starts with, and so can impact the composition of the image.  I find "47" to be a good seed for a single figure in the center, try other seeds!
 * Check to see if it has generated any images. If so, stop the runtime, edit your prompt and seed, and use the dropdown to "Run After" that settings cell
 * You should see images start to appear in about 5-10 minutes at the bottom.  Images will probably get as good as they will get by about 30 minutes, then you can right-click to save them.
 * When you save an image, name it with the prompt you used and the seed and the number of generations.  This will be SUPER helpful in remembering how you generated things if you want to try out different seeds or compare seasonings.
 * You can "run after" the settings cell many times with different prompts, and it will be faster than the first prompt


## Name

Gilberto Guadiana

## Which colab did you use?

I used Max Woolf's "Create Realistic AI-Generated Images With VQGAN + CLIP" colab that I found at https://colab.research.google.com/drive/1wkF67ThUz37T2_oPIuSwuO4e_-0vjaLs?usp=sharing#scrollTo=clJsMT0Eqizk

## What is the theme of your journey?

The theme of my journey is life and the afterlife.

## Where did you get the text for your journey?

I wrote the text based on my reading of "The Egg" by Andy Weir

## What prompts did you explore?

I used text directly as my prompt. I experimented with the art style of the output by using the names of different artists until I found a style that I found fitting for the narrative. I found that more concrete text led to better results as compared to more abstract prompts.

## Did any output surprise you?

I was surprised at how I was getting better results with more realistic art styles as compared to art that is more surreal.  

## Did you adjust your plans for your story based on the GAN's (or GPT2's) output?

When I was first experimenting with the system, I experienced the system as more interactive. Once I had an idea of the capabilities of the system and the narrative that I wanted to craft, I treated the system as more of a tool.

## Shoutouts
