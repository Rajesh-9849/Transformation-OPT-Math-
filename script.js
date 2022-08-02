


//single transformation inputs
let coordinateX = document.getElementById('coordianteX');
let coordinateY = document.getElementById('coordianteY');

//single tranformation answer discreption
let descriptionTransformation = document.getElementById('description');
let exampleTransformation = document.getElementById('example');
let TransformationAnswer = document.getElementById('transformationAnswer');

let selectedTransformation = document.getElementById('transformation');
//combine answer display 
let CombinedescriptionTransformation = document.getElementById('Cdescription');
let CombineexampleTransformation = document.getElementById('Cexample');
let CombineTransformationAnswer = document.getElementById('CtransformationAnswer');

//value




let selectedTransformationCombine = document.getElementById('Ctransformation');
let coordianteXTransform;
let coordianteYTransform;
let coordianteXNegative;
let coordianteYNegative;
let singleTransformationResultX;
let singleTransformationResultY;

// chooses transformation
function singletranformation() {
    coordianteXTransform = Number(coordinateX.value);
    coordianteYTransform = Number(coordinateY.value);
    coordianteXNegative = Number(-coordianteXTransform);
    coordianteYNegative = Number(-coordianteYTransform);
    switch (selectedTransformation.value) {
        case "r90":
            descriptionTransformation.innerHTML = "Under the rotation of +90" + `&#xb0` + "Or -270" + `&#xb0`;
            exampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(-y,x)";
            singleTransformationResultX = coordianteYNegative;
            singleTransformationResultY = coordianteXTransform;

            TransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + singleTransformationResultX + "," + singleTransformationResultY + ")";
            break;

        case "r180":
            descriptionTransformation.innerHTML = "Under the rotation of +180" + `&#xb0` + "Or -180" + `&#xb0`;
            exampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(-x,-y)";
            singleTransformationResultX = coordianteXNegative;
            singleTransformationResultY = coordianteYNegative; 
            TransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + singleTransformationResultX + "," + singleTransformationResultY + ")";
            break;
        case "r270":
            descriptionTransformation.innerHTML = "Under the rotation of -90" + `&#xb0` + "Or +270" + `&#xb0`;
            exampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(y,-x)";
            singleTransformationResultX = coordianteYTransform;
            singleTransformationResultY = coordianteXNegative;
            TransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + singleTransformationResultX + "," + singleTransformationResultY + ")";
            break;
        case "ref_x":
            descriptionTransformation.innerHTML = "Under the  Reflection of X-axis";
            exampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(x,-y)";
            singleTransformationResultX = coordianteXTransform;
            singleTransformationResultY = coordianteYNegative;
            TransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + singleTransformationResultX + "," + singleTransformationResultY + ")";
            break;
        case "ref_y":
            descriptionTransformation.innerHTML = "Under the  Reflection of Y-axis";
            exampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(-x,y)";
            singleTransformationResultX = coordianteXNegative;
            singleTransformationResultY = coordianteYTransform;
            TransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + coordianteXNegative + "," + singleTransformationResultY + ")";
            break;
        case "ref_y=x":
            descriptionTransformation.innerHTML = "Under the  Reflection of y=x";
            exampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(y,x)";
            singleTransformationResultX = coordianteYTransform;
            singleTransformationResultY = coordianteXTransform;
            TransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + singleTransformationResultX + "," + singleTransformationResultY + ")";
            break;
        case "ref_y=-x":
            descriptionTransformation.innerHTML = "Under the  Reflection of y=-x";
            exampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(-y,-x)";
            singleTransformationResultX = coordianteYNegative;
            singleTransformationResultY = coordianteXNegative;
            TransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + singleTransformationResultX + "," + singleTransformationResultY + ")";
            break;
        case "ref_x=k":
            descriptionTransformation.innerHTML = "Under the  Reflection of x=k";
            exampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(2k-x , y)";
            singleTransformationResultX = ((valueK.value * 2) - coordianteXTransform);
            singleTransformationResultY = coordianteYTransform;
            TransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + singleTransformationResultX + "," + singleTransformationResultY + ")";
            break;
        case "ref_y=k":

            descriptionTransformation.innerHTML = "Under the  Reflection of y=k";
            exampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(x , 2k-y)";
            singleTransformationResultX = coordianteXTransform;
            singleTransformationResultY = ((2 * valueK.value) - coordianteYTransform);
            TransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + (singleTransformationResultX) + "," + singleTransformationResultY + ")"; break;

        case "englargementOrigin":

            descriptionTransformation.innerHTML = "Under the  enlargement from the origin";
            exampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(kx , ky)";
            singleTransformationResultX = (valueK.value * coordianteXTransform);
            singleTransformationResultY = (valueK.value * coordianteYTransform);
            TransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + singleTransformationResultX + "," + singleTransformationResultY + ")"; break;

        case "englargementAB":

            descriptionTransformation.innerHTML = "Under the  enlargement from the A B";
            exampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(k(x-a)+a , k(y-b)+b)";
            singleTransformationResultX = (valueK.value * (coordianteXTransform - valueA.value)) + Number(valueA.value);
            singleTransformationResultY = (valueK.value * (coordianteYTransform - valueB.value)) + Number(valueB.value);
            TransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + singleTransformationResultX
                + "," + singleTransformationResultY + ")"; break;

    }
}
function combineTransformation() {
    coordianteXTransform = singleTransformationResultX;
    coordianteYTransform = singleTransformationResultY;
    coordianteXNegative = -coordianteXTransform;
    coordianteYNegative = -coordianteYTransform;

    switch (selectedTransformationCombine.value) {


        case "Combine_r90":
            CombinedescriptionTransformation.innerHTML = "Under the rotation of +90" + `&#xb0` + "Or -270" + `&#xb0`;
            CombineexampleTransformation.innerHTML = "P(-x,y)" + `&#8594` + "P`(-y,x)";


            CombineTransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + coordianteYNegative + "," + coordianteXTransform + ")";
            break;

        case "Combine_r180":
            CombinedescriptionTransformation.innerHTML = "Under the rotation of +180" + `&#xb0` + "Or -180" + `&#xb0`;
            CombineexampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(-x,-y)";
            CombineTransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + coordianteXNegative + "," + coordianteYNegative + ")";
            break;
        case "Combine_r270":
            CombinedescriptionTransformation.innerHTML = "Under the rotation of -90" + `&#xb0` + "Or +270" + `&#xb0`;
            CombineexampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(y,-x)";
            CombineTransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + coordianteYTransform + "," + coordianteXNegative + ")";
            break;
        case "Combine_ref_x":
            CombinedescriptionTransformation.innerHTML = "Under the  Reflection of X-axis";
            CombineexampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(x,-y)";
            CombineTransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + coordianteXTransform + "," + coordianteYNegative + ")";
            break;
        case "Combine_ref_y":
            CombinedescriptionTransformation.innerHTML = "Under the  Reflection of Y-axis";
            CombineexampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(-x,y)";
            CombineTransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + coordianteXNegative + "," + coordianteYTransform + ")";
            break;
        case "Combine_ref_y=x":
            CombinedescriptionTransformation.innerHTML = "Under the  Reflection of y=x";
            CombineexampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(y,x)";
            CombineTransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + coordianteYTransform + "," + coordianteXTransform + ")";
            break;
        case "Combine_ref_y=-x":
            CombinedescriptionTransformation.innerHTML = "Under the  Reflection of y=-x";
            CombineexampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(-y,-x)";
            CombineTransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + coordianteYNegative + "," + coordianteXNegative + ")";
            break;
        case "Combine_ref_x=k":
            CombinedescriptionTransformation.innerHTML = "Under the  Reflection of x=k";
            CombineexampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(2k-x , y)";
            CombineTransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + ((Number(Combine_valueK.value) * 2) - coordianteXTransform) + "," + coordianteYTransform + ")";
            break;
        case "Combine_ref_y=k":

            CombinedescriptionTransformation.innerHTML = "Under the  Reflection of y=k";
            CombineexampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(x , 2k-y)";
            CombineTransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + (coordianteXTransform) + "," + ((2 * Number(Combine_valueK.value)) - coordianteYTransform) + ")"; break;

        case "Combine_englargementOrigin":

            CombinedescriptionTransformation.innerHTML = "Under the  enlargement from the origin";
            CombineexampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(kx , ky)";
            CombineTransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" + (Number(Combine_valueK.value) * coordianteXTransform) + "," + (Number(Combine_valueK.value) * coordianteYTransform) + ")"; break;

        case "Combine_englargementAB":

            CombinedescriptionTransformation.innerHTML = "Under the  enlargement from the A B";
            CombineexampleTransformation.innerHTML = "P(x,y)" + `&#8594` + "P`(k(x-a)+a , k(y-b)+b)";

            CombineTransformationAnswer.innerHTML = "P(" + coordianteXTransform + "," + coordianteYTransform + ")" + `&#8594` + "P`(" +
                (Number(Combine_valueK.value) * (coordianteXTransform - Number(Combine_valueA.value)) + Number(Combine_valueA.value)) + "," + (Number(Combine_valueK.value) * (coordianteYTransform - Number(Combine_valueB.value)) + Number(Combine_valueB.value)) + ")"; break;

    }

}

let chooseTransformation = document.getElementById('selectTransformation');
function transformation() {


    if (chooseTransformation.value === "singleTransformation") {

        singletranformation();



    } else {
        singletranformation();
        combineTransformation();


    }
}

function addInputBox() {

    if (selectedTransformation.value == "ref_x=k" || selectedTransformation.value == "ref_y=k") {

        valueK.style.display = "block";
        valueK.placeholder = 'K';
        valueA.style.display = "none";
        valueB.style.display = "none";
    }
    else if (selectedTransformation.value == "englargementOrigin") {
        valueK.placeholder = 'englargement';

        valueK.style.display = "block";
    }
    else if (selectedTransformation.value == "englargementAB") {

        valueK.style.display = "block";
        valueB.style.display = "block";
        valueA.style.display = "block";
    } else {

        valueK.style.display = "none";
        valueA.style.display = "none";
        valueB.style.display = "none";

    }

    if (chooseTransformation.value === "singleTransformation") {
        selectedTransformationCombine.style.display = "none";

    }
    else if (chooseTransformation.value === "combineTransformation") {
        selectedTransformationCombine.style.display = "block";

    }
    if (selectedTransformationCombine.value == "Combine_ref_x=k" || selectedTransformationCombine.value == "Combine_ref_y=k") {
        Combine_valueK.placeholder = 'K';

        Combine_valueK.style.display = "block";
        Combine_valueA.style.display = "none";
        Combine_valueB.style.display = "none";
    } else if (selectedTransformationCombine.value == "Combine_englargementOrigin") {
        Combine_valueK.placeholder = 'Combine englargement';

        Combine_valueK.style.display = "block";
        Combine_valueA.style.display = "none";
        Combine_valueB.style.display = "none";
    }
    else if (selectedTransformationCombine.value == "Combine_englargementAB") {
        Combine_valueK.style.display = "block";
        Combine_valueA.style.display = "block";
        Combine_valueB.style.display = "block";
    } else {
        Combine_valueK.style.display = "none";
        Combine_valueA.style.display = "none";
        Combine_valueB.style.display = "none";
    }
}



