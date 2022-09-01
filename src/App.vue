<template>
  <div class="image-zoom-wrapper">
    <div ref="imageArea" @mouseenter="hoverImage" @mousemove="move" @mouseleave="leaveImage" class="image">
      <img src="/default.jpg" alt="default">
      <div ref="zoomArea" style="" class="zoomArea"></div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  props:{
    zoomSize:{
      type:Number,
      default: 1,
    },
    ImageUrl:{
      type:String,
      default: '/default.jpg',
    }
  },
  methods: {
    hoverImage() {
      this.$refs.zoomArea.style.opacity = 1;
    },
    move(e) {
      let imageArea = this.$refs.imageArea,
          zoomArea =  this.$refs.zoomArea,
          style = zoomArea.style,
          x = e.clientX,
          y = e.clientY,
          imgWidth = imageArea.offsetWidth,
          imgHeight = imageArea.offsetHeight,
          xperc = ((x/imgWidth) * 100),
          yperc = ((y/imgHeight) * 100);
      if(x > (.01 * imgWidth)) {
        xperc += (.15 * xperc);
      }
      if(y >= (.01 * imgHeight)) {
        yperc += (.15 * yperc);
      }

      style.backgroundPositionX = (xperc - 9) + '%';
      style.backgroundPositionY = (yperc - 9) + '%';

      style.left = (x - 75) + 'px';
      style.top = (y - 50) + 'px';
      style.transform = `scale(${2})`

    },
    leaveImage(){
      this.$refs.zoomArea.style.opacity = 0;
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-size: 1em;
  line-height: 100%;
}
.image-zoom-wrapper {
  width: 100%;
  height: 100%;
  display: flex;

  .image {
    width: auto;
    object-fit: cover;
    &:hover {
      cursor: zoom-in;
    }
  }
  .zoomArea {
    width: 150px;
    height: 100px;
    box-shadow: 0 5px 10px -2px rgba(0,0,0,0.3);
    pointer-events: none;
    position: absolute;
    opacity: 0;
    border: 1px solid #fff;
    z-index: 2;
    border-radius: 10px;
    display: block;
    transition: opacity .2s;
    background: url('assets/images/default.jpg') no-repeat #fff
  }
}
</style>
