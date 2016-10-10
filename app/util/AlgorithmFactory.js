const algorithmsFactory = (() => {

    const algorithms = {
        "algorithm-bubble": new BubbleAlgorithm(),
        "algorithm-insertion": new InsertionAlgorithm(),
        "algorithm-selection": new SelectionAlgorithm(),
        "algorithm-merge": new MergeAlgorithm(),
        "algorithm-heap": new HeapAlgorithm(),
        "algorithm-quick": new QuickAlgorithm()
    };

    function getAlgorithm (type) {
        return algorithms[type];
    }

    return {
        getAlgorithm: getAlgorithm
    }
})();