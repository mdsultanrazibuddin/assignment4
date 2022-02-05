
// problem no = 1 (anaToVori);;;;;


function anaToVori (ana) {
    // error handling
    if (typeof ana != 'number') {
       return 'please give a  number';
    }  
    // error handling
    else if (ana == 0) {
        return 'please give a number greater than 0';
    }
    // error handling
    else if (ana < 0) {
        return 'please give a positive number';
    }


    var vori = ana /16;
    return vori;
}

ana = 32;
var result = anaToVori (ana);
console.log(result);

// problem no = 1 end;;

// problem no = 2 (pandaCost);;;;;


function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    // error handling
    if (typeof singaraQuantity != 'number' || typeof somuchaQuantity != 'number' || typeof jilapiQuantity != 'number') {
         return 'please give a quantity of singara, somucha, jilapi';
    }
    // error handling
    else if (singaraQuantity <=0 || somuchaQuantity <=0 ||jilapiQuantity <=0) {
        return 'please give a positive number';
    }

    
    var costPerSingara = 7;
    var costPerSomucha = 10;
    var costPerJilapi = 15;

    var totalSingaraCost = singaraQuantity * costPerSingara;
    var totalSomuchaCost = somuchaQuantity * costPerSomucha;
    var totalJilapiCost = jilapiQuantity * costPerJilapi;

    var totalCost = totalSingaraCost + totalSomuchaCost + totalJilapiCost;

    return totalCost;
}
var singaraQuantity = 2;
var somuchaQuantity =3;
var jilapiQuantity = 4;
var result =  pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity);

console.log(result);

// problem no = 2 end;;


// problem no = 3 (picnicBudget);;;;;


function picnicBudget(people) {

     // error handling
    if (typeof people != 'number') {
        return 'please give a  number';
     }
     // error handling
     else if (people <=0) {
         return 'please give a positive number of people';
     }
    
    if (people <= 100) {
        costPerPeople = 5000;
        totalCost = people * costPerPeople;
        return totalCost;
    }
    if (people > 100 && people <= 200) {
        costFirstHundred = 100 * 5000;
        otherPeopleCost = (people - 100) * 4000;
        totalCost = costFirstHundred + otherPeopleCost;
        return totalCost;
    }
    if (people > 200) {
        costFirstHundred = 100 * 5000;
        costSecondHunread = 100 * 4000;
        otherPeopleCost = (people - 200) * 3000;
        totalCost = costFirstHundred + costSecondHunread + otherPeopleCost ;
        return totalCost;

    }
}

var people = 210;
var result =  picnicBudget(people);
console.log(result);

// problem no = 3 end;;


// problem no = 4 ( oddFriend);;;;

function  oddFriend(array) {

     // error handling
    if (typeof array != 'object') {
        return 'please give a array';
    }
     // error handling
    else if (array.length == 0) {
        return ' please do not enter an emtry array';
    }


    for (let i = 0; i < array.length; i++) {
        
        if (array[i].length % 2 != 0) {
            oddname = array[i];
            return oddname;

        }
        
    }
}

array =["Khairul", "Nasir","sultan", "Nasir", "Shamim", "Tarequl", "Rashedul"];
var result = oddFriend(array);
console.log(result);

// problem no = 4 end;;

