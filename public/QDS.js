/* Quentin Da Silva */
'use strict';

const form = document.getElementById("inputs");

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <div class="actor">
          <span>${actor.who}</span>
          <span>${actor.type}</span>
          <span>${actor.amount}</span>
        </div>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  form.addEventListener('submit', function (event) 
  {
  	console.log("tamer");
            //stop refreshing
    event.preventDefault();
    event.stopPropagation();
  	//CHECK VALIDITY
  	if(form.checkValidity()==true)
  	{
	    const trucker = CONVARGO.getTrucker();
	    const distance = document.querySelector('.distance').value;
	    const volume = document.querySelector('.volume').value;
	    const option = document.querySelector('.option').checked;
	    const actors = CONVARGO.payActors(trucker, distance, volume, option);

	    render(actors);
	    console.log("valid");
	}
	else
	{
		console.log("unvalid");
	}
	form.classList.add('was-validated');
	return;

  });
})();
