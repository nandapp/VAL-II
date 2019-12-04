<template>
    <div class="container" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
        <img src="assets/images/background.png" class="bg-img" />
        <img src="assets/images/logo-val2.svg" class="logo1" />
        <img src="assets/images/logo-solustar.svg" class="logo2" />

        <div class="col-md-12" style="position:absolute;top:20%;left:50%;transform: translate(-50%, -50%);">
            <h1  style="width: 1138px;height: 121px;text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);font-size: 89px;font-weight: 600;
            font-stretch: normal;font-style: normal;line-height: 1.36;letter-spacing: normal;text-align: center;
            color: #ffffff;">Welcome to Solustar Hotel</h1>
        </div>
        <div class="col-md-12" style="position:absolute;top:50%;left:20%;transform: translate(-50%, -50%);">
            <router-link to="check-in" style="color:white;text-decoration:none">
                <button style="width: 497px;height: 375px;border-radius: 18px;box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.5);
                background-color: #ffffff;"><img src="assets/images/check-in.svg" class="img"/>
                <h2 style="width: 314px;height: 71px;font-size: 52px;font-weight: 600;font-stretch: normal;font-style: normal;
                line-height: 1;letter-spacing: normal;text-align: center;color: #101010;padding-left:17%;">Check-In</h2></button>
            </router-link>
        </div>
        <div class="col-md-12" style="position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);">
            <router-link to="video" style="color:white;text-decoration:none">
                <button style="width: 497px;height: 375px;border-radius: 18px;box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.5);
                background-color: #ffffff;"><img src="assets/images/play-video.svg" class="img"/>
                <h2 style="width: 314px;height: 71px;font-size: 52px;font-weight: 600;font-stretch: normal;font-style: normal;
                line-height: 1;letter-spacing: normal;text-align: center;color: #101010;padding-left:17%;">Video</h2></button>
            </router-link>
        </div>
        <div class="col-md-12" style="position:absolute;top:50%;left:80%;transform: translate(-50%, -50%);">
            <router-link to="feedback" style="color:white;text-decoration:none">
                <button style="width: 497px;height: 375px;border-radius: 18px;box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.5);
                background-color: #ffffff;"><img src="assets/images/feedback.svg" class="img"/>
                <h2 style="width: 314px;height: 71px;font-size: 52px;font-weight: 600;font-stretch: normal;font-style: normal;
                line-height: 1;letter-spacing: normal;text-align: center;color: #101010;padding-left:17%;">Feedback</h2></button>
            </router-link>
        </div>
        <div class="col-md-12" style="position:absolute;bottom:11%;left:50%;transform: translate(-50%, -50%);">
            <h1  style="width: 1384px;height: 80px;font-size: 59px;font-weight: 600;font-stretch: normal;font-style: normal;
            line-height: 1.36;letter-spacing: normal;text-align: left;color: #ffffff;">
            Say 'Hi Val2' to activate me and ask me anything</h1>
        </div>
        <div class="col-md-12" style="position:absolute;top:87%;left:17%;transform: translate(-50%, -50%);">
            <router-link to="lang" style="color:white;text-decoration:none">
                <button style="padding-bottom:35%;width: 375px;height: 50px;border-radius: 48px;box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);background-color: #ffffff;">
                <h2 style="width: 96px;height: 57px;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-size: 42px;font-weight: 600;font-stretch: normal;font-style: normal;line-height: 1.36;letter-spacing: normal;text-align: center;
                color: #365dfd;padding-left:35%">Back</h2></button>
            </router-link>
        </div>
    </div>

</template>

<script>
</script>

<style>
.bg-img {
    position: fixed;
    right: 0;bottom: 0;
    width: 1920px;
    height: 1080px;
    filter: blur(4px);
}
.logo1 {
    position:fixed;
    top:5%;right:3%;
    width: 128.7px;
    height: 76.6px;
}
.logo2 {
    position:fixed;
    top:5%;left:3%;
    width: 128.7px;
    height: 76.6px;
}
.img {
    padding-top: 10%;
    width: 168.8px;
    height: 168.8px;
}
</style>