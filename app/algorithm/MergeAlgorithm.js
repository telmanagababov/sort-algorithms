class MergeAlgorithm {
    constructor() {
        this.type = "Merge";
    }

    sort (data) {
        this._splitMerge(data.slice(), 0, data.length, data);
        return data;
    }

    _splitMerge(workData, iStart, iEnd, data) {
        if(iEnd - iStart > 1) {
            let iMiddle = parseInt((iStart + iEnd) / 2);
            this._splitMerge(data, iStart, iMiddle, workData);
            this._splitMerge(data, iMiddle, iEnd, workData);
            this._merge(workData, iStart, iMiddle, iEnd, data);
        }
    }

    _merge(data, iStart, iMiddle, iEnd, workData) {
        let iLeft = iStart,
            iRight = iMiddle;
        for(let i = iStart; i < iEnd; i++) {
            if(iLeft < iMiddle && (iRight >= iEnd || data[iLeft] <= data[iRight])) {
                workData[i] = data[iLeft];
                iLeft++;
            } else {
                workData[i] = data[iRight];
                iRight++;
            }
        }
    }
}