<template>
<div style="text-align:left">
        <div class="row m-5">
        <div class="col-sm-4 col-12 offset-1-0 offset-md-2 offset-lg-0">
            <p style="font-size: 40px;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Get in touch
            </p>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed et dolore.</p>
            <p class="text-muted"><span>
                <i class="bi bi-geo-alt"></i>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-danger me-2 bi bi-geo-alt" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
            </span> 69 North Cleveland Street, Memphis,USA.
            </p>
            <p class="text-muted"><span>
                <i class="bi bi-telephone"></i>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-danger me-2 bi bi-telephone" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
            </span> (123) 8111 9210 - (012) 1111 6868
            </p>
            <p class="text-muted"><span>
                <i class="bi bi-envelope-fill"></i>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-danger me-2 bi bi-envelope-fill" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                  </svg>
            </span> Florisr@supportthem.com
            </p>

        </div>
        <div class="col-sm-4 col-12 ">
            <p style="font-size: 40px;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Contact us</p>
            <form>
                <input type="email" placeholder="Email" name="email" size="32" class="p-2">
                <br><br>
                <input type="text" name="message" placeholder="Message" style="padding: 6px 60px 60px 6px;" size="30"></form>
            <br>
            <input type="submit" value="SEND" class="bg-dark text-light " style="font-size: 15px;padding:7px 20px 7px 20px">
        </div>
        <div class="col-sm-5 col-lg-4 col-12 ">


            <div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598.9821296726593!2d51.10716615812102!3d36.723419594991135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8c09667ba5dd9b%3A0x83181512fd55d80e!2sadminesite!5e0!3m2!1sen!2s!4v1584797588650!5m2!1sen!2s"
                    id="width" height="350" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            </div>

        </div>
    </div>
</div>
</template>

<script>

export default{
name:"Section2contact"

}
</script>
<style scoped>
#width {
    width: 350px;
    margin-left:30px
}

@media screen and (max-width:1100px) {
    #width {
        width: 250%;
        margin-left: 50px;
    }
}
</style>