const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    // Human-readable date filter, e.g. {{ date | readableDate }} -> "10 June 2025"
    eleventyConfig.addFilter("readableDate", (dateObj) => {
          return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("d LLLL yyyy");
    });

    // Copy static assets straight through to the output folder
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/video");

    // Blog posts collection, newest first
    eleventyConfig.addCollection("posts", (collectionApi) => {
          return collectionApi.getFilteredByTag("post").sort((a, b) => b.date - a.date);
    });

    return {
          dir: {
                  input: "src",
                  output: "_site",
                  includes: "_includes",
          },
          htmlTemplateEngine: "njk",
          markdownTemplateEngine: "njk",
    };
};
