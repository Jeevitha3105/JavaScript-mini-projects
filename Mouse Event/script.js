const container = document.querySelector('.container');

window.addEventListener('mousemove', (event) => {
    container.innerHTML = `
            <div class="mouse-event">
            ${event.clientX}
            <h4>Mouse X Prosition(px)</h4>
          </div>
          <div class="mouse-event">
          ${event.clientY}
            <h4>Mouse Y Prosition(px)</h4>
          </div>
    `
})