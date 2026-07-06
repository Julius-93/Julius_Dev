/*
-> Our own callback function
-> doing shape stuff
------> shapes
circle
rectangle
triangle

1. for each shapes create a function <arrow, name>
to calculate the area. Ensure the function takes the correct parameters for each shape.
test the function
2. we are to create a super function called shape.
It's going to take the following parameters
@param1=>function <correct shape> required
@param2=>shape name<string>
@param3=>s1 <required>
@param4=>s2<optional>
@param5=>s3<optional>
1.inside your function shape.
console each of the parameters and their types.
2.for each of your function ie for areaCircle,
areRectangle, and areaTriangle
call the shape function and pass the required parameters.
example for areaCircle
-shape(areaCircle,"Circle",10) -> for areCircle. test make observation
-shape(areaRectangle,"Rectangle",10,5) -> for areCircle. test make observation
3.inside your shape function.create a result variable equate it to the function call of @param1 and pass @param3,@param4,@param5
example
result=@param1(param3,param4,param5)
4.Console.log the shap name and the result console.Log(`for shape ${@param2} area is ${result}`)
for each shape call it like step 2 and see the result.
-shape(areaCircle,"Circle",10) -> for areCircle. test make observation
-shape(areaRectangle,"Rectangle",10,5) -> for areCircle. test make observation

*/

//Area of a circle
const areaOfCircle = (radius) => {
  return 3.142 * radius * radius;
};

console.log(areaOfCircle(7)); // 153.958

//Area of a rectangle
const areaOfRectangle = (length, width) => {
  return length * width;
};

console.log(areaOfRectangle(6, 8)); // 48

//Area of a triangle
const areaOfTriangle = (base, height) => {
  return 0.5 * base * height;
};

console.log(areaOfTriangle(3, 4)); // 6

const shape = (shapeFunction, shapeName, side1, side2, side3) => {
  // 1. Log each parameter and its type
  console.log("fn:  ", shapeFunction,   "| type:", typeof shapeFunction);
  console.log("name:", shapeName, "| type:", typeof shapeName);
  console.log("s1:  ", side1,   "| type:", typeof side1);
  console.log("s2:  ", side2,   "| type:", typeof side2);
  console.log("s3:  ", side3,   "| type:", typeof side3);
 
  // 2. Call the passed-in function (the callback) with the dimensions.
  //    Each area function picks up only the args it needs.
  const area = shapeFunction(side1, side2, side3);
  console.log(`Area of ${shapeName} = ${area}`);
 
  return area;


// 3. Create a result variable = the call of @param1, passing @param3, @param4, @param5
  const result = shapeFunction(side1, side2, side3);

  // 4. Console.log the shape name and the result
  console.log(`for shape ${shapeName} area is ${result}`);

  return result;
}