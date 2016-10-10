class QuickAlgorithm {
    constructor() {
        this.type = "Quick";
    }

    sort (data) {
        this._quickSort(data, 0, data.length);
        return data;
    }

    _quickSort (data, min, max) {
        if(min < max) {
            let partIndex = this._partition(data, min, max);
            this._quickSort(data, min, partIndex);
            this._quickSort(data, partIndex + 1, max);
        }
    }

    _partition (data, min, max) {
        let pivot = this._getPivot(data, min, max),
            i = min - 1,
            j = max + 1,
            swapItem = 0;
        while(true) {
            do {
                i++;
            } while(data[i] < pivot);
            do {
                j--;
            } while(data[j] > pivot);

            if(i >= j) {
                return j;
            }
            swapItem = data[i];
            data[i] = data[j];
            data[j] = swapItem;
        }
    }

    _getPivot (data, min, max) {
        let minItem = data[min],
            middleItem = data[parseInt((min + max)/2)],
            maxItem = data[max];
        return minItem < middleItem
            ? (middleItem < maxItem ? middleItem : (minItem < maxItem ? maxItem : minItem))
            : (middleItem > maxItem ? middleItem : (minItem > maxItem ? maxItem : minItem));
    }
}