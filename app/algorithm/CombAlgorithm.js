class CombAlgorithm {
    constructor() {
        this._SHRINK_RATIO = 1.3;
        this.type = "Comb";
    }

    sort (data) {
        let len = data.length,
            gap = len,
            isSorted = false;

        while(isSorted === false) {
            gap = Math.floor(gap / this._SHRINK_RATIO);

            if(gap > 1) {
                isSorted = false;
            } else {
                isSorted = true;
                gap = 1;
            }

            for(let i = 0, currentValue = 0, gapValue = 0; i < len  - gap; i++) {
                currentValue = data[i];
                gapValue = data[i + gap];
                if(currentValue > gapValue) {
                    data[i] = gapValue;
                    data[i + gap] = currentValue;
                    isSorted = false;
                }
            }
        }
        return data;
    }
}