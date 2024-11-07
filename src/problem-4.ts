{
type Shape = Circle | Rectangle;

interface Circle {
    shape : "circle";
    radius : number;
}

interface Rectangle {
    shape : "rectangle";
    height : number;
    width : number;
}

function calculateShapeArea(shape:Shape): number {
    if (shape.shape === "circle") {
        const float = parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2))
        return float;
    }
    else if(shape.shape === "rectangle"){
        return shape.width * shape.height;
    }

    return 0;
}


// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

console.log(circleArea)

// Sample Output 1:
// 78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(rectangleArea)
// Sample Output 2:
// 24;
}