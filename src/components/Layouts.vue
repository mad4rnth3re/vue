<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary position-absolute top-0 start-0 " style="width: 100vw; height: 15vh;">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">Vue</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link class="nav-link active" aria-current="page" to="/admin">Data User</router-link>
              <router-link class="nav-link" to="/add-user">Add User</router-link>
            </div>
          </div>
        </div>
      </nav>
</template>

<script>
    export default{
        name: 'Layouts'
    }
</script>