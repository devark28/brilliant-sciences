export const classList = (...classes) => {
    let list = new String();
    classes.forEach(cl => {
        list += " " + cl;
    });
    list = list.trim();
    return list;
}

export const contains = (array, value) => {
    let contained = false;
    for (let i = 0; i < array.length; i++) {
        const ele = array[i];
        if(ele == value){
            console.log(ele + " == " + value, true);
            contained = true;
            break;
        }
    }
    return contained;
}