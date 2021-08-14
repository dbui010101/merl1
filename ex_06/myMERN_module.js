
module.exports.create=function(name){
    const fs = require('fs');
    try {
        fs.open(name, 'w', function (err, file) {
            if (err){
                console.error(`Create ${name} : KO`);
                return;
            }else{
                console.log(`Create ${name}`);
            }
            });
    } catch (err) {
    console.error(`Create ${name} : KO`);
    return;
    }
}

module.exports.read=function(name){
    const fs = require('fs');
    try {
        fs.readFile(name, 'utf8', function (err, data) {
            const content=data;
            if (err){
                console.error(`Read ${name} : KO`);
                return;
            }else{
                console.log(content);
            }
            });
    } catch (err) {
    console.error(`Read ${name} : KO`);
    return;
    }
}


module.exports.delete=function(name){
    const fs = require('fs');
    try {
        fs.unlink(name, function (err) {
            if (err){
                console.error(`Delete ${name} : KO`);
                return;
            }else{
                console.log(`Delete ${name} : OK`);
            }
            });
    } catch (err) {
    console.error(`Delete ${name} : KO`);
    return;
    }
}
module.exports.update=function(name,content){
    const fs = require('fs');
    try {
        const path = `./${name}`
        fs.access(path, fs.F_OK, (err) => {
            if (err) {
                console.error(`Update ${name} : KO`);
              return
            }
            fs.writeFile(name,content, function (err) {
                if (err){ 
                    console.error(`Update ${name} : KO`);
                    return;
                }else{
                    console.log(`Update ${name} : OK`);
                }
            });
        })
    } catch (err) {
    console.error(`Update ${name} : KO`);
    return;
    }
}
