module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "html",
  ]);

  eleventyConfig.addPassthroughCopy("input/script.js");
  eleventyConfig.addPassthroughCopy("input/screen.css");

  return {
    dir: {
      input: "./input"
    }
  }
};
