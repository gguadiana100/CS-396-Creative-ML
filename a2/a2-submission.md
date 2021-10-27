# A2: Scicomm

## Name

Gilberto Guadiana

## Which paper did you read?

I read "High performance automotive chassis design: a topology optimization based approach".

## What year was this paper written? (search in Google scholar)

The paper was written in 2011.

## Who are the authors of this paper? In computer science, the person who had the idea is listed first, and the person who leads the lab is listed last. What kinds of other work do they do? If you find their lab's name, sometimes they have youtube videos up of other work.

The authors are Marco Cavazzuti, Andrea Baldini, Enrico Bertocchi, Dario Costi, Enrico Torricelli, Patrizio Moruzzi.

Marco Cavazzuti focuses on optimization in manufacturing and models for heat transfer and fluid mechanics.
Andrea Baldini works in automotive design and manufacturing.
Enrico Bertocchi works in stress analysis and manufacturing design.

## What problem are they trying to solve?

The team is attempting to find designs that optimize for reduced material of an automobile chassis while still meeting performance targets.

## What domain is this system modeling? (what kinds of stuff is it trying to make? these are the "phenotype")

The system is modeling 3D CAD designs for automobile chassis.

## What does it mean for an individual phenotype to be "good" in this domain?

The design must have reduced material relative to traditional designs while meeting Ferrari performance metrics, like safety ratings, as analyzed by FEA analysis.

## As far as you can tell, how is the genotype stored? What kind of data is it?

The genotype is stored as a finite element model with 1.06 million tetrahedral elements.

## How does that genotype get turned into a phenotype?

The finite element model is rendered for human CAD designers to interpret and make into a CAD model.

## What is the objective function (sometimes called selection mechanic or heuristic) are they using to evaluate the phenotypes? (or, how are they picking winners?). Is this something a computer can calculate, or do they need a human or a real-world test?

FEA analysis is used to determine whether a design satisfies safety standards, volume calculations are used to check whether a design has enough vacant space for other components, and human CAD designers interpret whether designs make physical sense.

## How do they make the next generation of genotypes? What gets changed? How much?

Once human CAD designers interpret and make a CAD model from the initial optimization, the CAD model is run through the system again for further material reduction.

## How good were their results? Are these "good" phenotypes for this domain?

The paper demonstrates that early stage CAD designs were made that met Ferrari automobile safety standards. The paper suggests that using CAD models from this type of system early on in the design process can help with meeting material reduction goals.

## What terms did you come across that were unfamiliar?

I was unfamiliar with the terms "topology optimization" and "topometry".

## Shoutouts

-- list any videos (even assigned ones), websites, PMs or classmates that were helpful in doing this assignment --
