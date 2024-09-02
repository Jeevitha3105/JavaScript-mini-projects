document.addEventListener('DOMContentLoaded', () => {
    const habitForm = document.getElementById('habit-form');
    const habitNameInput = document.getElementById('habit-name');
    const habitList = document.getElementById('habit-list');
    const filterActiveBtn = document.getElementById('filter-active');
    const filterAllBtn = document.getElementById('filter-all');

    let habits = JSON.parse(localStorage.getItem('habits')) || [];

    // Function to render habits
    function renderHabits(filter) {
        habitList.innerHTML = '';
        const filteredHabits = filter === undefined ? habits : habits.filter(habit => habit.completed === filter);
        filteredHabits.forEach((habit, index) => {
            const habitItem = document.createElement('div');
            habitItem.className = 'habit-item';
            habitItem.innerHTML = `
                <input type="checkbox" ${habit.completed ? 'checked' : ''} data-index="${index}">
                ${habit.name}
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            habitList.appendChild(habitItem);
        });
    }

    // Function to add a new habit
    function addHabit(event) {
        event.preventDefault();
        const habitName = habitNameInput.value.trim();
        if (habitName) {
            habits.push({ name: habitName, completed: false });
            localStorage.setItem('habits', JSON.stringify(habits));
            habitNameInput.value = '';
            renderHabits();
        }
    }

    // Function to toggle habit completion
    function toggleHabitCompletion(event) {
        if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
            const index = event.target.getAttribute('data-index');
            habits[index].completed = !habits[index].completed;
            localStorage.setItem('habits', JSON.stringify(habits));
            renderHabits();
        }
    }

    // Function to edit a habit
    function editHabit(index) {
        const newName = prompt('Edit habit name:', habits[index].name);
        if (newName !== null && newName.trim() !== '') {
            habits[index].name = newName.trim();
            localStorage.setItem('habits', JSON.stringify(habits));
            renderHabits();
        }
    }

    // Function to delete a habit
    function deleteHabit(index) {
        if (confirm('Are you sure you want to delete this habit?')) {
            habits.splice(index, 1);
            localStorage.setItem('habits', JSON.stringify(habits));
            renderHabits();
        }
    }

    // Event listener for adding habits
    habitForm.addEventListener('submit', addHabit);

    // Event listener for toggling habit completion
    habitList.addEventListener('change', toggleHabitCompletion);

    // Event delegation for edit and delete buttons
    habitList.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-btn')) {
            const index = event.target.getAttribute('data-index');
            editHabit(index);
        } else if (event.target.classList.contains('delete-btn')) {
            const index = event.target.getAttribute('data-index');
            deleteHabit(index);
        }
    });

    // Event listeners for filter buttons
    filterActiveBtn.addEventListener('click', () => renderHabits(true));
    filterAllBtn.addEventListener('click', () => renderHabits());

    // Initial rendering of habits
    renderHabits();
});
