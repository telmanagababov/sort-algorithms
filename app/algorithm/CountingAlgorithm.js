class CountingAlgorithm {
    constructor() {
        this.type = "Counting";
    }

    sort (data) {
        let count = [],
            result = [];

        for(let i = 0, currentValue = 0, len = data.length; i < len; i++) {
            currentValue = data[i];
            count[currentValue] ? count[currentValue]++ : count[currentValue] = 1;
        }

        for(let i = 0, currentCount = 0, total = 0, len = count.length; i < len; i++) {
            currentCount = count[i] ? count[i] : 0;
            count[i] = total;
            total += currentCount;
        }

        for(let i = 0, currentValue = 0, len = data.length; i < len; i++) {
            currentValue = data[i];
            result[count[currentValue]] = currentValue;
            count[currentValue] ++;
        }

        return result;
    }
}