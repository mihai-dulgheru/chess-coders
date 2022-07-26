# Dynamic Select Elements

## To-Do
1. Two controlled <select> elements
2. First select element allows the user to choose a city
3. Second select element allows the user to choose an office, based on the city he chose.

## Guide
1. Use the provided _select-data.js_ file for importing possible cities and offices
2. Every time the user selects a different city, the second select element should only load those offices based in that city
3. Filtering the offices will be done based on ```office.city```

## Hints
1. For controling a select element, we provide the value and the onChange handler to the <select> element, and not to the options
2. The options will be rendered by mapping through the cities or offices array.