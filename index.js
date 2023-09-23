function introductionWithLanguage(name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
const personName = "Aki"
const language = "Java"
const introPhrase = introduction(personName,langugage)
console.log(introPhrase)

function introduction(name){
    return `Hi, my name is ${name}.`
}
const introPhraseOne = introduction(personName)
console.log(introPhrase)

function introductionWithLanguageOptional(name,language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
const introPhraseTwo = introduction(personName,langugage)
console.log(introPhrase)