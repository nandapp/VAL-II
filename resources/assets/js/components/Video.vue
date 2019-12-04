<template>
    <div class="container" style="font-family: Poppins;">
        <!-- Add icon library -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <img src="assets/images/background.png" class="bg-image" />
        <div class="cont">   
            <a href="/#/home">
                <button class="back"><i class="fa fa-arrow-circle-left"></i></button>
            </a>
            <video width="75%" controls autoplay height="75%" src="assets/videos/robot_video.mp4"></video>
        </div>
    </div>

</template>

<script>
</script>

<style>
.bg-image {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);
}
.cont {
    position:relative;
}
.back {
    /* display: inline-block; */
    margin-right: 1200px;
    border-radius: 50%;
    font-size: 50px;
    font-weight: bold;
    color: #365dfd;
    background-color: white;
}
</style>