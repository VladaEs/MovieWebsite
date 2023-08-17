module.exports= function DurationBuilding(arr, type){
    let stringReq='' 
    if(arr=='120'){
        stringReq = `${type}>= 120`;
    }
    else if(arr=='119'){
        stringReq = `${type}<= 119`;
    }
    else{
        stringReq = `${type}>= 0`;
    }
return stringReq;
}