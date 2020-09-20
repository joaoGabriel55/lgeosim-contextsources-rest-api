const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, '../../../static');

const getAllContextSources = () => {
    try {
        let files = [];
        function ThroughDirectory(Directory) {
            fs.readdirSync(Directory).forEach(file => {
                const Absolute = path.join(Directory, file);
                if (fs.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
                else {
                    const path = Absolute.split('/');
                    const fileName = path[path.length - 1]
                    if (fileName !== '.DS_Store')
                        return files.push(fileName)
                }
            });
        }
        ThroughDirectory(directoryPath);
        return files
    } catch (err) {
        console.log(err);
    }
}

const getContextSourceByName = (name) => {
    try {
        let contextSource = null
        function ThroughDirectory(Directory) {
            fs.readdirSync(Directory).forEach(file => {
                const Absolute = path.join(Directory, file);
                if (fs.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
                else {
                    const path = Absolute.split('/');
                    const fileName = path[path.length - 1]
                    if (fileName.includes(name)) {
                        const content = fs.readFileSync(Absolute, 'utf8')
                        contextSource = JSON.parse(content)
                    }
                }
            });
        }
        ThroughDirectory(directoryPath);
        console.log(contextSource)
        return contextSource
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getAllContextSources, getContextSourceByName }