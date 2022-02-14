//calculate area of a triangle
function calcArea(a, b, c){
    const S = (a + b + c)/2;
    const area = Math.sqrt(S * (S - a) * (S - b) * (S - c))
    return area;
}