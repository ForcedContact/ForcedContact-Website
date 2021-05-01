const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(process.cwd(),'docs','.nojekyll'),'', (err) => {
	if (err) throw err;
	console.log(`Added .nojekyll to ${path.join(process.cwd(),'docs')} finished`);
});