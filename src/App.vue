<script setup></script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/pokemon">Pokemon</router-link>
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view/>
</template>

<style>
nav {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #333;
}
nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

</style>