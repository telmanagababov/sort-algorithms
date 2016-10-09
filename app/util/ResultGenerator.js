const resultGenerator = (() => {

    function getResult (data, algorithm) {
        let algorithmView = new AlgorithmView();
        let startTime = performance.now(),
            sortedData = algorithm.sort(data),
            elapsedTime = performance.now() - startTime;
        algorithmView.setName(algorithm.type);
        algorithmView.setData(sortedData);
        algorithmView.setTime(elapsedTime);
        return algorithmView.getView();
    }

    return {
        getResult: getResult
    }
})();