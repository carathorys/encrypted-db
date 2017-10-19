const path = require('path');
const fse = require('fs-extra');
const semver = require('semver');
const glob = require('glob');

function copyFile(file) {
  const buildPath = path.resolve(__dirname, '../dist/', path.basename(file));
  return new Promise(resolve => {
    fse.copy(file, buildPath, err => {
      if (err) throw err;
      resolve();
    });
  }).then(() => console.log(`Copied ${file} to ${buildPath}`));
}

function copyDocs(from, to) {
  const files = glob.sync('**/*.md', { cwd: from });
  const cmds = files.map(file => fse.copy(path.resolve(from, file), path.resolve(to, file)));
  return Promise.all(cmds);
}

function createPackageFile() {
  return new Promise(resolve => {
    fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  })
    .then(data => JSON.parse(data))
    .then(packageData => {
      packageData.version = semver.inc(packageData.version, 'patch');
      const minimalPackage = Object.assign({}, packageData, {
        main: './index.js',
        types: './index.d.ts',
        private: false,
      });

      return new Promise(resolve => {
        const buildPath = path.resolve(__dirname, '../dist/package.json');
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(buildPath, data, err => {
          if (err) throw err;
          console.log(`Created package.json in ${buildPath}`);

          const packageJsonPath = path.resolve(__dirname, '../package.json');
          const packageJsonData = JSON.stringify(packageData, null, 2);
          fse.writeFile(packageJsonPath, packageJsonData, err => {
            if (err) throw err;
            console.log(`Created package.json in ${packageJsonPath}`);
            resolve();
          });
        });
      });

    });
}

const files = ['README.md', 'CHANGELOG.md', 'LICENSE'];

Promise.all(files.map(file => copyFile(file)))
  .then(() => createPackageFile())
  //.then(() => copyDocs(path.resolve(__dirname, '../docs'), path.resolve(__dirname, '../dist/docs/')))
  ;
