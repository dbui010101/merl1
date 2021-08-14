
module.exports.create=function(name){
    
    return new Promise(function(resolve, reject) {
    try {
        const fs = require('fs');
        fs.open(name, 'w', function (err, file) {
            
            if (err)return reject(`Create ${name} : KO`);
            resolve(`Create ${name}`);
        });     
    } catch (err) {
    console.error(`Create ${name} : KO`);
    return;
    }
    });
}

module.exports.read=function(name){
   
    return new Promise(function(resolve, reject) {
    try {
        const fs = require('fs');
        fs.readFile(name, 'utf8', function (err, data) {
            const content=data;
            if (err)return reject(`Read ${name} : KO`);
            resolve(content);
        });
    } catch (err) {
    console.error(`Read ${name} : KO`);
    return;
    }
    });
}


module.exports.delete=function(name){
    return new Promise(function(resolve, reject) {
    try {
        const fs = require('fs');
        fs.unlink(name, function (err) {
            if (err) return reject(`Delete ${name} : KO`);
                resolve(`Delete ${name} : OK`);
        });
    } catch (err) {
    console.error(`Delete ${name} : KO`);
    return;
    }
    });
}
module.exports.update=function(name,content){
    return new Promise(function(resolve, reject) {
    try {
        const fs = require('fs');
        const path = `./${name}`
        fs.access(path, fs.F_OK, (err) => {
            if (err) return reject(`Update ${name} : KO`);
            fs.writeFile(name,content, function (err) {
                if (err) return reject(`Update ${name} : KO`);
                resolve(`Update ${name} : OK`);
            });
        })
    } catch (err) {
    console.error(`Update ${name} : KO`);
    return;
    }
    });
}
