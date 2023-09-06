const createArticle = (data) => {
  return $(`
    <article>
      <div>
        <h1 class='title'>${data.categories[0]}</h1>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      </div>
    </article>
  `);
};

const createStuff = (message) => {
  return $(`<h1>${message}</h1>`)
}

const baseUrl = 'http://localhost:8080';



$(document).ready(function(){

  $.get('https://api.chucknorris.io/jokes/categories')
  .then((res) => console.log('categories', res));

  $('.grandpa').on('submit', (event) => {
    event.preventDefault();
    const data = $('#myInput').val()
    $.ajax({
      url: `https://api.chucknorris.io/jokes/random?category=${data}`,
      method: 'GET'
    })
    .then((res) => {
      console.log('where am i', res);
      const $article = createArticle(res);
      $('.myTarget').append($article);
    });
  })

  $('.myTarget').on('click', '.title', function() {
    console.log('click title')
    $(this).toggleClass('changeRed')
  })

  $.ajax({
    url: `${baseUrl}/stuff2`,
    method: 'GET'
  })
  .then(res => {
    console.log('stuff response', res);
  });

}); 