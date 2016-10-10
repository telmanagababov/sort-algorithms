class ShellAlgorithm {
    constructor() {
        this.type = "Shell";
    }

    sort (data) {
        let len = data.length,
            gaps = this._getGaps(len);
        for(let i = 0, gap = 0; i < gaps.length; i++) {
            this._insertionSortGap(data, gap, len);
        }
        return data;
    }

    _insertionSortGap (data, gap, len) {
        for(let i = gap, j = 0, currentValue = 0; i < len; i++) {
            currentValue = data[i];
            j = i - 1;
            while( j >= 0 && currentValue < data[j]) {
                data[j+1] = data[j];
                j--;
            }
            data[j+1] = currentValue;
        }
    }

    _getGaps (size) {
        let gaps = [],
            gapValue = size;
        do{
            gapValue = Math.ceil(gapValue / 2);
            gaps.push(gapValue);
        } while (gapValue > 1);
        return gaps;
    }
}