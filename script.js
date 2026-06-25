// Load and display words from words.json
async function loadWords() {
    try {
        const response = await fetch('words.json');
        const data = await response.json();

        // Display today's words
        displayTodayWords(data.today);

        // Display archive
        if (data.archive && data.archive.length > 0) {
            displayArchive(data.archive);
        }

        // Display current date in footer
        displayCurrentDate();
    } catch (error) {
        console.error('Error loading words:', error);
        document.getElementById('todayWords').innerHTML =
            '<p style="grid-column: 1/-1; text-align: center; color: #999;">Error loading words. Please check words.json file.</p>';
    }
}

function displayTodayWords(words) {
    const container = document.getElementById('todayWords');
    container.innerHTML = '';

    words.forEach((word, index) => {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.innerHTML = `
            <div class="word-card-number">${index + 1}</div>
            <div class="word-chinese">${word.chinese}</div>
            <div class="word-pinyin">${word.pinyin}</div>
            <div class="word-english">${word.english}</div>
        `;
        container.appendChild(card);
    });
}

function displayArchive(archive) {
    const container = document.getElementById('archiveContainer');
    const emptyMessage = document.getElementById('emptyArchive');

    if (archive.length === 0) {
        emptyMessage.style.display = 'block';
        return;
    }

    emptyMessage.style.display = 'none';
    container.innerHTML = '';

    // Display in reverse chronological order (most recent first)
    archive.slice().reverse().forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'archive-day';

        const dayHeader = document.createElement('div');
        dayHeader.className = 'archive-day-header';
        dayHeader.innerHTML = `
            <span class="archive-day-date">📅 ${formatDate(day.date)}</span>
            <span class="archive-day-toggle">▼</span>
        `;

        const wordsContainer = document.createElement('div');
        wordsContainer.className = 'archive-words';

        day.words.forEach((word, index) => {
            const wordItem = document.createElement('div');
            wordItem.className = 'archive-word-item';
            wordItem.innerHTML = `
                <div class="archive-word-chinese">${word.chinese}</div>
                <div class="archive-word-pinyin">${word.pinyin}</div>
                <div class="archive-word-english">${word.english}</div>
            `;
            wordsContainer.appendChild(wordItem);
        });

        // Toggle expand/collapse
        dayHeader.addEventListener('click', () => {
            wordsContainer.classList.toggle('open');
            dayHeader.querySelector('.archive-day-toggle').classList.toggle('open');
        });

        dayElement.appendChild(dayHeader);
        dayElement.appendChild(wordsContainer);
        container.appendChild(dayElement);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
}

function displayCurrentDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options);
    document.getElementById('currentDate').textContent = dateString;
}

// Load words when page loads
document.addEventListener('DOMContentLoaded', loadWords);
