const createArticle = (data) => {
  return (
    $(
      `<article>
        <div>
          <h3 class='title'> ${data.activity} </h3>
          <pre>${JSON.stringify(data, null, 2)}</pre>
        </div>
        </article>      
      `
      )
  );
}

const showMeMyStuff = (myThing) => {
  $('.myTarget').prepend(myThing)
};


const getMeSomeStuff = () => {
  $('.grandpa').on('submit', (event) => {
    event.preventDefault();
    const data = $('#myInput').val()

    $.ajax({
      url: `http://www.boredapi.com/api/activity?type=${data}`,
      method: 'GET'
    }).then(res => {
      const $article = createArticle(res);
      showMeMyStuff($article);
    })
  });
};

const makeTitleRed = () => {
  $('.myTarget').on('click', '.title', function(){
    console.log('clicked title');
    $(this).toggleClass('changeRed')
  })
}




$(document).ready(function(){

  getMeSomeStuff();

  makeTitleRed();

});