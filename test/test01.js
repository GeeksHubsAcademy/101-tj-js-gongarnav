function clasificaElementos(index) {
    
    let positiveArr = []
    let negativeArr = []
    let zeroArr= []
    
    index.forEach((item) => {
        if (item < 0) 
            negativeArr.push(item)
        else if(item === 0)
            zeroArr.push(item)
        else 
            positiveArr.push(item)
    })

    return [(positiveArr.length/index.length).toFixed(4), (negativeArr.length/index.length).toFixed(4), (zeroArr.length/index.length).toFixed(4)]
}

module.exports = clasificaElementos;
