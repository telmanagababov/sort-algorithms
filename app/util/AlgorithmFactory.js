const algorithmsFactory = (() => {

    const algorithms = {
        "algorithm-bubble": new BubbleAlgorithm()
    };

    function getAlgorithm (type) {
        return algorithms[type];
    }

    return {
        getAlgorithm: getAlgorithm
    }
})();