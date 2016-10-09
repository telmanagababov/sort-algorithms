const algorithmsFactory = (() => {

    const algorithms = {
        "algorithm-bubble": new BubbleAlgorithm(),
        "algorithm-insertion": new InsertionAlgorithm(),
        "algorithm-selection": new SelectionAlgorithm(),
        "algorithm-merge": new MergeAlgorithm()
    };

    function getAlgorithm (type) {
        return algorithms[type];
    }

    return {
        getAlgorithm: getAlgorithm
    }
})();