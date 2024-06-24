class HuffmanNode {
    constructor(
        public char: string | null,
        public freq: number,
        public left: HuffmanNode | null = null,
        public right: HuffmanNode | null = null
    ) {}
}

function huffmanCoding(chars: string[], freqs: number[]): { [key: string]: string } {
    const nodes: HuffmanNode[] = chars.map((char, i) => new HuffmanNode(char, freqs[i]));
    
    while (nodes.length > 1) {
        // Sort nodes by frequency
        nodes.sort((a, b) => a.freq - b.freq);
        
        // Take two nodes with the smallest frequencies
        const left = nodes.shift()!;
        const right = nodes.shift()!;
        
        // Merge them into a new node
        const merged = new HuffmanNode(null, left.freq + right.freq, left, right);
        nodes.push(merged);
    }
    
    const root = nodes[0];
    const huffmanCodes: { [key: string]: string } = {};
    
    function generateCodes(node: HuffmanNode, currentCode: string): void {
        if (node.char !== null) {
            huffmanCodes[node.char] = currentCode;
            return;
        }
        if (node.left) generateCodes(node.left, currentCode + "0");
        if (node.right) generateCodes(node.right, currentCode + "1");
    }
    
    generateCodes(root, "");
    return huffmanCodes;
}

// Example usage:
const chars = ['a', 'b', 'c', 'd', 'e', 'f'];
const freqs = [5, 9, 12, 13, 16, 45];
const codes = huffmanCoding(chars, freqs);
console.log("Huffman Codes:", codes);
