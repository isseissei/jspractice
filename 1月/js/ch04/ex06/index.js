export let resize1 =(params) =>{

    let maxWidth = params.maxWidth ||  600;
    let maxHeight = params.maxHeight || 480;
    console.log({ maxWidth, maxHeight });
}

export let resize2 =(params) =>{
    let maxWidth = params.maxWidth ?? 600;
    let maxHeight = params.maxHeight ?? 480;
    console.log({ maxWidth, maxHeight });
}
resize1({maxWidth: 99999, maxHeight:undefined});//{ maxWidth: 99999, maxHeight: 480 }
resize2({maxWidth:undefined, maxHeight:222});//{ maxWidth: 600, maxHeight: 222 }