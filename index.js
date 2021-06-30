function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(action = "go to the office") {
    return `This Monday, I will ${action}.`
}

function wrapAdjective(flair = "*") {
    return function (compliment = "special") {
        return `You are ${flair}${compliment}${flair}!`
    }
}