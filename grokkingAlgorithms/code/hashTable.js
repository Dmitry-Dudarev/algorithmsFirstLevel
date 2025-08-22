// функция проверки спика голосующих

// создадим объект, хранящий
// имена проголосовавших
const voters = {};

function checkVoter(name) {
  if (voters[name]) {
    console.log(`
      ${name} уже проголосовал.
      Он не может быть допущен 
      к голосованию повторно!
      `)
      return;
  } else {
    voters[name] = true;
    console.log(`
      Участник ${name} может 
      быть допущен к голосованию
      `)
  }
};

// checkVoter('Иван');
// checkVoter('Павел');
// checkVoter('Семен');
// checkVoter('Иван');