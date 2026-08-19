const PATH_PREFIX = "/kotlin-books";

function bookUrl(slug, origin) {
	return new URL(`${PATH_PREFIX}/books/${slug}/`, origin).toString();
}

function prefixedAsset(path, origin) {
	return new URL(`${PATH_PREFIX}${path}`, origin).toString();
}

export default {
	schema: (data) => {
		if (data.book) {
			const book = data.book;
			return {
				"@context": "https://schema.org",
				"@type": "Book",
				name: book.title,
				author: book.authors.map((name) => ({ "@type": "Person", name })),
				isbn: book.isbn13,
				datePublished: String(book.year),
				publisher: { "@type": "Organization", name: book.publisher },
				image: prefixedAsset(book.coverImage, data.site.origin),
				url: bookUrl(book.slug, data.site.origin),
			};
		}

		if (data.page.inputPath && data.page.inputPath.endsWith("src/index.njk")) {
			return {
				"@context": "https://schema.org",
				"@type": "ItemList",
				name: "Best Kotlin Books",
				itemListElement: data.books.map((b, i) => ({
					"@type": "ListItem",
					position: i + 1,
					item: {
						"@type": "Book",
						name: b.title,
						url: bookUrl(b.slug, data.site.origin),
					},
				})),
			};
		}

		return undefined;
	},
};
