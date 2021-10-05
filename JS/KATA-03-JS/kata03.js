function anagramas(AAA, BBB) {
    return AAA.toLowerCase().split("").sort().join("") === BBB.toLowerCase().split("").sort().join("");
};

anagramas("aretes","teresa");
