function initMap() {
    const address = 'Rua Santos Dumont, 2127, Osório, Rio Grande do Sul, Brasil';
    const geocoder = new google.maps.Geocoder();
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: -29.888056, lng: -50.269167 }  // Coordenadas aproximadas de Osório
    });

    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            console.log('Geocode result:', results[0]);
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            console.error('Geocode error: ' + status);
            alert('O Geocode não foi bem-sucedido pelo seguinte motivo: ' + status);
        }
    });
}

window.addEventListener('load', function() {
    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
        initMap();
    } else {
        alert('Falha ao carregar a API do Google Maps. Verifique sua chave API e conexão com a Internet.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const noteModal = document.getElementById('note-modal');
    const closeModal = document.querySelector('.close');
    const saveNoteButton = document.getElementById('save-note');
    const noteText = document.getElementById('note-text');
    const currentMonthSpan = document.getElementById('current-month');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    let selectedDay;
    let currentDate = new Date();

    function createCalendar(year, month) {
        calendar.innerHTML = '';
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        
        currentMonthSpan.textContent = `${monthNames[month]} ${year}`;

        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('day');
            calendar.appendChild(emptyDiv);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.textContent = i;
            dayDiv.addEventListener('click', () => openNoteModal(dayDiv));
            calendar.appendChild(dayDiv);
        }
    }

    function openNoteModal(dayDiv) {
        selectedDay = dayDiv;
        noteText.value = selectedDay.querySelector('.notes') ? selectedDay.querySelector('.notes').textContent : '';
        noteModal.style.display = 'block';
    }

    closeModal.onclick = function() {
        noteModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == noteModal) {
            noteModal.style.display = 'none';
        }
    }

    saveNoteButton.onclick = function() {
        const note = noteText.value;
        let noteDiv = selectedDay.querySelector('.notes');
        if (!noteDiv) {
            noteDiv = document.createElement('div');
            noteDiv.classList.add('notes');
            selectedDay.appendChild(noteDiv);
        }
        noteDiv.textContent = note;
        noteModal.style.display = 'none';
    }

    prevMonthButton.onclick = function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        createCalendar(currentDate.getFullYear(), currentDate.getMonth());
    }

    nextMonthButton.onclick = function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        createCalendar(currentDate.getFullYear(), currentDate.getMonth());
    }

    createCalendar(currentDate.getFullYear(), currentDate.getMonth());
});
