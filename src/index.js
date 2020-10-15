module.exports = function check(str, bracketsConfig) {
    let array = [],
        st = str;
    
    bracketsConfig = bracketsConfig.flat().join('');

    for ( let j = 0; j <= bracketsConfig.length; j += 2) {
        console.log(array.push(bracketsConfig.slice(j, j + 2)));
    }
    
    for (let i = 0; i <= str.length; i++) {
        for (let j = 0; j < array.length; j++) {
            st = st.replace(array[j], '');
        }
    }
    return (st === '') ? true : false;
}
