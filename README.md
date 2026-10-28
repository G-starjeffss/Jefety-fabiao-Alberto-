const STORAGE_KEY = 'todoflow.tasks.v1';

const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const dueDateInput = document.getElementById('dueDateInput');
const todoList = document.getElementById('todoList');
const remainingCount = document.getElementById('remainingCount');
const completedCount = document.getElementById('completedCount');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const themeToggle = document.getElementById('themeToggle');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

function getTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return [];

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to parse tasks from local storage:', error);
    return [];
  }
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function createId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDate(dateString) {
  if (!dateString) return 'No due date';

  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return 'No due date';

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric'
  }).format(date);
}

function getVisibleTasks() {
  const tasks = getTasks();

  if (currentFilter === 'active') {
    return tasks.filter((task) => !task.completed);
  }

  if (currentFilter === 'completed') {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

function updateCounts() {
  const tasks = getTasks();
  const remaining = tasks.filter((task) => !task.completed).length;
  const completed = tasks.filter((task) => task.completed).length;

  remainingCount.textContent = String(remaining);
  completedCount.textContent = String(completed);
}

function renderTasks() {
  const tasks = getVisibleTasks();

  if (!tasks.length) {
    todoList.innerHTML = '<li class="empty-state">No tasks yet. Add your first task above.</li>';
  } else {
    todoList.innerHTML = tasks
      .map(
        (task) => `
          <li class="todo-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
            <button class="check-btn" type="button" data-action="toggle" data-id="${task.id}" aria-label="Toggle task completion"></button>

            <div class="task-main">
              <div class="task-text">${escapeHtml(task.text)}</div>
              <div class="task-meta">
                <span class="priority-badge priority-${task.priority || 'medium'}">${task.priority || 'medium'}</span>
                <span>Due ${formatDate(task.dueDate)}</span>
              </div>
            </div>

            <button class="delete-btn" type="button" data-action="delete" data-id="${task.id}">Delete</button>
          </li>
        `
      )
      .join('');
  }

  filterButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === currentFilter);
  });

  updateCounts();
}

function addTask(event) {
  event.preventDefault();

  const text = taskInput.value.trim();
  if (!text) {
    taskInput.focus();
    return;
  }

  const tasks = getTasks();
  tasks.unshift({
    id: createId(),
    text,
    priority: prioritySelect.value,
    dueDate: dueDateInput.value,
    completed: false,
    createdAt: new Date().toISOString()
  });

  saveTasks(tasks);
  todoForm.reset();
  prioritySelect.value = 'medium';
  renderTasks();
  taskInput.focus();
}

function toggleTask(taskId) {
  const tasks = getTasks();
  const task = tasks.find((item) => item.id === taskId);
  if (!task) return;

  task.completed = !task.completed;
  saveTasks(tasks);
  renderTasks();
}

function deleteTask(taskId) {
  const tasks = getTasks().filter((task) => task.id !== taskId);
  saveTasks(tasks);
  renderTasks();
}

function clearCompleted() {
  const tasks = getTasks().filter((task) => !task.completed);
  saveTasks(tasks);
  renderTasks();
}

function setFilter(filterName) {
  currentFilter = filterName;
  renderTasks();
}

function applySavedTheme() {
  const storedTheme = localStorage.getItem('todoflow.theme');
  const useLightTheme = storedTheme === 'light';
  document.body.classList.toggle('light', useLightTheme);
  themeToggle.textContent = useLightTheme ? 'Light mode' : 'Dark mode';
}

function toggleTheme() {
  const isLight = document.body.classList.contains('light');
  document.body.classList.toggle('light', !isLight);
  localStorage.setItem('todoflow.theme', !isLight ? 'light' : 'dark');
  themeToggle.textContent = !isLight ? 'Light mode' : 'Dark mode';
}

todoForm.addEventListener('submit', addTask);

todoList.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target) return;

  const { action, id } = target.dataset;
  if (action === 'toggle') toggleTask(id);
  if (action === 'delete') deleteTask(id);
});

clearCompletedBtn.addEventListener('click', clearCompleted);

filterButtons.forEach((button) => {
  button.addEventListener('click', () => setFilter(button.dataset.filter));
});

themeToggle.addEventListener('click', toggleTheme);

window.addEventListener('storage', renderTasks);

applySavedTheme();
renderTasks();
