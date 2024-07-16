# CS Project: Sorting Algorithms Visualizer
## Description
This project is a web page that visualizes two types of sorting algorithms, selection sort and bubble sort. It uses vertical blue bars of varying heights to represent the elements in the array, and numbers to label them. The buttons at the bottom allow the user to choose which algorithm to visualize, and to start or stop the animation. The project demonstrates an understanding of computer science concepts and skills in web programming.
in my project, I will visualize two major types of sorting algorithms

**Selection Sort** :
- Selection sort works by finding the smallest or largest element in the unsorted part of the array and swapping it with the first element of the unsorted part. It repeats this process until the entire array is sorted.
- To visualize how selection sort works, I created a web page that uses vertical blue bars of varying heights to represent the elements in the array and numbers to label them. The bars are not in numerical order; they appear to be in a random arrangement. Below the bars, there is a button that says “selection”, which starts the animation of the selection sort algorithm.
- As you can see, the algorithm starts by scanning the entire array and finding the smallest element, which is 1. It then swaps it with the first element of the unsorted part. The first element of the array is now sorted, and the unsorted part is reduced by one. The algorithm then repeats the same process for the remaining unsorted part, finding the smallest element, which is 2, and swapping it with the first element of the unsorted part. The second element of the array is now sorted, and the unsorted part is reduced by one. The algorithm continues this way until the entire array is sorted in ascending order.

**Bubble Sort**:
- Bubble sort works by comparing adjacent elements in the array and swapping them if they are out of order. It repeats this process until no more swaps are needed and the array is sorted.
- To visualize how bubble sort works, I created another web page that uses the same vertical blue bars of varying heights to represent the elements in the array and the numbers to label them. The bars are not in numerical order; they appear to be in a random arrangement. Below the bars, there is a button that says “bubble”, which starts the animation of the bubble sort algorithm.
- As you can see, the algorithm starts by comparing the first and second elements of the array. if they are out of order, the algorithm swaps them. The algorithm then moves to the next pair of elements if they are in order, the algorithm does not swap them. The algorithm then moves to the next pair of elements if they are out of order, the algorithm swaps them. The algorithm continues this way until it reaches the end of the array, where the largest element, which is 9, is now in its correct position. The last element of the array is now sorted, and the unsorted part is reduced by one. The algorithm then repeats the same process for the remaining unsorted parts, comparing and swapping adjacent elements until the entire array is sorted in ascending order.

**Complexity**

The time and space complexity of the sorting algorithms are as follows:
|Algorithm|Best Case|Average Case| Worst Case |Space|
|---------|---------|------------|------------|-----|
|Bubble Sort|O(n)|O(n)^2|O(n)^2|O(1)|
|Selection Sort|O(n)^2|O(n)^2|O(n)^2|O(1)|


### installation
To install and run this project, you need a web browser and a local web server 
- Clone or download the project repository from GitHub.
- Unzip the project folder if necessary.
- Start your web server if it is not already running
#### Usage
To use the project, you can do the following:
- Click the “selection” button to visualize the selection sort algorithm. The algorithm will find the smallest element in the unsorted part of the array and swap it with the first element of the unsorted part. It will repeat this step until the array is sorted.
- Click the “bubble” button to visualize the bubble sort algorithm. The algorithm will compare adjacent elements in the array and swap them if they are out of order and if they 
are ordered it will be highlighted with red. It will repeat this step until the array is sorted.

- Click the “reset” button to stop the sorting reset it and rearrange the array to a random order. The array will be shuffled and the bars will be blue again.




##### Here is a video demo of the project:
[sorting visualizer](https://youtu.be/EBahpLDgwHE)
