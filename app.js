/*let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    // Toggle the icon between plus and times
    let icon = this.querySelector("i");
    if (icon.classList.contains(" fas fa-plus")) {
      icon.classList.remove("fas fa-plus");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fas fa-plus");
    }

    // Toggle the visibility of the content
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
*/

document.addEventListener('DOMContentLoaded', function () {
  var faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (question) {
      question.addEventListener('click', function () {
          var answer = this.nextElementSibling;

          if (answer.style.display === 'block') {
              answer.style.display = 'none';
          } else {
              answer.style.display = 'block';
          }
      });
  });
});


/*document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtn = document.getElementById('dropdown-btn');
  const dropdownContent = document.getElementById('dropdown-content');

  dropdownBtn.addEventListener('click', function() {
      dropdownContent.classList.toggle('hidden');
  });

  window.addEventListener('click', function(e) {
      if (!dropdownBtn.contains(e.target)) {
          dropdownContent.classList.add('hidden');
      }
  });

  document.querySelectorAll('.dropdown-content a').forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const selectedLang = link.getAttribute('data-lang');
          alert('Language selected: ' + selectedLang);
          dropdownContent.classList.add('hidden');
      });
  });
});








function changeLanguage() {
  var language = document.getElementById("language").value;
  window.location.href = window.location.pathname + '?lang=' + language;
}

var urlParams = new URLSearchParams(window.location.search);
        var lang = urlParams.get('lang');

        
        var body = {
            en: {
                title: "Welcome to our website!",
                text: "This content will change based on the selected language."
            },
            es: {
                title: "¡Bienvenido a nuestro sitio web!",
                text: "Este contenido cambiará según el idioma seleccionado."
            }
        };

        
        if (body[lang]) {
            document.querySelector('#content h1').textContent = body[lang].title;
            document.querySelector('#content p').textContent = body[lang].text;
        } */