Prompt 1: Boundary Value Analysis
Questions:

- What's the smallest and largest value input?
- What if the array is empty?
- What if the array has only one element?

Prompt 2: Input Structure
Questions:

- What are all the distinct shapes my input can take?
- Which property of this input that could be different in another valid input?
- Number strictly increasing?
- Numbers strictly decreasing?
- All same values?
- All different values?
- V-shape numbers (decrease then increase)
- Inverted V (increase then decrease)
- Tiny spark at start, then flat
- Tiny dip at the end, after a long climb

Prompt 3: Adversarial
Questions:

- What hidden assumption did I make in my implementation that someone can violate?
- For each line of code, what did I assume here?
- What if the result is not available in the array?
- What if multiple results are available in the array?

Prompt 4: Stress test

Meta-trick:

1. What if input is empty?
2. What if the input has one element?
3. What if all the elements are same or identical?
4. What if all the elements are unique?
5. What if the answer is the first element?
6. What if the answer is the last element?
7. What if there are multiple valid answers?
8. What if the answer does not exist?
9. What if input is already sorted/reverse-sorted?
10. What if input has negative numbers?
11. What if input has zero?
12. What if the input is exactly at the constraints boundary?
13. What if I run the function twice with same input?
