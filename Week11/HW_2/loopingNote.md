# mdn web docs loop review

### for...of loop

```
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

1, get the first item in the collection `cats`  
2, Assign it to the variable `cat`  
3, Get the next item, and repeat (2) until you've reached the end of the collection.

- get the item in the order each time

**use when don't need access to the index position of each item.**

---

### map() and filter()

calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array.  
`filter()`: test each item in a collection, and create a new collection containing only items that match.  
`const filtered = cats.filter(lCat);`

---

### for Loop

1, The keyword for, followed by some parentheses.

```
for (initializer; condition; final-expression) {
  // code to run each time the loop iterates
}
```

```
for (let i = 1; i < 10; i++) {
}
```

**initializer:** a variable set to a number, which is incremented to count the number of times the loop has run.

**condition:** defines when the loop should stop looping.

**final-expression:**: always runs each time the loop has gone through a full iteration.
usually serves to increment (or in some cases decrement) the counter variable, to bring it closer to the point where the condition is no longer true.

---

### Looping through collections with a for loop

**_remember!_**  
`for (let i = 0; i < cats.length; i++) {`  
Remember that  
the index of an array starts at 0,  
the last array index is length -1. --> so write as `i < cats.length` or `i <= array.length - 1`

---

### Exiting loops with break

exit the loop after all iterations have been completed.

---

### Skipping iterations with continue

instead of breaking out of the loop, **continue** statement skips the next iteration.

---

### while and do...while

similar to for loop, but initializer comes first before the loop starts.

```
initializer
do {
  // code to run

  final-expression
} while (condition)
```
