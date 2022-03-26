function openModalWindow() {
  const modal = document.getElementsByClassName('modal')[0]
  fillModal(modal)

  const body = document.getElementsByTagName('body')[0]
  const inputs = document
    .getElementsByClassName('modal-form')[0]
    .getElementsByTagName('input')
  const confirmButton = modal.getElementsByClassName('modal-button-confirm')[0]

  // Open modal window
  modal.classList.remove('hidden')
  body.classList.add('modal-open')
  inputs[0].focus()

  // Add listner to close modal
  modal.addEventListener('click', (e) => {
    closeModalWindow(e, modal, body)
  })
  // Add listner to confirm button
  confirmButton.addEventListener('click', (e) => {
    onConfirm(e, inputs)
  })
}

function closeModalWindow(event: Event, modal: Element, body: Element) {
  if (
    (<HTMLButtonElement>event?.target).classList.contains(
      'modal-button-cancel'
    ) ||
    (<HTMLButtonElement>event?.target).classList.contains(
      'modal-button-close-icon'
    ) ||
    (<HTMLDivElement>event?.target).classList.contains('modal-overflow')
  ) {
    modal.classList.add('hidden')
    body.classList.remove('modal-open')
  }
}

function validate(inputs: HTMLCollectionOf<HTMLInputElement>) {
  const [name, number] = inputs

  if (name.value.length < 3) {
    name.focus()
    name.style.border = '2px solid red'

    return false
  } else {
    name.style.border = ''
  }
  if (
    !(
      (number.value[0] === '8' && number.value.length === 11) ||
      (number.value.slice(0, 2) === '+7' && number.value.length === 12)
    )
  ) {
    number.focus()
    number.style.border = '2px solid red'

    return false
  } else {
    number.style.border = ''
  }

  return true
}

function onConfirm(event: Event, inputs: HTMLCollectionOf<HTMLInputElement>) {
  if (validate(inputs)) {
    const modalWindow = document.getElementsByClassName('modal-window')[0]

    modalWindow.innerHTML = `<div class="lds-dual-ring"></div>`
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then(createTable)
  }
}

function createTable(entries: Array<Entry>) {
  const modalWindow = document.getElementsByClassName('modal-window')[0]

  // Create table
  const table = document.createElement('table')
  const tr = document.createElement('tr')
  table.classList.add('modal-table')
  table.innerHTML = `
    <tr class="modal-table-header">
      <th>UID</th>
      <th>ID</th>
      <th>Title</th>
      <th>Completed</th>
    </tr>
  `

  // Add data to table
  entries.forEach((entry) => {
    if (entry?.userId === 5 && !entry?.completed) {
      table.innerHTML =
        table.innerHTML +
        `
        <tr>
          <th>${entry.userId}</th>
          <th>${entry.id}</th>
          <th>${entry.title}</th>
          <th>${entry.completed}</th>
        </tr>
      `
    }
  })
  modalWindow.innerHTML = ``
  ;(<HTMLDivElement>modalWindow).style.maxWidth = '1000px'
  modalWindow.appendChild(table)
}

function fillModal(modal: Element) {
  modal.innerHTML = `
  <div class="modal-window">
    <div class="modal-title-block">
      <div class="modal-title-image">
        <img
          src="./assets/images/modal-icon.svg"
          alt="modal window icon"
          width="42"
          height="40"
        />
      </div>
      <h2 class="modal-title">Форма сайта</h2>
      <p class="modal-subtitle">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry
      </p>
    </div>
    <form class="modal-form">
      <input
        type="text"
        class="modal-input"
        placeholder="Имя"
        name="username"
      />
      <input
        type="tel"
        class="modal-input"
        placeholder="Номер телефона"
        name="user-number"
      />

      <div class="modal-buttons-container">
        <button class="modal-button modal-button-cancel" type="button">
          Отменить
        </button>
        <button class="modal-button modal-button-confirm" type="button">
          Отправить
        </button>
      </div>
    </form>
    <button class="modal-button-close">
      <img
        src="./assets/images/close-icon.svg"
        alt="X"
        width="10px"
        height="10px"
        class="modal-button-close-icon"
      />
    </button>
  </div>
  <div class="modal-overflow"></div>
  `
}
