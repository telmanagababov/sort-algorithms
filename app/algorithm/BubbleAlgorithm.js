class BubbleAlgorithm {
    constructor() {
        this.type = "Bubble";
    }

    sort (data) {
        let len = data.length;
        for(let i = 0, itemPrev = 0; i < len; i++) {
            for(let j = i+1, itemNext = 0; j < len; j++) {
                itemPrev = data[i];
                itemNext = data[j];
                if(itemPrev > itemNext) {
                    data[j] = itemPrev;
                    data[i] = itemNext;
                }
            }
        }
        return data;
    }
}