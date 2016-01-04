@font-face {
	font-family: "<%= fontName %>";
	src: url('<%= fontPath %><%= fontName %>.eot');
	src: url('<%= fontPath %><%= fontName %>.eot?#iefix') format('eot'),
		url('<%= fontPath %><%= fontName %>.woff') format('woff'),
		url('<%= fontPath %><%= fontName %>.ttf') format('truetype'),
		url('<%= fontPath %><%= fontName %>.svg#<%= fontName %>') format('svg');
}

.<%= cssClass%>-base-pseudo {
	font-family: "<%= fontName %>";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	font-style: normal;
	font-variant: normal;
	font-weight: normal;
	// speak: none; // only necessary if not using the private unicode range (firstGlyph option)
	text-decoration: none;
	text-transform: none;
}

.<%= cssClass%>-char(@filename) {
	<% _.each(glyphs, function(glyph) { %>@<%= glyph.fileName %>: "\<%= glyph.codePoint %>";
	<% }); %>
	content: @@filename;
}

.<%= cssClass%>(@filename) {
	&:extend(.<%= cssClass%>-base-pseudo);
	.<%= cssClass%>-char(@filename);
}

<% _.each(glyphs, function(glyph) { %>.<%= cssClass%>-<%= glyph.fileName %> {
	.<%= cssClass%>(<%= glyph.fileName %>);
}
<% }); %>