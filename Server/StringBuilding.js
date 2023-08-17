module.exports= function stringBuilding(arr, type){
    let stringReq='' 
    if(arr!==null && Array.isArray(arr) && arr.length!=0  ){
        arr.forEach((item, index, arr)=>{
            
          stringReq += ` ${type} = '${item}'`;
          if(index!= arr.length-1){ // parnoe
            stringReq += ' OR';
          }
        })
        console.log(stringReq)
    }else{
        stringReq= ` ${type} = '${arr}'`;
    }
return stringReq;
}