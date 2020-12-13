// config used by server side only
const dbHost = process.env.DB_HOST || 'mystore.dcksg.mongodb.net';
const dbPort = process.env.DB_PORT || '';
const dbName = process.env.DB_NAME || 'shop';
const dbUser = process.env.DB_USER || 'kav17';
const dbPass = process.env.DB_PASS || 'qwert147';
const dbCred =
	dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';

const dbUrl =
	process.env.DB_URL || `mongodb+srv://${dbCred}${dbHost}:${dbPort}/${dbName}`;

module.exports = {
	// used by Store (server side)
	apiBaseUrl: `https://storeexpres.herokuapp.com/api/v1`,

	// used by Store (server and client side)
	ajaxBaseUrl: `https://storeexpres.herokuapp.com/ajax`,

	// Access-Control-Allow-Origin
	storeBaseUrl: `https://storeexpres.herokuapp.com`,

	// used by API
	adminLoginUrl: '/admin/login',

	apiListenPort: 3001,
	storeListenPort: 3000,

	// used by API
	mongodbServerUrl: dbUrl,

	// your shop smtp settings
	smtpServer: {
		host: '',
		port: 465,
		secure: true,
		user: '',
		pass: '',
		fromName: 'Cezerin',
		fromAddress: 'vam@test.com'
	},
	// key to sign tokens
	jwtSecretKey: 'qwert',

	// key to sign store cookies
	cookieSecretKey: 'qwertqwert',

	// path to uploads
	categoriesUploadPath: 'public/content/images/categories',
	productsUploadPath: 'public/content/images/products',
	filesUploadPath: 'public/content',
	themeAssetsUploadPath: 'theme/assets/images',

	// url to uploads
	categoriesUploadUrl: '/images/categories',
	productsUploadUrl: '/images/products',
	filesUploadUrl: '',
	themeAssetsUploadUrl: '/assets/images',

	// store UI language
	language: 'en',

	// used by API
	orderStartNumber: 1000,

	// cost factor, controls how much time is needed to calculate a single BCrypt hash
	// for production: recommended salRounds > 12
	saltRounds: process.env.SALT_ROUNDS || 12,

	developerMode: true
};
