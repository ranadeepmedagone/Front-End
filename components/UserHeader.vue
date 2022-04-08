<template>
  <!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>MobIBar</title>
    
    <link rel="stylesheet" href="css/style.css">
</head>
<body> -->

  <!-- <section id="home"> -->
  <header>
    <div class="container">
      <div class="left">
        <a href="#" class="logo">TODO</a>
        <div class="hm-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="right">
        <nav>
          <ul>
            <li>
              <nuxt-link aria-current="page" to="/UserHome">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/CreateTodo">CreateTodo</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/AllTodos">AllTodos</nuxt-link>
            </li>

            <li class="nav-item">
              <nuxt-link to="/">Logout</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "UserHeader",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration: none;
  outline: 0;
  border: none;
}

html,
body {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: monospace;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: #1b6aff;
  overflow: hidden;
  -webkit-transition: 0.5s all ease-in-out;
  -o-transition: 0.5s all ease-in-out;
  transition: 0.5s all ease-in-out;
  z-index: 1000;
}

.container {
  padding-top: 10px;
  width: 1170px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.logo {
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  display: block;
  height: 40px;
  width: 120px;
  line-height: 40px;
  text-align: center;
  background-color: black;
  font-family: "Roboto", monospace, sans-serif;
}

.hm-menu {
  display: none;
}

nav ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

nav ul li {
  margin-right: 10px;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  position: relative;
  padding: 0 20px;
  height: 40px;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 40px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
  text-align: center;
  -webkit-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
  overflow: hidden;
  text-transform: uppercase;
}

nav ul li a::after {
  position: absolute;
  z-index: -1;
  content: "";
  width: 100%;
  height: 100%;
  left: -150%;
  top: 0;
  -webkit-transition: 0.5s all ease-in-out;
  -o-transition: 0.5s all ease-in-out;
  transition: 0.5s all ease-in-out;
  background-color: #000;
  -webkit-transform: skewX(30deg);
  -ms-transform: skewX(30deg);
  transform: skewX(30deg);
  -webkit-transform-origin: bottom left;
  -ms-transform-origin: bottom left;
  transform-origin: bottom left;
}

nav ul li a:hover::after {
  left: 0;
  width: 150%;
}

#services,
#about,
#portfolio,
#contact {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 60px 0;
}

.title {
  position: absolute;
  top: 80px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.title h2 {
  position: relative;
  color: #000;
  font-size: 24px;
  text-transform: uppercase;
  padding: 5px;
  display: block;
  word-spacing: -6px;
}

.title h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  background-color: darkred;
  height: 4px;
  border-radius: 2px;
  width: 100%;
  left: 0;
}

.hero-section {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.hero-section h1 {
  font-size: 120px;
  font-weight: 200;
  text-transform: uppercase;
  color: #fff;
}

.hero-section p {
  text-transform: capitalize;
  font-size: 16px;
  color: #a1a2a3;
}

.btn-work {
  position: absolute;
  top: 70%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  color: #fff;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 600;
  border-radius: 20px;
  border: 2px solid #fff;
  padding: 10px 20px;
  -webkit-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
  background-color: transparent;
}

.btn-work:hover {
  background-color: #1b6aff;
  border-color: #1b6aff;
}

@media only screen and (max-width: 1200px) {
  .container {
    margin: 0 15px;
    width: calc(100% - 30px);
  }
}

@media only screen and (max-width: 768px) {
  .hm-menu {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .hm-menu span {
    height: 2px;
    background-color: #fff;
    position: absolute;
    right: 0;
    border-radius: 1px;
    -webkit-transition: 0.3s all ease-in-out;
    -o-transition: 0.3s all ease-in-out;
    transition: 0.3s all ease-in-out;
  }

  .left {
    margin-bottom: 15px;
  }

  .hm-menu span:nth-child(1) {
    width: 40%;
    top: 8px;
  }

  .hm-menu span:nth-child(2) {
    width: 60%;
    top: calc(50% - 1px);
  }

  .hm-menu span:nth-child(3) {
    width: 50%;
    top: calc(100% - 10px);
  }

  .container {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  nav ul {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  nav ul li {
    margin: 0;
  }

  nav ul li a {
    font-size: 22px;
    height: 60px;
    line-height: 60px;
    text-transform: capitalize;
    letter-spacing: 2px;
    overflow: visible;
  }

  nav ul li a::before {
    content: "";
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    font-size: 22px;
    font-weight: 600;
    color: #333;
    z-index: -1;
    -webkit-transition: 0.3s all ease-in-out;
    -o-transition: 0.3s all ease-in-out;
    transition: 0.3s all ease-in-out;
  }

  nav ul li:hover:nth-child(1) a::before {
    content: "HOME";
    font-size: 100px;
  }

  nav ul li:hover:nth-child(2) a::before {
    content: "SERVICES";
    font-size: 100px;
  }

  nav ul li:hover:nth-child(3) a::before {
    content: "ABOUT";
    font-size: 100px;
  }

  nav ul li:hover:nth-child(4) a::before {
    content: "PORTFOLIO";
    font-size: 100px;
  }

  nav ul li:hover:nth-child(5) a::before {
    content: "CONTACT";
    font-size: 100px;
  }

  nav ul li a:hover {
    color: transparent;
  }

  nav ul li a::after {
    display: none;
  }

  header.active {
    height: 380px;
  }

  .hm-menu span.active {
    width: 100% !important;
  }

  .activex {
    transition-delay: 0.5s;
  }
}
</style>