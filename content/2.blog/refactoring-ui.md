---
title: Refactoring UI
tags: UX, Principles
date: 2025-01-21
---

# Contents

## Starting from Scratch
- [Start with a feature, not a layout](#start-with-a-feature-not-a-layout)
- [Detail comes later](#detail-comes-later)
- [Don't design too much](#dont-design-too-much)
- [Choose a personality](#choose-a-personality)
- [Limit your choices](#limit-your-choices)

## Hierarchy is Everything
- [Not all elements are equal](#not-all-elements-are-equal)
- [Size isn't everything](#size-isnt-everything)
- [Don't use grey text on colored backgrounds](#dont-use-grey-text-on-colored-backgrounds)
- [Emphasize by de-emphasizing](#emphasize-by-de-emphasizing)
- [Labels are a last resort](#labels-are-a-last-resort)
- [Separate visual hierarchy from document hierarchy](#separate-visual-hierarchy-from-document-hierarchy)
- [Balance weight and contrast](#balance-weight-and-contrast)
- [Semantics are secondary](#semantics-are-secondary)

## Layout and Spacing
- [Start with too much white space](#start-with-too-much-white-space)
- [Establish a spacing and sizing system](#establish-a-spacing-and-sizing-system)
- [You don't have to fill the whole screen](#you-dont-have-to-fill-the-whole-screen)
- [Grids are overrated](#grids-are-overrated)
- [Relative sizing doesn't scale](#relative-sizing-doesnt-scale)
- [Avoid ambiguous spacing](#avoid-ambiguous-spacing)

## Designing Text
- [Establish a type scale](#establish-a-type-scale)
- [Use good fonts](#use-good-fonts)
- [Keep your line length in check](#keep-your-line-length-in-check)
- [Baseline, not center](#baseline-not-center)
- [Line-height is proportional](#line-height-is-proportional)
- [Not every link needs a color](#not-every-link-needs-a-color)
- [Align with readability in mind](#align-with-readability-in-mind)
- [Use letter-spacing effectively](#use-letter-spacing-effectively)

## Working with Color
- [Ditch hex for HSL](#ditch-hex-for-hsl)
- [You need more colors than you think](#you-need-more-colors-than-you-think)
- [Define your shades up front](#define-your-shades-up-front)
- [Don't let lightness kill your saturation](#dont-let-lightness-kill-your-saturation)
- [Greys don't have to be grey](#greys-dont-have-to-be-grey)
- [Accessible doesn't have to mean ugly](#accessible-doesnt-have-to-mean-ugly)
- [Don't rely on color alone](#dont-rely-on-color-alone)

## Creating Depth
- [Emulate a light source](#emulate-a-light-source)
- [Use shadows to convey elevation](#use-shadows-to-convey-elevation)
- [Shadows can have two parts](#shadows-can-have-two-parts)
- [Even flat designs can have depth](#even-flat-designs-can-have-depth)
- [Overlap elements to create layers](#overlap-elements-to-create-layers)

## Working with Images
- [Use good photos](#use-good-photos)
- [Text needs consistent contrast](#text-needs-consistent-contrast)
- [Everything has an intended size](#everything-has-an-intended-size)
- [Beware user-uploaded content](#beware-user-uploaded-content)

## Finishing Touches
- [Supercharge the defaults](#supercharge-the-defaults)
- [Add color with accent borders](#add-color-with-accent-borders)
- [Decorate your backgrounds](#decorate-your-backgrounds)
- [Don't overlook empty states](#dont-overlook-empty-states)
- [Use fewer borders](#use-fewer-borders)
- [Think outside the box](#think-outside-the-box)

## Leveling Up

## Start with a feature, not a layout

When you start the design for a new app idea, what do you design first? If it’s the navigation bar at the top of the page, you’re making a mistake.

The easiest way to find yourself frustrated and stuck when working on a new design is to start by trying to “design the app.” When most people think about “designing the app”, they’re thinking about the shell.

- Should it have a top nav, or a sidebar?
- Should the navigation items be on the left, or on the right?
- Should the page content be in a container, or should it be full-width?
- Where should the logo go?

The thing is, an “app” is actually a collection of features. Before you’ve designed a few features, you don’t even have the information you need to make a decision about how the navigation should work. No wonder it’s frustrating!

Instead of starting with the shell, start with a piece of actual functionality.

For example, say you’re building a flight booking service. You could start with a feature like “searching for a flight”.

Your interface will need:

• A field for the departure city
• A field for the destination city
• A field for the departure date
• A field for the return date
• A button to perform the search

Start with that.

Hell, you might not even need that other stuff anyways — it worked for Google.

## Detail comes later

In the earliest stages of designing a new feature, it’s important that you don’t get hung up making low-level decisions about things like typefaces, shadows, icons, etc.

That stuff will all matter eventually, but it doesn’t matter right now.

If you have trouble ignoring the details when working in a high fidelity environment like the browser or your favorite design tool, one trick Jason Fried of Basecamp likes to use is to design on paper using a thick Sharpie.

Obsessing over little details just isn’t possible with a Sharpie, so it can be a great way to quickly explore a bunch of different layout ideas.

### Hold the color

Even when you’re ready to refine an idea in higher fidelity, resist the temptation to introduce color right away.

By designing in grayscale, you’re forced to use spacing, contrast, and size to do all of the heavy lifting.

It’s a little more challenging, but you’ll end up with a clearer interface with a strong hierarchy that’s easy to enhance with color later.

### Don’t over-invest

The whole point of designing in low-fidelity is to be able to move fast, so you can start building the real thing as soon as possible.

Sketches and wireframes are disposable — users can’t do anything with static mockups. Use them to explore your ideas, and leave them behind when you’ve made a decision.

## Don’t design too much

You don’t need to design every single feature in an app before you move on to implementation; in fact, it’s better if you don’t.

Figuring out how every feature in a product should interact and how every edge case should look is really hard, especially in the abstract.

- How should this screen look if the user has 2000 contacts?
- Where should the error message go in this form?
- How should this calendar look when there are two events scheduled at the same time?

You’re setting yourself up for frustration by trying to figure this stuff out using only a design tool and your imagination.

### Work in cycles

Instead of designing everything up front, work in short cycles. Start by designing a simple version of the next feature you want to build.

Once you’re happy with the basic design, _make it real_.

You’ll probably run into some unexpected complexity along the way, but that’s the point — it’s a lot easier to fix design problems in an interface you can actually use than it is to imagine every edge case in advance.

Iterate on the working design until there are no more problems left to solve, then jump back into design mode and start working on the next feature.

Don’t get overwhelmed working in the abstract. Build the real thing as early as possible so your imagination doesn’t have to do all the heavy lifting.

### Be a pessimist

Don’t imply functionality in your designs that you aren’t ready to build.

For example, say you’re working on a comment system for a project management tool. You know that one day, you’d like users to be able to attach files to their comments, so you include an attachments section in your design.

You get deep into implementation only to discover that supporting attachments is going to be a _lot_ more work than you anticipated. There’s no way you have time to finish it right now, so the whole commenting system sits on the backburner while you take care of other priorities.

The thing is, a comment system with no attachments would still have been better than no comment system at all, but because you planned to include it from day one you’ve got nothing you can ship.

When you’re designing a new feature, **expect it to be hard to build**.

Designing the smallest useful version you can ship reduces that risk considerably.

If part of a feature is a “nice-to-have”, **design it later**. Build the simple version first and you’ll always have something to fall back on.
