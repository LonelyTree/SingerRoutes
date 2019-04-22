![ga](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Subdocuments/related models lab

## With your partner from yesterday:

1. Extend yesterday's lab, so that one model can contain the other, as shown in class.
1. For example, if your models were `Singer` and `Song`: 
  * A `Singer` would "contain" `Song`s (just like an `Author` "contains" `Article`s)

> When we refer to `Singer` we mean whichever of your models form yesterday contains your other model.  Similarly, when we refer to `Song` we refer to the model that is contained by the other model.  Read each prompt below twice carefully, and think twice about it, to make sure you're following the analogous step in your app.


## Basic

1. Add `Song`s array to `Singer` model.
1. Display `Singer`s on new `Song` page (use a drop down).
1. Creating a new `Song` should push a copy onto `Singer`'s `Songs` array.
1. On `Song` show page, also display `Singer` (with link).
1. On `Singer` show page, display `Singer`'s `Song`s (with links).

## Advanced

1. Deleting a `Song` updates a `Singer`'s `Song`s list.
1. Updating a `Song` updates a `Singer`'s `Song`s list.
1. Deleting a `Singer` should delete the associated `Song`s (this is what 'destroy' means in REST).
1. Enable `Singer` to be changed when editing a `Song` (use a drop-down). Be sure the 'edits' happen everywhere in the DB.

## Hungry for More

### Bootstrap and/or Partials (and static assets)

* If you haven't yet, spend a few minutes reading about [partials](https://www.google.com/search?q=ejs+partials) ([This article](https://medium.freecodecamp.org/how-to-use-ejs-templating-in-a-node-js-application-ea9347a96c65) and [this article](https://scotch.io/tutorials/use-ejs-to-template-your-node-application) look nice).  Then, make some partials for the things that are on every page (Such as... the html `<head>`? maybe a `<header>` with the links to add song, song index, add artist, and artist index? a `<footer>`?).  This is one of the key features of templating.

* Use a little [bootstrap](getbootstrap.com) to make your app look nice. 

* Remember: if you wanna do other/additional CSS, that's a static client-side asset. ([How to include static assets (i.e. images, CSS, client-side JS) in an Express app](https://expressjs.com/en/starter/static-files.html))

* Implement some cool visual stuff with something like:
  * CSS easing/transitions
  * a library like Velocity (remember -- client-side JS is a static asset and can be included in templates with `<script>`)
