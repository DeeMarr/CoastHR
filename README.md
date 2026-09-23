# CoastHR website

This is the new coasthr.com.au site — plain files, built with a tool called Eleventy, hosted for free on GitHub Pages. No WordPress, no Thrive, no hosting account to log into.

## How it fits together (in plain terms)

- Every **page** and **blog post** is a plain text file with a tiny bit of formatting (Markdown). You don't need to touch any HTML to edit one.
- When you save changes and push them to GitHub, the site rebuilds and updates itself automatically. There's no separate "publish" button to press.
- Everything the site needs — text, images, video, styling — lives inside this one folder.

## Adding a new blog post

1. Go to the `src/blog/` folder.
2. Copy an existing post file (e.g. `managing-probation-periods-use-caution.md`) and rename it to match your new post's title, using dashes instead of spaces (e.g. `my-new-post-title.md`).
3. Open it and change the top section (between the `---` lines) — the title and date:

   ```
   ---
   layout: layouts/post.njk
   title: "My New Post Title"
   date: 2026-09-23
   tags: post
   ---
   ```

4. Write the post underneath in plain text. Leave a blank line between paragraphs. For a bold word, wrap it like `**this**`. For a link, write `[link text](/contact/)`.
5. Save, then push the change to GitHub (see below). It'll appear on the Blog page automatically — no need to edit any index or list yourself.

## Adding a new page

Same idea — copy one of the existing top-level files (e.g. `about.md`), rename it, change the front matter and title, write the content. If you want it in the main navigation menu, add a line for it in `src/_includes/partials/nav.njk`.

## Images and video

Drop new image or video files into `src/img/` or `src/video/`, then reference them in your page/post like:

```
![A description of the image](/img/your-file-name.jpg)
```

## Pushing changes to GitHub

Once you've got a GitHub account and this repo is set up there (Claude can walk you through that), the usual flow is:

1. Save your file changes.
2. Commit and push them (via GitHub Desktop, VS Code, or the command line — whichever you're most comfortable with).
3. Wait a minute or two — GitHub Pages rebuilds the site and your change goes live.

## Previewing changes before they go live

If you want to see a change before pushing it, you'll need Node.js installed, then from this folder run:

```
npm install
npm run serve
```

This opens a local preview in your browser that updates as you edit.

## Things still to sort out (see the project plan for full detail)

- **Contact form**: the form on the Contact page needs a free Formspree account — sign up at formspree.io, create a form, and swap the placeholder ID in `src/contact.njk` for your real one. Without this, the form won't actually send anywhere yet.
- **Domain**: coasthr.com.au needs to be pointed at GitHub Pages once the GitHub repo exists.
- **Blog post images**: four of the five blog posts don't have dedicated photos yet — let me know when you've got them.
- **Apprentice Registration page**: currently a placeholder — needs real copy from you (see the note on that page).
- **Privacy Policy**: rewritten to match how this new site actually works, but worth a proper read-through before it goes live.
