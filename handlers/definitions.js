const path = require('path');
const fs = require('fs');

class Definitions {
    constructor(definitionsFolder = 'definitions') {
        this.definitionsFolderPath = path.join(__dirname, `../${definitionsFolder}`)

        this.definitions = {}
        this.loadIntoObject(this.definitionsFolderPath, '.json', this.definitions)
    }

    loadIntoObject(folderPath, extension, object) {
        const instance = this
        var files = fs.readdirSync(folderPath, { withFileTypes: true })
        files.forEach(function (fileInfo) {
            if (!fileInfo.isFile()) {
                if (typeof object[fileInfo.name] === 'undefined') {
                    object[fileInfo.name] = [] 
                }

                instance.loadIntoObject(path.join(folderPath, fileInfo.name), extension, object[fileInfo.name])
                } else if (fileInfo.name.endsWith(extension)) {
                var filePath = path.join(folderPath, fileInfo.name)
                var fileContent = fs.readFileSync(filePath, 'utf-8')
            
                if (extension === '.json') {
                    object[fileInfo.name.replace(extension, '')] = JSON.parse(fileContent)
                }
            }
        })
    }
    
    getDefinitions(definitionsName) {
      if (typeof this.definitions === "undefined" || typeof this.definitions[definitionsName] === "undefined") {
        return null
      }
    
      return this.definitions[definitionsName]
    }
}

module.exports = new Definitions()