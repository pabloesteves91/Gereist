const countries = [
    "Afghanistan", "Albanien", "Algerien", "Andorra", "Angola", "Antigua und Barbuda", "Argentinien", "Armenien", "Australien", "Österreich",
    "Aserbaidschan", "Bahamas", "Bahrain", "Bangladesch", "Barbados", "Belarus", "Belgien", "Belize", "Benin", "Bhutan",
    "Bolivien", "Bosnien und Herzegowina", "Botswana", "Brasilien", "Brunei", "Bulgarien", "Burkina Faso", "Burundi", "Kambodscha", "Kamerun",
    "Kanada", "Kap Verde", "Zentralafrikanische Republik", "Tschad", "Chile", "China", "Kolumbien", "Komoren", "Kongo, Demokratische Republik", "Kongo, Republik",
    "Costa Rica", "Kroatien", "Kuba", "Zypern", "Tschechien", "Dänemark", "Dschibuti", "Dominica", "Dominikanische Republik", "Osttimor",
    "Ecuador", "Ägypten", "El Salvador", "Äquatorialguinea", "Eritrea", "Estland", "Eswatini", "Äthiopien", "Fidschi", "Finnland",
    "Frankreich", "Gabun", "Gambia", "Georgien", "Deutschland", "Ghana", "Griechenland", "Grenada", "Guatemala", "Guinea",
    "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Ungarn", "Island", "Indien", "Indonesien", "Iran", "Irak",
    "Irland", "Israel", "Italien", "Elfenbeinküste", "Jamaika", "Japan", "Jordanien", "Kasachstan", "Kenia", "Kiribati",
    "Kuwait", "Kirgisistan", "Laos", "Lettland", "Libanon", "Lesotho", "Liberia", "Libyen", "Liechtenstein", "Litauen",
    "Luxemburg", "Madagaskar", "Malawi", "Malaysia", "Malediven", "Mali", "Malta", "Marshallinseln", "Mauretanien", "Mauritius",
    "Mexiko", "Mikronesien", "Moldawien", "Monaco", "Mongolei", "Montenegro", "Marokko", "Mosambik", "Myanmar", "Namibia",
    "Nauru", "Nepal", "Niederlande", "Neuseeland", "Nicaragua", "Niger", "Nigeria", "Nordkorea", "Nordmazedonien", "Norwegen",
    "Oman", "Pakistan", "Palau", "Panama", "Papua-Neuguinea", "Paraguay", "Peru", "Philippinen", "Polen", "Portugal",
    "Katar", "Rumänien", "Russland", "Ruanda", "St. Kitts und Nevis", "St. Lucia", "St. Vincent und die Grenadinen", "Samoa", "San Marino", "Sao Tome und Principe",
    "Saudi-Arabien", "Senegal", "Serbien", "Seychellen", "Sierra Leone", "Singapur", "Slowakei", "Slowenien", "Salomonen", "Somalia",
    "Südafrika", "Südkorea", "Südsudan", "Spanien", "Sri Lanka", "Sudan", "Surinam", "Schweden", "Schweiz", "Syrien",
    "Taiwan", "Tadschikistan", "Tansania", "Thailand", "Togo", "Tonga", "Trinidad und Tobago", "Tunesien", "Türkei", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "Vereinigte Arabische Emirate", "Vereinigtes Königreich", "USA", "Uruguay", "Usbekistan", "Vanuatu", "Venezuela",
    "Vietnam", "Jemen", "Sambia", "Simbabwe"
];

const continents = {
    "Afrika": ["Algerien", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Kap Verde", "Zentralafrikanische Republik", "Tschad", "Komoren", "Kongo, Demokratische Republik", "Kongo, Republik", "Dschibuti", "Ägypten", "Äquatorialguinea", "Eritrea", "Eswatini", "Äthiopien", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Elfenbeinküste", "Kamerun", "Lesotho", "Liberia", "Libyen", "Madagaskar", "Malawi", "Mali", "Mauretanien", "Mauritius", "Mosambik", "Namibia", "Niger", "Nigeria", "Ruanda", "Sao Tome und Principe", "Senegal", "Seychellen", "Sierra Leone", "Simbabwe", "Somalia", "Südafrika", "Sudan", "Südsudan", "Tansania", "Togo", "Tunesien", "Uganda", "Sambia"],
    "Asien": ["Afghanistan", "Armenien", "Aserbaidschan", "Bahrain", "Bangladesch", "Bhutan", "Brunei", "Myanmar", "Kambodscha", "China", "Georgien", "Indien", "Indonesien", "Iran", "Irak", "Israel", "Japan", "Jordanien", "Kasachstan", "Kuwait", "Kirgisistan", "Laos", "Libanon", "Malaysia", "Malediven", "Mongolei", "Nepal", "Nordkorea", "Oman", "Pakistan", "Palau", "Philippinen", "Katar", "Russland", "Saudi-Arabien", "Singapur", "Südkorea", "Sri Lanka", "Syrien", "Tadschikistan", "Taiwan", "Thailand", "Timor-Leste", "Türkei", "Turkmenistan", "Vereinigte Arabische Emirate", "Usbekistan", "Vietnam", "Jemen"],
    "Europa": ["Albanien", "Andorra", "Österreich", "Belarus", "Belgien", "Bosnien und Herzegowina", "Bulgarien", "Kroatien", "Zypern", "Tschechien", "Dänemark", "Estland", "Finnland", "Frankreich", "Deutschland", "Griechenland", "Ungarn", "Island", "Irland", "Italien", "Lettland", "Liechtenstein", "Litauen", "Luxemburg", "Malta", "Moldawien", "Monaco", "Montenegro", "Niederlande", "Nordmazedonien", "Norwegen", "Polen", "Portugal", "Rumänien", "San Marino", "Serbien", "Slowakei", "Slowenien", "Spanien", "Schweden", "Schweiz", "Ukraine", "Vereinigtes Königreich"],
    "Nordamerika": ["Antigua und Barbuda", "Bahamas", "Barbados", "Belize", "Kanada", "Costa Rica", "Kuba", "Dominica", "Dominikanische Republik", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaika", "Mexiko", "Nicaragua", "Panama", "St. Kitts und Nevis", "St. Lucia", "St. Vincent und die Grenadinen", "Trinidad und Tobago", "USA"],
    "Südamerika": ["Argentinien", "Bolivien", "Brasilien", "Chile", "Kolumbien", "Ecuador", "Guyana", "Paraguay", "Peru", "Surinam", "Uruguay", "Venezuela"],
    "Australien": ["Australien", "Fidschi", "Kiribati", "Marshallinseln", "Mikronesien", "Nauru", "Neuseeland", "Palau", "Papua-Neuguinea", "Samoa", "Salomonen", "Tonga", "Tuvalu", "Vanuatu"],
    "Antarktis": ["Antarktis"]
};

document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('country');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
});

function addVisit() {
    const countrySelect = document.getElementById('country');
    const visitDate = document.getElementById('visit-date');
    const country = countrySelect.value;
    const date = visitDate.value;

    if (!country || !date) {
        alert("Bitte wähle ein Land und ein Datum aus.");
        return;
    }

    const tableBody = document.getElementById('visited-countries').querySelector('tbody');
    const row = tableBody.insertRow();
    const cellCountry = row.insertCell(0);
    const cellDate = row.insertCell(1);
    cellCountry.textContent = country;
    cellDate.textContent = date;

    updateProgress();
}

function updateProgress() {
    const tableBody = document.getElementById('visited-countries').querySelector('tbody');
    const visitedCountries = Array.from(tableBody.rows).map(row => row.cells[0].textContent);

    const continentCounts = {};
    for (const continent in continents) {
        continentCounts[continent] = continents[continent].filter(country => visitedCountries.includes(country)).length;
    }

    const totalCountriesPerContinent = {
        "Afrika": continents["Afrika"].length,
        "Asien": continents["Asien"].length,
        "Europa": continents["Europa"].length,
        "Nordamerika": continents["Nordamerika"].length,
        "Südamerika": continents["Südamerika"].length,
        "Australien": continents["Australien"].length,
        "Antarktis": continents["Antarktis"].length
    };

    const progressElements = {
        "Afrika": document.getElementById('progress-africa'),
        "Asien": document.getElementById('progress-asia'),
        "Europa": document.getElementById('progress-europe'),
        "Nordamerika": document.getElementById('progress-north-america'),
        "Südamerika": document.getElementById('progress-south-america'),
        "Australien": document.getElementById('progress-australia'),
        "Antarktis": document.getElementById('progress-antarctica')
    };

    for (const continent in continentCounts) {
        const percentage = (continentCounts[continent] / totalCountriesPerContinent[continent]) * 100;
        progressElements[continent].style.width = `${percentage}%`;
        progressElements[continent].textContent = `${Math.round(percentage)}%`;
    }
}

function saveData() {
    const tableBody = document.getElementById('visited-countries').querySelector('tbody');
    const visits = Array.from(tableBody.rows).map(row => ({
        country: row.cells[0].textContent,
        date: row.cells[1].textContent
    }));
    const blob = new Blob([JSON.stringify(visits)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'visits.travel';
    a.click();
}

function loadData() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const visits = JSON.parse(event.target.result);
            const tableBody = document.getElementById('visited-countries').querySelector('tbody');
            tableBody.innerHTML = '';
            visits.forEach(visit => {
                const row = tableBody.insertRow();
                const cellCountry = row.insertCell(0);
                const cellDate = row.insertCell(1);
                cellCountry.textContent = visit.country;
                cellDate.textContent = visit.date;
            });
            updateProgress();
        };
        reader.readAsText(file);
    }
}
