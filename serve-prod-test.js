/*******************************************************

 * ⚠️ This server is for testing production builds in a

 * development environment. It has not been checked for

 * security. Please do not use in production!

 *****************************************************/

 const path = require('path');

 const express = require('express');
 
 const port = 8080;
 
 const rootDir = path.join(__dirname, 'dist/olho-de-boi-admin');
 
 const locales = ['pt', 'en', 'es', 'de', 'fr'];
 
 const defaultLocale = 'pt';
 
 const server = express();
 
 // Serve static files (HTML, CSS, etc.)
 
 server.use(express.static(rootDir));
 
 // Always serve the index.html file in a locale
 
 // build's directory e.g. /en-CA/foo will return
 
 // /en-CA/index.html. This allows Angular to handle
 
 // the /foo route itself.
 
 locales.forEach((locale) => {
 
   server.get(`/${locale}/*`, (req, res) => {
 
	 res.sendFile(
 
	   path.resolve(rootDir, locale, 'index.html')
 
	 );
 
   });
 
 });
 
 // Redirect / to /en-CA
 
 server.get('/', (req, res) =>
 
   res.redirect(`/${defaultLocale}`)
 
 );
 
 server.listen(port, () =>
 
   console.log(`App running at port ${port}…`)
 
 );