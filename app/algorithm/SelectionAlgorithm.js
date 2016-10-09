class SelectionAlgorithm {
    constructor() {
        this.type = "Selection";
    }

    sort (data) {
        let len = data.length;
        for(let i = 0, iMin = 0, minItem = 0; i < len; i ++) {
            iMin = i;

            for(let j = i + 1; j < len; j++) {
                if(data[j] < data[iMin]) {
                    iMin = j;
                }
            }

            if(iMin !== i) {
                minItem = data[iMin];
                data[iMin] = data[i];
                data[i] = minItem;
            }
        }
        return data;
    }
}