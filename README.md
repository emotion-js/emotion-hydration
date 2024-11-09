# Emotion Hydation issue

This repo is intended to demostrate a hydration issue present when using Emotion with NextJS server components + a Suspense boundary.

When referring to "normal" in the text below, I mean styling via the native `style` tag, not using Emotion.

## How to demo

1. Run `npm run build && npm run start`
2. Open the [emotion + suspense](http://localhost:3000/emotion/suspense) route. Open the console and notice error message
3. Open the [normal styling + suspense](http://localhost:3000/normal/suspense) route. Open the console and notice NO error message present there

On top of this, if we remove the suspense boundary, all the errors dissapear. So it's only the combination of `emotion` + suspense.

4. Open the [emotion](http://localhost:3000/emotion) route. Open the console and notice NO error message
5. Open the [normal styling](http://localhost:3000/normal) route. Open the console and notice NO error message


## What is the fix?

I noticed that if I wrap the `ThemeProvider` inside an emotion `CacheProvider` it solves the issue (see `layout.tsx`). BUT, that has some additional side-effects, and when trying the same method in other apps with actual components and logic, it produces FOUTs...

