const algorithmsFactory = (() => {

    const algorithms = {
        "algorithm-bubble": new BubbleAlgorithm(),
        "algorithm-insertion": new InsertionAlgorithm(),
        "algorithm-selection": new SelectionAlgorithm(),
        "algorithm-merge": new MergeAlgorithm(),
        "algorithm-heap": new HeapAlgorithm(),
        "algorithm-quick": new QuickAlgorithm(),
        "algorithm-shell": new ShellAlgorithm(),
        "algorithm-comb": new CombAlgorithm(),
        "algorithm-counting": new CountingAlgorithm(),
        "algorithm-bucket": new BucketAlgorithm(),
        "algorithm-radix": new RadixAlgorithm()
    };

    function getAlgorithm (type) {
        return algorithms[type];
    }

    return {
        getAlgorithm: getAlgorithm
    }
})();