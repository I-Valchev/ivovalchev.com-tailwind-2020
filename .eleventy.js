module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "html",
  ]);

  eleventyConfig.addPassthroughCopy("input/script.js");
  eleventyConfig.addPassthroughCopy("input/screen.css");
  eleventyConfig.addPassthroughCopy("input/images");
  return {
    dir: {
      input: "./input"
    }
  }
};
