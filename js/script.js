
const validation = new JustValidate('.form', {
  errorLabelStyle: {
    color: '#d52b1e',
  },
  focusInvalidField: false,
});

validation

  .addField('.input-name', [
    {
      rule: 'customRegexp',
      value: /[а-яё]/gi,
      errorMessage: 'Допустимы символы кириллицы',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимальное кол-во символов: 3'
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Максимальное кол-во символов: 15'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели имя'
    },
  ])
  .addField('.input-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный e-mail',
    },
  ])

