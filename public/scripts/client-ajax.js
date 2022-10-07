
const createArticle = (data) => {

  return (
    $(
      `<article>
        <div>
          <h1 class='title'>${data.categories[0]}</h1>
          <pre>${JSON.stringify(data, null, 2)}</pre>
        </div>
      </article>`
    )
  );
}


$(document).ready(function(){
  console.log('ok')
  $('.grandpa').on('submit', (e) => {
    e.preventDefault()
    const data = $('#myInput').val()
    console.log('this is my input data', data)
  
    $.ajax({
      url: `https://api.chucknorris.io/jokes/random?category=${data}`,
      method: 'GET'
    }).then(res => {
      console.log('chuck norris talks',res)
      const $article =  createArticle(res);
      $('.myTarget').append($article);
    })

    console.log('i was clicked and im am old');
  });

  $('.myTarget').on('click', '.title', function() {
    console.log('click title');
    $(this).toggleClass('changeRed')
  })
  // $('#findJoke').on('click', (event) => {
  //   event.stopPropagation();
  //   console.log('hey you clicked here');
  // })
}); 