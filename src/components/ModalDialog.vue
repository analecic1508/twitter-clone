<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>{{ title }}</h2>
      </div>
      <div class="modal-text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  mounted() {
    document.body.appendChild(this.$el);
  },
  beforeDestroy() {
    if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el);
  },
  created() {
    document.onkeyup = (evt) => {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        this.$emit("esc");
      }
    };
  },
};
</script>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

/* The Modal (background) */
.modal {
  position: absolute;
  right: 0;
  left: 0;
  top: 200px;
  margin: 0 auto;
  width: 600px;
  height: 500px;
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #1ba1c2;
  color: white;
}

.modal-text {
  padding: 2px 16px;
}

.modal-footer {
  padding: 2px 16px;
  background-color: #1ba1c2;
  color: white;
}
</style>