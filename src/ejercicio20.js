document.addEventListener("DOMContentLoaded", function () {
    const paisSelect = document.getElementById("pais");
    const capitalSelect = document.getElementById("capital");
  
    const paisesCapitales = {
      argentina: "Buenos Aires",
      brasil: "Brasilia",
      canada: "Ottawa",
      mexico: "Ciudad de México",
      colombia: "Bogotá",
      chile: "Santiago"
    };
  
    // Llenar todas las capitales al iniciar
    Object.values(paisesCapitales).forEach(capital => {
      const option = document.createElement("option");
      option.value = capital.toLowerCase();      // ej. "ottawa"
      option.textContent = capital;              // ej. "Ottawa"
      capitalSelect.appendChild(option);
    });
  
    // Cambiar capital al elegir país
    paisSelect.addEventListener("change", function () {
      const pais = paisSelect.value;
      const capital = paisesCapitales[pais];
  
      if (capital) {
        for (let i = 0; i < capitalSelect.options.length; i++) {
          if (capitalSelect.options[i].textContent === capital) {
            capitalSelect.selectedIndex = i;
            break;
          }
        }
  
        console.log("País seleccionado:", paisSelect.options[paisSelect.selectedIndex].text);
        console.log("Capital seleccionada:", capital);
      } else {
        capitalSelect.selectedIndex = 0;
      }
    });
  });
  