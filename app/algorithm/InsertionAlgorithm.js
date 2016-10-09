class InsertionAlgorithm {
    constructor() {
        this.type = "Insertion";
    }

    sort (data) {
        let len = data.length;
        for(let i = 1, j = 0, currentValue = 0; i < len; i++) {
            currentValue = data[i];
            j = i - 1;

            while( j >= 0 && currentValue < data[j]) {
                data[j+1] = data[j];
                j--;
            }

            data[j+1] = currentValue;
        }
        return data;
    }
}