// Declare and initialize the array
var arr = [5, 8, 6, 9, 3, 7, 4, 1, 2];

// Get the HTML elements
var container = document.getElementById("container");
var output = document.getElementById("output");

// Create a function to display the array as bars
function displayArray() {
  // Clear the container
  container.innerHTML = "";
  // Loop through the array
  for (var i = 0; i < arr.length; i++) {
    // Create a div element for each array element
    var bar = document.createElement("div"); // Set the class, height, and text of the bar
    bar.className = "bar";
    bar.style.height = arr[i] * 50 + "px";
    bar.textContent = arr[i]; // Append the bar to the container
    container.appendChild(bar);
  }
}

// Create a function to swap two array elements
function swap(i, j) {
  // Swap the values
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  // Display the array after swapping
  displayArray();
  // Display the output message
  // output.textContent = "Swapped " + arr[i] + " and " + arr[j];
}

function highlight(i, j, color) {
  // Get the bars corresponding to the array elements
  var bar1 = container.children[i];
  var bar2 = container.children[j];
  // Set the background color of the bars
  bar1.style.backgroundColor = color;
  bar2.style.backgroundColor = color;
}

const selectionController = new AbortController();
const bubbleController = new AbortController();

const selectionSignal = selectionController.signal;
const bubbleSignal = bubbleController.signal;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let quit = false;
let sorted = false;
async function selectionSort(selectionSignal) {
   quit = false;

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      // Check if the operation has been aborted
      if (quit) {
        quit = false;
        console.log("Selection sort aborted");
        return;
      }

      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    highlight(i, min, "#f0f0f0");

    await delay(1000);
    swap(i, min); // Wait for one second
    await delay(1000);
    highlight(i, i, "#00a0ff");
  }
  sorted = true;
  for (let i = 0; i < arr.length; i++) {
    highlight(i, i, "white");
    await delay(200);
    highlight(i, i, "#00a0ff");
    // await delay(10);
  }
  s_sort.disabled = false;
  b_sort.disabled = false;
}

async function bubbleSort() {
   quit = false;
  let done;

  for (let i = 0; i < arr.length; i++) {
    done = true;

    for (let j = 1; j < arr.length - i; j++) {
      // Check if the operation has been aborted
      if (quit) {
        quit = false;
        console.log("bubble sort aborted");
        return;
      }

      if (arr[j] < arr[j - 1]) {
        highlight(j - 1, j, "#f0f0f0");
        await delay(1000);
        swap(j, j - 1); // Wait for one second
        await delay(1000);

        done = false;
      } else {
        highlight(j - 1, j, "red");
        await delay(500);
        highlight(j - 1, j, "#00a0ff");
        await delay(500);
      }
    }
    if (done) break;
  }
  for (let i = 0; i < arr.length; i++) {
    highlight(i, i, "white");
    await delay(200);
    highlight(i, i, "#00a0ff");
    // await delay(10);
  }
  s_sort.disabled = false;
  b_sort.disabled = false;
}

// randomize the array order
function shuffle(arr) {
  let currentIndex = arr.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}

// Display the initial array
displayArray();
//IMPORTANT::
let s_sort = document.getElementById("selection");
let b_sort = document.getElementById("bubble");
// Sort the array
s_sort.addEventListener("click", () => {
  selectionSort();
  s_sort.disabled = true;
  b_sort.disabled = true;
});

b_sort.addEventListener("click", () => {
  bubbleSort();
  b_sort.disabled = true;
  s_sort.disabled = true;
});

// if reset clicked  the sort is stopped and the array git a new random order
let reset = document.getElementById("re");
reset.addEventListener("click", () => {
  shuffle(arr);
  displayArray();
  s_sort.disabled = false;
  b_sort.disabled = false;
  quit = true;
});
