<template>
  <main class="main-login">
    <div class="left-login">
      <h1>Faça login<br />Para visualizar as tarefas</h1>
      <img src="../assets/task.svg" alt="task image" class="left-login-image" />
    </div>
    <div class="right-login">
      <div class="card-login">
        <h1>Login</h1>
        <div class="textfield">
          <label for="usuario">Usuário</label>
          <input type="text" name="usuario" placeholder="Usuario" />
        </div>
        <div class="textfield">
          <label for="senha">Senha</label>
          <input type="password" name="senha" placeholder="Senha" />
        </div>
        <router-link to="/home" class="btn-login"><button>Login</button></router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");
* {
  margin: 0;
  font-family: "Noto Sans", sans-serif;
}
.main-login {
  width: 100vw;
  height: 100vh;
  background-color: #201b2c;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-login {
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.left-login > h1 {
  color: #77ffc0;
  font-size: 3vw;
}
.left-login-image {
  width: 35vw;
  height: 50vh;
}

.right-login {
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-login {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  background: #2f2841;
  border-radius: 20px;
  box-shadow: 0px 10px 40px #00000056;
}
.card-login > h1 {
  color: #00ff88;
  font-weight: 800;
  margin: 0;
  text-transform: uppercase;
}
.textfield {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0px;
}
.textfield > input {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 15px;
  background: #514869;
  color: #f0ffff;
  font-size: 12pt;
  box-shadow: 0px 10px 40px #00000056;
  outline: none;
  box-sizing: border-box;
}
.textfield > label {
  color: #f0ffffde;
  margin-bottom: 10px;
}
.textfield > input::placeholder {
  color: #f0ffff94;
}
.btn-login {
  width: 100%;
  padding: 16px 0px;
  margin: 25px;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 3px;
  color: #2b134b;
  background-color: #00ff88;
  border-radius: 8px;
  box-shadow: 0px 10px 40px -12px #00ff8052;
}

@media only screen and (max-width: 950px) {
  .card-login {
    width: 85%;
  }
}
@media only screen and (max-width: 600px) {
  .main-login {
    flex-direction: column;
  }
  .left-login > h1 {
    display: none;
  }
  .left-login {
    width: 100%;
    height: auto;
  }
  .left-login-image {
    width: 70vw;
  }
  .right-login {
    width: 100%;
    height: auto;
  }
}
</style>
