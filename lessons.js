/* =======================================================================
   DEPRECATED — no longer used.
   =======================================================================
   The curriculum used to live in this file as one big hardcoded JS array.
   It's now split into individual markdown files, one per lesson and one
   per exercise, under the curriculum/ folder:

     curriculum/manifest.json      <- units + lesson order
     curriculum/lessons/*.md       <- one file per lesson
     curriculum/exercises/*.md     <- one file per exercise

   index.html now loads curriculum-loader.js instead of this file, which
   fetches and parses everything under curriculum/ at page load.

   Why: adding a new lesson or exercise no longer means editing a giant
   JS file — just drop a new .md file into curriculum/lessons/ or
   curriculum/exercises/ and add its id to the right place in
   curriculum/manifest.json (or a lesson's "exercises" list).

   See SETUP_GUIDE.md for the full authoring guide and templates.

   This file is kept only for historical reference — it is not loaded by
   index.html and can be safely ignored. (index_v1.html, the original
   single-file prototype, is unaffected by this change.)
   ======================================================================= */
