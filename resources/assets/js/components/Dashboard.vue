<template>
    <div class="container">
        <a style="text-decoration:none;" href="/#/lang">
            <video width="900" autoplay muted loop id="myVideo" height="400" src="assets/videos/robot_video.mp4"></video>
            <div class="overlay"></div>
            <div class="text1">Welcome to the Solustar Hotel</div>
            <img src="assets/images/click.svg" class="front-img"/>
            <div class="text2">Touch screen to talk to me</div>
        </a>
    </div>
</template>

<script>
</script>

<style>
#myVideo {
    position: fixed;
    right: 0;bottom: 0;
    min-width: 100%;
    min-height: 100%;
}
.overlay {
    position: fixed;
    right: 0;bottom: 0;
    min-width: 100%;
    min-height: 100%;
    background: black;
    opacity: 0.3;
}
.text1 {
    position:relative;
    width: 100%;
    height: 101px;
    opacity: 0.5;
    font-size: 74px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.text2 {
    position:relative;
    right: 0;bottom: 0;
    color:white;
    font-weight: 600;
    opacity:0.5;
    font-size: 37px;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.front-img {
    position: relative;
    width: 223.2px;
    height: 312.6px;
    object-fit: contain;
    margin-top: 121px;
    margin-bottom: 44px;
    opacity:0.5;
}
</style>