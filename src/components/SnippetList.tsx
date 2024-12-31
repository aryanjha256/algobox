import { BiCopy, BiExpand } from "react-icons/bi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Modal from "./Modal";
import { useState } from "react";
import { MdDone } from "react-icons/md";
import { toast } from "sonner";

const snippets = [
  {
    name: "Hello World",
    description: "Prints Hello World",
    code: `console.log("Hello World");`,
  },
  {
    name: "Fibonacci",
    description: "Calculates the nth Fibonacci number",
    code: `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}`,
  },
  {
    name: "Bubble Sort",
    description: "Sorts an array of numbers in ascending order",
    code: `function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}`,
  },
  {
    name: "Quick Sort",
    description: "Sorts an array of numbers using the Quick Sort algorithm",
    code: `function quickSort(arr) {
  // Base case: arrays with 0 or 1 elements are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot (e.g., the last element)
  const pivot = arr[arr.length - 1];
  const left = []; // Elements smaller than pivot
  const right = []; // Elements greater than or equal to pivot

  // Partition the array
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort left and right, then combine with pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const unsortedArray = [8, 3, 5, 7, 2, 4, 1, 6];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]`,
  },
];

const SnippetList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      toast.success("Copied!");
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 px-8 md:px-20">
      {snippets.map((snippet, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg border-zinc-600 bg-zinc-700"
        >
          <div className="flex justify-between items-center">
            <p className="font-bold">{snippet.name}</p>
            <BiExpand className="cursor-pointer" onClick={openModal} />
          </div>
          <div className="mt-4 text-sm p-4 border-zinc-600 border rounded-md relative bg-zinc-800 h-44">
            <button
              className="absolute top-2 right-2 text-zinc-400 text-sm p-2 bg-zinc-700 rounded-md z-10"
              onClick={() => copyToClipboard(snippet.code)}
            >
              <BiCopy className="cursor-pointer" />
            </button>
            <SyntaxHighlighter
              language="javascript"
              style={nord}
              customStyle={{
                backgroundColor: "rgb(39 39 42)",
                padding: 0,
                overflow: "hidden",
                height: "100%",
                fontSize: "16px",
                fontWeight: "800",
                fontFamily: "JetBrains Mono Variable",
              }}
            >
              {snippet.code}
            </SyntaxHighlighter>
            <div className="absolute rounded-md bottom-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-zinc-800" />
            <div className="absolute rounded-md bottom-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-800" />
          </div>
        </div>
      ))}

      <Modal isOpen={isModalOpen} onClose={closeModal} heading="Hello World">
        <div className="mt-4 text-sm p-4 border-zinc-600 border rounded-md relative bg-zinc-800">
          <button
            className="absolute top-2 right-2 text-zinc-400 text-sm p-2 bg-zinc-700 rounded-md z-10"
            onClick={() => copyToClipboard(snippets[3].code)}
          >
            {copied ? (
              <MdDone className="text-green-600" />
            ) : (
              <BiCopy className="cursor-pointer" />
            )}
          </button>
          <SyntaxHighlighter
            language="javascript"
            style={nord}
            customStyle={{
              backgroundColor: "rgb(39 39 42)",
              height: "100%",
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "JetBrains Mono Variable",
            }}
            wrapLongLines={true}
            showLineNumbers={true}
          >
            {snippets[3].code}
          </SyntaxHighlighter>
        </div>
      </Modal>
    </div>
  );
};

export default SnippetList;
