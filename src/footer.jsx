import React from 'react'

function Footer() {
  return (
    <div>
        <div class="fixed-bottom mt-1 foot">
  <footer class="d-flex flex-wrap justify-content-between align-items-center border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"></svg>
      </a>
      <span class="mb-3 mb-md-0 text-success  ">© 2024 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-whatsapp text-success fs-4"></i></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-instagram text-danger fs-4"></i></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-twitter text-primary fs-4"></i></a></li>
    </ul>
  </footer>
</div>
    </div>
  )
}

export default Footer