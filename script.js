// Initialize word lists
const meatComponents = ["beef", "porc", "chicken", "salmon"];
const vegetableComponents = ["squash", "cauliflower", "brocoli", "lettuce", "aubergine"];
const carbComponents = ["potato", "rice", "pasta", "couscous", "bread"];
const presentations = ["You requested a: ", "We offer you a: ", "You won a: "];
const dishMainComponents = [meatComponents, vegetableComponents, carbComponents];

//Create phrase string to be displayed
function constructPhrase(presentation, mainComponent) {
    let phrase = presentation + mainComponent._component + " dish.";

    let side = completeCourse(mainComponent);

    if(side.length == 1) {
        phrase += " Served with a side of " + side[0];
    } else if (side.length == 2) {
        phrase += " Served with sides of " + side[0] + " and " + side[1];
    }

    console.log(phrase);
}

//Choose word for presentation element
function choosePresentation (presentations) {
    return presentations[Math.floor(Math.random() * presentations.length)];
}

//Choose word for main component element.
function chooseMainComponent(mainComponentsLists) {
    //Initialise main component info
    const mainComponent = {
        _partOf: Math.floor(Math.random() * mainComponentsLists.length),
        _component: ""
    };

    mainComponent._component = mainComponentsLists[mainComponent._partOf][Math.floor(Math.random() * mainComponentsLists[mainComponent._partOf].length)];

    return mainComponent;
}

// Add appropriate side dish
function  completeCourse(mainComponent) {
    let side = [];
    if (mainComponent._partOf == 0) {
        side.push(vegetableComponents[Math.floor(Math.random() * vegetableComponents.length)]);
        side.push(carbComponents[Math.floor(Math.random() * carbComponents.length)]);
    } else if (mainComponent._partOf == 1) {
        side.push(carbComponents[Math.floor(Math.random() * carbComponents.length)]);
    } else if (mainComponent._partOf == 2) {
        side.push(vegetableComponents[Math.floor(Math.random() * vegetableComponents.length)]);
    }

    return side;
}

constructPhrase(choosePresentation(presentations), chooseMainComponent(dishMainComponents));


