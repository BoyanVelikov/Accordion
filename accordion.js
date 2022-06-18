function solution() {
    let baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/';
    let mainSection = document.getElementById('main');
    let extraDiv;
    let parArticle;

    fetch(baseUrl + 'list')
        .then((res) => res.json())
        .then((data) => {
            for (each of data) {
                let accordionDiv = document.createElement('div');
                accordionDiv.setAttribute('class', 'accordion');
                let headDiv = document.createElement('div');
                headDiv.setAttribute('class', 'head');
                extraDiv = document.createElement('div');
                extraDiv.setAttribute('class', 'extra');

                let spanTitle = document.createElement('span');
                spanTitle.textContent = each.title;
                let buttonId = document.createElement('button');
                buttonId.setAttribute('class', 'button');
                buttonId.textContent = 'More';
                buttonId.setAttribute('id', each._id);
                mainSection.appendChild(accordionDiv);
                accordionDiv.appendChild(headDiv);
                accordionDiv.appendChild(extraDiv);
                headDiv.appendChild(spanTitle);
                headDiv.appendChild(buttonId);
                parArticle = document.createElement('p');

                extraDiv.appendChild(parArticle);
                buttonId.addEventListener('click', showHide);
            }
        });

    function showHide(e) {

        fetch(baseUrl + 'details/' + e.target.id)
            .then((res) => res.json())
            .then((data) => {
                let a = e.target.parentNode.parentNode;
                let b = a.querySelector('[class="extra"]');

                if (e.target.textContent == 'More') {
                    e.target.textContent = 'Less';
                    parArticle.textContent = data.content;
                    b.appendChild(parArticle);
                    b.style.display = 'block';
                } else if (e.target.textContent == 'Less') {
                    e.target.textContent = 'More';

                    b.style.display = 'none';
                }

            });
    }

}

solution();