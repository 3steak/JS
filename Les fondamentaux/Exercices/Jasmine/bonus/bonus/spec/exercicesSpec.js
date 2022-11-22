describe('Exercice 1', function() {
  it('Créer un tableau days et lui ajouter les jours de la semaine.', function() {
    let proposition = createArray();
    let answer = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 2', function() {
  it('Retouner le 3ème élément du tableau days', function() {
    let array = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    let proposition = returnThirdElement(array);
    let answer = 'Mercredi';
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 3', function() {
  it('Afficher la valeur de l\'index 3 du tableau days.', function() {
    let array = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    let proposition = returnThirdIndex(array);
    let answer = 'Jeudi';
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 4', function() {
  it('Changer le 2ème élément du tableau languages par php.', function() {
    let array = ['javascript', 'pph', 'mysql', 'c++'];
    let proposition = changeSecondElement(array);
    let answer = ['javascript', 'php', 'mysql', 'c++'];
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 5', function() {
  it('Ajouter ruby et python à la fin du tableau languages.', function() {
    let array = ['javascript', 'php', 'mysql', 'c++'];
    let proposition = addAtTheEnd(array);
    let answer = ['javascript', 'php', 'mysql', 'c++','ruby','python'];
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 6', function() {
  it('Ajouter html et css au début du tableau languages.', function() {
    let array = ['javascript', 'php', 'mysql', 'c++','ruby','python'];
    let proposition = addAtFirst(array);
    let answer = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 7', function() {
  it('Supprimer le premier élément du tableau languages.', function() {
    let array = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
    let proposition = removeFirstElement(array);
    let answer = ['css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 8', function() {
  it('Supprimer le dernier élément du tableau languages.', function() {
    let array = ['css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
    let proposition = removeLastElement(array);
    let answer = ['css', 'javascript', 'php', 'mysql', 'c++','ruby'];
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 9', function() {
  it('Créer un tableau associatif person. Lui ajouter les index name, age et city avec les valeurs Jean, 45, Paris.', function() {
    let proposition = createPerson();
    let answer = [];
    answer['name'] = 'Jean';
    answer['age'] = 45;
    answer['city'] = 'Paris';
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 10', function() {
  it('Retourner la valeur de l\'index nom du tableau person.', function() {
    let array = [];
    array['name'] = 'Jean';
    array['age'] = 45;
    array['city'] = 'Paris';
    let proposition = returnName(array);
    let answer = 'Jean';
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 11', function() {
  it('Stocker tous les index du tableau person dans des variables séparées et les retourner dans une même phrase de type : "Bonjour, je suis Jean. J\'ai 45 ans et j\'habite Paris."', function() {
    let array = ['Jean', 45, 'Paris'];
    let proposition = returnSentence(array);
    let answer = 'Bonjour, je suis Jean. J\'ai 45 ans et j\'habite Paris.';
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 12', function() {
  it('Transformer la variable string en tableau.', function() {
    let string = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
    let proposition = returnArray(string);
    let answer = ['Facebook', 'Twitter', 'Google +', 'Viadeo', 'LinkedIn'];
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 13', function() {
  it('Trier le tableau array.', function() {
    let array = ['Facebook', 'Twitter', 'Google +', 'Viadeo', 'LinkedIn'];
    let proposition = sortArray(array);
    let answer = ['Facebook', 'Google +', 'LinkedIn', 'Twitter', 'Viadeo'];
    expect(proposition).toEqual(answer);
  });
});

describe('Exercice 14', function() {
  it('Transformer le tableau array en chaîne de caractères', function() {
    let array = ['Facebook', 'Google +', 'LinkedIn', 'Twitter', 'Viadeo'];
    let proposition = returnString(array);
    let answer = 'Facebook,Google +,LinkedIn,Twitter,Viadeo';
    expect(proposition).toEqual(answer);
  });
});
