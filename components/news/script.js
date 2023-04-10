
const  handleNews = async ()=>{
    const response = await fetch('https://617bd868d842cf001711c0fe.mockapi.io/news');
    const myJson = await response.json();
    let newJson = [];
    if(myJson.length>6)
        newJson = myJson;
    console.log(newJson);
    const html = newJson.map((items) =>{
        // console.log(items);
    return `
    <div class="news-card">
                        <img src="./assets/images/news1.jpg" alt="news1">
                        <div class="news-content">
                            <h5>${items.title}</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium ex ac urna tempor, ac ultrices justo aliquet. Aenean viverra urna eu est tincidunt venenatis. </p>
                            <div class="more-button">
                                <button>
                                    <a href="./newsdetail.html">More</a>
                                </button>
                            </div>
                        </div>
                    </div>
    `;
                }).join(" ");
    let a = document.querySelector(".news-container");
    a.innerHTML = html;          
};

handleNews();

const handlecoupon = (e)=>{
    let button = document.querySelector('.input-group-prepend');

    if(e!=""){
        button.classList.remove("disabled_button");
    }else{
        button.classList.add("disabled_button");
    }
}

const showPromotion = ()=>{
    if(document.querySelector(".promotion_popup-container")==null){
    document.querySelector("body").innerHTML = `<div class="promotion_popup-container">
    <div class="promotion_popup-card">
        <div class="card_popup_cancel">
            <span>Promotion</span>
            <button onclick="cancelPromotionPopup()">X</button>
        </div>

        <div data-v-5c47adee="" class="
            input-group
            mb-3
            tch-delivery__input
            d-flex
            align-items-center
            promotion_popup-inputcode
          ">
            <img data-v-5c47adee="" 
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBIMThWNUgxNlYySDEyVjBaTTYgMFYySDJWNUgwVjBINlpNMTIgMThWMTZIMTZWMTNIMThWMThIMTJaTTYgMThIMFYxM0gyVjE2SDZWMThaTTAgOEgxOFYxMEgwVjhaIiBmaWxsPSIjRkE4QzE2Ii8+Cjwvc3ZnPgo=" 
            alt="" class="cam-scan input-group-text"> 
            <input data-v-5c47adee="" type="text" placeholder="Nhập mã khuyến mãi" aria-label="" aria-describedby="basic-addon1" class="form-control " oninput="handlecoupon(this.value)"> 
            <div data-v-5c47adee="" class="input-group-prepend disabled_button" >
          <button data-v-5c47adee="" type="button" class="btn  btn--radius-right-4" disabled><span data-v-5c47adee="" class="text-apply" >Áp dụng</span></button></div>
        </div>

        <div class="title_choices">
            Sap het han
        </div>
        <div class="allcoupon">
            <div class="coupon-container">
                <img src="./assets/images/coupon10.jpg" alt="coupon 105">
                <div class="coupon-information">
                    <div class="coupon-description">Giảm 15% từ 3 sản phẩm Cà phê đóng gói/Lon & nước</div>
                    <span>het han trong 2 ngay</span>
                    <button>Apply</button>
                </div>
            </div>
            <div class="coupon-container">
                <img src="./assets/images/coupon10.jpg" alt="coupon 105">
                <div class="coupon-information">
                    <div class="coupon-description">Giảm 15% từ 3 sản phẩm Cà phê đóng gói/Lon & nước</div>
                    <span>het han trong 2 ngay</span>
                    <button>Apply</button>
                </div>
            </div>
            <div class="coupon-container">
                <img src="./assets/images/coupon10.jpg" alt="coupon 105">
                <div class="coupon-information">
                    <div class="coupon-description">Giảm 15% từ 3 sản phẩm Cà phê đóng gói/Lon & nước</div>
                    <span>het han trong 2 ngay</span>
                    <button>Apply</button>
                </div>
            </div>
            <div class="coupon-container">
                <img src="./assets/images/coupon10.jpg" alt="coupon 105">
                <div class="coupon-information">
                    <div class="coupon-description">Giảm 15% từ 3 sản phẩm Cà phê đóng gói/Lon & nước</div>
                    <span>het han trong 2 ngay</span>
                    <button>Apply</button>
                </div>
            </div>
        </div>
        
    </div>
</div>`+ document.querySelector("body").innerHTML;}
        else {
            document.querySelector(".promotion_popup-container").style.display="block";
        }
}

const cancelPromotionPopup = () =>{
    document.querySelector('.promotion_popup-container').style.display = 'none';
}