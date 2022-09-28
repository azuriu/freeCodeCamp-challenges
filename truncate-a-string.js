function truncateString(str, num) {
  
     if (str.length > num) {
      let res = str.substring(0, num) + "...";
      return res;
       
    }
    return str;
}
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))