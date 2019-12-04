<template>
    <div class="container" style="font-family: Poppins;">
        <!-- Add icon library -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <img src="assets/images/background.png" class="bg-image" />
        <div class="cont">
            <a href="/#/home">
                <button class="back"><i class="fa fa-arrow-circle-left"></i></button>
            </a>
            <h4>Feedback Screen</h4>
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
    color:white;
    font-size: 40px;
    font-weight: 700;
}
.button {
    display: inline-block;
    padding: 35px 50px;
    font-size: 30px;    
    font-weight: 900;
    color: #365dfd;
    background-color: white;
    border-radius: 15px;
}
.button:hover {background-color: whitesmoke}

.button:active {
  background-color: gray;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  color: white;
}
.back {
    /* display: inline-block; */
    margin-right: 800px;
    border-radius: 50%;
    font-size: 50px;
    font-weight: bold;
    color: #365dfd;
    background-color: white;
}
</style>