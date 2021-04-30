/* eslint-disable prettier/prettier */
<template>
  <body>
    <header id="main-header">
      <div class="content">
        <nav>
          <ul>
            <li><img src="../assets/home.svg" alt="Home" /> Home</li>
          </ul>
        </nav>
        <img src="../assets/logo.svg" alt="Logo Twitter" />
        <div class="side">
          <input type="text" placeholder="Search on Twitter" />
          <img src="../assets/avatar.png" alt="" />
          <button>Tweet</button>
        </div>
      </div>
    </header>

    <div class="banner">
      <h1>Clone Layout Twitter</h1>
    </div>

    <div class="bar">
      <div class="content">
        <ul>
          <li class="active">
            <span>Tweets</span>
            <strong>1234</strong>
          </li>
          <li>
            <span>Following</span>
            <strong>5678</strong>
          </li>
          <li>
            <span>Followers</span>
            <strong>9012</strong>
          </li>
          <li>
            <span>Favorites</span>
            <strong>256</strong>
          </li>
        </ul>

        <div class="actions">
          <button>Follow</button>
        </div>
      </div>
    </div>

    <div class="wrapper-content content">
      <aside class="profile">
        <img class="avatar" src="../assets/avatar.png" alt="Avatar" />
        <h1>Breno Oliveira</h1>
        <span>@brenoos</span>
        <p>Um dev bacaninha apaixonado por tecnologia e novos desafios</p>
      </aside>
      <section class="timeline">
        <nav>
          <a class="active" href="">Tweets</a>
        </nav>

        <ul class="tweets">
          <li>
            <img src="../assets/avatar.png" alt="Avatar" />
            <div class="info">
              <strong>Breno Oliveira <span>@brenoos</span></strong>
              <p>
                Et aperiam aut necessitatibus officia voluptas. Nesciunt eveniet
                aperiam. Quo corporis iste voluptatem est perspiciatis commodi
                dicta sit et. Quibusdam quas aliquam et voluptas adipisci
                fugiat.
              </p>
              <div class="actions">
                <a href=""
                  ><img src="../assets/comments.svg" alt="Comments" /> 3
                </a>
                <a href=""
                  ><img src="../assets/retweet.svg" alt="Retweet" /> 4
                </a>
                <a href=""><img src="../assets/like.svg" alt="Like" /> 5 </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </body>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
