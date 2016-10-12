class RadixAlgorithm {
    constructor() {
        this.type = "Radix";
    }

    sort (data) {
        let checkDepth = this._getCheckDepth(data);
        for(let i = 0; i < checkDepth; i++) {
            this._sortByDigit(data, i);
        }
        return data;
    }

    _sortByDigit (data, digitIndex) {
        let len = data.length,
            comparisonMask = 1 << digitIndex,
            itemPosition = 0,
            buckets = [[], []];
        for(let i = 0, currentItem = 0; i < len; i++) {
            currentItem = data[i];
            if((currentItem & comparisonMask) === 0) {
                buckets[0].push(currentItem);
            } else {
                buckets[1].push(currentItem);
            }
        }
        for (let i = 0, currentBucket = []; i < 2; i++) {
            currentBucket = buckets[i];
            for(let j = 0, bucketLen = currentBucket.length; j < bucketLen; j++) {
                data[itemPosition] = currentBucket[j];
                itemPosition++;
            }
        }
    }

    _getCheckDepth (data) {
        return Math.max.apply(null, data.map(function(item) {
            return Math.ceil(Math.log(item)/Math.log(2));
        }));
    }
}