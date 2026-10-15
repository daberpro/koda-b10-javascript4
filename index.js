// Max

let himpunan1 = [1,2,3,4,5];
let himpunan2 = [45.5,98.7,99,1.0,2.0];
let input_array = [
    ...himpunan1,
    ...himpunan2
];

// Min
let current_max = input_array[0];
for(let i = 0; i < input_array.length; i++){
    if(current_max < input_array[i]){
        current_max = input_array[i];
    }
}
console.log(current_max);

// Average
let current_min = input_array[0];
for(let i = 0; i < input_array.length; i++){
    if(current_min > input_array[i]){
        current_min = input_array[i];
    }
}
console.log(current_min);

let average = 0;
for(let i = 0; i < input_array.length; i++){
    average += input_array[i];
}
average /= input_array.length;
console.log(average);
