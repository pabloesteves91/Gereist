const countries = [
    "Afghanistan", "Albanien", "Algerien", "Andorra", "Angola", "Antigua und Barbuda", "Argentinien", "Armenien", "Australien", "Österreich",
    // (Füge hier alle anderen Länder hinzu)
    "Deutschland", "Schweiz", "Frankreich", "Italien", "Spanien", "USA", "Kanada"
];

const continents = {
    "Afrika": ["Algerien", "Angola", "Ägypten", "Kamerun", "Südafrika"],
    "Asien": ["China", "Indien", "Japan", "Russland", "Vietnam"],
    "Europa": ["Deutschland", "Frankreich", "Italien", "Spanien", "Schweiz"],
    "Nordamerika": ["Kanada", "Mexiko", "USA"],
    "Südamerika": ["Argentinien", "Brasilien", "Chile"],
    "Ozeanien": ["Australien", "Neuseeland"]
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

    const totalContinents = Object.keys(continents).length;
    const visitedContinents = Object.values(continentCounts).filter(count => count > 0).length;
    const percentage = (visitedContinents / totalContinents) * 100;

    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${percentage}%`;
    progressBar.textContent = `${Math.round(percentage)}%`;
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
