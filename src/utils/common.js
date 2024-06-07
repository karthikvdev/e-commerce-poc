export const baseURL = "https://fakestoreapi.com/"

export const increaseQuantityIfExist = (arr, newItem) => {
    const parsedArr = JSON.parse(JSON.stringify(arr))
    let found = false;
    parsedArr?.forEach(item => {
        if (item?.id === newItem?.id) {
            item.quantity = (item?.quantity || 0) + 1;
            found = true;
        }
    });
    if (!found) {
        parsedArr.push({ ...newItem, quantity: 1 });
    }
    return parsedArr;
}

export const removeQuantityIfExist = (arr, newItem) => {
    const parsedArr = JSON.parse(JSON.stringify(arr))
    parsedArr?.forEach((item, index) => {
        if (item?.id === newItem?.id) {
            if (item.quantity <= 1) {
                parsedArr.splice(index, 1);
            }
            else {
                item.quantity = item.quantity - 1;
            }
        }
    });
    return parsedArr;
}

export const getTotalQuantity = (arr) => {
    const parsedArr = JSON.parse(JSON.stringify(arr));
    return parsedArr.reduce((total, item) => total + item.quantity, 0);
}

export const scrollTop = (val) => {
    window.scrollTo({
        top: val || 0,
        behavior: "smooth"
    })
}
