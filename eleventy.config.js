export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("src/robots.txt");

	eleventyConfig.addFilter("year", () => new Date().getFullYear());

	eleventyConfig.addFilter("relatedBooks", (book, allBooks, limit = 3) => {
		return allBooks
			.filter((other) => other.slug !== book.slug && other.tags.some((tag) => book.tags.includes(tag)))
			.slice(0, limit);
	});

	eleventyConfig.addFilter("absoluteUrl", (url, base) => new URL(url, base).toString());

	return {
		dir: {
			input: "src",
			output: "_site",
			includes: "_includes",
			data: "_data",
		},
		pathPrefix: "/kotlin-books/",
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
	};
}
