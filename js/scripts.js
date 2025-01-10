document.addEventListener('DOMContentLoaded', function() {
    const mainButtons = document.querySelectorAll('.main-button');
    const firstLevelSections = document.querySelectorAll('.first-level');

    mainButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // 收合其他區域
            firstLevelSections.forEach((section, i) => {
                if (i !== index) {
                    section.style.display = 'none';
                }
            });

            // 切換當前區域的顯示狀態
            const currentSection = firstLevelSections[index];
            currentSection.style.display = currentSection.style.display === 'block' ? 'none' : 'block';
        });
    });

    const secondLevelButtons = document.querySelectorAll('.second-level-button');
    const secondLevelSections = document.querySelectorAll('.second-level');

    secondLevelButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // 收合其他區域
            secondLevelSections.forEach((section, i) => {
                if (i !== index) {
                    section.style.display = 'none';
                }
            });

            // 切換當前區域的顯示狀態
            const currentSection = secondLevelSections[index];
            currentSection.style.display = currentSection.style.display === 'block' ? 'none' : 'block';

            // 生成 3x3 數字表格
            if (currentSection.style.display === 'block' && currentSection.innerHTML.trim() === '') {
                const table = document.createElement('table');
                const numbers = Array.from({ length: 9 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
                for (let i = 0; i < 3; i++) {
                    const row = document.createElement('tr');
                    for (let j = 0; j < 3; j++) {
                        const cell = document.createElement('td');
                        cell.textContent = numbers[i * 3 + j];
                        row.appendChild(cell);
                    }
                    table.appendChild(row);
                }
                currentSection.appendChild(table);
            }
        });
    });
});