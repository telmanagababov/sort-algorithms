class HeapAlgorithm {
    constructor() {
        this.type = "Heap";
    }

    sort (data) {
        this._buildHeap(data);
        this._sortHeap(data);
        return data;
    }

    _buildHeap (data) {
        let size = data.length;
        for(let i = size/2 - 1; i >= 0; i-- ) {
            this._heapify(data, size, i);
        }
    }

    _sortHeap (data) {
        for(let i = data.length - 1, currentRoot = 0; i >= 0; i--) {
            currentRoot = data[0];
            data[0] = data[i];
            data[i] = currentRoot;
            this._heapify(data, i, 0);
        }
    }

    _heapify (data, size, rootIndex) {
        let maxIndex = rootIndex,
            left = rootIndex * 2 + 1,
            right = rootIndex * 2 + 2;
        if(left  < size && data[left] > data[maxIndex]) {
            maxIndex = left;
        }
        if(right  < size && data[right] > data[maxIndex]) {
            maxIndex = right;
        }
        if(maxIndex !== rootIndex) {
            let maxItem = data[maxIndex];
            data[maxIndex] = data[rootIndex];
            data[rootIndex] = maxItem;
            this._heapify(data, size, maxIndex);
        }
    }
}