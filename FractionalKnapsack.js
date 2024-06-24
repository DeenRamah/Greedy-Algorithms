class Item {
    constructor(public value: number, public weight: number) {}

    get ratio(): number {
        return this.value / this.weight;
    }
}

function fractionalKnapsack(items: Item[], capacity: number): number {
    // Sort items based on value-to-weight ratio in descending order
    items.sort((a, b) => b.ratio - a.ratio);
    
    let totalValue = 0;
    for (const item of items) {
        if (capacity >= item.weight) {
            // Take the whole item
            capacity -= item.weight;
            totalValue += item.value;
        } else {
            // Take a fraction of the item
            totalValue += item.value * (capacity / item.weight);
            break;
        }
    }
    
    return totalValue;
}

// Example usage:
const items = [new Item(60, 10), new Item(100, 20), new Item(120, 30)];
const capacity = 50;
const maxValue = fractionalKnapsack(items, capacity);
console.log("Maximum value in knapsack:", maxValue);
