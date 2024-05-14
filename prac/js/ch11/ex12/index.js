class FileSizeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FileSizeError';
    }
}

function importFile(file){
    console.log("import start,,,")
    if(file>100){
        throw new FileSizeError("size error!")
    }else{
        console.log("succcess import!")
    }
}
importFile(100)
importFile(125);