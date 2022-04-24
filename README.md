# Dynamic UI components examples

This repo explores the challenges in implementing UI components that are dynamic. Their dynamic nature is due to reliance on some properties which we cannot know upfront - be it mouse position, reliance on user preferences or perhaps even some data structures from external API.

These unknowns were typically solved by relying on applying inline styles, computed within the component's logic which in turn introduce specificity, customization and maintenance issues.

To address all of that - a different, modern approach to styling is introduced and it's powerful possibilities explored in three examples.

In the examples I used Vue but the pattern itself is framework agnostic and can be implemented even in vanilla JS.

## Context Menus

The first example showcases a simple, responsive context menu component - on mobile, after a long press we display an *action-sheet like* list of options, which slides from the bottom of the screen - a much better mobile UX than a simple context menu next to a cursor.

On desktop devices - we display it in a classic fashion, and everything is responsive - changing the screen size will handle both forms without any issues.

There are no high specificity inline styles and overriding things requires very low specificity selectors.

## Dynamic Tables

Second example explores reliance on data not known upfront to create appropriate UI - the user can select which fields of data they want to see and everything is working nicely even on mobile - there we do not have a table but a list of cards for each row, with labels explaining each field.

The dynamic part here is the tablet/desktop table-like layout which is computed based on column definitions - they can be narrow, or bigger depending on what data we are dealing with.

Because we are in direct control of the layout definition - further expanding this concept we could introduce manual control of column widths by user - by simple drag and drop controls.

This layout definition could also be saved - in session storage, or some API, giving us very powerful components with arguably little work.

Again - no inline styles, no `!important` overrides and everything done in a clean, easy to manage or extend fashion.

## Grid System

Final example is introducing this approach to situations where we *could* define upfront every possibility, but doing so would generate a lot of repeatable CSS, wasting precious KBs of code.

The grid systems aren't anything novel, but arguably their usual approach to styling is quite dated. Here I introduce a very simple and basic in terms of features grid system.

Typically, grid systems like these, even in JS UI frameworks where we deal with components and not simple classes still approach it in the way generating appropriate classes upfront (usually in a Sass loop because of their repeating, computable nature), while component's props are used to select appropriate class.
We need so many classes because we have a lot of different possible usages for the column sizes - they might differ depending on a media query, they might have some offsets and so on.

By introducing this new approach to styling and explicitly making the CSS compute what's necessary we can significantly reduce the amount of CSS, while also giving us some new features.

Unlike the old approach, now we can easily control the amount of columns our grid system is based on by simple change of a prop - likewise controlling the grid's gutter.

Media queries can also be handled very easily by simply plugging in different values to existing computations which requires very low specificity overrides, making everything easy to change externally if a developer demands it.

Thanks to that we can use any amount of columns as a base as we see fit on a per-grid basis, making it a much more adaptable approach.
