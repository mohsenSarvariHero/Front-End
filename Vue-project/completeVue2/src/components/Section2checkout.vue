<template>
  <div>
         <div class="mainCart" id="marginCheck">
        <div class="leftCart m-5">
            <div class="row">
                <div class="col-4">
                    <p style="font-size: 25px;">Contact information</p>
                </div>
                <div class="col-4 offset-3">
                    <p>Already have an account?<a href="#" class="text-danger text-decoration-none">Login</a> </p>
                </div>
            </div>
            <form>
                <input type="text" id="email" name="e-mail" style="padding: 5px;" placeholder="Email or Phone Number">
                <div class="form-check my-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheck">
                    <label class="form-check-label" for="flexCheck">
                        <p class="text-muted ">Keep me up to dateon news and exclusive offers</p>
                    </label>
                </div>
                <h3>Shipping address</h3>
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <label>First name
                            <sup>
                                <span>
                                    <i class="bi bi-asterisk"></i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-asterisk text-danger" viewBox="0 0 16 16">
                                        <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                                      </svg>
                                    </span>
                                </sup>
                        </label><br>
                        <input type="text" name="firstname" class="mt-1 p-2" id="firstName">

                    </div>
                    <div class="col-md-6 col-12">
                        <label>Last name
                            <sup>
                                <span>
                                    <i class="bi bi-asterisk"></i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-asterisk text-danger" viewBox="0 0 16 16">
                                        <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                                      </svg>
                                    </span>
                                </sup>
                        </label><br>
                        <input type="text" name="lastname" class="mt-1 p-2" id="lastName">

                    </div>

                </div>
                <label class="my-2 mt-4">Contact
                    <sup>
                        <span>
                            <i class="bi bi-asterisk"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-asterisk text-danger" viewBox="0 0 16 16">
                                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                              </svg>
                            </span>
                        </sup>
                </label><br>
                <input type="text" name="contact" id="contact" class="p-2">
                <label class="my-2 mt-4">Address
                    <sup>
                        <span>
                            <i class="bi bi-asterisk"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-asterisk text-danger" viewBox="0 0 16 16">
                                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                              </svg>
                            </span>
                        </sup>
                </label><br>
                <input type="text" name="contact" id="sAddress" class="p-2 " placeholder="steet address">
                <input type="text" name="contact" id="aAddress" size="100%" class="p-2 mt-2" placeholder="Apartment,suite,unite,ect (optinal)">
                <label class="mt-3">Town/City
                    <sup>
                        <span>
                            <i class="bi bi-asterisk"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-asterisk text-danger" viewBox="0 0 16 16">
                                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                              </svg>
                            </span>
                        </sup>
                </label><br>
                <input type="text" name="town/city" id="town" class="mt-2 p-2">
                <label class="mt-3">Country/State
                    <sup>
                        <span>
                            <i class="bi bi-asterisk"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-asterisk text-danger" viewBox="0 0 16 16">
                                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                              </svg>
                            </span>
                        </sup>
                </label><br>
                <input type="text" name="country/state" id="country" class="mt-2 p-2">
                <label class="mt-3">Postcode/Zip
                    <sup>
                        <span>
                            <i class="bi bi-asterisk"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-asterisk text-danger" viewBox="0 0 16 16">
                                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                              </svg>
                            </span>
                        </sup>
                </label><br>
                <input type="text" name="post/" id="Zip" class="mt-2 p-2">
                <label class="mt-3">Order note 
                    <sup>
                    <span>
                        <i class="bi bi-asterisk"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-asterisk text-danger" viewBox="0 0 16 16">
                            <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                          </svg>
                        </span>
                    </sup>
                </label><br>
                <input type="text" name="ordernote" id="Order" class="mt-2 p-2" placeholder="Note about your order,e.g,special noe for delivery">
                <div class="form-check my-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheck">
                    <label class="form-check-label" for="flexCheck">
                        <p class="text-muted ">Save this infomation for next time</p>
                    </label>
                </div>

            </form>

        </div>

        <div class="rightCart">
            <div class="styleRightCart" style="margin: 65px 40px 0px -90px !important;">
                <div class="row">
                    <div class="col-6">
                        <h4>Your order

                        </h4>
                    </div>
                    <div class="col-6">
                        <hr>
                    </div>
                </div>

                <p class="mt-4">Enter coupon code. It will be applied at checkout..</p>
                <form>
                    <input type="text " name="textname" placeholder="Your code here" style="padding: 5px;">
                    <input value="APPLY" type="submit" style="padding: 5px;margin-left: -6px;background-color: black;color: white;">
                </form>
                <h4 class="mt-5 mb-4">Products</h4>
                <div class="row justify-content-between">
                    <div class="col-7">
                        <p style="opacity: 0.8;">1x Succulent gym$21.0</p>
                    </div>
                    <div class="col-4 ">
                        <p><b>$21.0</b></p>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-7">
                        <p style="opacity: 0.8;">1x The affogato</p>
                    </div>
                    <div class="col-4 ">
                        <p><b>$21.0</b></p>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-7">
                        <p style="opacity: 0.8;"> 1x The dublin</p>
                    </div>
                    <div class="col-4 ">
                        <p><b>$21.0</b></p>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-7">
                        <p style="opacity: 0.8;">1x The green thumb</p>
                    </div>
                    <div class="col-4 ">
                        <p><b>$21.0</b></p>
                    </div>
                </div>
                <hr>
                <div class="row justify-content-between">
                    <div class="col-7">
                        <p>Subtotal$217.00</p>
                    </div>
                    <div class="col-4 ">
                        <p><b>$217.00</b></p>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-7">
                        <p>Total$217.00</p>
                    </div>
                    <div class="col-4 ">
                        <p class="text-danger"><b>$217.00</b></p>
                    </div>
                </div>
                <hr>
                <div class="form-check my-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheck">
                    <label class="form-check-label" for="flexCheck">
                        <p class="text-muted ">Cheque payment</p>
                    </label>
                </div>
                <div class="form-check my-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheck">
                    <label class="form-check-label" for="flexCheck">
                        <p class="text-muted ">PayPal</p>
                    </label>
                </div>
                <button type="submit" style="background-color: black;color:white;width: 100%;padding: 10px;font-size: 20px;">PROCEED TO CHECKOUT</button>


            </div>

        </div>
    </div>

  </div>
</template>

<script>
export default {
name:"Section2checkout"
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.mainCart {
    display: flex;
}

.leftCart {
    flex: 60%;
}

.rightCart {
    flex: 25%;
    margin-left: 85px;
}

.styleRightCart {
    background-color: rgb(237, 240, 232);
    padding: 20px;
}

.styleRightCart2 {
    background-color: rgb(237, 240, 232);
    padding: 20px;
    margin-top: 105px;
}
  #email {
            width: 100%;
        }
        
        #firstName {
            width: 100%;
        }
        
        #lastName {
            width: 100%;
        }
        
        #contact {
            width: 100%;
        }
        
        #sAddress {
            width: 100%;
        }
        
        #aAddress {
            width: 100%;
        }
        
        #town {
            width: 100%;
        }
        
        #country {
            width: 100%;
        }
        
        #Zip {
            width: 100%;
        }
        
        #Order {
            width: 100%;
        }
        
    
@media screen and (max-width:1100px) {
    .mainCart {
        flex-direction: column;
    }
    #marginCheck {
                margin-left: 100px;
            }
    .leftCart {
        flex: 100%;
    }
    .rightCart {
        flex: 100%;
        margin-left: 85px;
    }
}

@media screen and (max-width:580px) {
    .mainCart {
        flex-direction: column;
    }
    .leftCart {
        flex: 100%;
    }
    .rightCart {
        flex: 100%;
        margin-left: 85px;
    }
}

</style>