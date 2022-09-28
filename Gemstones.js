function gemstones(arr) {
    let finalArr = [], 
       map = {},
       count = 0;
       
    for(let i = 0; i < arr.length; i++) {
        finalArr.push(... new Set(arr[i]));
    }
    
    for(let i = 0; i < finalArr.length; i++) {
        if(!map[finalArr[i]]) map[finalArr[i]] = 0;
        map[finalArr[i]]++;
    }
    
    for(let value of Object.values(map)) {
        if(value == arr.length) count++;
    }
    
    return count;
}